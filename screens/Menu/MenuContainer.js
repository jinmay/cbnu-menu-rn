import React, { Component } from "react";
import MenuPresenter from "./MenuPresenter";
import { menu } from "../../api/api";

export default class MenuContainer extends Component {
  state = {
    dorm: "main",
    loaded: false,
    main: null,
    yangsung: null,
    yangjin: null
  };

  async componentDidMount() {
    let main, yangsung, yangjin;
    try {
      ({
        data: { main: main, yangsung: yangsung, yangjin: yangjin }
      } = await menu.getToday());
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({ loaded: true, main, yangsung, yangjin });
    }
  }

  changeDorm = dorm => {
    this.setState({
      ...this.state,
      dorm: dorm
    });
  };

  render() {
    const { loaded, main, yangsung, yangjin, dorm } = this.state;
    return (
      <MenuPresenter
        dorm={dorm}
        loaded={loaded}
        main={main}
        yangsung={yangsung}
        yangjin={yangjin}
        onChangeDorm={this.changeDorm}
      />
    );
  }
}
