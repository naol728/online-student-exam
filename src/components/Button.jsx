import { Button } from "@mui/material";


export default function Buttons({children,type,size,className,color}) {
  return (
    <Button variant={type} size={size} className={`${className}`} color={color}>
      {children}
    </Button>
  )
}

