import DecorativeNote from "components/decorativeNote";
import { Button, Main, TextSection } from "./home";
import { Link } from "react-router-dom";
import useNavigationContext from "hooks/useNavigationContext";
import { HiCursorClick } from "react-icons/hi"
import { motion } from "framer-motion";
import { useState } from "react"

export default function Home() {

  const { nav, setNav } = useNavigationContext()

  function ativaAnimacao(id: number): any {
    setNav(nav.map(item =>
    ({
      ...item,
      ative: item.id === id ? true : false
    })))
  }

  const [styCursor, setStyCursor] = useState<any>({
    position: "absolute",
    top: "270px",
    left: "150px",
    background: "#0000000",
    zIndex: 1999
  })

  return (
    <Main
      initial={{
        borderLeft: "400px solid #747474",
        borderRight: "400px solid #747474",
        borderTop: "300px solid #747474",
        borderBottom: "300px solid #747474"
      }}
      animate={{
        borderLeft: "0px solid #747474",
        borderRight: "0px solid #747474",
        borderTop: "0px solid #747474",
        borderBottom: "0px solid #747474"
      }}
      transition={{
        duration: 0.15
      }}
    >
      <motion.div
        style={styCursor}
        initial={{
          x: 50,
          y: 50,
          scale: 1
        }}
        animate={{
          scale: [1, 1.5, 1, 1.5, 1],
          x: [50, 50, 50, 50, 200],
          y: [50, 50, 50, 50, -150]
        }}
        transition={{
          ease: "linear",
          delay: 2,
          duration: 2,
          repeat: 4,
          scale: {
            duration: 1,
            repeatDelay: 1,
            repeat: 4
          }
        }}
        onAnimationComplete={() => setStyCursor({ ...styCursor, display: "none" })}
      >
        <HiCursorClick size={50} color="#000" />
      </motion.div>

      <DecorativeNote color="#ff6d6d" top="270px" left="150px">ideas</DecorativeNote>
      <DecorativeNote color="#a0ff93" top="400px" left="950px">creativity</DecorativeNote>
      <DecorativeNote color="#7bbfff" top="150px" left="1100px">thoughts</DecorativeNote>

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
  )
}