import React, { Component } from "react";
import MenuPresenter from "./MenuPresenter";
import { menu } from "../../api/api";

export default class MenuContainer extends Component {
  state = {
    loaded: false,
    main: null,
    yangsung: null,
    yangjin: null
  };

  async componentDidMount() {
    let main, yangsung, yangjin;
    try {
      ({
        data: { main: main }
      } = await menu.getToday());
      // ({
      //   data: { main: yangsung }
      // } = await menu.getToday());
      // ({
      //   data: { main: yangjin }
      // } = await menu.getToday());
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({ loaded: true, main, yangsung, yangjin });
    }
  }

  render() {
    const { loaded, main, yangsung, yangjin } = this.state;
    return (
      <MenuPresenter
        loaded={loaded}
        main={main}
        yangsung={yangsung}
        yangjin={yangjin}
      />
    );
  }
}
