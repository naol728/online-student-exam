import { Button } from "@mui/material";


export default function Buttons({children,type,size,className}) {
  return (
    <Button variant={type} size={size} className={`${className}`} >
      {children}
    </Button>
  )
}

