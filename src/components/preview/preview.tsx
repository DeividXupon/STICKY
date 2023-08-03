import { motion } from "framer-motion";
import { styled } from "styled-components";

export const ContainerView = styled(motion.section)<{$color: string}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding-top: 90px;
  height: 100vh;
  width: 45vw;
  background: ${props => props.$color};
  
  .view_title{
    font-size: 3em;
    font-family: 'Roboto', sans-serif;
    text-align: center;
    width: 100%;
  }

  @media (max-width: 1000px) {
    display: none;
  }
`