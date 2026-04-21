import * as React from 'react';
import { type VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  [
    'inline-flex',
    'items-center',
    'justify-center',
    'whitespace-nowrap',
    'text-sm',
    'font-bold',
    'uppercase',
    'ring-offset-background',
    'transition-colors',
    'focus-visible:outline-none',
    'focus-visible:ring-none',
    'disabled:pointer-events-none',
    'disabled:opacity-50',
  ],
  {
    variants: {
      colour: {
        dark: [
          'bg-dark',
          'text-white',
          'hover:bg-dark-3',
        ],
        darkGrey: [
          'bg-dark-2',
          'text-white',
          'hover:bg-dark-3',
        ],
        grey: [
          'bg-neutral-600',
          'text-white',
          'hover:bg-neutral-700',
        ],
        lightGrey: [
          'bg-neutral-200',
          'text-dark',
          'hover:bg-neutral-400',
        ],
        light: [
          'bg-white',
          'text-dark',
          'hover:bg-neutral-200',
        ],
        primary: [
          'bg-primary',
          'text-primary-foreground',
          'hover:bg-primary-700',
        ],
        accent: ['bg-accent', 'text-accent-foreground', 'hover:brightness-120'],
      },
      variant: {
        solid: [],
        outline: ['bg-transparent', 'border', 'border-white/64', 'hover:border-white'],
        ghost: ['bg-transparent', 'border-none', 'hover:brightness-50'],
      },
      size: {
        xs: 'h-6 px-2 gap-1 text-[10px] leading-4',
        default: 'h-10 px-4 gap-2 text-[13px] leading-4',
        sm: 'h-8 px-2.5 gap-1.5 text-[11px] leading-4',
        lg: 'h-12 px-8 gap-2.5 text-sm leading-4',
        icon: 'p-2.5',
      },
      border: {
        square: [],
        rounded: [],
        pill: ['rounded-full'],
      },
    },
    compoundVariants: [
      {
        size: ['default', 'lg'],
        border: 'rounded',
        className: ['rounded-lg'],
      },
      {
        size: ['xs'],
        border: 'rounded',
        className: ['rounded-sm'],
      },
      {
        size: ['sm', 'icon'],
        border: 'rounded',
        className: ['rounded-md'],
      },
      {
        variant: 'outline',
        colour: 'accent',
        className: [
          'text-accent',
          'hover:bg-accent',
          'hover:border-accent',
          'hover:text-accent-foreground',
        ],
      },
      {
        variant: 'ghost',
        colour: 'accent',
        className: [
          'text-accent',
          'hover:bg-transparent',
          'hover:text-accent-700',
        ],
      },
      {
        variant: 'outline',
        colour: 'primary',
        className: [
          'text-primary',
          'hover:bg-primary',
          'hover:border-primary',
          'hover:text-primary-foreground',
        ],
      },
      {
        variant: 'ghost',
        colour: 'primary',
        className: [
          'text-primary',
          'hover:bg-transparent',
          'hover:text-primary-foreground',
        ],
      },
      {
        variant: 'outline',
        colour: 'dark',
        className: [
          'text-dark',
          'hover:bg-dark',
          'hover:border-dark',
          'hover:text-white',
        ],
      },
      {
        variant: 'ghost',
        colour: 'dark',
        className: [
          'text-dark',
          'hover:bg-transparent',
          'hover:text-neutral-light-400',
        ],
      },
      {
        variant: 'outline',
        colour: 'darkGrey',
        className: [
          'text-neutral-light-700',
          'hover:bg-neutral-light-700',
          'hover:border-neutral-light-700',
          'hover:text-white',
        ],
      },
      {
        variant: 'ghost',
        colour: 'darkGrey',
        className: [
          'text-neutral-light-700',
          'hover:bg-transparent',
          'hover:text-dark',
        ],
      },
      {
        variant: 'outline',
        colour: 'grey',
        className: [
          'text-neutral-light-400',
          'hover:bg-neutral-light-400',
          'hover:border-neutral-light-400',
          'hover:text-white',
        ],
      },
      {
        variant: 'ghost',
        colour: 'grey',
        className: [
          'text-neutral-light-400',
          'hover:bg-transparent',
          'hover:text-neutral-light-700',
        ],
      },
      {
        variant: 'outline',
        colour: 'lightGrey',
        className: [
          'text-neutral-light-100',
          'hover:bg-neutral-light-100',
          'hover:border-neutral-light-100',
          'hover:text-dark',
        ],
      },
      {
        variant: 'ghost',
        colour: 'lightGrey',
        className: [
          'text-neutral-light-100',
          'hover:bg-transparent',
          'hover:text-neutral-light-400',
        ],
      },
      {
        variant: 'outline',
        colour: 'light',
        className: [
          'text-white',
          'hover:bg-white',
          'hover:border-white',
          'hover:text-dark',
        ],
      },
      {
        variant: 'ghost',
        colour: 'light',
        className: [
          'text-white',
          'hover:bg-transparent',
          'hover:text-neutral-light-100',
        ],
      },
    ],
    defaultVariants: {
      variant: 'solid',
      colour: 'primary',
      size: 'default',
      border: 'rounded',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, colour, size, border, asChild = false, ...props },
    ref
  ) => {
    return (
      <button
        className={cn(
          buttonVariants({ variant, colour, size, border, className }),
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
