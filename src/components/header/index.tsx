import { useState } from "react";
import { HeaderContainer, ItemNav } from "./header";
import navOpt from "./navHock.json";
import { GiNotebook } from "react-icons/gi";

export default function Header() {

  const [nav, setNav] = useState(navOpt)

  function ativaAnimacao(id: number): any {
    setNav(nav.map(item => 
      ({
        ...item,
        ative: item.id === id ? true : false
      })))
  }

  return(
    <HeaderContainer>
      {nav.map((item, index) => 
        <ItemNav 
          animate={{x: item.ative ? 15 : 0, zIndex: item.ative ? 2 : 0}}
          $ultimo={item.id === nav.length}
          $logo={item.nome === "STICKY"}
          onClick={() => ativaAnimacao(item.id)}
          whileHover={{x: 7, backgroundColor: "#fffcf6", zIndex: 1}}
          transition={{duration: 0.5, type:"spring"}}
        >
          {item.nome}
          {item.nome === "STICKY" ? <GiNotebook size={45}/> : ""}
        </ItemNav>)}
    </HeaderContainer>
  )
}