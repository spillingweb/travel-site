// import { Link } from "react-router-dom";

const Button: React.FC<{ children: any; color?: string; size?: string }> = (
  props
) => {
  let classes = "btn";

  if (props.color) {
    classes += ` btn--${props.color}`;
  }

  if (props.size) {
    classes += ` btn--${props.size}`;

  }

  return (
    <a href="#" className={classes}>
      {props.children}
    </a>
  );
};

export default Button;
