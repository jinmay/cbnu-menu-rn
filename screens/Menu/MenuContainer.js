import React, { Component } from 'react';
import MenuPresenter from './MenuPresenter';

export default class MenuContainer extends Component {
  state = {
    loaded: true
  }
  render() {
    const { loaded } = this.state;
    return <MenuPresenter loaded={loaded} />
  }
}