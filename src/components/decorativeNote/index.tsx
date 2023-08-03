import { ReactNode } from "react";
import { Annotation } from "./decorativeNote";

interface Iprops {
  children: ReactNode,
  top: string,
  left: string,
  color: string
}

const DecorativeNote = ({ children, top, left, color}: Iprops) => {

  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  return (
    <Annotation
      $color={color}
      $top={top}
      $left={left}
      initial={{x: 0, y: 0}}
      drag
      dragConstraints={{
        top: 20,
        left: 10,
        right: screenWidth -75,
        bottom: screenHeight -220,
      }}
      dragElastic={0.1}
      animate={{x: left, y: top, rotate: [-4, 4, -4] }}
      transition={{ duration: 1.5, ease: "easeInOut", rotate: {duration: 6, repeat: Infinity} }}
    >
      {children}
    </Annotation>
  )
}

export default DecorativeNote;