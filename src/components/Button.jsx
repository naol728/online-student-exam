import { Button } from "@mui/material";


export default function Buttons({children,type}) {
  return (
    <Button variant={type}>
      {children}
    </Button>
  )
}

