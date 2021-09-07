import styled from "styled-components";

export const Root = styled.div`
  display: flex;
  justify-content: center;
  background: #f2f2f2;
  width: 100vw;
  height: 100vh;
`;

export const Container = styled.div`
  /* border: 1px solid black; */
  width: 70%;

  display: flex;
  flex-direction: column;

  box-shadow: 0px 0px 28px 8px rgba(0, 0, 0, 0.23);
`;

export const Box = styled.div`
  /* border: 1px solid blue; */
  height: 100%;

  display: flex;
  justify-content: space-between;
`;

export const BoxSandBar = styled.div`
  /* border-radius: 20px; */
  padding: 16px;

  box-shadow: 10px 15px 28px 8px rgba(0, 0, 0, 0.1);
  display: flex;
`;
