import React, { Component } from "react";
import styled from "styled-components";
import Loader from "../../components/Loader";
import MenuCard from "../../components/MenuCard";
import DormBtnList from "../../components/DormBtnList";

const Container = styled.View``;

const Upper = styled.View`
  flex-grow: 10;
  height: 40%;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: 600;
  margin-left: 13px;
`;

const ScrollView = styled.ScrollView``;

const WrapperView = styled.View`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

class MenuPresenter extends Component {
  render() {
    const { loaded, main } = this.props;

    return loaded ? (
      <Container>
        <Upper />
        <Title>중문기숙사</Title>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <MenuCard main={main} />
        </ScrollView>
        <WrapperView>
          <DormBtnList />
        </WrapperView>
      </Container>
    ) : (
      <Loader />
    );
  }
}

export default MenuPresenter;
