import { createContext } from "react"


//typagem de um item do aray do state storager
interface IstoragerItem {
  color: string,
  tags: string[],
  title: string,
  text: string,
  id: string
}

//typagem do set do state do storager
type TypeSetStorager = React.Dispatch<React.SetStateAction<IstoragerItem[]>>


//typagem do createContext ps: storager esta com [] pq typamos apenas um objeto
interface IlocalStoragerContextValue {
  storager: IstoragerItem[],
  setStorager: TypeSetStorager
}

const LocalStoragerContext = createContext<IlocalStoragerContextValue>({
  storager: [],
  setStorager: () => {},
});

export default LocalStoragerContext;