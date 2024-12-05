import styled from "styled-components"

export const ZoomBoxContainer = styled.div`
  position: relative;
  overflow: auto;
  background-image: radial-gradient(circle, #ccc 1px, transparent 2px);
  background-size: 40px 40px;
  width: 150vw;
  height: 150vh;
`

export const FixedButton = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
`
