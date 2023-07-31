import { SetStateAction, createContext } from "react";

interface Ivalue {
  nome: string,
  id: number,
  ative: boolean,
  routerName: string
}

type typeSetValue = React.Dispatch<SetStateAction<Ivalue[]>>

interface InavigationContext {
  nav: Ivalue[],
  setNav: typeSetValue
}

const NavigationContext = createContext<InavigationContext>({
  nav: [],
  setNav: () => {}
})

export default NavigationContext;