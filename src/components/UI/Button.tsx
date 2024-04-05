const Button: React.FC<{
  children: any;
  color?: string;
  size?: string;
  className?: string;
  onBtnClick?: React.MouseEventHandler<HTMLButtonElement>;
}> = ({ children, color, size, className, onBtnClick }) => {
  let classes = `btn ${className ? className : ''}`;

  if (color) {
    classes += ` btn--${color}`;
  }

  if (size) {
    classes += ` btn--${size}`;
  }

  return (
    <button className={classes} onClick={onBtnClick ? onBtnClick : undefined}>
      {children}
    </button>
  );
};

export default Button;
