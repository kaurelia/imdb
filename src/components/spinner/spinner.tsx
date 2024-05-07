import styled from "@emotion/styled";
import { Spin } from "antd";

const Spinner = styled(Spin)`
  position: absolute;
  top: calc(50% - 16px);
  left: calc(50% - 16px);
  margin: 0;
`;

export default Spinner;
