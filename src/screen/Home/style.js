import styled from "styled-components";

export const Root = styled.div`
  display: flex;
  justify-content: center;
  background: #f2f2f2;
  width: 99vw;
  height: 100vh;
`;

export const Container = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 28px 8px rgba(0, 0, 0, 0.23);
`;

export const Box = styled.div`
  height: 100%;
  overflow: auto;
  display: flex;
  justify-content: space-between;
`;
