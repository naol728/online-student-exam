import { Button } from "@mui/material";

export default function Buttons({
  onclick,
  children,
  type,
  size,
  className,
  color,
  submit,
 
}) {
  return (
    <Button
      onClick={onclick}
      type={submit}
      variant={type}
      size={size}
      className={`${className}`}
      color={color}
    >
      {children}
    </Button>
  );
}
