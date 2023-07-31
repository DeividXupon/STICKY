
import { MainShowcase } from "UI";
import CardRecall from "components/cardRecall";

import { useLocation } from "react-router-dom";
import { styled } from "styled-components";

const Main = styled(MainShowcase)`
  padding-top: 140px;
  h1{
    top: 100px;
    position: absolute;
    font-size: 3em;
    font-family: 'Roboto', sans-serif;
  }

  .notItens{
    height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Roboto Slab', serif;
  }
`

interface Iitem {
  color: string,
  folder: string,
  question: string,
  response: string,
  id: string
}



const ShowcaseItensInFolder = () => {

  const { name, itens } = useLocation().state

  return (
    <Main $color="#81ffcf">
      <h1>{name}</h1>
      {itens.length > 0 ? itens.map((item: Iitem) =>
        <CardRecall
          color={item.color}
          question={item.question}
          respons={item.response}
          key={item.id}
        />) :
        <div className="notItens">
          <h2>There's nothing here</h2>
          <h3>cry a card in the create tab</h3>
        </div>}
    </Main>
  )
}

export default ShowcaseItensInFolder;