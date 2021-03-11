import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  & > table {
    border-collapse: collapse;
    margin-top: 13px;
    td {
      border: 1px solid black;
      height: 80px;
      width: 200px;
    }
  }
`;
