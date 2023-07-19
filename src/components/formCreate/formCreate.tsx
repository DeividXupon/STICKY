import { styled } from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  width: 100vw;
  height: 100vh;
  background: #fdff69;

  .form{
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 55vw;
    background: #fdff83;
    border-right: 5px solid black;
    box-shadow: 10px 0px 0px #00000060;
    padding: 90px 15px 10px 15px;
    justify-content: space-between;
    z-index: 1;
  }

  .view{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding-top: 90px;
    height: 100vh;
    width: 45vw;
    background: #fcff3e;
    .view_title{
      font-size: 3em;
      font-family: 'Roboto', sans-serif;
      text-align: center;
      width: 100%;
    }
    .view_button{
      width: 200px;
      height: 60px;
      border-radius: 0%;
      border: 4px solid black;
      background: #a5ff3e;
      font-size: 1.5em;
      font-family: 'Roboto Slab', serif;
    }
  }
`

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
  border-radius: 100%;
  outline: ${props => props.$select ? "0px solid black" : "3px solid black"};
  border: ${props => props.$select ? "5px solid black" : "0px solid black"};
  transition: 100ms;
  cursor: pointer;
`

export const BoxInputTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .title_label{
    font-size: 2em;
    font-family: 'Roboto', sans-serif;
  }
  .title_input{
    width: 88%;
    height: 35px;
    font-size: 1.5em;
    border: 3px solid black;
    font-family: 'Roboto', sans-serif;
    text-align: center;
  }
`

export const BoxTextAndTag = styled.div`
  width: 100%;
  height: 70%;
  border: none;
  border: 2px solid black;

  .text{
    resize: none;
    width: 100%;
    height: 80%;
    border: none;
    border: 2px solid black;
    margin-bottom: -4px;
    font-size: 1.2em;
    font-family: 'Roboto Slab', serif;
    padding: 0px 10px 0px 10px;
  }
`

export const CharacterLimiter = styled.div<{ $lengt: number }>`
  margin-top: -19px;
  margin-right: 10px;
  font-size: 1em;
  font-family: 'Roboto', sans-serif;
  text-align: end;
  background-color: #00000073;
  color: ${props => {
    if (props.$lengt <= 0) {
      return "#000000"
    } if (props.$lengt <= 50) {
      return "#240000"
    } if (props.$lengt <= 100) {
      return "#380000"
    } if (props.$lengt <= 150) {
      return "#420000"
    } if (props.$lengt <= 200) {
      return "#500000"
    } if (props.$lengt <= 250) {
      return "#630000"
    } if (props.$lengt <= 300) {
      return "#7e0000"
    } if (props.$lengt <= 350) {
      return "#8d0000"
    } if (props.$lengt <= 400) {
      return "#a00b00"
    } if (props.$lengt <= 450) {
      return "#dd0000"
    }else{
      return "#ff0000"
    }
  }};
`

export const Tags = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  width: 100%;
  height: 20%;
`

export const Tag = styled.button<{ $select: boolean }>`
  border: 2px solid black;
  background: ${props => props.$select ? "#fcff69" : "#7b7c30"};
  font-size: 1.1em;
  font-family: 'Roboto Slab', serif;
  border-radius: 0%;
  cursor: pointer;
`