import NavigationContext from "context/navigation/navigationContext";
import { useContext } from "react"

export default function useNavigationContext() {
  const navigationContext = useContext(NavigationContext)

  if (navigationContext === undefined) {
    throw new Error(
      "component is trying to access 'useNavigationContext' but it is not a child of 'NavigationProvider'"
    )
  }

  return navigationContext;
}