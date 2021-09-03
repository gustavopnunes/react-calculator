import { ButtonStyled } from "./style";

export const Button = ({ name, text, className, onClick }) => {
  return (
    <ButtonStyled name={name} className={className} onClick={onClick}>
      {text}
    </ButtonStyled>
  );
};
