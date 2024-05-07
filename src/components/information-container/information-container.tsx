import styled from "@emotion/styled";
import { Empty as EmptyBase } from "antd";

const InformationContainer = styled(EmptyBase)`
  position: absolute;
  top: calc(50% - 140px);
  left: calc(50% - 125px);
  margin: 0;
  & .ant-empty-image {
    height: 250px;
  }
  & svg {
    width: 250px;
    height: auto;
  }
`;

export default InformationContainer;
