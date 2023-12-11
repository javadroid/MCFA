import { View, Text, Image } from 'react-native'
import React from 'react'
import CustomPageCointainer from '../../components/CustomPageContainer'
import CustomText from '../../components/CustomText'
import { typescale } from '../../constants/Typography'
import { palette } from '../../constants/Colors'
import { LoanDeclinedimage } from '../../../assets/icons/IconIndex'
import CustomButton from '../../components/CustomButton'

export default function LoanDeclined({ navigate }) {
    return (
        <CustomPageCointainer style={{}}>

            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                {/* <View style={{}}> */}
                <Image style={{}} source={LoanDeclinedimage} />
                <CustomText style={{ ...typescale.titleLarge, }} text='Oops, you are eligible' />

                <CustomText text={null} style={{ textAlign: "center", ...typescale.bodyMedium, padding: 8, paddingHorizontal:20 }}>
                    We're sorry but we can’t offer you any loan at this
                    time, visit us again after a few days.</CustomText>
                {/* </View> */}

            </View>

            <View style={{ borderRadius: 12, width: "90%", marginBottom: 20, alignSelf: "center",}}>
                <CustomButton onPress={() => { navigate.goBack() }} lable={"Back"} style={{ borderRadius: 12, padding: 10 }} />
            </View>

        </CustomPageCointainer>
    )
}