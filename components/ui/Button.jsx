"use client";

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  target,
  rel,
  className = "",
  disabled = false,
  type = "button",
  ...props
}) {
  const classes = `btn btn-${variant} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={classes}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
