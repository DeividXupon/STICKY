import CardFolder from "components/cardFolder";
import useLocalStoragerContext from "hooks/useLocalStoragerContext";
import { v4 as uuidv4 } from "uuid";

import { MainShowcase } from "UI";

const ShowcaseFolders = () => {

  const { foldersStorager } = useLocalStoragerContext();

  return (
    <MainShowcase $color="#ff81e0">
      {foldersStorager.map(item =>
        <CardFolder key={uuidv4()}>{item}</CardFolder>
      )}
    </MainShowcase>
  )
}

export default ShowcaseFolders;