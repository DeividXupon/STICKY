import useLocalStoragerContext from "../../hooks/useLocalStoragerContext";
import CardNote from "../cardNote";
import { MainShowNotes } from "./showcaseNotes";

const ShowcaseNote = () => {

  const { storager } = useLocalStoragerContext();

  return (
    <MainShowNotes>
      {storager.map(item =>
        <CardNote key={item.id} color={item.color} title={item.title} tags={item.tags}>{item.text}</CardNote>
      )}
    </MainShowNotes>
  )
}

export default ShowcaseNote;