import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  background: transparent;
  border: 1px dashed white;
  border-radius: 30px;
  color: white;
  cursor: pointer;
  display: flex;
  height: 35px;
  padding-left: 8px;
  user-select: none;
  width: 100%;
  & > span {
    font-weight: bold;
    margin-left: 14px;
  }
  ${(props) => props.customStyles}
`;
