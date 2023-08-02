import { ReactNode } from "react"
import { motion } from "framer-motion"

interface Iprops{
  children: ReactNode
}

const ChildrenShowcaseAnimate = ({children}: Iprops) => {

  const itemm = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return(
    <motion.div variants={itemm}>
      {children}
    </motion.div>
  )
}

export default ChildrenShowcaseAnimate;