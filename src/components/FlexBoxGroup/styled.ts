import { ColorsType, SpacesType } from "@themes/mainTheme"
import styled from "styled-components"
import mainTheme from "@themes/mainTheme"
import FlexBox from "./FlexBox"

interface FlexBoxStyledProps {
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

interface VStackStyleProps extends FlexBoxStyledProps {
  $gap: SpacesType
  onClick?: () => void
}

interface HStackStyleProps extends FlexBoxStyledProps {
  $gap: SpacesType
  onClick?: () => void
}

export const FlexBoxContainer = styled.div<FlexBoxStyledProps>`
  display: flex;
  padding-top: ${({ pt }) => (pt ? mainTheme.spaces[pt] : 0)};
  padding-right: ${({ pr }) => (pr ? mainTheme.spaces[pr] : 0)};
  padding-bottom: ${({ pb }) => (pb ? mainTheme.spaces[pb] : 0)};
  padding-left: ${({ pl }) => (pl ? mainTheme.spaces[pl] : 0)};
  padding: ${({ p }) => p};
  margin-top: ${({ mt }) => (mt ? mainTheme.spaces[mt] : 0)};
  margin-right: ${({ mr }) => (mr ? mainTheme.spaces[mr] : 0)};
  margin-bottom: ${({ mb }) => (mb ? mainTheme.spaces[mb] : 0)};
  margin-left: ${({ ml }) => (ml ? mainTheme.spaces[ml] : 0)};
  margin: ${({ m }) => m};
  background-color: ${({ bg }) => (bg ? mainTheme.colors[bg] : "transparent")};
  border: ${({ border }) => border};
  border-radius: ${({ borderRadius }) =>
    borderRadius ? mainTheme.spaces[borderRadius] : 0};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  min-width: ${({ minWidth }) => minWidth};
  min-height: ${({ minHeight }) => minHeight};
  max-width: ${({ maxWidth }) => maxWidth};
  max-height: ${({ maxHeight }) => maxHeight};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  flex-grow: ${({ flexGrow }) => flexGrow};
  overflow-x: ${({ overflowX }) => overflowX};
  overflow-y: ${({ overflowY }) => overflowY};
  box-shadow: ${({ boxShadow }) => boxShadow};
  cursor: ${({ onClick }) => (onClick ? "pointer" : "auto")};
`

export const VStackContainer = styled(FlexBox)<VStackStyleProps>`
  flex-direction: column;
  row-gap: ${({ $gap }) => mainTheme.spaces[$gap]};
`

export const HStackContainer = styled(FlexBox)<HStackStyleProps>`
  flex-direction: row;
  column-gap: ${({ $gap }) => mainTheme.spaces[$gap]};
`
