import { ReactNode } from "react"
import { ContainerView } from "./preview"

interface Iprops {
  children: ReactNode,
}

const Preview = ({children}: Iprops) => {

  return(
    <ContainerView>
      <h1 className="view_title">Preview</h1>
      {children}
    </ContainerView>
  )
}

export default Preview;
