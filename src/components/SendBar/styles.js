import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 20%;

  border: 1px solid pink;

  background: #f2f2f2;
  

  input {
    height: 30px;
    border: transparent;
    background: #ccc;
  }

  label {
    padding: 1%;
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
    margin-left: 1%;
    height: 35px;
    cursor: pointer;
  }
`;
