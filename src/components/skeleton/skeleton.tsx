import React, {useEffect, useRef} from 'react';
import {View, Animated} from 'react-native';

import styles from './skeleton.styles';

const Skeleton: React.FC = () => {
  const opacityAnimated = useRef(new Animated.Value(0)).current;

  Animated.loop(
    Animated.sequence([
      Animated.timing(opacityAnimated, {
        toValue: 0.5,
        duration: 250,
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnimated, {
        toValue: 0.75,
        duration: 250,
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnimated, {
        toValue: 1,
        duration: 250,
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnimated, {
        toValue: 0.75,
        duration: 250,
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnimated, {
        toValue: 0.5,
        duration: 250,
        useNativeDriver: true,
      }),
    ]),
  ).start();

  useEffect(() => {
    return () => opacityAnimated.removeAllListeners();
  }, []);

  return (
    <View style={styles.container}>
      {Array.from({length: 8}).map((_, index) => (
        <Animated.View
          key={index}
          style={[styles.block, {opacity: opacityAnimated}]}></Animated.View>
      ))}
    </View>
  );
};

export default Skeleton;
