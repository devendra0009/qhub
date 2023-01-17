import styled from "@emotion/styled";
import React from "react";
import { MdDelete } from "react-icons/md";
import ThemeToggler from "./ThemeToggler";

const Bar = ({
  topic,
  totalQuestions,
  sheetname,
  solvedQuestions,
  removeTopic,
}) => {
  const width = (solvedQuestions / totalQuestions) * 100;
  return (
    <>
      <Container width={width}>
        <div className="topic">
          <span>{topic ? topic : `${sheetname} Sheet`}</span>
          {topic ? (
            <MdDelete className="delete" onClick={removeTopic} />
          ) : (
            <></>
          )}
        </div>
        <div className="progress">
          <div class="progress-bar">
            <div class="progress-value"></div>
          </div>
          <div className="count">{`${solvedQuestions}/${totalQuestions}`}</div>
        </div>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  ${'' /* position:fixed; */}
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 2rem;
  ${'' /* background-color: var(--bgcolor); */}
  color: var(--text);
  border-radius: 5px;
  .topic {
    padding: 0.5rem;
    background: #89cff0;
    border-radius:12px;
    font-weight:bold;
    color: black;
    border: 2px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    .delete {
      cursor: pointer;
    }
  }
  .progress {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 60%;
    .progress-bar {
      background: #89cff0;
      justify-content: flex-start;
      border-radius: 100px;
      align-items: center;
      position: relative;
      padding: 5px;
      display: flex;
      width: 100%;
      .progress-value {
        border-radius: 100px;
        background: #0000E7;
        height: 5px;
        width: ${({ width }) => width}%;
        transition: 0.5s ease-out;
      }
    }
  }
`;

export default Bar;
