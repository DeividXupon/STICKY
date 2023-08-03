import { motion } from "framer-motion";
import { styled } from "styled-components";
import { media760 } from "UI/variaveis";

export const MainCreate = styled(motion.main)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-top: 90px;
  width: 100vw;
  height: 100vh;
  background-color: #c5ff95;
  overflow: hidden;

  .titulo__create{
    text-align: center;
    font-size: 3.5rem;
    font-family: 'Roboto', sans-serif;
  }

  @media (max-width: ${media760+"px"}) {
    padding-top: 0px;
    padding-bottom: 80px;
    overflow-y: auto;
    height: 850px;
  }
`
export const ChoiceSection = styled.section`
  display: flex;
  justify-content: space-around;
  gap: 15px;

  @media (max-width: ${media760+"px"}) {
    flex-direction: column;
    align-items: center;
  }
`
export const AnimateBox = styled(motion.div)``
