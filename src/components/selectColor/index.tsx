import colorJson from "data/colorCards.json";
import { Colors, Cor } from "./selectColor";

interface Iprops {
  colorList: typeof colorJson,
  setColorList: React.Dispatch<React.SetStateAction<typeof colorJson>>
}

const SelectColor = ({ colorList, setColorList}: Iprops) => {

  const selectColor = (id: number) => {
    setColorList(colorList.map(item => ({ ...item, select: id === item.id ? true : false })));
  }

  return(
    <Colors>
      {colorList.map(item =>
            <Cor
              $select={item.select}
              onClick={() => selectColor(item.id)}
              key={item.id}
              $color={item.color}>
            </Cor>
          )}
    </Colors>
  ) 
}

export default SelectColor;