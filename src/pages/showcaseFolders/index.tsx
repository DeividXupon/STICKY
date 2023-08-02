import CardFolder from "components/cardFolder";
import useLocalStoragerContext from "hooks/useLocalStoragerContext";
import { v4 as uuidv4 } from "uuid";

import ShowcaseAnimate from "components/showcaseAnimate";
import ChildrenShowcaseAnimate from "components/showcaseAnimate/childrenShowcaseAnimate";

const ShowcaseFolders = () => {

  const { foldersStorager } = useLocalStoragerContext();

  return (
    <ShowcaseAnimate $color="#ff81e0">
      {foldersStorager.map(item =>
      <ChildrenShowcaseAnimate key={uuidv4()}>
        <CardFolder >{item}</CardFolder>
      </ChildrenShowcaseAnimate>
      )}
    </ShowcaseAnimate>
  )
}

export default ShowcaseFolders;