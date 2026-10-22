import { NextResponse } from 'next/server';
import { hash } from 'bcryptjs';
import { z } from 'zod';
import { prisma } from '@/lib/prisma';
import { isAllowedRegistrationRole } from '@/lib/permissions';

const registerSchema = z.object({
  name: z.string().min(2).max(80),
  email: z.string().email(),
  password: z.string().min(8).max(128),
  role: z.enum(['JOB_SEEKER', 'EMPLOYER', 'FREELANCER', 'CLIENT', 'RECRUITMENT_AGENCY']),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = registerSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          error: 'Invalid registration payload.',
          details: parsed.error.flatten(),
        },
        { status: 400 },
      );
    }

    const { name, email, password, role } = parsed.data;

    if (!isAllowedRegistrationRole(role)) {
      return NextResponse.json({ error: 'This role cannot be self-registered.' }, { status: 403 });
    }

    const existing = await prisma.user.findUnique({
      where: { email: email.toLowerCase() },
    });

    if (existing) {
      return NextResponse.json({ error: 'This email is already in use.' }, { status: 409 });
    }

    const passwordHash = await hash(password, 12);

    const user = await prisma.user.create({
      data: {
        email: email.toLowerCase(),
        name,
        passwordHash,
        role,
      },
    });

    return NextResponse.json({
      message: 'Account created successfully.',
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
      },
    });
  } catch (error) {
    return NextResponse.json({ error: 'Unable to create account.' }, { status: 500 });
  }
}
