import PropTypes from 'prop-types'
import { Feather, FontAwesome } from '@expo/vector-icons';
import React, { useCallback, useState } from 'react'
import { TouchableOpacity, ImageBackground,Image, StyleSheet, Text, View, KeyboardAvoidingView, Platform, TextInput, StyleProp, TextStyle } from 'react-native';
import { typescale } from '../constants/Typography';
import { palette } from '../constants/Colors';
import CustomText from './CustomText';
import { nigeriaflagicon } from '../../assets/icons/IconIndex';
import { Divider } from 'react-native-elements';



export default function CustomTextInput({ style, visible = false, id,
  text = "", value,
  lable = "Last Name",
  onChangeText,
  placeholder="",
  keyboardType,
  maxLength = null,
  error = null ,
  containerstyle}) {

  const onChangeTextHandler = (txt) => {
    onChangeText(id, txt)
  }


  return (
    <View style={{...styles.container,...containerstyle}}>
      <View style={{ ...styles.inputbox1,...style, borderColor: error ? "red" : palette.boarder_color2, }}>
        <Text style={styles.lable}>{lable}</Text>

        {
          id==="phone"&&(
            <>
            <Image source={nigeriaflagicon} />
                    <CustomText text='+234' numberOfLines={undefined} style={{ ...typescale.bodyMedium, paddingLeft: 3 }} />
                    <Divider style={{ marginRight: 15 }} color={palette.divider_color1} orientation='vertical' />
            </>
          )
        }
        <TextInput placeholder={placeholder} maxLength={maxLength} keyboardType={keyboardType} secureTextEntry={visible} value={value} onChangeText={onChangeTextHandler} style={{ ...styles.phoneinput }} />
        {/* <Icon onPress={()=>setvisible(!visible)} type='feather' name={visible?'eye':'eye-off'} color={palette.icon_color1} /> */}

      </View>
      {
        error && (
          <View style={{ alignSelf: "flex-end" }}>
            <CustomText text={error} style={{ color: "red", ...typescale.labelSmall, padding: 0, }} numberOfLines={undefined} />
          </View>

        )
      }
    </View>

  )



}

const styles = StyleSheet.create({
  container: {
    marginVertical: 7,
    // backgroundColor:"red"
  },

  inputcontainer: {
    display: "flex",
    paddingHorizontal: 10,
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
    borderColor: palette.boarder_color2,
    borderWidth: 1,
    borderRadius: 8,
    position: 'relative',
   
    paddingHorizontal: 9,
    paddingVertical: 14,
    // 
    // marginHorizontal:100,

  },
  lable: {
    ...typescale.bodyMedium,
    fontSize: 16,
    color: palette.text_black_color1,
    position: 'absolute', // Set position to absolute
    top: -10, // Align text to the top
    left: 20, // Align text to the left
    paddingHorizontal: 5,
    backgroundColor: palette.main_background_color

  },
  phoneinput: {
    ...typescale.bodyMedium,
    flexGrow: 1,
    fontWeight: "600",

  },
})