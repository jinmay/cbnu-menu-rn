import React, { Component } from "react";
import { Text } from "react-native";
import { Card, ThemeProvider } from "react-native-elements";

class MenuCard extends Component {
  render() {
    const { main } = this.props;
    const theme = {
      Card: {
        containerStyle: {
          width: 200
        }
      }
    };

    return (
      <ThemeProvider theme={theme}>
        <Card title="아침">
          <Text>{main.breakfast}</Text>
        </Card>
        <Card title="점심">
          <Text>{main.lunch}</Text>
        </Card>
        <Card title="저녁">
          <Text>{main.dinner}</Text>
        </Card>
      </ThemeProvider>
    );
  }
}

export default MenuCard;
