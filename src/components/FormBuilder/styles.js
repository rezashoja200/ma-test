import styled from "styled-components";

export const Container = styled.div`
  flex: 4;
  background-color: white;
  padding: 50px;
  & > div {
    margin-bottom: 50px;
  }
`;

export const saveCustomStyles = `
    background-color: blue;
    border: 0;
    margin: 0 auto;
    width: 180px;
    & > span{
        margin-left: 42px;
    }
    & > svg{
        margin-left: 3px;
    }
`;
