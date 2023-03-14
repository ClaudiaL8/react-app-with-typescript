import useNewSubForm from "../hooks/useNewSubForm";
import { Sub } from "../types";

interface FormProps {
  onNewSub: (newSub: Sub) => void;
}

const Form = ({ onNewSub }: FormProps) => {
  const [inputValues, dispatch] = useNewSubForm();

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    onNewSub(inputValues);
    dispatch({ type: "clear" });
  };

  const handleChange = (
    evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = evt.target;
    dispatch({
      type: "change_value",
      payload: {
        inputName: name,
        inputValue: value,
      },
    });
  };

  const handleClear = () => {
    dispatch({ type: "clear" });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={inputValues.nick}
          onChange={handleChange}
          type="text"
          name="nick"
          placeholder="nick"
        />
        <input
          value={inputValues.avatar}
          onChange={handleChange}
          type="text"
          name="avatar"
          placeholder="avatar"
        />
        <input
          value={inputValues.subMonths}
          onChange={handleChange}
          type="number"
          name="subMonths"
          placeholder="subMonths"
        />
        <textarea
          value={inputValues.description}
          onChange={handleChange}
          name="description"
          placeholder="description"
        />
        <button type="button" onClick={handleClear}>
          Clear the form
        </button>
        <button type="submit">Save new sub!</button>
      </form>
    </div>
  );
};

export default Form;
