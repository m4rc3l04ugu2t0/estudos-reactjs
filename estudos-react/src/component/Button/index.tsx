import "./style.scss";

interface MyButtonProps {
  text: string;
  disabled: boolean;
}

console.log("lobo mal");

export const Button = ({ text, disabled }: MyButtonProps) => (
  <button disabled={disabled}>{text}</button>
);
