import useLocalStorager from "../../hooks/useLocalStorager"
import { SubmitButton } from "./buttonSubmitForm"
import { v4 as uuidv4 } from "uuid";


interface Iprops {
  color: string,
  tags: string[],
  title: string,
  text: string,
  resetForm: () => void
}

const ButtonSubmitForm = ({ color, tags, title, text, resetForm }: Iprops) => {

  const [storager, setStorager] = useLocalStorager("note", [{ color: "#a7a7a7a7a", tags: ["Tags"], title: "My Name is Deivid", text: "Hi :D", id: uuidv4() }])

  const submit = (note: { color: string, tags: string[], title: string, text: string, id: string}) => {
    setStorager([...storager, note]);
    resetForm();
  }

  return (
    <SubmitButton onClick={() => submit({color, tags, title, text, id: uuidv4()})}>
      To Create
    </SubmitButton>
  )
}

export default ButtonSubmitForm;