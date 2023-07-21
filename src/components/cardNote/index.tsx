import useLocalStoragerContext from "../../hooks/useLocalStoragerContext"
import Alert from "../alert"
import { BoxCard, BoxTags, Card, Fechar, Paragraph } from "./cardNote"
import { ReactNode, useState } from "react"

interface Iprops {
  title: string,
  children: ReactNode,
  tags: string[],
  color: string,
  id?: string
}



const CardNote = ({ title, children, tags, color, id }: Iprops) => {

  const [onOffAlert, setOnOffAlert] = useState(false);

  const openOrCloseAlert = () => {
    setOnOffAlert(true);
  }

  const { storager, setStorager } = useLocalStoragerContext()

  const DeletCard = () => {
    const newList = storager.filter(item => item.id === id ? false : true)
    setStorager(newList)
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