import DisplayStyled from "./style";

const Display = ({ expression, inputValues }) => {
  return (
    <DisplayStyled>
      <input value={expression} readOnly className="input_queue" />
      <input value={inputValues} readOnly />
    </DisplayStyled>
  );
};

export default Display;
