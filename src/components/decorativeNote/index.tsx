import { ReactNode } from "react";
import { Annotation } from "./decorativeNote";

interface Iprops {
  children: ReactNode,
  top: string,
  left: string,
  color: string
}

const DecorativeNote = ({ children, top, left, color}: Iprops) => {
  return (
    <Annotation
      $color={color}
      $top={top}
      $left={left}
      animate={{ y: [8, -8, 8, -8, 8, -8, 8], rotate: [-4, 4, -4] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>{children}
    </Annotation>
  )
}

export default DecorativeNote;