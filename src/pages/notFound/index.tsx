import erro from "assets/erro404.png"
import { styled } from "styled-components";

const Center = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: #dbc3df;
`

const NotFound = () => {
  return(
    <Center>
      <img style={{marginTop: "60px"}} src={erro} alt="Erro 404"/>
    </Center>
  )
}

export default NotFound;