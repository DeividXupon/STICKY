import { SubmitButton } from "UI"
import { v4 as uuidv4 } from "uuid";
import useLocalStoragerContext from "hooks/useLocalStoragerContext";


interface Iprops {
  color: string | undefined,
  tags: string[],
  title: string,
  text: string,
  resetForm: () => void
}

const ButtonSubmitForm = ({ color, tags, title, text, resetForm }: Iprops) => {

  const {noteStorager, setNoteStorager} = useLocalStoragerContext();

  const submit = (note: { color: string | undefined, tags: string[], title: string, text: string, id: string}) => {
    setNoteStorager([...noteStorager, note]);
    resetForm();
  }

  return (
    <SubmitButton onClick={() => submit({color, tags, title, text, id: uuidv4()})}>
      To Create
    </SubmitButton>
  )
}

export default ButtonSubmitForm;