import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  background-color: #eee;
  border-radius: 30px;
  border: 1px solid gray;
  display: flex;
  height: 30px;
  justify-content: space-evenly;
  position: absolute;
  right: -10px;
  top: 20px;
  width: 100px;
  & > svg {
    cursor: pointer;
  }
`;
