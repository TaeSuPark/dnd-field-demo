import { SpacesType } from "@themes/mainTheme"
import { HStackContainer } from "./styled"
import { FlexBoxProps } from "./FlexBox"

interface HStackProps extends FlexBoxProps {
  gap?: SpacesType
}

const HStack = ({ children, gap = 0, ...props }: HStackProps) => {
  return (
    <HStackContainer $gap={gap} {...props}>
      {children}
    </HStackContainer>
  )
}

export default HStack
