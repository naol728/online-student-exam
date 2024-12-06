import { Button } from "@mui/material";


export default function Buttons({onclick,children,type,size,className,color}) {
  
  return (
    <Button onClick={onclick} variant={type} size={size} className={`${className}`} color={color}>
      {children}
    </Button>
  )
}

