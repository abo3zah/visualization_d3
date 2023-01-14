import { Face } from './face'
import { Eyes } from './eyes'
import { Mouth } from './mouth'
import { FaceContainer } from './faceContainer'
import { useState, useCallback } from 'react'
import './emoji.css'

const width = window.innerWidth;
const height = window.innerHeight;
const centerX = width / 2;
const centerY = height / 2;
const faceRadius = width > height ? height / 3 : width / 5;

export const Emoji = () => {
  const [mouseOnTop, setMouseOnTop] = useState(false);

  const handleMouseMove = useCallback((event) => {
    console.log(event);
    setMouseOnTop(true)
  }, [setMouseOnTop])

  const handleMouseLeave = useCallback(() => {
    setMouseOnTop(false)
  },[setMouseOnTop])

  return (
    <FaceContainer width={width} height={height} centerX={centerX} centerY={centerY} faceRadius={faceRadius}>
      <Face y={faceRadius / 3} radius={faceRadius} handleMouseMove={handleMouseMove} handleMouseLeave={handleMouseLeave} />
      <Eyes radius={faceRadius} />
      <Mouth radius={faceRadius / 2} mouseOnTop={mouseOnTop} handleMouseMove={handleMouseMove} />
    </FaceContainer>
  )
}