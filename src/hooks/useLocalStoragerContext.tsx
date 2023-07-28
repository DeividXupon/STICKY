import LocalStoragerContext from "context/localStoragerContext";
import { useContext } from 'react'

export default function useLocalStoragerContext() {
  const storagerContext = useContext(LocalStoragerContext);

  if (storagerContext === undefined) {
    throw new Error(
      "component is trying to access 'useLocalStoragerContext' but it is not a child of 'LocalStoragerProvider'"
    )
  }

  return storagerContext
}