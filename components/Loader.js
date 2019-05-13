import React from "react";
import styled from "styled-components";
import { ActivityIndicator } from "react-native";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  background-color: black;
`;

export default () => (
  <Container>
    <ActivityIndicator />
  </Container>
);
