import { InstructionsStyled } from "./style";

export const Instructions = () => {
  return (
    <InstructionsStyled>
      <p>insert numbers by clicking on them, or use your keyboard</p>
      <br />
      <p>
        <span>Esc: </span> clean display
      </p>
      <p>
        <span>Del / backspace:</span> delete last symbol
      </p>
      <p>
        <span>Enter:</span> calculate
      </p>
    </InstructionsStyled>
  );
};
