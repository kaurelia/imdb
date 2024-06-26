import styled from "@emotion/styled";
import { Input } from "antd";

const { Search: SearchBase } = Input;

export const Search = styled(SearchBase)`
  width: 300px;
  @media all and (min-width: 540px) {
    width: 50%;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin: 5px;
  justify-content: center;
`;
