import React from "react";
import { Text } from "react-native";
import styled from 'styled-components';
import Loader from '../../components/Loader';
import AwesomeButton from "react-native-really-awesome-button";
import AwesomeButtonRick from 'react-native-really-awesome-button/src/themes/rick';
import AwesomeButtonCartman from "react-native-really-awesome-button/src/themes/cartman";

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-around;
`;

const MenuPresenter = ({ loaded }) =>
  loaded ? (
    <Container>
      <AwesomeButtonCartman type="primary" width={200} height={100} onPress={() => console.log('Main')}>중문기숙사</AwesomeButtonCartman>
      <AwesomeButtonCartman type="primary" width={200} height={100}>양성재</AwesomeButtonCartman>
      <AwesomeButtonCartman type="primary" width={200} height={100}>양진재</AwesomeButtonCartman>
    </Container>
  ) : (
    <Loader />
  );

export default MenuPresenter;
