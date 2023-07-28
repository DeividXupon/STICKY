import { ButtonCard, CardBox } from "./cardRecall";
import { Fechar, Paragraph } from "UI";
import { useState } from "react";
 
interface Iprops {
  color: string | undefined,
  question: string,
  respons: string
}

const CardRecall = ({color, question, respons}: Iprops) => {

  const [responsOrQuestion, setROQ] = useState(false)

  return(
    <div>
      <Fechar>X</Fechar>
      <CardBox $color={color}>
        <Paragraph $textSize={responsOrQuestion ? respons.length : question.length}>{responsOrQuestion ? respons : question + "?"}</Paragraph>
      </CardBox>
      <ButtonCard onClick={() => setROQ(prev => !prev)}>{responsOrQuestion ? "See Question" : "See Answer"}</ButtonCard>
    </div>
  )
}

export default CardRecall;