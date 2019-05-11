import React from 'react';
import PropTypes from 'prop-types';
import { Ionicons } from "@expo/vector-icons";
import { WHITE, INACTIVE } from '../constants/Color';

const TabBarIcon = ({ name, focused }) => <Ionicons size={26} name={name} color={ focused ? WHITE : INACTIVE }/>;

TabBarIcon.propTypes = {
  name: PropTypes.string.isRequired,
  focused: PropTypes.bool.isRequired
};

export default TabBarIcon;