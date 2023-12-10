import { View, Text, Image } from 'react-native'
import React from 'react'
import CustomPageCointainer from '../../components/CustomPageContainer'
import { group3, groupup7 } from '../../../assets/icons/IconIndex'
import CustomText from '../../components/CustomText'
import { typescale } from '../../constants/Typography'
import { palette } from '../../constants/Colors'
import CustomButton from '../../components/CustomButton'

export default function Created({navigate}) {
    return (
        <CustomPageCointainer style={{}}>
            <Image style={{ position: "absolute", right: 1 }} source={groupup7} />
            <View style={{  flex: 1, justifyContent: "center", alignItems: "center" }}>
                {/* <View style={{}}> */}
                <Image style={{}} source={group3} />
                <CustomText style={{ ...typescale.headlineSmall, color: palette.text_pupple_color1 }} text='Great!!!' />
                <CustomText style={{ ...typescale.bodyLarge,marginBottom:30 }} text='You have successfully created a saving group' />
                
                {/* </View> */}
               
            </View>
            <View style={{ borderRadius: 12, width: "90%",marginBottom:20,alignSelf:"center" }}>
                    <CustomButton onPress={() => {navigate.goBack() }} lable={"Done"} style={{ borderRadius: 12, padding: 10 }} />
                </View>

        </CustomPageCointainer>
    )
}