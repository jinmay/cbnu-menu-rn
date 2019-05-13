import React from "react";
import { Text } from "react-native";
import styled from "styled-components";
import Loader from "../../components/Loader";
import DetailBtn from "../../components/DetailBtn";
import MenuSlider from "../../components/MenuSlider";

const Container = styled.ScrollView`
  flex: 1;
  background-color: black;
`;

const Dorm = styled.View``;

const DormTitle = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: 600;
`;

const DormView = styled.ScrollView``;

const DormContent = styled.Text`
  color: white;
`;

const MenuPresenter = ({ loaded }) =>
  loaded ? (
    <Container>
      {/* <DetailBtn /> */}
      <Dorm horizontal>
        <DormTitle>중문기숙사</DormTitle>
        <DormView horizontal>
          <DormContent>[아침]</DormContent>
        </DormView>
      </Dorm>
    </Container>
  ) : (
    <Loader />
  );

export default MenuPresenter;
