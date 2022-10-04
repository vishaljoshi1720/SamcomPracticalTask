//library imports
import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

//common Loader
const Loader = ({size, withBackground, color}) => {
  return (
    <View style={styles.spinnerStyle}>
      <ActivityIndicator
        style={withBackground ? styles.backgroundStyle : {}}
        color={color || 'black'}
        size={size || 'large'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  spinnerStyle: {
    flex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
    elevation: 3,
  },
  backgroundStyle: {
    backgroundColor: '#ffffff',
    borderRadius: 100,
    padding: 5,
  },
});
export default Loader;
