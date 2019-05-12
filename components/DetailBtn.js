import React from "react";
import styled from "styled-components";
import { withNavigation } from "react-navigation";

const DetailContainer = styled.TouchableOpacity`
  background-color: skyblue;
  padding: 5px;
  border-radius: 2.5px;
  align-self: flex-start;
`;

const Detail = styled.Text`
  color: white;
`;

const DetailBtn = ({ navigation }) => (
  <DetailContainer onPress={() => navigation.navigate("Detail")}>
    <Detail>Go to detail</Detail>
  </DetailContainer>
);

export default withNavigation(DetailBtn);
