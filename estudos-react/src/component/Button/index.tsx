import "./style.scss";

interface MyButtonProps {
  text: string;
  disabled: boolean;
}

console.log("testeeeeeeee");

export const Button = ({ text, disabled }: MyButtonProps) => (
  <button disabled={disabled}>{text}</button>
);
