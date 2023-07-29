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

export const CharacterLimiter = styled.div<{ $textLengt: number, $maxLength: number }>`
  margin-right: 10px;
  font-size: 1em;
  font-family: 'Roboto', sans-serif;
  text-align: end;
  height: 0px;
  position: relative;
  top: -30px;
  color: ${props => {

    const tenPercent = props.$maxLength / 10

    if (props.$textLengt <= 0) {
      return "#000000"
    } if (props.$textLengt <= tenPercent * 1 ) {
      return "#240000"
    } if (props.$textLengt <= tenPercent * 2) {
      return "#380000"
    } if (props.$textLengt <= tenPercent * 3) {
      return "#420000"
    } if (props.$textLengt <= tenPercent * 4) {
      return "#500000"
    } if (props.$textLengt <= tenPercent * 5) {
      return "#630000"
    } if (props.$textLengt <= tenPercent * 6) {
      return "#7e0000"
    } if (props.$textLengt <= tenPercent * 7) {
      return "#8d0000"
    } if (props.$textLengt <= tenPercent * 8) {
      return "#a00b00"
    } if (props.$textLengt <= tenPercent * 9) {
      return "#dd0000"
    }else{
      return "#ff0000"
    }
  }};
`

export const Paragraph = styled.p<{$textSize: number}>`
  padding: 0px 4px 0px 4px;
  word-wrap: break-word;
  width: 100%;
  text-align: center;
  font-family: 'Roboto Slab', serif;
  font-size: ${props => {
    if(props.$textSize <= 100){
      return "2em"
    }if(props.$textSize <= 200){
      return "1.4em"
    }if(props.$textSize <= 300){
      return "1.2em"
    }if(props.$textSize <= 400){
      return "1.1em"
    }else{
      return "1em"
    }
  }};
`

export const Fechar = styled.button`
  left: 100%;
  transform: translate(-70%, 70%);
  position: relative;
  border: 5px solid black;
  width: 35px;
  height: 35px;
  background: #ff2828;
  font-size: 1.15em;
  font-family: 'Roboto Slab', serif;
  cursor: pointer;
`
export const SubmitButton = styled.button`
  width: 200px;
  height: 60px;
  border-radius: 0%;
  border: 4px solid black;
  background: #a5ff3e;
  font-size: 1.5em;
  font-family: 'Roboto Slab', serif;
  cursor: pointer;
`

export const MainShowcase = styled.main<{$color?: string}>`
  display: flex;
  flex-wrap: wrap;
  padding-top: 120px;
  padding-bottom: 120px;
  width: 100%;
  height: 100%;
  background: ${props => props.$color ? props.$color : "#7bf6ff"} ;
  justify-content: center;
  gap: 40px;
`