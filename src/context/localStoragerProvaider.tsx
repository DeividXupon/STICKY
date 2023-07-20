import { ReactNode } from "react";
import useLocalStorager from "../hooks/useLocalStorager";
import { v4 as uuidv4 } from "uuid";

import LocalStoragerContext from "./localStoragerContext";

interface Iprops {
  children: ReactNode
}

const LocalStoragerProvaider = ({ children }: Iprops) => {

  const [storager, setStorager] = useLocalStorager("note",
    [{
      color: "#a7a7a7a7a",
      tags: ["Tags"],
      title: "My Name is Deivid",
      text: "Hi 🤓",
      id: uuidv4()
    }]);

  return <LocalStoragerContext.Provider value={{storager, setStorager}}>{children}</LocalStoragerContext.Provider>
}

export default LocalStoragerProvaider;