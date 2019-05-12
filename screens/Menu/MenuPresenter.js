import React from "react";
import { Text } from "react-native";
import Loader from '../../components/Loader';

const MenuPresenter = ({ loaded }) =>
  loaded ? <Text>Loaded!!</Text> : <Loader />;

export default MenuPresenter;
