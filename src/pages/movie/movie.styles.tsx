import styled from "@emotion/styled";
import {
  Card as CardBase,
  Descriptions as DescriptionsBase,
  Rate as RateBase,
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
  font-size: 12px;
  @media all and (min-width: 345px) {
    font-size: initial;
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
  gap: 5px;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 5px;
`;

export const Descriptions = styled(DescriptionsBase)`
  margin: 20px;
`;

export const LastViewedHeader = styled.h2`
  text-align: center;
`;
