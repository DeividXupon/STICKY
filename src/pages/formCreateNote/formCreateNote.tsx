import { styled } from "styled-components";
import { motion } from "framer-motion";

export const MainContainer = styled.main`
  display: flex;
  width: 100vw;
  height: 100vh;
  background: #fcff3e;
  overflow: hidden;
`
export const FormSection = styled(motion.section)`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 55vw;
  background: #fdff83;
  border-right: 5px solid black;
  box-shadow: 10px 0px 0px #00000060;
  padding: 90px 15px 10px 15px;
  justify-content: space-between;
  z-index: 1;

  @media (max-width: 1000px) {
    width: 100vw;
    padding: 90px 15px 30px 15px;
    align-items: center;
  }

  @media (max-width: 760px) {
    padding: 30px 5px 90px 5px;
  }
`

export const BoxInputTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .title_label{
    font-size: 2em;
    font-family: 'Roboto', sans-serif;
  }
  .title_input{
    width: 88%;
    height: 35px;
    font-size: 1.5em;
    border: 3px solid black;
    font-family: 'Roboto', sans-serif;
    text-align: center;
  }
`

export const BoxTextAndTag = styled.div`
  width: 100%;
  background: black;
  border: 2px solid black;
`

export const Tags = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  width: 100%;

  @media (max-width: 760px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr 1fr 1fr ;
    grid-template-rows: 1fr 1fr 1fr 1fr;
  }
`

export const Tag = styled.button<{ $select: boolean }>`
  height: 35px;
  border: 2px solid black;
  background: ${props => props.$select ? "#fcff69" : "#7b7c30"};
  font-size: 1.1em;
  font-family: 'Roboto Slab', serif;
  border-radius: 0%;
  cursor: pointer;

  @media (max-width: 500px) {
    font-size: 0.9em;
  }
`