import styled from "@emotion/styled";
import React from "react";
import CheckBox from "./CheckBox";

const Question = ({ name, link, qid, sheetId, solved, barHandle }) => {
  return (
    <>
      <Container>
        <div className="left">
          <CheckBox
            qid={qid}
            sheetId={sheetId}
            solved={solved}
            barHandle={barHandle}
          />
          <div className="name">{name}</div>
        </div>
        <a href={link} target="main">
          <button type="submit">SOLVE</button>
        </a>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  ${'' /* background-color: var(--bgcolor); */}
  color: var(--text);
  border-radius: 5px;
  .left {
    display: flex;
    gap: 2rem;

    .name {
      font-size: 18px;
    }
  }

  button {
    padding: 1rem;
    width: 10rem;
    background-color: #89cff0;
    color: black;
    border: 2px solid black;
    font-weight:bold;
    border-radius: 12px ;
    transition: 0.5s ease-in-out;
    &:hover {
      background-color: #29c5f6;
      cursor: pointer;
    }
  }
  &:hover {
  }
`;

export default Question;
