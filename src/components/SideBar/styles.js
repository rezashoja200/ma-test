import styled from "styled-components";

export const Container = styled.div`
  background-color: blue;
  color: white;
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 40px 20px;
  & > h3 {
    margin-bottom: 5px;
    margin-top: 70px;
  }
  & > div {
    margin-top: 15px;
  }
`;

export const validateStyles = `
    background-color: white;
    color: blue;
`;
