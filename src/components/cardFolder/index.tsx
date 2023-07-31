import { ReactNode } from "react";
import { BoxCard, BoxCardPast, Paper } from "./cardFolder";
import useLocalStoragerContext from "hooks/useLocalStoragerContext";

import { useNavigate } from "react-router-dom"

interface Iprops{
  children: ReactNode,
}

const CardFolder = ({children}: Iprops) => {

  const {recallStorager} = useLocalStoragerContext()

  const navigate = useNavigate()

  const itens = recallStorager.filter(item => {if (children?.toString){ return item.folder === children} else {return false}})

  return(
    <BoxCard>
      {itens.length > 0 ? <Paper>Items: {itens.length}</Paper> : null}
      <BoxCardPast onClick={() => navigate("/folder",{state: {name: children, itens}})}>
        <div className="a"/>
        {children}
      </BoxCardPast>
    </BoxCard>
  )
}

export default CardFolder;