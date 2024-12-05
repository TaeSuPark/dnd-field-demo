import styled from "styled-components"

export const SlidePanelContainer = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  width: 320px;
  height: 100%;
  background-color: #ffffff;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  transform: translateX(${(props) => (props.isOpen ? "0" : "100%")});
  padding: 30px;
  z-index: 101;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  align-items: flex-start;
  color: #333333;
  border-left: 2px solid #e0e0e0;
  padding-bottom: 40px;
`

export const Input = styled.input`
  width: 95%;
  padding: 12px;
  margin-bottom: 15px;
  border-radius: 8px;
  border: 1px solid #dcdcdc;
  background-color: #f0f0f0;
  color: #333333;
  font-size: 16px;
  transition: background-color 0.3s;

  &:focus {
    background-color: #ffffff;
    outline: none;
  }
`

export const TextArea = styled.textarea`
  width: 95%;
  height: 200px;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #dcdcdc;
  background-color: #f0f0f0;
  color: #333333;
  font-size: 16px;
  resize: none;
  transition: background-color 0.3s;

  &:focus {
    background-color: #ffffff;
    outline: none;
  }
`

export const SubmitButton = styled.button`
  width: 70%;
  padding: 12px 40px;
  font-size: 16px;
  color: #333333;
  background-color: #ffffff;
  border: 1.5px solid #ff6b6b;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s, box-shadow 0.2s;

  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #f7f7f7;
    transform: scale(1.02);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  }
`

export const CloseButton = styled.button`
  width: 30%;
  font-size: 16px;
  color: #333333;
  background-color: #ffffff;
  border: 1.5px solid #acacac;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #f7f7f7;
    transform: scale(1.02);
  }
`
