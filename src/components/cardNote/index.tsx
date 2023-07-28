import useLocalStoragerContext from "hooks/useLocalStoragerContext"
import Alert from "../alert"
import { BoxCard, BoxTags, Card } from "./cardNote"
import { Paragraph, Fechar } from "UI"
import { ReactNode, useState } from "react"

interface Iprops {
  title: string,
  children: ReactNode,
  tags: string[],
  color: string | undefined,
  id?: string
}



const CardNote = ({ title, children, tags, color, id }: Iprops) => {

  const [onOffAlert, setOnOffAlert] = useState(false);

  const openOrCloseAlert = () => {
    setOnOffAlert(true);
  }

  const { noteStorager, setNoteStorager } = useLocalStoragerContext()

  const DeletCard = () => {
    const newList = noteStorager.filter(item => item.id === id ? false : true)
    setNoteStorager(newList)
  }

  const card =
    (<BoxCard>
      <Card $color={color}>
        <h1 className="card_note_title">{title}</h1>
        <Paragraph $textSize={JSON.stringify(children).length} className="card_note_text">{children}</Paragraph>
        <BoxTags>
          {tags.map((item, index) => <div key={index} className="card_tag">{item}</div>)}
        </BoxTags>
      </Card>
    </BoxCard>)

  return (
    <>
      <BoxCard>
      <Fechar onClick={openOrCloseAlert}>X</Fechar>
      <Card $color={color}>
        <h1 className="card_note_title">{title}</h1>
        <Paragraph $textSize={JSON.stringify(children).length} className="card_note_text">{children}</Paragraph>
        <BoxTags>
          {tags.map((item, index) => <div key={index} className="card_tag">{item}</div>)}
        </BoxTags>
      </Card>
    </BoxCard>
      {onOffAlert ? <Alert card={card} setAlert={setOnOffAlert} deletCard={DeletCard}/> : null}
    </>
  )
}

export default CardNote;