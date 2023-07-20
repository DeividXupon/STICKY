import { BoxCard, BoxTags, Card, Fechar, Paragraph } from "./cardNote"
import { ReactNode } from "react"

interface Iprops {
  title: string,
  children: ReactNode,
  tags: string[],
  color: string
}

const CardNote = ({ title, children, tags, color }: Iprops) => {
  return (
    <BoxCard>
      <Fechar>X</Fechar>
      <Card $color={color}>
        <h1 className="card_note_title">{title}</h1>
        <Paragraph $textSize={JSON.stringify(children).length} className="card_note_text">{children}</Paragraph>
        <BoxTags>
          {tags.map((item, index) => <div key={index} className="card_tag">{item}</div>)}
        </BoxTags>
      </Card>
    </BoxCard>
  )
}

export default CardNote;