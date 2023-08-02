import CreateOption from "components/createOption";
import { AnimateBox, ChoiceSection, MainCreate } from "./create"
import { BsLightbulb, BsFillFileEarmarkFontFill } from "react-icons/bs";


const Create = () => {
  return (
    <MainCreate
      initial={{
        borderLeft: "400px solid #747474",
        borderRight: "400px solid #747474",
        borderTop: "300px solid #747474",
        borderBottom: "300px solid #747474"
      }}
      animate={{
        borderLeft: "0px solid #747474",
        borderRight: "0px solid #747474",
        borderTop: "0px solid #747474",
        borderBottom: "0px solid #747474"
      }}
      transition={{
        duration: 0.15
      }}
    >
      <h1 className="titulo__create">Create your Note or Active Recall</h1>
      <ChoiceSection>
        <AnimateBox
          initial={{ x: -500, y: 300 }}
          animate={{ x: 0, y: 0 }}
          transition={{
            delay: 0.15,
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
            x: {
              type: "spring",
              damping: 12,
              stiffness: 100,
            },
            y: {
              type: "spring",
              damping: 10,
              stiffness: 60,
            }
          }}
        >
          <CreateOption
            icon={<BsFillFileEarmarkFontFill className="icon" />}
            title="Note"
            router="/formNote"
          >
            Recording and organizing important information helps with the memorization and understanding of content. It facilitates learning and knowledge retention. Taking notes of ideas and insights assists in creative expression and materializing thoughts.
          </CreateOption>
        </AnimateBox>

        <AnimateBox
          initial={{ x: 500, y: -300 }}
          animate={{ x: 0, y: 0 }}
          transition={{
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
            x: {
              type: "spring",
              damping: 12,
              stiffness: 100,
            },
            y: {
              type: "spring",
              damping: 10,
              stiffness: 60,
            }
          }}
        >
          <CreateOption
            icon={<BsLightbulb className="icon" />}
            title="Active Recall"
            router="/formRecall"
          >
            Active Recall is a study technique that involves actively recalling learned content without referring to reference materials. This practice strengthens long-term memory, enhances information retention, and improves the ability to recall knowledge later on.
          </CreateOption>
        </AnimateBox>
      </ChoiceSection>
    </MainCreate>
  )
}

export default Create;