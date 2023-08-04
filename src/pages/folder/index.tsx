import CardRecall from "components/cardRecall";
import ShowcaseAnimate from "components/showcaseAnimate";
import ChildrenShowcaseAnimate from "components/showcaseAnimate/childrenShowcaseAnimate";

import { motion } from "framer-motion";

import {AiOutlineArrowLeft} from "react-icons/ai";

import { useLocation } from "react-router-dom";
import { styled } from "styled-components";

import { useNavigate } from "react-router-dom";
import useLocalStoragerContext from "hooks/useLocalStoragerContext";

import { media760 } from "UI/variaveis";

import { RiDeleteBin5Fill } from "react-icons/ri"

const Title = styled.h1`
  font-size: 3em;
  text-align: center;
  font-family: 'Roboto', sans-serif;
`
const NotItens = styled.div`
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto Slab', serif;
`
const Box = styled.div`
  display: flex;
  width: 100vw;
  align-items: center;
  justify-content: space-around;
  height: 80px;
`
const ButtonDelet = styled(motion.button)`
  border: none;
  padding: 0;
  margin: 0;
  width: 45px;
  height: 45px;
  border: solid 4px black;
  border-radius: 50%;
  font-size: 1.8em;
  background: #ff4747;
  cursor: pointer;
  

  .x{
    transition: 0.3s;
    opacity: 0;
    background: #ffffff;
    position: absolute;
    font-size: 0.6em;
    width: 20px;
    height: 5px;
    padding: 0px 5px 0px 5px;
    text-align: center;
    border: 2px solid black;
    transform: translate(-40%, -400%);
    overflow: hidden;
    text-overflow: clip;
    cursor: pointer;
  }

  &:hover{
    
    .x{
      transition: 0.3s;
      width: 280px;
      height: 25px;
      opacity: 1;
      transform: translate(-40%, -270%);

    }
  }

  @media (max-width: ${media760+"px"}) {
    &:hover{.x{transform: translate(-80%, 100%);}}
  }
`

const Main = styled(ShowcaseAnimate)`
  padding: 0px 40px 0px 40px;
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
  
  const nav = useNavigate()

  const { foldersStorager, setFoldersStorager } = useLocalStoragerContext()

  function deletFolder() {
    if(foldersStorager.length !== 1){
      setFoldersStorager(foldersStorager.filter(item => item === name ? false : true));
    }else{
      alert('You have to have at least one folder');
    }
    nav(-1)
  }

  return (
    <Main $color="#81ffcf">
      <Box>
        <AiOutlineArrowLeft onClick={() => nav(-1)} style={{cursor: "pointer", border: "solid 4px black", borderRadius: "50%"}} size={45}/>
        <Title>{name}</Title>
        <ButtonDelet onClick={deletFolder}> <RiDeleteBin5Fill style={{marginTop: "3px"}}/>
          <div className="x">Do you want to delete this folder?</div>
        </ButtonDelet>
      </Box>
      {itens.length > 0 ? itens.map((item: Iitem) =>
        <ChildrenShowcaseAnimate key={item.id}>
          <CardRecall
            color={item.color}
            question={item.question}
            respons={item.response}
            id={item.id}
          />
        </ChildrenShowcaseAnimate>) :
        <NotItens>
          <h2>There's nothing here</h2>
          <h3>cry a card in the create tab</h3>
        </NotItens>}
    </Main>
  )
}

export default ShowcaseItensInFolder;