import "./InputField.css";

interface Props {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField = ({ type, placeholder, value, onChange }: Props) => {
  return <input type={type} placeholder={placeholder} value={value} onChange={onChange} />;
};

export default InputField;
