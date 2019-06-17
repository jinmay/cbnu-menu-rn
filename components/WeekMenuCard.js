import React from "react";
import { Text } from "react-native";
import styled from "styled-components";
import { Card } from "react-native-elements";

const ScrollContainer = styled.ScrollView``;

const WrapperView = styled.View`
  margin-bottom: 15px;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: 600;
  margin-left: 13px;
  font-family: bmjua;
`;

const WeekMenuCard = ({ day }) => (
  <WrapperView>
    <Title>{day.day2}</Title>
    <ScrollContainer horizontal showsHorizontalScrollIndicator={false}>
      <Card title="아침">
        <Text>{day.breakfast}</Text>
      </Card>
      <Card title="점심">
        <Text>{day.lunch}</Text>
      </Card>
      <Card title="저녁">
        <Text>{day.dinner}</Text>
      </Card>
    </ScrollContainer>
  </WrapperView>
);

export default WeekMenuCard;
