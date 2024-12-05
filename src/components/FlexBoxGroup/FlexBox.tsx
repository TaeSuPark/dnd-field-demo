import { ColorsType, SpacesType } from "@themes/mainTheme"
import { FlexBoxContainer } from "./styled"

export interface FlexBoxProps {
  children: React.ReactNode | React.ReactNode[]
  p?: string
  pt?: SpacesType
  pr?: SpacesType
  pb?: SpacesType
  pl?: SpacesType
  m?: string
  mt?: SpacesType
  mr?: SpacesType
  mb?: SpacesType
  ml?: SpacesType
  bg?: ColorsType
  border?: string
  borderRadius?: SpacesType
  width?: string
  height?: string
  minWidth?: string
  minHeight?: string
  maxWidth?: string
  maxHeight?: string
  justifyContent?: string
  alignItems?: string
  flexGrow?: number
  overflowX?: string
  overflowY?: string
  boxShadow?: string
  onClick?: () => void
}

export default function FlexBox({ children, ...props }: FlexBoxProps) {
  return <FlexBoxContainer {...props}>{children}</FlexBoxContainer>
}
