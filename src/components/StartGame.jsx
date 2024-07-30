import styled from "styled-components";
import { Button } from "../styled/Button";

const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div className="imageContent">
        <img src="/images/dices.png" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  align-items: center;
  flex-wrap:wrap;
  padding: 10px;
  width: calc(100vw - 20px);

  .imageContent{
    img{
    width:100%;
    max-width:500px
    }
  }
  .content {
    h1 {
      font-size: 5rem;
      line-height: 5rem;
      margin-bottom: 10px;
    }
  }
`;
