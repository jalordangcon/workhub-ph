import { clsx } from 'clsx';

export function Button({ children, className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={clsx(
        'rounded-full bg-[#1455D0] px-5 py-3 font-medium text-white transition hover:bg-blue-600',
        className,
      )}
    >
      {children}
    </button>
  );
}
