import useLocalStoragerContext from "../../hooks/useLocalStoragerContext";
import CardNote from "../../components/cardNote";
import { MainShowNotes } from "./showcaseNotes";

const ShowcaseNote = () => {

  const { noteStorager } = useLocalStoragerContext();

  return (
    <MainShowNotes>
      {noteStorager.map(item =>
        <CardNote key={item.id} id={item.id} color={item.color} title={item.title} tags={item.tags}>{item.text}</CardNote>
      )}
    </MainShowNotes>
  )
}

export default ShowcaseNote;