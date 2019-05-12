import React from "react";
import { Text } from "react-native";
import styled from "styled-components";
import Loader from "../../components/Loader";
import DetailBtn from "../../components/DetailBtn";

const Container = styled.ScrollView`
  flex: 1;
  background-color: black;
`;

const DetailContainer = styled.TouchableOpacity`
  background-color: skyblue;
  padding: 5px;
  border-radius: 2.5px;
  align-self: flex-start;
`;

const Detail = styled.Text`
  color: white;
`;

const MenuPresenter = ({ loaded }) =>
  loaded ? (
    <Container>
      <DetailBtn />
    </Container>
  ) : (
    <Loader />
  );

export default MenuPresenter;
