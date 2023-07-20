import CardNote from "../cardNote";
import { MainShowNotes } from "./showcaseNotes";

const ShowcaseNote = () => {

  const storag = localStorage.getItem("note")
  const objStorag = storag !== null ? JSON.parse(storag) : null;

  return (
    <MainShowNotes>
      {Array.isArray(objStorag) ? objStorag.map(item => <CardNote key={item.id} color={item.color} title={item.title} tags={item.tags}>{item.text}</CardNote>) : <h1>Nada aqui</h1>}
    </MainShowNotes>
  )
}

export default ShowcaseNote;