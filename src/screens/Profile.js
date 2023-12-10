import { View, Text, Image } from 'react-native'
import React from 'react'
import CustomPageCointainer from '../components/CustomPageContainer'
import { group3, groupup7 } from '../../assets/icons/IconIndex'
import { typescale } from '../constants/Typography'
import CustomText from '../components/CustomText'
import { palette } from '../constants/Colors'



export default function Profile({}) {
    return (
        <CustomPageCointainer style={{}}>
            <Image style={{ position: "absolute", right: 1 }} source={groupup7} />
            <View style={{  flex: 1, justifyContent: "center", alignItems: "center" }}>
                {/* <View style={{}}> */}
                <Image style={{}} source={group3} />
                <CustomText style={{ ...typescale.headlineSmall, color: palette.text_pupple_color1 }} text='Great!!!' />
                <CustomText style={{ ...typescale.bodyLarge,marginBottom:30 }} text='You are now part of MCFA family 😎' />
                
                {/* </View> */}
               
            </View>
            

        </CustomPageCointainer>
    )
}