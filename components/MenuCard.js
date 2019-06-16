import React, { Component } from "react";
import { Text } from "react-native";
import { Card, ThemeProvider } from "react-native-elements";

class MenuCard extends Component {
  getMenu = dorm => {
    if (dorm == "main") {
      return this.props.main;
    } else if (dorm == "yangsung") {
      return this.props.yangsung;
    } else if (dorm == "yangjin") {
      return this.props.yangjin;
    }
  };

  render() {
    const { dorm } = this.props;
    const theme = {
      Card: {
        containerStyle: {
          width: 200,
          height: 230
        }
      }
    };
    const todayMenu = this.getMenu(dorm);

    return (
      <ThemeProvider theme={theme}>
        <Card title="아침">
          <Text>{todayMenu.breakfast}</Text>
        </Card>
        <Card title="점심">
          <Text>{todayMenu.lunch}</Text>
        </Card>
        <Card title="저녁">
          <Text>{todayMenu.dinner}</Text>
        </Card>
      </ThemeProvider>
    );
  }
}

export default MenuCard;
