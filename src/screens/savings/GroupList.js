import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import Svg, { Path, G, Defs, ClipPath, Rect } from 'react-native-svg';
import { FlatList } from 'react-native';
import CustomText from '../../components/CustomText';
import { typescale } from '../../constants/Typography';
import { palette } from '../../constants/Colors';
import { Image } from 'react-native';
import { ActivegroupIcon, ClosedgroupIcon } from '../../../assets/icons/IconIndex';

export default function GroupList({navigate,data,type}) {
    return (
        <FlatList data={data?.filter(d=>d.type===type)}
        showsVerticalScrollIndicator={false}
            renderItem={(probs) => <CardContainer {...probs} navigate={navigate} full={data.length} />} />
    )
}

const CardContainer = ({navigate,item,full }) => {
    return (
        <TouchableOpacity onPress={()=>navigate.navigate("SavingsDashboard",item)} style={{position:"relative", padding:15,borderRadius:8,elevation:5, backgroundColor: palette.card_pupplelight_color1, marginBottom: 20 }}>
            <View style={{ marginBottom:10, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <CustomText text={item?.name} style={{ ...typescale.titleMedium, fontSize: 18, fontWeight: 700, padding: 0 }} />
                <CustomText style={{ ...typescale.bodyMedium, color: palette.text_black_color1, fontWeight: 700, padding: 0 }} text={item.members.length+" Participants"} />
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <CustomText text={'Amount to contribute'} style={{ ...typescale.labelSmall, fontWeight: 600, padding: 0 }} />
                <CustomText style={{ ...typescale.labelSmall, color: palette.text_black_color1, fontWeight: 600, padding: 0 }} text='Interest received(' />
            </View>
            <View style={{marginBottom:10,  flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <CustomText text={item.amount+'.00'} style={{ ...typescale.titleMedium, fontSize: 18, fontWeight: 600, padding: 0 }} />
                <CustomText style={{ ...typescale.bodyMedium, color: palette.text_black_color1, fontWeight: 600, padding: 0 }} text='Not applicable'/>
            </View>
            <View style={{  flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <CustomText text={'Interval: '+item.inverval} style={{ ...typescale.labelSmall, fontWeight: 600, padding: 0 }} />
            </View>
        <Image style={{position:"absolute" ,bottom:1,right:1}} source={item.status==="Active"?ActivegroupIcon:ClosedgroupIcon}/>

        </TouchableOpacity>
    )
}