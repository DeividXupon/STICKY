import useLocalStoragerContext from "hooks/useLocalStoragerContext";
import CardNote from "components/cardNote";
import ShowcaseAnimate from "components/showcaseAnimate";
import ChildrenShowcaseAnimate from "components/showcaseAnimate/childrenShowcaseAnimate";


const ShowcaseNote = () => {

  const { noteStorager } = useLocalStoragerContext();
  const notes = noteStorager.slice().reverse()
  return (
    <ShowcaseAnimate>
      {notes.map(item =>
        <ChildrenShowcaseAnimate key={item.id}>
          <CardNote id={item.id} color={item.color} title={item.title} tags={item.tags}>{item.text}</CardNote>
        </ChildrenShowcaseAnimate>
      )}
    </ShowcaseAnimate>
  )
}

export default ShowcaseNote;