import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 100%;
  background: #ccc;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.25rem;
    width: 20rem;
    height: 3rem;
    margin: 1rem;
  }

  input {
    width: 250px;
    height: 30px;
    border: transparent;
  }

  label {
    padding: 1%;
    color: green;
  }

  button {
    margin-left: 1%;
    height: 35px;
  }
`;
