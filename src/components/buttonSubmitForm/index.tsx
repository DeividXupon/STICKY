import { SubmitButton } from "./buttonSubmitForm"
import { v4 as uuidv4 } from "uuid";
import useLocalStoragerContext from "../../hooks/useLocalStoragerContext";


interface Iprops {
  color: string | undefined,
  tags: string[],
  title: string,
  text: string,
  resetForm: () => void
}

const ButtonSubmitForm = ({ color, tags, title, text, resetForm }: Iprops) => {

  const {storager, setStorager} = useLocalStoragerContext();

  const submit = (note: { color: string | undefined, tags: string[], title: string, text: string, id: string}) => {
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