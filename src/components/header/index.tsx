import { Alink, HeaderContainer, ItemNav } from "./header";
import { GiNotebook } from "react-icons/gi";
import useNavigationContext from "hooks/useNavigationContext";

import { useEffect, useState } from "react";

import { media760 } from "UI/variaveis";


export default function Header() {
  const { nav, setNav } = useNavigationContext();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  function ativaAnimacao(id: number): any {
    setNav(nav.map((item) => ({
      ...item,
      ative: item.id === id ? true : false
    })));
  }

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <HeaderContainer>
      <ul>
        {nav.map((item, index) => (
          <ItemNav
            key={index}
            animate={windowWidth > media760 ? {
              x: item.ative ? 13 : 0,
              zIndex: item.ative ? 2 : 0
            } : {scale: item.ative ? 1.2 : 1, y: item.ative ? -30 : 0, rotate: item.ative ? 45 : 0 }}
            $ultimo={item.id === nav.length}
            $logo={item.nome === "STICKY"}
            onClick={() => ativaAnimacao(item.id)}
            whileHover={windowWidth > media760 ? { x: 7, backgroundColor: "#fffcf6", zIndex: 1 } : {y: -7, backgroundColor: "#fffcf6", zIndex: 1 }}
            transition={{ duration: 0.3, type: "spring", damping: 7 }}
          >
            <Alink to={item.routerName}>
              {windowWidth > media760 ? item.nome : item.icone}
              {item.nome === "STICKY" && windowWidth > media760 ? (
                <GiNotebook style={{ verticalAlign: "middle" }} size={"3vw"} />
              ) : (
                ""
              )}
            </Alink>
          </ItemNav>
        ))}
      </ul>
    </HeaderContainer>
  );
}