import styled from "@emotion/styled";
import React from "react";
import { GrInstagram, GrLinkedin, GrGithub } from "react-icons/gr";
import ThemeToggler from "./ThemeToggler";
// import {ThemeToggler} from '../components/ThemeToggler'
const Footer = () => {
  return (
    <>
      <Container>
        <div className="author a1">
          <span>Devendra Bedwal</span>
          <div className="row">
            <a href="https://www.linkedin.com/in/davendra-bedwal-09608b232/" target="main">
              <GrLinkedin />
            </a>
            <a href="https://www.instagram.com" target="main">
              <GrInstagram />
            </a>
            <a href="https://github.com/devendra0009" target="main">
              <GrGithub />
            </a>
          </div>
        </div>
        <div>
        <ThemeToggler/>
        </div>
        <div className="author ">
          <span>Ankur Yadav</span>
          <div className="row">
            <a
              href="https://www.linkedin.com/in/ankur-yadav-aky/"
              target="main"
            >
              <GrLinkedin />
            </a>
            <a href="https://www.instagram.com" target="main">
              <GrInstagram />
            </a>
            <a href="https://github.com/Ankur-Ydv" target="main">
              <GrGithub />
            </a>
          </div>
        </div>
      </Container>
    </>
  );
};

const Container = styled.div`
  margin: 0 4rem;
  margin-top: 2rem;
  padding: 2rem 0;
  display: flex;
  align-items: center;
  gap: 1rem;
  background: transparent;
  color: black;
  border-top: 2px solid black;
  .author {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    span {
      font-size: 20px;
      color: black;
      &:hover{
        color:#29c5f6;
      }
    }
    .row {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      a {
        font-size: 20px;
        &:hover {
          color: #29c5f6;
        }
      }
    }
  }
  .a2 {
    border-left: 2px solid var(--primary);
  }
`;

export default Footer;
