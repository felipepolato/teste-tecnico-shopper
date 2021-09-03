import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  color: red;
  font-weight: bold;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 0.25rem;
  width: 20rem;
  height: 3rem;
  margin: 1rem;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.25rem;
    /* width: 20rem; */
    /* height: 3rem; */
    /* margin: 1rem; */
  }

  button {
    margin: 0.5rem;
    height: 25px;
    width: 35px;
    background: #23b5a8;
    border: transparent;
    border-radius: 0.5rem;
    cursor: pointer;
  }

  img{
  margin-top: 30%;
  }
`;
