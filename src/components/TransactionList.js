import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import Svg, { Path, G, Defs, ClipPath, Rect } from 'react-native-svg';
import CustomText from './CustomText';
import { palette } from '../constants/Colors';
import { typescale } from '../constants/Typography';
export default function TransactionList({data,VerifyTrx}) {
    // console.log({data})
    return (
        <FlatList style={{zIndex:777}} contentContainerStyle={{zIndex:600}} data={data}
            renderItem={(probs) => <TransactionView {...probs} VerifyTrx={VerifyTrx} />} />
    )
}

export const TransactionView = ({ item,data = {}, index,VerifyTrx }) => {
    
    return (
        <TouchableOpacity onPress={()=>item.status==="Pending"&&VerifyTrx(item.trxid)} style={{ display:"flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom:10 }}>
            <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <G clip-path="url(#clip0_56_123)">
                    <Path d="M1.66675 5.83341H16.6667M13.3334 1.66675L17.5001 5.83341L13.3334 10.0001M18.3334 14.1667H3.33341M6.66675 10.0001L2.50008 14.1667L6.66675 18.3334" stroke={item.status==="Failed" ? "red" : item.status==="Pending" ?"grey":"green"} stroke-width="2.91667" />
                </G>
                <Defs>
                    <ClipPath id="clip0_56_123">
                        <Rect width="20" height="20" fill="white" />
                    </ClipPath>
                </Defs>
            </Svg>

            <View style={{}}>
                <CustomText style={{ ...typescale.bodyMedium, color: palette.text_black_color1, fontWeight: 600, padding: 0 }} text={item?.type} />
                <CustomText style={{ ...typescale.labelSmall, color: palette.text_faded_color1, fontWeight: 600, padding: 0 }} text={'23 September, 02:22 PM'} />
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", }}>

                <Svg width="16" height="12" viewBox="0 0 16 12" fill="none">

                    <Path d="M2.66675 4.5H4.00008V1.5H5.33342L7.61342 4.5H10.6667V1.5H12.0001V4.5H13.3334V5.5H12.0001V6.5H13.3334V7.5H12.0001V10.5H10.6667L8.38008 7.5H5.33342V10.5H4.00008V7.5H2.66675V6.5H4.00008V5.5H2.66675V4.5ZM5.33342 4.5H6.08675L5.33342 3.515V4.5ZM5.33342 5.5V6.5H7.61342L6.85342 5.5H5.33342ZM10.6667 8.5V7.5H9.90008L10.6667 8.5ZM8.37342 5.5L9.14008 6.5H10.6667V5.5H8.37342Z" fill="black" />

                </Svg>

                <CustomText style={{ ...typescale.bodyMedium, fontWeight: 600, padding: 0 }} text={item?.amount} />
            </View>


        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

})