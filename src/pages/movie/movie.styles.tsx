import { LeftCircleOutlined as LeftCircleOutlinedBase } from "@ant-design/icons";
import styled from "@emotion/styled";
import {
  Card as CardBase,
  Descriptions as DescriptionsBase,
  Rate as RateBase,
  Tag as TagBase,
} from "antd";

export const Card = styled(CardBase)`
  max-width: 240px;
  max-height: 500px;
  margin: 20px;
`;

export const MoviePoster = styled.img`
  height: 360px;
`;

export const Rate = styled(RateBase)`
  @media all and (min-width: 345px) {
    font-size: 30px;
  }
`;

export const Wrapper = styled.div`
  margin: 20px;
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;
  @media all and (min-width: 540px) {
    flex-direction: row;
    align-items: unset;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 240px;
  height: auto;
  border-radius: 5px;
  max-height: 380px;
`;

export const Descriptions = styled(DescriptionsBase)`
  margin: 20px;
`;

export const LastViewedHeader = styled.h2`
  text-align: center;
`;

export const Tag = styled(TagBase)`
  width: fit-content;
`;

export const Header = styled.h1`
  font-size: 3rem;
`;

export const Paragraph = styled.p`
  text-align: justify;
`;

export const LeftCircleOutlined = styled(LeftCircleOutlinedBase)`
  margin: 20px 0 0 20px;
  font-size: 30px;
`;
