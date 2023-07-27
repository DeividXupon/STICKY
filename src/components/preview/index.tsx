import { ReactNode } from "react"
import { ContainerView } from "./preview"

interface Iprops {
  children: ReactNode,
  color: string
}

const Preview = ({children, color}: Iprops) => {

  return(
    <ContainerView $color={color}>
      <h1 className="view_title">Preview</h1>
      {children}
    </ContainerView>
  )
}

export default Preview;
