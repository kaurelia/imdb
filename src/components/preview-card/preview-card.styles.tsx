import styled from "@emotion/styled";
import { Card as CardBase } from "antd";
import { Link as LinkBase } from "react-router-dom";

export const Card = styled(CardBase)`
  width: 240px;
  height: 500px;
`;

export const MoviePoster = styled.img`
  height: 360px;
  /*width: auto;
  object-fit: cover;
  transform: scale(1);
  transition: transform(0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94));
  will-change: transform;
  aspect-ratio: 0.7/1;
  background: #111;*/
`;

export const Link = styled(LinkBase)`
  text-decoration: none;
`;
