import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import CustomPageCointainer from '../components/CustomPageContainer'
import { palette } from '../constants/Colors'
import { typescale } from '../constants/Typography'
import CustomText from '../components/CustomText'
import Svg, { Path, G, Defs, ClipPath, Rect } from 'react-native-svg';
import { Avatar, Divider, Badge, Icon, withBadge } from '@rneui/themed';
export default function Loans() {
  return (
    <CustomPageCointainer style={styles.container}>

      <CustomText text='' numberOfLines={undefined} style={{ color: palette.main_background_color, ...typescale.titleMedium, fontSize: 20, fontWeight: 700, paddingRight: 0, paddingLeft: 0 }} />
      {/* <View style={{ display: "flex", flex: 1, flexDirection: "column", justifyContent: "space-around", }}> */}
      <View style={styles.applogcontainer} >

        <CustomText text='Loan History' numberOfLines={undefined} style={{ ...typescale.titleMedium, fontSize: 20, fontWeight: 700, paddingRight: 0, paddingLeft: 0 }} />


        <View style={{}}>
          <Svg xmlns="http://www.w3.org/2000/svg" width="27" height="26" viewBox="0 0 27 26" fill="none">
            <G clip-path="url(#clip0_45_695)">
              <Path d="M24.6376 20.3161L24.3826 20.0995C23.6592 19.4788 23.026 18.767 22.5001 17.9834C21.9258 16.9019 21.5815 15.7208 21.4876 14.5095V10.9417C21.4926 9.03909 20.7759 7.20021 19.4722 5.77057C18.1684 4.34093 16.3675 3.41894 14.4076 3.17782V2.24615C14.4076 1.99044 14.3021 1.7452 14.1143 1.56438C13.9266 1.38356 13.6719 1.28198 13.4063 1.28198C13.1408 1.28198 12.8861 1.38356 12.6984 1.56438C12.5106 1.7452 12.4051 1.99044 12.4051 2.24615V3.19226C10.4628 3.45076 8.68358 4.37833 7.39699 5.80317C6.11041 7.22801 5.40365 9.05356 5.4076 10.9417V14.5095C5.31366 15.7208 4.96943 16.9019 4.3951 17.9834C3.87826 18.7651 3.25524 19.4767 2.5426 20.0995L2.2876 20.3161V22.3528H24.6376V20.3161Z" fill="#C34FCD" />
              <Path d="M11.49 23.1111C11.5558 23.5689 11.7913 23.9883 12.1532 24.2919C12.5151 24.5955 12.9788 24.7627 13.4587 24.7627C13.9387 24.7627 14.4024 24.5955 14.7643 24.2919C15.1261 23.9883 15.3617 23.5689 15.4275 23.1111H11.49Z" fill="#C34FCD" />
            </G>
            <Defs>
              <ClipPath id="clip0_45_695">
                <Rect width="27" height="26" fill="white" />
              </ClipPath>
            </Defs>
          </Svg>
          <Badge
            status="success"
            containerStyle={{ position: 'absolute', top: 3, left: 18 }}
          />
        </View>
      </View>
      {/* </View> */}

      <FlatList data={[1, 2, 3, 4]} showsVerticalScrollIndicator={false} renderItem={(probs) => <HistoryList {...probs} />} />

    </CustomPageCointainer>
  )
}

const HistoryList = () => {
  return (
    <View style={{ marginBottom: 20, backgroundColor: "white", padding: 10 }}>
      <CustomText text='Women Group' numberOfLines={undefined} style={{ ...typescale.bodyMedium, fontWeight: 600, paddingRight: 0, paddingLeft: 0 }} />
      <Divider />

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <CustomText text='Loan amount' numberOfLines={undefined} style={{ ...typescale.bodyMedium, fontWeight: 600, color: "#5D5C5D", paddingRight: 0, paddingLeft: 0 }} />
        <CustomText text='45,000' numberOfLines={undefined} style={{ ...typescale.bodyMedium, fontWeight: 600, color: "#5D5C5D", paddingRight: 0, paddingLeft: 0 }} />

      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <CustomText text='Date Received' numberOfLines={undefined} style={{ ...typescale.bodyMedium, fontWeight: 600, color: "#5D5C5D", paddingRight: 0, paddingLeft: 0 }} />
        <CustomText text='Nov 30, 2023' numberOfLines={undefined} style={{ ...typescale.bodyMedium, fontWeight: 600, color: "#5D5C5D", paddingRight: 0, paddingLeft: 0 }} />

      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <CustomText text='Original due date' numberOfLines={undefined} style={{ ...typescale.bodyMedium, fontWeight: 600, color: "#5D5C5D", paddingRight: 0, paddingLeft: 0 }} />
        <CustomText text='Nov 30, 2023' numberOfLines={undefined} style={{ ...typescale.bodyMedium, fontWeight: 600, color: "#5D5C5D", paddingRight: 0, paddingLeft: 0 }} />

      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <CustomText text='Date Paid' numberOfLines={undefined} style={{ ...typescale.bodyMedium, fontWeight: 600, color: "#5D5C5D", paddingRight: 0, paddingLeft: 0 }} />
        <CustomText text='Nov 30, 2023' numberOfLines={undefined} style={{ ...typescale.bodyMedium, fontWeight: 600, color: "#5D5C5D", paddingRight: 0, paddingLeft: 0 }} />

      </View>
    </View>
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
    alignItems: 'center',
    justifyContent: "space-between",
    alignSelf: "baseline",
    marginTop: 30,
    width: "100%"
  },

})