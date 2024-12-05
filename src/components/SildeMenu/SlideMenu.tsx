import { useState } from "react"
import {
  SlidePanelContainer,
  Input,
  TextArea,
  CloseButton,
  SubmitButton,
} from "./styled"
import Typography from "../Typography/Typograpy"
import { HStack, VStack } from "../FlexBoxGroup"

interface SlidePanelProps {
  isOpen: boolean
  onSubmit: (title: string, text: string) => void
  onClose: () => void
}

export default function SlideMenu({
  isOpen,
  onSubmit,
  onClose,
}: SlidePanelProps) {
  const [title, setTitle] = useState("")
  const [text, setText] = useState("")

  const handleSubmit = () => {
    onSubmit(title, text)
    onClose()
  }

  return (
    <SlidePanelContainer isOpen={isOpen}>
      <VStack gap={60} width="100%">
        <VStack gap={40} width="100%">
          <Typography variant="subtitle-r" textAlign="center">
            Create a new note
          </Typography>
          <VStack gap={20}>
            <Input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="title"
            />
            <TextArea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="new memo"
            />
          </VStack>
        </VStack>

        <HStack gap={10} width="100%">
          <SubmitButton onClick={handleSubmit}>
            <Typography variant="body-m" color="primary">
              Post
            </Typography>
          </SubmitButton>
          <CloseButton onClick={onClose}>
            <Typography variant="body-m">Close</Typography>
          </CloseButton>
        </HStack>
      </VStack>
    </SlidePanelContainer>
  )
}
