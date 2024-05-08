import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  margin: 5px;
  gap: 5px;
  justify-content: center;
  > * {
    width: 147.5px;
    @media all and (min-width: 540px) {
      width: calc(25% - 2.5px);
    }
  }
`;
