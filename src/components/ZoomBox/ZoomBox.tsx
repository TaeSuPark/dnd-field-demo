import { useState } from "react"
import { FixedButton, ZoomBoxContainer } from "./styled"
import React from "react"
import DragCard from "../Cards/DragCard"
import SlideMenu from "../SildeMenu/SlideMenu"
import { VStack } from "../FlexBoxGroup"
import SlideOpenBtn from "../SlideOpenBtn/SlideOpenBtn"

interface ZoomBoxProps {}

export default function ZoomBox({}: ZoomBoxProps) {
  const [cards, setCards] = useState<
    { id: number; title: string; text: string; x: number; y: number }[]
  >([])
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const isOverlapping = (
    newCard: { x: number; y: number },
    cards: { x: number; y: number }[]
  ) => {
    return cards.some((card) => {
      const dx = Math.abs(card.x - newCard.x)
      const dy = Math.abs(card.y - newCard.y)
      return dx < 40 && dy < 40 // 카드 간 최소 간격 40px
    })
  }

  const addCard = (title: string, text: string) => {
    let newCard = {
      id: cards.length + 1,
      title,
      text,
      x: Math.random() * 400, // 초기 위치 랜덤
      y: Math.random() * 400,
    }

    // 카드가 겹치는지 확인
    while (isOverlapping(newCard, cards)) {
      newCard = {
        id: cards.length + 1,
        title,
        text,
        x: Math.random() * 400,
        y: Math.random() * 400,
      }
    }

    setCards((prevCards) => [...prevCards, newCard])
    setIsOpen(false)
  }

  const handleDeleteCard = (id: number) => {
    setCards((prevCards) => prevCards.filter((card) => card.id !== id))
  }

  const updateCardPosition = (id: number, x: number, y: number) => {
    setCards((prevCards) =>
      prevCards.map((card) => (card.id === id ? { ...card, x, y } : card))
    )
  }

  return (
    <VStack>
      <SlideOpenBtn onClick={() => setIsOpen(!isOpen)} />
      <SlideMenu
        isOpen={isOpen}
        onSubmit={addCard}
        onClose={() => {
          setIsOpen(false)
        }}
      />

      <ZoomBoxContainer>
        {cards.map((card) => (
          <DragCard
            key={card.id}
            position={{ x: card.x, y: card.y }}
            title={card.title}
            text={card.text}
            onMove={(newPosition) =>
              updateCardPosition(card.id, newPosition.x, newPosition.y)
            }
            onDelete={() => handleDeleteCard(card.id)}
          />
        ))}
      </ZoomBoxContainer>
    </VStack>
  )
}
