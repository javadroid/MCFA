import PropTypes from 'prop-types'
import { Feather, FontAwesome } from '@expo/vector-icons';
import React, { useCallback, useState } from 'react'
import { TouchableOpacity, ImageBackground, StyleSheet, Text, View, KeyboardAvoidingView, Platform, TextInput, StyleProp, TextStyle } from 'react-native';
import { typescale } from '../constants/Typography';
import { Button } from 'react-native-elements';
import { palette } from '../constants/Colors';



export default function CustomButton({ style  ,onPress,
  lable=""}) {
  const styles = StyleSheet.create({
    
    container: {
      fontFamily: "segoe",
      ...typescale.labelMedium,
      padding:8,
      width:"100%",
      backgroundColor:palette.button_pupple_color1,
      color: "black",
    },
  });
  return (
   <Button onPress={onPress}  buttonStyle={{...styles.container,...style}} title={lable}/>
  )



}

