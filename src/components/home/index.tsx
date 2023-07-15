import DecorativeNote from "../decorativeNote";
import { Button, Main, TextSection } from "./home";

export default function Home() {
  return (
    <>
      <Main>

        <DecorativeNote color="#ff6d6d" top="270px" left="150px">Manga</DecorativeNote>
        <DecorativeNote color="#a0ff93" top="400px" left="950px">Banana</DecorativeNote>
        <DecorativeNote color="#7bbfff" top="150px" left="1100px">Pepino</DecorativeNote>

        <TextSection>
          <h2>WELCOME TO <b>S2</b> STICKY</h2>
          <h1>Organize Your Ideas In A Smart And Fun Way</h1>
          <Button
            whileHover={{ backgroundColor: "#6fffa6" }}
          >
            Start now
          </Button>
        </TextSection>
      </Main>
    </>
  )
}