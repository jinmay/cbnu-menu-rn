import React from "react";
import { Text } from "react-native";
import styled from "styled-components";

const Title = styled.Text`
  font-size: 20px;
  font-weight: 600;
  margin-left: 13px;
  font-family: bmjua;
`;

const TimeTable = styled.View`
  margin-top: 10px;
  margin-left: 13px;
  flex-direction: row;
`;

const ColumnView = styled.View`
  flex-direction: column;
  margin-right: 40px;
`;

const Week = styled.Text`
  font-weight: 600;
`;

const WeekDayTime = () => (
  <ColumnView>
    <Week>[평일]</Week>
    <Text>아침: 07:20 ~ 09:00</Text>
    <Text>점심: 11:30 ~ 13:30</Text>
    <Text>저녁: 17:30 ~ 19:00</Text>
  </ColumnView>
);

const WeekendTime = () => (
  <ColumnView>
    <Week>[주말]</Week>
    <Text>아침: 08:00 ~ 09:00</Text>
    <Text>점심: 12:00 ~ 13:00</Text>
    <Text>저녁: 17:30 ~ 19:00</Text>
  </ColumnView>
);

const MealTime = () => (
  <>
    <Title>🥗기숙사 식당 식사시간</Title>
    <TimeTable>
      <WeekDayTime />
      <WeekendTime />
    </TimeTable>
  </>
);

export default MealTime;
