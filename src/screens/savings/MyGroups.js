import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import GroupList from './GroupList'
import CustomPageCointainer from '../../components/CustomPageContainer'
import { palette } from '../../constants/Colors'
import { typescale } from '../../constants/Typography'
import CustomText from '../../components/CustomText'
import Svg, { Path, G, Defs, ClipPath, Rect } from 'react-native-svg';
import { Button } from '@rneui/themed';
import { SearchBar } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native'
export default function MyGroups() {
  const [search, setSearch] = useState("");
  const navigate = useNavigation()
const updateSearch = (search) => {
  setSearch(search);
};
  return (
    <CustomPageCointainer edgeTop={'top'} style={styles.container}>
      <View style={styles.applogcontainer} >

        <CustomText text='My Groups' numberOfLines={undefined} style={{ ...typescale.titleMedium, fontSize: 20, fontWeight: 700, paddingRight: 0, paddingLeft: 0 }} />


        <View style={{ flexDirection: "row" }}>
          <Button buttonStyle={{ borderRadius: 6, marginRight: 10 }} titleStyle={{ ...typescale.labelMedium }} style={{}} title="Join(+)" />
          <Button color="success" buttonStyle={{ borderRadius: 6 }} style={{}} titleStyle={{ ...typescale.labelMedium }} onPress={()=> navigate.navigate("CreateROSCAGroup")} title="Create" />
        </View>
      </View>
      <View style={{}}>
        <SearchBar
        inputStyle={{...typescale.labelLarge}}
        containerStyle={{backgroundColor:"transparent",borderColor:"transparent"}}
        inputContainerStyle={{backgroundColor:"transparent",borderColor:palette.boarder_color3,borderWidth:0.6,borderBottomWidth:1,borderRadius:8}} 
        placeholder="Search..."
          onChangeText={updateSearch}
          value={search}
        />
      </View>
      <GroupList navigate={navigate} />
    </CustomPageCointainer>
  )
}


const styles = StyleSheet.create({


  container: {
    flex: 1,

    display: "flex",

    backgroundColor: palette.main_background_color,

    paddingHorizontal: 26,

  },
  applogcontainer: {
    display: "flex",
    flexDirection: "row",
    // backgroundColor:"red",
    zIndex:1231,
    alignItems: 'center',
    justifyContent: "space-between",
    // alignSelf: "baseline",
    marginTop: 50,
    // marginBottom: 10,
    width: "100%"
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
    borderColor: palette.boarder_color1,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 9,
    paddingVertical: 14,
    marginVertical: 7,
    // marginHorizontal:100,

  },

})