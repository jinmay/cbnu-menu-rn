import React from "react";
import { Text } from "react-native";
import styled from "styled-components";

const ListView = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const DormBtn = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 100px;
  border: 1px solid red;
  border-radius: 10px;
`;

const DormBtnList = ({ onChange }) => (
  <ListView>
    <DormBtn
      onPress={() => {
        console.log("clicked 중문기숙사");
        onChange("main");
      }}
    >
      <Text>⚡️중문기숙사</Text>
    </DormBtn>
    <DormBtn
      onPress={() => {
        console.log("clicked 양성재");
        onChange("yangsung");
      }}
    >
      <Text>✨양성재</Text>
    </DormBtn>
    <DormBtn
      onPress={() => {
        console.log("clicked 양진재");
        onChange("yangjin");
      }}
    >
      <Text>💫양진재</Text>
    </DormBtn>
  </ListView>
);

export default DormBtnList;
