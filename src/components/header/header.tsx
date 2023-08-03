import { motion } from "framer-motion";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { media760 } from "UI/variaveis"; 

export const ItemNav = styled(motion.li)<{$ultimo: boolean, $logo: boolean}>`
  border-right:  ${props => props.$ultimo ? "none" : "4px solid black"};
  text-align: center;
  display: inline-block;
  width: 20vw;
  min-width: 20px;
  background-color: #fff7e7;
  font-family: ${props => props.$logo ? "'Roboto', sans-serif" : "'Roboto Slab', serif"};
  font-size: ${props => props.$logo ? "1.5em" : "1em"};
  cursor: pointer;

  @media (max-width: ${media760+"px"}){
    width: 50px;
    height: 50px;
    margin: 4px 0px 4px 0px;
    border: 4px solid black;
  }
`

export const HeaderContainer = styled.nav`
  position: fixed;
  width: 100%;
  border-top: 0px solid black;
  border-bottom: 4px solid black;
  background-color: #F2EBDC;
  z-index: 10;

  ul{
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  @media (max-width: ${media760+"px"}){
    display: flex;
    justify-content: center;
    top: 100%;
    transform: translate(0%, -100%);
    border-top: 4px solid black;
    border-bottom: 0px solid black;

    ul{
     gap: 5vw;
    }
  }
`

export const Alink = styled(Link)`
  display: block;
  text-decoration: none;
  color: black;
  height: 100%;
  width: 100%;
  text-align: center;
  line-height: 80px;

  @media (max-width: ${media760+"px"}){
    display: flex;
    justify-content: center;
    align-items: center;
  }
`