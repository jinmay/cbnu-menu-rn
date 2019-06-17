import React from "react";
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
        console.log("clicked 중문기숙사");
        onChange("main");
      }}
    >
      <DormText>💁‍️중문기숙사</DormText>
    </DormBtn>
    <DormBtn
      onPress={() => {
        console.log("clicked 양성재");
        onChange("yangsung");
      }}
    >
      <DormText>💁‍♂️양성재</DormText>
    </DormBtn>
    <DormBtn
      onPress={() => {
        console.log("clicked 양진재");
        onChange("yangjin");
      }}
    >
      <DormText>🕵️‍양진재</DormText>
    </DormBtn>
  </ListView>
);

export default DormBtnList;
