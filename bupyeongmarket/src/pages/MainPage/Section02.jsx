import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Section02Section = styled.section`
  padding: var(--padding-sec);

  & h3 {
    color: var(--black-01);
    font-size: 5rem;
    font-weight: 600;
    text-align: center;
  }
  & img {
    filter: brightness(0.7);
  }
`;

function Section02 () {
  const navigate = useNavigate();

  return (
    <Section02Section>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div>
              <h3 className="mb-50">시장 둘러보기</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <img onClick={() => navigate("/market")} src="assets/images/sec02_01.png" alt="" />
          </div>
          <div className="col-md-3">
            <img onClick={() => navigate("/market")} src="assets/images/sec02_02.png" alt="" />
          </div>
          <div className="col-md-3">
            <img onClick={() => navigate("/market")} src="assets/images/sec02_03.png" alt="" />
          </div>
          <div className="col-md-3">
            <img onClick={() => navigate("/market")} src="assets/images/sec02_04.png" alt="" />
          </div>
        </div>
      </div>
    </Section02Section>
  );
}

export default Section02;

