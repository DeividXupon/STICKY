import useLocalStoragerContext from "hooks/useLocalStoragerContext";
import CardNote from "components/cardNote";
import { MainShowcase } from "UI";


const ShowcaseNote = () => {

  const { noteStorager } = useLocalStoragerContext();

  return (
    <MainShowcase>
      {noteStorager.map(item =>
        <CardNote key={item.id} id={item.id} color={item.color} title={item.title} tags={item.tags}>{item.text}</CardNote>
      )}
    </MainShowcase>
  )
}

export default ShowcaseNote;