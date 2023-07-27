import { ReactNode } from "react";
import useLocalStorager from "../hooks/useLocalStorager";
import { v4 as uuidv4 } from "uuid";

import LocalStoragerContext from "./localStoragerContext";

interface Iprops {
  children: ReactNode
}

const LocalStoragerProvaider = ({ children }: Iprops) => {

  const [noteStorager, setNoteStorager] = useLocalStorager("note",
    [{
      color: "#999999",
      tags: ["Tags"],
      title: "My Name is Deivid",
      text: "Hi 🤓",
      id: uuidv4()
    }]);

  const [foldersStorager, setFoldersStorager] = useLocalStorager("folders",
    ["Generic", "Mathematics", "English"])

  const [recallStorager, setRecallStorager] = useLocalStorager("recall",
    [{
      color: "#999999",
      folder: "MATHEMATICS",
      question: "2 + 2",
      response: "4",
      id: uuidv4()
    }])

  return <LocalStoragerContext.Provider
    value={{
      noteStorager,
      setNoteStorager,
      recallStorager,
      setRecallStorager,
      foldersStorager,
      setFoldersStorager
    }}>
    {children}
  </LocalStoragerContext.Provider>
}

export default LocalStoragerProvaider;