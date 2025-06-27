import styled from "styled-components";
import { useNavigate } from "react-router-dom";

{/* <header>
  <div class="logo">
      <h1>부평종합시장</h1>
  </div>
  <div class="hamburger">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
  </div>
  <nav class="nav-bar">
      <ul>
          <li><a href="#none">부평종합시장</a></li>
          <li><a href="#none">시장안내</a></li>
          <li><a href="#none">문화관광</a></li>
          <li><a href="#none">커뮤니티</a></li>
          <li><a href="#none">막걸리구매</a></li>
      </ul>
  </nav>
</header> */}

const ContainerDiv = styled.header`
  width: 100%;
  height: 80px;
  background: red;
`;

function Navbar () {
  return (
    <ContainerDiv>
      Navbar
    </ContainerDiv>
  );
}

export default Navbar;