import styled from "@emotion/styled";

export type GridProperties = {
  withoutMinHeight?: boolean;
  isForSmallAmount?: boolean;
};

export const Grid = styled.section<GridProperties>`
  display: grid;
  gap: 20px 92px;
  grid-template-columns: repeat(auto-fit, minmax(0px, 240px));
  margin: 20px auto;
  justify-content: ${({ isForSmallAmount }) => {
    return isForSmallAmount ? "unset" : "space-evenly";
  }};
  min-height: ${({ withoutMinHeight }) => {
    return withoutMinHeight ? "unset" : "calc(100vh - 181px)";
  }};
`;

export type WrapperProperties = Pick<GridProperties, "isForSmallAmount">;

export const Wrapper = styled.div<WrapperProperties>`
  display: flex;
  justify-content: center;
  @media all and (min-width: 768px) {
    display: block;
    margin: 0
      ${({ isForSmallAmount }) => {
        return isForSmallAmount ? "20px" : "auto";
      }};
    justify-content: unset;
  }
`;
