import { useState } from "react";

import { MainContainer, BoxInputTitle, BoxTextAndTag, Tags, Tag, FormSection } from "./formCreateNote";

import colorJson from "data/colorCards.json";
import tagsJson from "data/tagsCards.json";

import ButtonSubmitForm from "components/buttonSubmitForm";
import SelectColor from "components/selectColor";
import Preview from "components/preview";
import CardNote from "components/cardNote";
import InputText from "components/inputText";

const FormCreateNote = () => {

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [tags, setTags] = useState(tagsJson);
  const [colorList, setColorList] = useState(colorJson);

  const getSelectColor = (colorList: typeof colorJson) => {
    return colorList.find(item => item.select)?.color;
  }

  const resetForm = () => {
    setText("");
    setTitle("");
    setColorList(colorJson);

    setTags(prev => prev.map(item =>
    ({
      ...item,
      select: false
    })))
  }

  const tagSelectOffOn = (id: number, select: boolean) => {

    const tagsSelected = tags.reduce((acu, item) => {
      if (item.select) {
        return acu + 1;
      }
      return acu;
    }, 0)

    if (tagsSelected === 3 && !select) {
      window.alert("Use only 3 tags for each annotation")
    } else {
      setTags(prev => prev.map(item =>
      ({
        ...item,
        select: id === item.id ? !item.select : item.select
      })))
    }
  }

  return (
    <MainContainer>
      <FormSection
        initial={{ x: "-100%" }}
        animate={{ x: "0%" }}
        transition={{
          delay: 0.2,
          duration: 0.8,
          ease: "easeInOut",
        }}>

        <SelectColor
          colorList={colorList}
          setColorList={setColorList}
        />

        <BoxInputTitle>
          <label className="title_label">Title:</label>
          <input
            value={title}
            onChange={e => setTitle(e.target.value)}
            className="title_input"
            type="text"
            maxLength={25}>
          </input>
        </BoxInputTitle>

        <BoxTextAndTag>
          <InputText
            value={text}
            setValue={setText}
            maxLength={500}
            placeholder="Text..."
            $height="250px" />

          <Tags>
            {tags.map(item =>
              <Tag
                $select={item.select}
                onClick={() => tagSelectOffOn(item.id, item.select)}
                key={item.id}
              >
                {item.nome}
              </Tag>
            )}
          </Tags>
        </BoxTextAndTag>
        <div className="but">
          <ButtonSubmitForm
            color={getSelectColor(colorList)}
            title={title}
            text={text}
            tags={tags.filter(item => item.select).map(item => item.nome)}
            resetForm={resetForm}
          />
        </div>

      </FormSection>
      <Preview color="#fcff3e">
        <CardNote
          tags={tags.filter(item => item.select).map(item => item.nome)}
          title={title}
          color={getSelectColor(colorList)}
        >
          {text}
        </CardNote>

        <ButtonSubmitForm
          color={getSelectColor(colorList)}
          title={title}
          text={text}
          tags={tags.filter(item => item.select).map(item => item.nome)}
          resetForm={resetForm}
        />

      </Preview>
    </MainContainer>
  )
}

export default FormCreateNote;