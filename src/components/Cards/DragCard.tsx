import { useEffect, useState } from "react"
import { Container } from "./styled"
import Typography from "../Typography/Typograpy"

interface CardProps {
  position: { x: number; y: number }
  title: string
  text: string
  onMove: (newPosition: { x: number; y: number }) => void
  onDelete: () => void
}

export default function DragCard({
  position,
  title,
  text,
  onMove,
  onDelete,
}: CardProps) {
  const [isDragging, setIsDragging] = useState(false)
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  const onMouseDownHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    setOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    })
    setIsDragging(true)
  }

  const onMouseMoveHandler = (e: MouseEvent) => {
    if (!isDragging) return
    onMove({
      x: e.clientX - offset.x,
      y: e.clientY - offset.y,
    })
  }

  const onMouseUpHandler = () => {
    setIsDragging(false)

    onMove({
      x: Math.round(position.x / 40) * 40,
      y: Math.round(position.y / 40) * 40,
    })
  }

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", onMouseMoveHandler)
      window.addEventListener("mouseup", onMouseUpHandler)
    } else {
      window.removeEventListener("mousemove", onMouseMoveHandler)
      window.removeEventListener("mouseup", onMouseUpHandler)
    }

    return () => {
      window.removeEventListener("mousemove", onMouseMoveHandler)
      window.removeEventListener("mouseup", onMouseUpHandler)
    }
  }, [isDragging, offset, position])

  return (
    <Container
      left={position.x}
      top={position.y}
      onMouseDown={onMouseDownHandler}
      isDragging={isDragging}
    >
      <h3
        style={{
          fontSize: "20px",
          fontWeight: "600",
          marginBottom: "10px",
          color: "#333",
        }}
      >
        {title}
      </h3>
      <hr
        style={{
          margin: "10px 0",
          border: "none",
          borderBottom: "1px solid #999",
        }}
      />
      <p
        style={{
          whiteSpace: "pre-wrap",
          wordWrap: "break-word",
          fontSize: "16px",
          color: "#555",
          lineHeight: "1.5",
          flexGrow: 1,
        }}
      >
        {text}
      </p>
      <button
        onClick={onDelete}
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          background: "#FFE66D",
          border: "none",
          borderRadius: "50%",
          width: "30px",
          height: "30px",
          cursor: "pointer",
        }}
      >
        <Typography variant="body-b">ㅡ</Typography>
      </button>
    </Container>
  )
}
