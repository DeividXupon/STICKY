import { styled } from "styled-components";

export const BoxAlert = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 4fr 1fr;
  position: fixed;
  border: 5px solid black;
  background: #ff7d7d;
  width: 800px;
  height: 400px;
  left: 50%;
  top: 55%;
  transform: translate(-50%, -50%);
  outline: 100vw solid #00000096;
  z-index: 100;

  .title{
    text-align: center;
    font-family: 'Roboto', sans-serif;
  }

  .card{
    margin: -50px;
    transform: scale(0.65);
  }
`

export const ButtonAlert = styled.button<{$color: boolean}>`
    border: 5px solid black;
    background: #fff;
    width: 200px;
    height: 50px;
    background: ${props => props.$color ? "#ff3535" : "#bcff3e"};
`