import { Colors, Cor, MainContainer, BoxInputTitle, BoxTextAndTag, Tags, Tag, CharacterLimiter } from "./formCreate";
import colorJson from "../../data/colorCards.json";
import tagsJson from "../../data/tagsCards.json";
import CardNote from "../cardNote";
import { useState } from "react";

const FormCreate = () => {

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [tags, setTags] = useState(tagsJson);
  const [color, setColor] = useState("#ffffff");
  const [colorList, setColorList] = useState(colorJson);

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

  const selectColor = (color: string, id: number) => {
    setColor(color)
    const edit = colorList.map(item => ({ ...item, select: id === item.id ? true : false }))
    setColorList(edit);
  }

  return (
    <MainContainer>
      <section className="form">
        <Colors>
          {colorList.map(item =>
            <Cor
              $select={item.select}
              onClick={() => selectColor(item.color, item.id)}
              key={item.id}
              $color={item.color}>
            </Cor>
          )}
        </Colors>
        <BoxInputTitle>
          <label className="title_label">Title:</label>
          <input
            onChange={e => setTitle(e.target.value)}
            className="title_input"
            type="text"
            maxLength={25}>
          </input>
        </BoxInputTitle>
        <BoxTextAndTag>
          <textarea
            onChange={e => setText(e.target.value)}
            className="text"
            placeholder="Text..."
            maxLength={500}
          />
          <CharacterLimiter $lengt={text.length}>{text.length} / 500</CharacterLimiter>
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
      <section className="view">
        <h1 className="view_title">Preview</h1>
        <CardNote
          tags={tags.filter(item => item.select).map(item => item.nome)}
          title={title}
          color={color}
        >
          {text}
        </CardNote>
        <button className="view_button">to create</button>
      </section>
    </MainContainer>
  )
}

export default FormCreate;