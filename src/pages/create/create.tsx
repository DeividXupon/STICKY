import { motion } from "framer-motion";
import { styled } from "styled-components";

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
`
export const ChoiceSection = styled.section`
  display: flex;
  justify-content: space-around;
`
export const AnimateBox = styled(motion.div)``
