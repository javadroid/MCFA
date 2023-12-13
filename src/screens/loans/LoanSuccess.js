import { View, Text, Image, ImageBackground } from 'react-native'
import React from 'react'
import CustomPageCointainer from '../../components/CustomPageContainer'
import { Success, cardVector } from '../../../assets/icons/IconIndex'
import { palette } from '../../constants/Colors'
import CustomText from '../../components/CustomText'
import { typescale } from '../../constants/Typography'
import { Tab, Icon, TabView, Divider, Button } from '@rneui/themed';
export default function LoanSuccess({navigate}) {
    return (
        <CustomPageCointainer style={{ backgroundColor: palette.card_pupple_color1 }}>
            <Image style={{ alignSelf: "center", marginTop: 50 }} source={Success} />
            <CustomText text={null}
                style={{
                    textAlign: "center", ...typescale.bodySmall,
                    color: "#FFFF7A", padding: 5, fontWeight: 700, paddingHorizontal: 20
                }}>
                That was too easy!</CustomText>
            <CustomText style={{ textAlign: "center", ...typescale.titleMedium, fontWeight: 700, color: "white" }} text='Congrats! You are eligible.' />
            <CustomText text={null}
                style={{
                    textAlign: "center", ...typescale.bodySmall,
                    color: "#FFFF7A", padding: 5, paddingHorizontal: 20
                }}>
                Kindly allow 3-4hrs to reflect in your balance</CustomText>

            <ImageBackground resizeMode='stretch' style={{ marginHorizontal: 20, flex: 1 ,padding:20,justifyContent:"center",}} source={cardVector}>

                <CustomText text={null}
                    style={{
                        textAlign: "center", ...typescale.bodySmall,
                        color: "white", padding: 5, paddingHorizontal: 20
                    }}>
                    Transaction Summary</CustomText>
                <Divider />
                <View style={{justifyContent:"space-between",}}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <CustomText style={{ ...typescale.bodySmall, color: "white" }} text='Purpose of Loan' />
                        <CustomText style={{ ...typescale.bodySmall, color: "white" }} text='school fees' />
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <CustomText style={{ ...typescale.bodySmall, color: "white" }} text='Next Repayment Date' />
                        <CustomText style={{ ...typescale.bodySmall, color: "white" }} text='02/04/2021' />
                    </View>

                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <CustomText style={{ ...typescale.bodySmall, color: "white" }} text='Loan Amount' />
                        <CustomText style={{ ...typescale.bodySmall, color: "white" }} text='₦50,000' />
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <CustomText style={{ ...typescale.bodySmall, color: "white" }} text='Interest Rate' />
                        <CustomText style={{ ...typescale.bodySmall, color: "white" }} text='10%' />
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <CustomText style={{ ...typescale.bodySmall, color: "white" }} text='Total Payback Amount' />
                        <CustomText style={{ ...typescale.bodySmall, color: "white" }} text='₦55,000' />
                    </View>
                </View>


            </ImageBackground>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                <CustomText text={null}
                    style={{
                        textAlign: "center", ...typescale.bodySmall,
                        color: "white", padding: 0, paddingVertical: 10
                    }}>
                    I agree to the </CustomText>
                <CustomText text={null}
                    style={{
                        textAlign: "center", ...typescale.bodySmall,
                        color: "#FFFF7A", padding: 0, paddingVertical: 10
                    }}>Terms & Conditions</CustomText>
                <CustomText text={null}
                    style={{
                        textAlign: "center", ...typescale.bodySmall,
                        color: "white", padding: 0, paddingVertical: 10
                    }}> and </CustomText>
                <CustomText text={null}
                    style={{
                        textAlign: "center", ...typescale.bodySmall,
                        color: "#FFFF7A", padding: 0, paddingVertical: 10
                    }}>Policy.</CustomText>
            </View>
            <Button onPress={() => { navigate.goBack() }} titleStyle={{ color: "#6765E8" }} buttonStyle={{ padding: 20, marginHorizontal: 40, borderRadius: 8, backgroundColor: "white", marginBottom: 15 }} title={'Accept'} />
            <Button onPress={() => { navigate.goBack() }} titleStyle={{ color: "white" }} buttonStyle={{ padding: 20, marginHorizontal: 40,marginBottom:15, borderRadius: 8, backgroundColor: "#E5B3E9" }} title={'Decline'} />


        </CustomPageCointainer>
    )
}