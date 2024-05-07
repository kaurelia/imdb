import styled from "@emotion/styled";
import { Card as CardBase } from "antd";
import { Link as LinkBase } from "react-router-dom";

export const Card = styled(CardBase)`
  width: 240px;
  height: 500px;
`;

export const MoviePoster = styled.img`
  height: 360px;
`;

export const Link = styled(LinkBase)`
  text-decoration: none;
`;
