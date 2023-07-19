import useLocalStorager from "../../hooks/useLocalStorager"
import { SubmitButton } from "./buttonSubmitForm"

interface Iprops {
    color: string,
    tags: string[],
    title: string,
    text: string,
}

const ButtonSubmitForm = ({color, tags, title, text}: Iprops) => {

    const [storager, setStorager] = useLocalStorager("note", [{color: "#a7a7a7a7a", tags: ["Tags"], title: "My Name is Deivid", text: "Hi :D"}])

    return(
        <SubmitButton onClick={() => console.log({color, tags, title, text})}>
            To Create
        </SubmitButton>
    )
}

export default ButtonSubmitForm;