import { SubmitButton } from "UI"
import useLocalStoragerContext from "hooks/useLocalStoragerContext"
import { v4 as uuidv4 } from "uuid";

interface Iprops {
  color: string | undefined,
  question: string,
  response: string,
  folder: string,
  resetForm: () => void
}

const ButtonSubmitFormRecall = ({ color, question, response, folder, resetForm }: Iprops) => {

  const { recallStorager, setRecallStorager } = useLocalStoragerContext()

  const addItemInStorager = (note:
    {
      color: string | undefined,
      folder: string,
      question: string,
      response: string,
      id: string
    }) => {
    setRecallStorager([...recallStorager, note]);
    resetForm();
  }

  return (
    <SubmitButton onClick={() => addItemInStorager({color, folder, question, response, id: uuidv4()})}>To Create</SubmitButton>
  )
}

export default ButtonSubmitFormRecall;