import CreateOption from "../createOption";
import { ChoiceSection, MainCreate } from "./create"
import { BsLightbulb, BsFillFileEarmarkFontFill } from "react-icons/bs";


const Create = () => {
  return (
    <MainCreate>
      <h1 className="titulo__create">Create your Note or Active Recall</h1>
      <ChoiceSection>
        <CreateOption
          icon={<BsFillFileEarmarkFontFill className="icon" />}
          title="Note"
        >
          Recording and organizing important information helps with the memorization and understanding of content. It facilitates learning and knowledge retention. Taking notes of ideas and insights assists in creative expression and materializing thoughts.
        </CreateOption>
        <CreateOption
          icon={<BsLightbulb className="icon" />}
          title="Active Recall"
        >
          Active Recall is a study technique that involves actively recalling learned content without referring to reference materials. This practice strengthens long-term memory, enhances information retention, and improves the ability to recall knowledge later on.
        </CreateOption>
      </ChoiceSection>
    </MainCreate>
  )
}

export default Create;