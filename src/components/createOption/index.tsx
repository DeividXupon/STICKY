import { ReactNode } from "react";
import { Icon, Option, Text } from "./createOption";
import {FiArrowUpRight} from "react-icons/fi"
import { Link } from "react-router-dom"

interface Iprops {
  children: ReactNode;
  title: string;
  icon: JSX.Element;
  router: string
}


const CreateOption = ({ children, title, icon, router }: Iprops) => {
  return (
    <Option>
      <Icon>
        {icon}
      </Icon>
      <div className="conteudo">
        <h2 className="conteudo__titulo"> {title} </h2>
        <Text> {children} </Text>
        <Link to={router} className="conteudo__button">Create <FiArrowUpRight size={35} style={{verticalAlign: 'middle'}}/></Link>
      </div>
    </Option>
  )
}

export default CreateOption;