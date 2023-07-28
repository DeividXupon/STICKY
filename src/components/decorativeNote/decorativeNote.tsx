import styled from "styled-components";
import { motion } from "framer-motion"
import annot from "assets/annotation.png"

export const Annotation = styled(motion.div)<{$top: string, $left: string, $color: string}>`
    position: absolute;
    background-color: ${props => props.$color};
    left: ${props => props.$left};
    top: ${props => props.$top};
    width: 120px;
    height: 150px;
    background-image: url(${annot});
    background-size: cover;
    box-shadow: 10px 10px 0px 0px #000000ae;
    text-align: center;
    line-height: 170px;
    font-size: 1.4em;
    font-family: 'Roboto Slab', serif;
`