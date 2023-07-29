import { ReactNode } from "react";
import { BoxCard, BoxCardPast, Paper } from "./cardFolder";
import useLocalStoragerContext from "hooks/useLocalStoragerContext";

interface Iprops{
  children: ReactNode,
}

const CardFolder = ({children}: Iprops) => {

  const {recallStorager} = useLocalStoragerContext()

  const itens = recallStorager.filter(item => {if (children?.toString){ return item.folder === children} else {return false}}).length

  return(
    <BoxCard>
      {itens > 0 ? <Paper>Items: {itens}</Paper> : null}
      <BoxCardPast>
        <div className="a"/>
        {children}
      </BoxCardPast>
    </BoxCard>
  )
}

export default CardFolder;