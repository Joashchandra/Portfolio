import type {
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
  ReactNode,
} from 'react';

type CommonProps = {
  children: ReactNode;
  className?: string;
};

type LinkButtonProps = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className' | 'children'> & {
    href: string;
  };

type ActionButtonProps = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'> & {
    href?: undefined;
  };

const base =
  'flex h-12 w-full items-center justify-center rounded-full px-md gap-md bg-purple-gradient text-white text-sm font-medium transition-colors cursor-pointer hover:brightness-110';

const Button = (props: LinkButtonProps | ActionButtonProps) => {
  if (props.href !== undefined) {
    const { href, children, className = '', ...rest } = props;
    return (
      <a href={href} className={`${base} ${className}`} {...rest}>
        {children}
      </a>
    );
  }

  const { children, className = '', type = 'button', ...rest } = props;
  return (
    <button type={type} className={`${base} ${className}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
