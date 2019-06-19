import React, { Component } from "react";
import styled from "styled-components";
import { ThemeProvider } from "react-native-elements";
import Loader from "../../components/Loader";
import WeekMenuCard from "../../components/WeekMenuCard";

const theme = {
  Card: {
    width: 200,
    height: 230
  }
};

const ScrollColumn = styled.ScrollView`
  padding-top: 15px;
`;

class DetailPresenter extends Component {
  selectDorm = dorm => {
    const { main, yangsung, yangjin } = this.props;
    if (dorm == "main") {
      return main;
    } else if (dorm == "yangsung") {
      return yangsung;
    } else if (dorm == "yangjin") {
      return yangjin;
    }
  };

  render() {
    const { loaded, dorm } = this.props;
    if (loaded) {
      const selectedDorm = this.selectDorm(dorm);
      const menus = selectedDorm.map(day => (
        <WeekMenuCard day={day} key={day.id} />
      ));

      return (
        <ThemeProvider theme={theme}>
          <ScrollColumn showsVerticalScrollIndicator={false}>
            {menus}
          </ScrollColumn>
        </ThemeProvider>
      );
    } else {
      return <Loader />;
    }
  }
}

export default DetailPresenter;
