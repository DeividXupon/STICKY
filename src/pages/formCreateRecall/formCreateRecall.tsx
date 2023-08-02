import { motion } from "framer-motion";
import { styled } from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: #ff2d2d;
`

export const BoxForm = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #ff8d8d;
  border-left: 5px solid black;
  box-shadow: -10px 0px 0px #00000060;
  padding: 90px 0px 0px 0px;
  z-index: 1;
  width: 55vw;
  height: 100vh;
  .form{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 400px;
    padding: 0px 15px 0px 15px;
  }
  .choice{
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: 100px;
      padding: 0px 15px 0px 15px;
      box-shadow: 0px -15px 0px #00000060;
      background: #ff5252;
      border-top: 5px solid black;

      .box{
        display: flex;
      }

      #frutas {
        width: 200px;
        height: 40px;
        text-align: center;
        font-size: 1.2em;
        font-family: 'Roboto Slab', serif;
        border: 4px solid #000000;
      }
  }
`

export const InputChoice = styled.input`
  font-size: 1.2em;
  width: 280px;
  height: 40px;
  font-family: 'Roboto Slab', serif;
  padding: 0px 8px 0px 8px;
  border: 4px solid black;  
  border-right:0px;
`

export const ButtonChoice = styled.button`
  font-size: 2em;
  margin: 0;
  padding: 0;
  border: 4px solid black;
  width: 40px;
  height: 40px;
  line-height: 0px;
  background: #73ff48;
`
export const Choice = styled.select`
  width: 200px;
  height: 40px;
  text-align: center;
  font-size: 1.2em;
  font-family: 'Roboto Slab', serif;
  border: 4px solid #000000;
`