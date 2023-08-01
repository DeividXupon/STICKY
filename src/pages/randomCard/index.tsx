import { MainShowcase } from "UI";
import CardNote from "components/cardNote";
import CardRecall from "components/cardRecall";
import useLocalStoragerContext from "hooks/useLocalStoragerContext";



const RandomCard = () => {

  function getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const typeCard = getRandomInt(1, 2);

  const { recallStorager, noteStorager } = useLocalStoragerContext()

  const randomRecallIndex = recallStorager[getRandomInt(0, recallStorager.length - 1)]
  const randomNoteIndex = noteStorager[getRandomInt(0, noteStorager.length - 1)]

  return (
    <MainShowcase $color="#cecece">
      <div style={{marginTop: "8px"}}>
      { recallStorager.length !== 0 || noteStorager.length !== 0 ? 
      
      typeCard === 1 && noteStorager.length !== 0?
        <CardNote
          key={randomNoteIndex.id}
          color={randomNoteIndex.color}
          tags={randomNoteIndex.tags}
          title={randomNoteIndex.title} >
          {randomNoteIndex.text}
        </CardNote> :
        <CardRecall
          color={randomRecallIndex.color}
          question={randomRecallIndex.question}
          respons={randomRecallIndex.response}
          key={randomRecallIndex.id} /> : <h1>Nothing here</h1>}
        </div>
    </MainShowcase>
  )
}

export default RandomCard;