import PropTypes from 'prop-types'
import { Feather, FontAwesome } from '@expo/vector-icons';
import React, {  useCallback, useState } from 'react'
import { TouchableOpacity, ImageBackground, StyleSheet, Text, View, KeyboardAvoidingView, Platform, TextInput, StyleProp, TextStyle } from 'react-native';
import { typescale } from '../constants/Typography';



export default function CustomText({ style  ,
  numberOfLines,text="",children}) {
  const styles = StyleSheet.create({
    
    lable: {
      fontFamily: "segoe",
      ...typescale.labelMedium,
      padding:8,
      color: "black",
    },
  });
  return (
   <Text numberOfLines={numberOfLines} style={{...styles.lable,...style}}>{text||children}</Text>
  )



}

