import { FC } from "react";

import "./style.scss";

interface MyButtonProps {
  text?: string;
  disabled: boolean;
  onClick?: () => void;
  className?: string;
}

export const Button: FC<MyButtonProps> = ({
  text,
  disabled,
  onClick,
  className,
}) => {
  return (
    <div className="container-button-posts">
      <button className={className} onClick={onClick} disabled={disabled}>
        {text}
      </button>
    </div>
  );
};
