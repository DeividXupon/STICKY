import styled from "styled-components";
import { motion } from "framer-motion"
import annot from "assets/annotation.png"
import { media760 } from "UI/variaveis";

export const Annotation = styled(motion.div)<{$top: string, $left: string, $color: string}>`
  position: absolute;
  background-color: ${props => props.$color};
  left: 0;
  top: 0;
  width: 120px;
  height: 150px;
  background-image: url(${annot});
  background-size: cover;
  box-shadow: 10px 10px 0px 0px #000000ae;
  text-align: center;
  line-height: 170px;
  font-size: 1.4em;
  font-family: 'Roboto Slab', serif;

  @media (max-width: ${media760+"px"}){
    width: 80px;
    height: 100px;
    font-size: 0.955em;
    line-height: 110px;
  }
`