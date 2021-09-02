import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.25rem;
  width: 20rem;
  height: 3rem;
  margin: 1rem;
`;

export const Button = styled.button`
  /* border: 1px solid #105f58; */
  border: none;
  outline: none;
  font-size: 15px;
  color: white;
  background: #23b5a8;
  border-radius: 5px;
  padding: 5px;
  cursor: pointer;
`;

export const ProductList = styled.div`
  width: 50%;
`;

export const Cart = styled.div`
  width: 50%;
`;

export const Ul = styled.ul`
  list-style: none;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  

  ul li ~ li {
    margin-top: 10px;
  }

  ul li {
    display: flex;
    justify-content: space-around;
    padding: 5px;
    align-items: center;
  }

  ul li:nth-child(odd) {
    /* background: #ccc; */
  }
  ul li span {
    margin-right: 20px;
  }
`;
