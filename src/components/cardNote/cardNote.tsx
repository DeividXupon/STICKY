import { styled } from "styled-components";
import { media760 } from "UI/variaveis";

export const Card = styled.div<{ $color?: string }>`
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

  @media (max-width: ${media760 + "px"}) {
    width: 300px;
    height: 350px;

    .card_note_title{
      margin-top: 0px;
      font-size: 1.8em;
    }
    
  }
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

export const BoxCard = styled.article`
  display: flex;
  flex-direction: column;
`