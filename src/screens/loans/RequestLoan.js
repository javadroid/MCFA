import { View, Text } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import Svg, { Path, G, Defs, ClipPath, Rect } from 'react-native-svg';
import { StyleSheet } from 'react-native'
import { Tab, Icon, TabView, Input, Button } from '@rneui/themed';
import CustomPageCointainer from '../../components/CustomPageContainer';
import CustomKeyboardAvoidingView from '../../components/CustomKeyboardAvoidingView';
import { palette } from '../../constants/Colors';
import { typescale } from '../../constants/Typography';
import CustomText from '../../components/CustomText';
import { SelectList } from 'react-native-dropdown-select-list'
import LoanDeclined from './LoanDeclined';
import LoanSuccess from './LoanSuccess';
import { useNavigation } from '@react-navigation/native'


const data = [
    { key: '1', value: '1 week', disabled: true },
    { key: '2', value: '2 weeks' },
    { key: '3', value: '1 month' },
    { key: '4', value: '3 month', disabled: true },
    { key: '5', value: '6 month' },
    { key: '6', value: '1 year' },

]

export default function RequestLoan() {
    const [status, setstatus] = useState("")
    const navigate = useNavigation()

    useLayoutEffect(() => {
        navigate.setOptions({
          headerShown: status===""
        })
      }, [status])
    return (
        <>
            {
                status === "failed" ? (
                    <LoanDeclined navigate={navigate}/>
                ) : status === "success" ? (
                    <LoanSuccess navigate={navigate} />
                ) : (
                    <CustomKeyboardAvoidingView>
                        <CustomPageCointainer edgeTop={'top'} style={styles.container}>
                            <View style={styles.applogcontainer} >

                                <CustomText text='How much do you need?' numberOfLines={undefined} style={{ ...typescale.titleMedium, fontSize: 20, fontWeight: 700, paddingRight: 0, paddingLeft: 0 }} />
                            </View>
                            <Input inputStyle={{ ...typescale.bodyMedium, paddingHorizontal: 10 }} placeholder='Type amount here' />
                            {/* <CustomText text='Your loan limit is 50,000 ' numberOfLines={undefined} style={{ ...typescale.labelSmall, fontWeight: 400, padding: 0 }} /> */}
                            <SelectList boxStyles={{ borderWidth: 0, borderBottomWidth: 1, marginBottom: 25 }}
                                setSelected={(val) => console.log(val)}
                                data={data}
                                placeholder='Loan duration'
                                save="value"
                            />
                            <Input inputStyle={{ ...typescale.bodyMedium, paddingHorizontal: 10, }} placeholder='Loan purpose' />

                            <Button onPress={()=>setstatus("success")} onLongPress={()=>setstatus("failed")} buttonStyle={{ padding: 10, backgroundColor: "#B72DC3" }} title={'Get Funds'} />

                        </CustomPageCointainer>

                    </CustomKeyboardAvoidingView>
                )
            }
        </>


    )
}

const styles = StyleSheet.create({


    container: {
        flex: 1,
        display: "flex",

        flexDirection: "column",
        backgroundColor: palette.main_background_color,
        paddingHorizontal: 20,
    },
    applogcontainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "space-between",
        alignSelf: "baseline",
        marginTop: 140,
        width: "100%"
    },
})