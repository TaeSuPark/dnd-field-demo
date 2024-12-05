import Typography from "../Typography/Typograpy"
import { HeaderBar } from "./styled"

interface HeaderProps {
  title: string
}

export default function Header({ title }: HeaderProps) {
  return (
    <HeaderBar>
      <Typography variant="subtitle-m" color="primary">
        {title}
      </Typography>
    </HeaderBar>
  )
}
