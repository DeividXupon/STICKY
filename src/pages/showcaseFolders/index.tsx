import CardFolder from "components/cardFolder";
import useLocalStoragerContext from "hooks/useLocalStoragerContext";

import { MainShowcase } from "UI";

const ShowcaseFolders = () => {

  const { foldersStorager } = useLocalStoragerContext();

  return (
    <MainShowcase $color="#ff81e0">
      {foldersStorager.map(item =>
        <CardFolder>{item}</CardFolder>
      )}
    </MainShowcase>
  )
}

export default ShowcaseFolders;