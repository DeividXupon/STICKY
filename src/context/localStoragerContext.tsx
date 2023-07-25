import { createContext } from "react"


//typagem de um item do aray do state storager
interface IstoragerNoteItem {
  color: string | undefined,
  tags: string[],
  title: string,
  text: string,
  id: string
}

interface IstoragerRecallItem {
  color: string | undefined,
  folder: string, 
  question: string, 
  response: string,
  id: string
}

//typagem do set do state do storager
type SetNoteStorager = React.Dispatch<React.SetStateAction<IstoragerNoteItem[]>>

type SetRecallStorager = React.Dispatch<React.SetStateAction<IstoragerRecallItem[]>>

type SetFlodersStorager = React.Dispatch<React.SetStateAction<string[]>>

//typagem do createContext ps: storager esta com [] pq typamos apenas um objeto
interface IlocalStoragerContextValue {
  noteStorager: IstoragerNoteItem[],
  setNoteStorager: SetNoteStorager,
  recallStorager: IstoragerRecallItem[],
  setRecallStorager: SetRecallStorager,
  flodersStorager: string[],
  setFlodersStorager: SetFlodersStorager
  
}

const LocalStoragerContext = createContext<IlocalStoragerContextValue>({
  noteStorager: [],
  setNoteStorager: () => {},
  recallStorager: [],
  setRecallStorager: () => {},
  flodersStorager: [],
  setFlodersStorager: () => {}
});

export default LocalStoragerContext;