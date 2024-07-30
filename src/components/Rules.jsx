import styled from "styled-components";

const Rules = () => {
  return (
    <RulesContainer>
      <h2>How to play dice game</h2>
      <div className="text">
        <p>#1. Select any number.</p>
        <p>#2. Click on dice image.</p>
        <br/>
        <p>
          after click on dice if selected number is equal to dice number you
          will get same point as dice.{" "}
        </p>
        <p>if you get wrong guess then 2 point will be dedcuted. </p>
      </div>
      
    </RulesContainer>
  );
};

export default Rules;

const RulesContainer = styled.div`
  width: 100vw;
    width: 100vw;
    max-width: 800px;
    margin: 40px auto 0px;
    background-color: rgb(251, 241, 241);
    padding: 20px;
    border-radius: 10px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    transition: 1s;
    box-shadow: 2px 2px 6px 3px red;
  h2 {
    font-size: 24px;
  }
  .text {
    margin-top: 24px;
  }
`;
