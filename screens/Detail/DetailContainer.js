import React, { Component } from "react";
import DetailPresenter from "./DetailPresenter";
import { menu } from "../../api/api";

class DetailContainer extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("display_dorm")
    };
  };

  constructor(props) {
    super(props);
    const {
      navigation: {
        state: {
          params: { dorm }
        }
      }
    } = props;

    this.state = {
      loaded: false,
      dorm,
      main: null,
      yangsung: null,
      yangjin: null
    };
  }

  async componentDidMount() {
    let main, yangsung, yangjin;
    try {
      ({ data: main } = await menu.getMain());
      ({ data: yangsung } = await menu.getYangSung());
      ({ data: yangjin } = await menu.getYangJin());
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({ loaded: true, main, yangsung, yangjin });
    }
  }

  render() {
    const { loaded, dorm, main, yangsung, yangjin } = this.state;
    return (
      <DetailPresenter
        loaded={loaded}
        dorm={dorm}
        main={main}
        yangsung={yangsung}
        yangjin={yangjin}
      />
    );
  }
}

export default DetailContainer;
