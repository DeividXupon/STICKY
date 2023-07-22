import { styled } from "styled-components";

export const Card = styled.div<{$color?: string}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 450px;
  height: 350px;
  background: ${props => props.$color};
  border: 5px solid black;
  overflow: hidden;
  .card_note_title{
    margin-top: 10px;
    font-size: 2em;
    font-family: 'Roboto', sans-serif;
  }
`

export const Paragraph = styled.p<{$textSize: number}>`
  padding: 0px 4px 0px 4px;
  overflow: hidden;
  text-overflow: ellipsis; 
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

export const BoxTags = styled.div`
  padding: 0px 4px 0px 4px;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 4px;
  width: 100%;
  height: 50px;

  .card_tag{ 
    border: 4px solid black ;
    width: 110px;
    height: 35px;
    background-color: white;
    font-size: 1em;
    text-align: center;
    line-height: 25px;
    font-family: 'Roboto Slab', serif;
  }
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

export const BoxCard = styled.article`
  display: flex;
  flex-direction: column;
`