import { ReactNode } from "react"
import { ContainerView } from "./preview"

interface Iprops {
  children: ReactNode,
  color: string
}

const Preview = ({ children, color }: Iprops) => {

  return (
    <ContainerView
      initial={{y: "100%"}}
      animate={{y: "0%"}}
      transition={{
        delay: 1,
        y:{
          type: "spring",
          damping: 7,
          stiffness: 100,
        }
      }}
      $color={color}
    >
      <h1 className="view_title">Preview</h1>
      {children}
    </ContainerView>
  )
}

export default Preview;
