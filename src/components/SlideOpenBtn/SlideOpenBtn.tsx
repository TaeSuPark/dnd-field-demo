import Typography from "../Typography/Typograpy"
import { FixedButton } from "./styled"

interface SlideOpenBtnProps {
  onClick: () => void
}

export default function SlideOpenBtn({ onClick }: SlideOpenBtnProps) {
  return (
    <FixedButton onClick={onClick}>
      <Typography variant="title-m" color="primary">
        +
      </Typography>
    </FixedButton>
  )
}
