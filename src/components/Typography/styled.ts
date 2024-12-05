import { VariantsType, ColorsType } from "@themes/mainTheme"
import mainTheme from "@themes/mainTheme"
import styled from "styled-components"

interface TypographyProps {
  $variant: VariantsType
  $color: ColorsType
  $textAlign: string
  $underLine?: boolean
  $italic?: boolean
  ellipsis?: boolean
  noWrap?: boolean
  pl?: number
  pr?: number
}

export const Span = styled.span<TypographyProps>`
  text-align: ${({ $textAlign }) => $textAlign};
  font-weight: ${({ $variant }) => mainTheme.variants[$variant].weight};
  font-size: ${({ $variant }) => mainTheme.variants[$variant].size};
  color: ${({ $color }) => mainTheme.colors[$color]};
  text-decoration: ${({ $underLine }) => ($underLine ? "underline" : "none")};
  text-underline-position: under;
  font-style: ${({ $italic }) => ($italic ? "italic" : "normal")};
  padding-left: ${({ pl }) => pl}px;
  padding-right: ${({ pr }) => pr}px;
  white-space: ${({ noWrap }) => (noWrap ? "nowrap" : "normal")};
  overflow: ${({ ellipsis }) => (ellipsis ? "hidden" : "visible")};

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`
