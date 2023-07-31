import DecorativeNote from "components/decorativeNote";
import { Button, Main, TextSection } from "./home";
import { Link } from "react-router-dom";
import useNavigationContext from "hooks/useNavigationContext";

export default function Home() {

  const {nav, setNav} = useNavigationContext()

  function ativaAnimacao(id: number): any {
    setNav(nav.map(item =>
    ({
      ...item,
      ative: item.id === id ? true : false
    })))
  }

  return (
    <>
      <Main>

        <DecorativeNote color="#ff6d6d" top="270px" left="150px">Manga</DecorativeNote>
        <DecorativeNote color="#a0ff93" top="400px" left="950px">Banana</DecorativeNote>
        <DecorativeNote color="#7bbfff" top="150px" left="1100px">Pepino</DecorativeNote>

        <TextSection>
          <h2>WELCOME TO <b>S2</b> STICKY</h2>
          <h1>Organize Your Ideas In A Smart And Fun Way</h1>

          <Link to="/create">
            <Button
              whileHover={{ backgroundColor: "#6fffa6" }}
              onClick={() => ativaAnimacao(5)}
            >
              Start now
            </Button>
          </Link>
        </TextSection>
      </Main>
    </>
  )
}