import { BoxAlert, ButtonAlert } from "./alert"

interface Iprops {
  card: JSX.Element,
  setAlert: React.Dispatch<React.SetStateAction<boolean>>
  deletCard: () => void;
}

const Alert = ({ card, setAlert, deletCard }: Iprops) => {

  return (
    <BoxAlert>
      <h1 className="title">Are you sure you want to delete this card from the list?</h1>
      <div className="card">
        {card}
      </div>
      <ButtonAlert $color={false} onClick={() => setAlert(false)}>Cancel</ButtonAlert>
      <ButtonAlert $color={true} onClick={() => {deletCard(); setAlert(false)}}>Delet</ButtonAlert>
    </BoxAlert>
  )
}

export default Alert;