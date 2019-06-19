import React from "react";
import { Platform } from "react-native";
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
  border-radius: 10px;
`;

const DormText = styled.Text`
  font-family: bmjua;
`;

const DormBtnList = ({ onChange }) => (
  <ListView>
    <DormBtn
      onPress={() => {
        onChange("main");
      }}
    >
      <DormText>💁‍️중문기숙사</DormText>
    </DormBtn>
    <DormBtn
      onPress={() => {
        onChange("yangsung");
      }}
    >
      <DormText>{Platform.OS === "ios" ? "💁‍♂️" : "🙋‍"}양성재</DormText>
    </DormBtn>
    <DormBtn
      onPress={() => {
        onChange("yangjin");
      }}
    >
      <DormText>🕵️‍양진재</DormText>
    </DormBtn>
  </ListView>
);

export default DormBtnList;
