import { ReactNode } from "react";
import { Icon, Option, Text } from "./createOption";
import {FiArrowUpRight} from "react-icons/fi"

interface Iprops {
  children: ReactNode;
  title: string;
  icon: JSX.Element
}


const CreateOption = ({ children, title, icon }: Iprops) => {
  return (
    <Option>
      <Icon>
        {icon}
      </Icon>
      <div className="conteudo">
        <h2 className="conteudo__titulo"> {title} </h2>
        <Text> {children} </Text>
        <button className="conteudo__button">Create <FiArrowUpRight size={35} style={{verticalAlign: 'middle'}}/></button>
      </div>
    </Option>
  )
}

export default CreateOption;