import PropTypes from 'prop-types'
import { Feather, FontAwesome } from '@expo/vector-icons';
import React, { useCallback, useState } from 'react'
import { TouchableOpacity, ImageBackground, StyleSheet, Text, View, KeyboardAvoidingView, Platform, TextInput, StyleProp, TextStyle } from 'react-native';
import { typescale } from '../constants/Typography';
import { palette } from '../constants/Colors';



export default function CustomTextInput({ style  ,
  text=""}) {
  const styles = StyleSheet.create({
    
    lable: {
      fontFamily: "segoe",
      ...typescale.labelMedium,
      padding:8,
      color: "black",
    },
  });
  return (
    <View style={styles.inputbox1}>

    <TextInput maxLength={6} keyboardType='number-pad' secureTextEntry={visible} value={formState.inputValue['password']} onChangeText={(txt)=>onChangeTextHandler("password",txt)} style={{ ...styles.phoneinput }} placeholder='MCFA PIN' />
    <Icon onPress={()=>setvisible(!visible)} type='feather' name={visible?'eye':'eye-off'} color={palette.icon_color1} />
</View>
  )



}

const styles = StyleSheet.create({
  container: {
      flex: 1,

      display: "flex",

      backgroundColor: palette.main_background_color,
      alignItems: 'center',
      paddingHorizontal: 34,
  },
  applogcontainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: 'center',
      alignSelf: "baseline",
      marginTop:50,
  },
  inputcontainer: {
      display: "flex",
      paddingHorizontal:10,
      width: "100%",
      // backgroundColor:"red",
      flexDirection: "column",
      alignItems: 'center',
  


  },

  inputbox1: {
      display: "flex",
      flexDirection: "row",
      alignItems: 'center',
      width: "100%",
      borderColor: palette.boarder_color1,
      borderWidth: 1,
      borderRadius: 8,
      paddingHorizontal: 9,
      paddingVertical: 14,
      marginVertical: 7,
      // marginHorizontal:100,

  },

  phoneinput: {
      ...typescale.bodyMedium,
      flexGrow: 1,
      fontWeight: "600",
  },
})