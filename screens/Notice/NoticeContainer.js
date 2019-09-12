import React, { Component } from "react";
import NoticePresenter from "./NoticePresenter";
import { notice } from "../../api/api";

class NoticeContainer extends Component {
  state = {
    loaded: false,
    notice_list: null
  };

  async componentDidMount() {
    let notice_list;
    try {
      ({ data: notice_list } = await notice.getNotice());
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({ loaded: true, notice_list });
    }
  }

  render() {
    const { loaded, notice_list } = this.state;
    return <NoticePresenter loaded={loaded} notice={notice_list} />;
  }
}

export default NoticeContainer;
