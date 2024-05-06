import styled from "@emotion/styled";
import { Pagination as PaginationBase } from "antd";

export type WrapperProperties = {
  withoutMinHeight?: boolean;
};

export const Wrapper = styled.div<WrapperProperties>`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(0px, 240px));
  justify-content: space-evenly;
  margin: 20px;
  min-height: ${({ withoutMinHeight }) => {
    return withoutMinHeight ? undefined : "calc(100vh - 181px)";
  }};
`;

export const Pagination = styled(PaginationBase)`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;
