import { MainShowcase } from "UI"
import { ReactNode } from "react";

interface Iprops {
  children: ReactNode, 
  $color?: string
}

const ShowcaseAnimate = ({children, $color}: Iprops) => {

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.3
      }
    }
  };

  return(
    <MainShowcase
      $color={$color}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {children}
    </MainShowcase>
  )
}

export default ShowcaseAnimate;