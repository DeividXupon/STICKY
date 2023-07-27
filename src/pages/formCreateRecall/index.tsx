import { useState, ChangeEvent } from "react";

import { BoxForm, ButtonChoice, Choice, InputChoice, MainContainer } from "./formCreateRecall";

import colorJson from "../../data/colorCards.json";

import SelectColor from "../../components/selectColor";
import Preview from "../../components/preview";
import useLocalStoragerContext from "../../hooks/useLocalStoragerContext";
import CardRecall from "../../components/cardRecall";
import ButtonSubmitFormRecall from "../../components/buttonSubmitFormRecall";
import InputText from "../../components/inputText";

const FormCreateRecall = () => {

  const { foldersStorager, setFoldersStorager } = useLocalStoragerContext()

  const [question, setQuestion] = useState("");
  const [respons, setRespons] = useState("");
  const [colorList, setColorList] = useState(colorJson);
  const [folder, setFolder] = useState<string>();
  const [addFolder, setAddFolder] = useState("");

  const getSelectColor = (colorList: typeof colorJson) => {
    return colorList.find(item => item.select)?.color;
  }

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = event.target.value;
    setFolder(newValue);
  };

  const createNewFolder = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setAddFolder(newValue);
  };

  const addNewFolder = (value: string) => {
    const folderExists = foldersStorager.some(item => item === value)

    if (!folderExists && value.replace(/ /g, '') !== "") {
      setFoldersStorager(prev => [...prev, addFolder])
    }

    setAddFolder("");
  }

  const resetForm = () => {
    setQuestion("");
    setRespons("");
    setColorList(colorJson)
    setFolder("")
  }

  return (
    <MainContainer>

      <Preview color="#ff2d2d">
        <CardRecall
          color={getSelectColor(colorList)}
          question={question}
          respons={respons} />
        <ButtonSubmitFormRecall
          color={getSelectColor(colorList)}
          question={question}
          response={respons}
          folder={folder ? folder : "Generic"}
          resetForm={resetForm} />

      </Preview>
      <BoxForm>

        <section className="form">

          <SelectColor
            colorList={colorList}
            setColorList={setColorList}
          />

          <InputText
            value={question}
            setValue={setQuestion}
            maxLength={100}
            placeholder="Question..."
            $height="100px" />
          <InputText
            value={respons}
            setValue={setRespons}
            maxLength={500}
            placeholder="Respons..."
            $height="150px" />


        </section>
        <section className="choice">
          <div className="box">
            <InputChoice placeholder="create new folder..." value={addFolder} type="text" onChange={createNewFolder} />
            <ButtonChoice onClick={() => addNewFolder(addFolder)}>+</ButtonChoice>
          </div>

          <Choice value={folder} name="X" onChange={handleSelectChange}>
            {foldersStorager.map(item => <option value={item}>{item}</option>)}
          </Choice>

        </section>
      </BoxForm>

    </MainContainer>
  )
}

export default FormCreateRecall;