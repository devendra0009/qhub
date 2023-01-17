import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SheetBox = ({ sheet }) => {
  return (
    <>
      <Container>
        <div class="box">
          <div class="content">
            <div className="author">{sheet.name}</div>
            <img src={sheet.img} alt="dsa" />
            <p>Number Of Problems : {sheet.length}</p>
            <Link href={`/sheets/${sheet.id}`}>
              <button>CODE</button>
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 350px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 1rem;
  ${'' /* box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.2),
    inset -5px -5px 15px rgba(255, 255, 255, 0.1),
    5px 5px 15px rgba(0, 0, 0, 0.3), -5px -5px 15px rgba(255, 255, 255, 0.1); */}
  color: var(--fourth);
  .box {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    overflow: hidden;
    ${'' /* background: rgb(211, 211, 211); */}
    background-image:url('https://images.unsplash.com/photo-1604147706283-d7119b5b822c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80');
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    position: absolute;
    top: 20px;
    left: 20px;
    right: 20px;
    bottom: 20px;
    transition: 0.5s;
    &:hover {
      ${'' /* transform: translateY(-40px); */}
    }

    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 50%;
      height: 100%;
      background: rgba(255, 255, 255, 0.03);
    }

    .content {
      padding: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 1rem;
      .author {
        font-size: 24px;
        text-align: center;
        text-transform: uppercase;
        color: var(--fourth);
        font-family: 'Titillium Web', sans-serif;
      }
      img {
        ${'' /* padding: 0.5rem; */}
        height: 165px;
        width: 255px;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
        ${'' /* box-shadow: 0 0 4px 4px white inset; */}
      }
      p {
        font-family: 'Josefin Sans', sans-serif;
        text-align: justify;
      }
      a {
        width: 80%;
        button {
          padding: 16px;
          width: 100%;
          ${'' /* background: transparent; */}
          border: 2px solid black;
          border-radius: 12px ;
          background-color: #89cff0;
          color: black;
          font-weight: bold;
          cursor: pointer;
          transition: 0.5s ease-in-out;
          &:hover {
            background-color: #29c5f6;
          }
        }
      }
    }
  }
`;

export default SheetBox;
