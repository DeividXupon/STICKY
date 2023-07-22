import { useState } from "react";

import { MainContainer, BoxInputTitle, BoxTextAndTag, Tags, Tag } from "./formCreate";
import { CharacterLimiter, InputLongText } from "../../UI";

import colorJson from "../../data/colorCards.json";
import tagsJson from "../../data/tagsCards.json";

import ButtonSubmitForm from "../../components/buttonSubmitForm";
import SelectColor from "../../components/selectColor";
import Preview from "../../components/preview";
import CardNote from "../../components/cardNote";

const FormCreate = () => {

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
      <section className="form">

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
          <InputLongText
            $height="250px"
            value={text}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setText(e.target.value)}
            className="text"
            placeholder="Text..."
            maxLength={500}
          />

          <CharacterLimiter $textLengt={text.length}>{text.length} / 500</CharacterLimiter>

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

      </section>

      <Preview>
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

export default FormCreate;