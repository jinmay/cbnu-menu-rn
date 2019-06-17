import React, { Component } from "react";
import styled from "styled-components";
import { withNavigation } from "react-navigation";
import Loader from "../../components/Loader";
import MenuCard from "../../components/MenuCard";
import DormBtnList from "../../components/DormBtnList";
import MealTime from "../../components/MealTime";

const ScrollContainer = styled.ScrollView``;

const Container = styled.View``;

const Upper = styled.View`
  /* flex-grow: 10; */
  /* height: 38%; */
  /* margin-bottom: 60%; */
  /* align-items: center; */
  margin-top: 50px;
  margin-bottom: 60px;
  /* background-color: red; */
`;

const Day = styled.Text`
  margin-left: 13px;
  font-family: bmjua;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: 600;
  margin-left: 13px;
  font-family: bmjua;
`;

const ScrollView = styled.ScrollView``;

const DetailDorm = styled.TouchableOpacity``;

const WrapperView = styled.View`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

class MenuPresenter extends Component {
  dormBtnHandler = dorm => {
    console.log("will change menu");
    this.props.onChangeDorm(dorm);
  };

  getDormName = dorm => {
    if (dorm == "main") {
      return "중문기숙사🚀";
    } else if (dorm == "yangsung") {
      return "양성재🐶";
    } else if (dorm == "yangjin") {
      return "양진재🦄";
    }
  };

  render() {
    const {
      dorm,
      day,
      loaded,
      main,
      yangsung,
      yangjin,
      navigation
    } = this.props;
    const dormName = this.getDormName(dorm);

    return loaded ? (
      <ScrollContainer showsHorizontalScrollIndicator={false}>
        {/* <Container> */}
        <Upper>
          <MealTime />
        </Upper>
        <DetailDorm
          onPress={() =>
            navigation.navigate({
              routeName: "Detail",
              params: {
                dorm: this.getDormName(dorm)
                // dorm: dorm
              }
            })
          }
        >
          <Day>{day}</Day>
          <Title>{dormName}</Title>
        </DetailDorm>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <MenuCard
            dorm={dorm}
            main={main}
            yangsung={yangsung}
            yangjin={yangjin}
          />
        </ScrollView>
        <WrapperView>
          <DormBtnList onChange={this.dormBtnHandler} />
        </WrapperView>
        {/* </Container> */}
      </ScrollContainer>
    ) : (
      <Loader />
    );
  }
}

export default withNavigation(MenuPresenter);
