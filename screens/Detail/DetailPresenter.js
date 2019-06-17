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
  render() {
    const { loaded, main, yangsung, yangjin } = this.props;
    if (loaded) {
      const main_menus = main.map(day => (
        <WeekMenuCard day={day} key={day.id} />
      ));

      return (
        <ThemeProvider theme={theme}>
          <ScrollColumn showsHorizontalScrollIndicator={false}>
            {main_menus}
          </ScrollColumn>
        </ThemeProvider>
      );
    } else {
      return <Loader />;
    }
  }
}

export default DetailPresenter;
