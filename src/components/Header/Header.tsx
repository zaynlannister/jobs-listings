import styled from "styled-components";

const Header = () => {
  return <HeaderStyled></HeaderStyled>;
};

const HeaderStyled = styled.div`
  width: 100%;
  height: 150px;
  background-image: url("/assets/images/bg-header-desktop.svg");
  background-position: bottom;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #5ba4a4;
`;

export default Header;
