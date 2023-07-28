import { CharacterLimiter, InputLongText } from "UI";

interface Iprops {
  value: string,
  setValue: React.Dispatch<React.SetStateAction<string>>,
  maxLength?: number,
  placeholder?: string,
  $height?: string,
  $width?: string
}

const InputText = ({ value, setValue, maxLength, placeholder, $height, $width }: Iprops) => {
  return (
    <div>
      <InputLongText
        $height={$height}
        $width={$width}
        placeholder={placeholder}
        maxLength={maxLength}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value)} />
      {maxLength ?
      <CharacterLimiter $textLengt={value.length} $maxLength={maxLength}>
        {value.length} / {maxLength}
      </CharacterLimiter> : null}
    </div>
  )
}

export default InputText;