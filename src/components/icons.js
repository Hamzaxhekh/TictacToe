import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';

const Icons = ({name}) => {
  switch (name) {
    case 'circle':
      return <Icon name="circle-thin" size={38} color="#3498db" />;
      break;
    case 'cross':
      return <Icon name="times" size={38} color="#c0392b" />;
      break;

    default:
      return <Icon name="pencil" size={38} color="#2c3e50" />;
  }
};

export default Icons;
