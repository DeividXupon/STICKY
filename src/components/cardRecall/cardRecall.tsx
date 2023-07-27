import { styled } from "styled-components";

export const CardBox = styled.div<{$color: string | undefined}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 500px;
  height: 300px;
  background: ${props => props.$color};
  border: 5px solid black;
`

export const ButtonCard = styled.button`
  border: 5px solid black;
  width: 120px;
  height: 40px;
  position: relative;
  left: 70%;
  top: -40px;
  background: #e2e2e2;
  font-family: 'Roboto Slab', serif;
  font-size: 1.1em;
  cursor: pointer;
  &:hover{
    background: white;
  }
`