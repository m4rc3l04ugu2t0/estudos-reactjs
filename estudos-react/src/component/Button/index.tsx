import { FC } from "react";

import "./style.scss";

interface MyButtonProps {
  text: string;
  disabled?: boolean;
  onClick: () => void;
}

export const Button: FC<MyButtonProps> = ({ text, disabled, onClick }) => (
  <button onClick={onClick} disabled={disabled}>
    {text}
  </button>
);
