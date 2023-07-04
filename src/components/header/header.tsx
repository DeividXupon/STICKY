import { motion } from "framer-motion";
import styled from "styled-components";

export const ItemNav = styled(motion.p)<{$ultimo: boolean, $logo: boolean}>`
    border-right:  ${props => props.$ultimo ? "none" : "4px solid black"};
    display: flex;
    width: 20vw;
    min-width: 20px;
    align-items: center;
    justify-content: center;
    background-color: #fff7e7;
    font-family: ${props => props.$logo ? "'Roboto', sans-serif" : "'Roboto Slab', serif"};
    font-size: ${props => props.$logo ? "2em" : "1em"};
    cursor: pointer;
`

export const HeaderContainer = styled.header`
    position: fixed;
    width: 100%;
    height: 90px;
    display: flex;
    justify-content: space-evenly;
    border-bottom: 4px solid black;
    background-color: #F2EBDC;
`