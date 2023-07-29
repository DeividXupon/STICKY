import { styled } from "styled-components";

export const BoxCard = styled.div`
  margin: 20px;
  height: 270px;
  width: 450px;
  border: 5px solid black;
  background: #fff281;
`

export const Paper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;
  position: absolute;
  height: 200px;
  width: 300px;
  background: #f1f1f1;
  border: 5px solid #969696;
  transform: translate(20px, -20px);
  font-family: 'Roboto Slab', serif;
  font-size: 1.3em;
`

export const BoxCardPast = styled(BoxCard)`
  display: flex;
  transform: scaleY(0.8) translate(-5px, 28px);
  border: 6px solid black;
  margin: 0px;
  font-family: 'Roboto', sans-serif;
  font-size: 3em;
  justify-content: center;
  align-items: center;
  transition: 0.8s;
  cursor: pointer;

  &:hover{
    transform: skewX(-8deg) scaleY(0.8) translate(14px, 31px);
    transition: 0.8s;
  }

  .a{
    position: absolute;
    width: 140px;
    height: 30px;
    border: 6px solid black;
    border-bottom: none;
    transform: translate(80%, -477%);
    background: #fff281;
  }
`