import { Alink, HeaderContainer, ItemNav } from "./header";
import { GiNotebook } from "react-icons/gi";
import useNavigationContext from "hooks/useNavigationContext";


export default function Header() {

  const { nav, setNav } = useNavigationContext()

  function ativaAnimacao(id: number): any {
    setNav(nav.map(item =>
    ({
      ...item,
      ative: item.id === id ? true : false
    })))
  }

  return (
    <HeaderContainer>
      {nav.map((item, index) =>
          <ItemNav
            key={index}
            animate={{ x: item.ative ? 15 : 0, zIndex: item.ative ? 2 : 0 }}
            $ultimo={item.id === nav.length}
            $logo={item.nome === "STICKY"}
            onClick={() => ativaAnimacao(item.id)}
            whileHover={{ x: 7, backgroundColor: "#fffcf6", zIndex: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
          >
            <Alink to={item.routerName}>
            {item.nome}
            {item.nome === "STICKY" ? <GiNotebook style={{verticalAlign: 'middle'}} size={"3vw"} /> : ""}
            </Alink>
          </ItemNav>
)}
    </HeaderContainer>
  )
}