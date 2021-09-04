import ContainerStyled from "./style";

const Container = ({ children, onKeyDown }) => {
  return (
    <ContainerStyled tabIndex="0" onKeyDown={onKeyDown}>
      {children}
    </ContainerStyled>
  );
};

export default Container;
