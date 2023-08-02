import { ButtonCard, CardBox } from "./cardRecall";
import { Fechar, Paragraph } from "UI";
import useLocalStoragerContext from "hooks/useLocalStoragerContext";
import { useState } from "react";

interface Iprops {
  color: string | undefined,
  question: string,
  respons: string,
  id?: string
}

const CardRecall = ({ color, question, respons, id }: Iprops) => {

  const { recallStorager, setRecallStorager } = useLocalStoragerContext();

  const [responsOrQuestion, setROQ] = useState(false);

  const [display, setDisplay] = useState("block")

  function DeletCard() {
    const newList = recallStorager.filter(item => item.id === id ? false : true);
    setRecallStorager(newList);
    setDisplay("none")
  }



  return (
    <div style={{display: display}}>
      <Fechar onClick={DeletCard}>X</Fechar>
      <CardBox $color={color}>
        <Paragraph $textSize={responsOrQuestion ? respons.length : question.length}>{responsOrQuestion ? respons : question + "?"}</Paragraph>
      </CardBox>
      <ButtonCard onClick={() => setROQ(prev => !prev)}>{responsOrQuestion ? "See Question" : "See Answer"}</ButtonCard>
    </div>

  )
}

export default CardRecall;