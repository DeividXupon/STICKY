import { styled } from "styled-components";
import { media500 } from "UI/variaveis";

export const Colors = styled.div`
  display: flex;
  width: 100%;
  height: 70px;
  justify-content: space-around;
  align-items: center;
`

export const Cor = styled.button<{ $color: string, $select: boolean }>`
  border: none;
  background: ${props => props.$color};
  width: 55px;
  height: 55px;
  border-radius: 50%;
  outline: ${props => props.$select ? "0px solid black" : "3px solid black"};
  border: ${props => props.$select ? "5px solid black" : "0px solid black"};
  transition: 100ms;
  cursor: pointer;

  @media (max-width: ${media500+"px"}) {
    border-radius: 0%;
  }
`