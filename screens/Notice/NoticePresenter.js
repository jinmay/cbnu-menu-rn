import React, { Component } from "react";
import { Text, FlatList } from "react-native";
import styled from "styled-components";
import Loader from "../../components/Loader";

class NoticePresenter extends Component {
  _keyExtractor = (item, index) => item.id;

  render() {
    const { loaded, notice } = this.props;
    if (loaded) {
      // const lists = notice.map(n => <Text key={n.id}>{n.notice}</Text>);
      return (
        <FlatList
          data={notice}
          keyExtractor={(item, index) => console.log(item.id)}
          renderItem={({ item, index }) => <Text>{item.notice}</Text>}
        />
      );
    } else {
      return <Loader />;
    }
  }
}

export default NoticePresenter;
