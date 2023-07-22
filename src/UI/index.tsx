import { styled } from "styled-components";

export const InputLongText = styled.textarea<{$width?: string, $height?: string}>`
  resize: none;
  width: ${ props => props.$width ? props.$width : "100%"};
  height: ${ props => props.$height ? props.$height : "200px"};;  
  border: none;
  border: 2px solid black;
  font-size: 1.2em;
  font-family: 'Roboto Slab', serif;
  padding: 0px 10px 0px 10px;
`

export const CharacterLimiter = styled.div<{ $textLengt: number }>`
  margin-right: 10px;
  font-size: 1em;
  font-family: 'Roboto', sans-serif;
  text-align: end;
  height: 0px;
  position: relative;
  top: -30px;
  color: ${props => {
    if (props.$textLengt <= 0) {
      return "#000000"
    } if (props.$textLengt <= 50) {
      return "#240000"
    } if (props.$textLengt <= 100) {
      return "#380000"
    } if (props.$textLengt <= 150) {
      return "#420000"
    } if (props.$textLengt <= 200) {
      return "#500000"
    } if (props.$textLengt <= 250) {
      return "#630000"
    } if (props.$textLengt <= 300) {
      return "#7e0000"
    } if (props.$textLengt <= 350) {
      return "#8d0000"
    } if (props.$textLengt <= 400) {
      return "#a00b00"
    } if (props.$textLengt <= 450) {
      return "#dd0000"
    }else{
      return "#ff0000"
    }
  }};
`