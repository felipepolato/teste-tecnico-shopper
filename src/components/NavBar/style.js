import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  border: 1px solid red;

  /* background: #ccc; */

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.25rem;
    /* width: 20rem; */
    /* height: 3rem; */
    /* margin: 1rem; */
  }

  input {
    width: 250px;
    height: 30px;
    border: transparent;
  }

  label {
    padding: 1%;
  }

  button {
    margin-left: 1%;
    height: 35px;
    cursor: pointer;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 0.25rem;
  width: 20rem;
  /* height: 3rem; */
  margin: 1rem;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.25rem;
    /* width: 20rem;
    height: 3rem;
    margin: 1rem; */
  }

  button {
    margin: 0.5rem;
    height: 2rem;
    background: #23b5a8;
    border: transparent;
    border-radius: 0.5rem;
    cursor: pointer;
  }
`;
