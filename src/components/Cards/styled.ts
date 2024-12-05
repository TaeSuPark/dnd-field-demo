import styled from "styled-components"

export const Container = styled.div<{
  left: number
  top: number
  isDragging: boolean
}>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  width: 300px;
  height: 250px;
  padding: 16px;
  left: ${(props) => props.left}px;
  top: ${(props) => props.top}px;
  background-color: #ffe66d;
  border: 2px solid #ddd;
  border-radius: 24px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06);
  overflow: auto;
  cursor: ${({ isDragging }) => (isDragging ? "grabbing" : "grab")};
  user-select: none;

  transition: box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out,
    opacity 0.2s ease-in-out;

  /* 호버 시 효과 */
  &:hover {
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12), 0 3px 6px rgba(0, 0, 0, 0.08); /* 살짝 진한 그림자 */
  }

  /* 드래그 중일 때 효과 */
  ${(props) =>
    props.isDragging &&
    `
    opacity: 0.9; /* 약간 더 투명하게 */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2), 0 6px 12px rgba(0, 0, 0, 0.15); /* 깊은 그림자 */
    transform: scale(1.05); /* 확대 */
    cursor: grabbing; /* 드래그 중 커서 */
  `}
`
