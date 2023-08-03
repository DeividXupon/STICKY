import { ReactNode, useEffect, useState } from "react";
import NavigationContext from "./navigationContext";
import navLinks from "data/navHock";

interface Iprops {
  children: ReactNode
}

const NavigationProvaider = ({children}: Iprops) => {

  const [nav, setNav] = useState(navLinks)
  
  useEffect(() => {console.log("abc")},[nav])

  return(
    <NavigationContext.Provider value={{nav, setNav}}>
      {children}
    </NavigationContext.Provider>
  )
}

export default NavigationProvaider;