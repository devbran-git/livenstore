import React from 'react';
import {View} from 'react-native';
import {SvgCss} from 'react-native-svg';
import {IconProps} from './iconSvgTypes';
import icons from 'assets/svg/icons.list';

const IconSvg = ({name, height, width, style, color, fill}: IconProps) => {
  if (!icons[name]) {
    return <View />;
  }

  return (
    <SvgCss
      xml={icons[name](color || '#555')}
      width={width}
      height={height}
      style={style}
      fill={fill}
    />
  );
};

export default IconSvg;
