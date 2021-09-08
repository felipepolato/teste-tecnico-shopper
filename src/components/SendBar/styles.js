import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 20%;

  /* border: 1px solid pink; */

  background: #f2f2f2;

  input {
    border: 1px solid #ccc;
    height: 30px;
    border-radius: 10px;
  }

  label {
    padding: 1%;
    margin: 0.5rem;
  }
`;

export const FormField = styled.span`
  margin: 2px;
  display: flex;
  flex-direction: column;
`;

export const BoxBottum = styled.span`
  margin: 2px;
  display: flex;
  flex-direction: column;

  button {
    margin-top: 0.5rem;
    height: 35px;
    background: #23b5a8;
    border: transparent;
    border-radius: 0.5rem;
    cursor: pointer;
  }
`;
