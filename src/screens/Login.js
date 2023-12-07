import { View, Text, StyleSheet, Image, TextInput } from 'react-native'
import React, { useCallback, useReducer, useState } from 'react'
import { useDispatch } from 'react-redux';

import { palette } from '../constants/Colors'
import CustomPageCointainer from '../components/CustomPageContainer'
import { Componentimage24, Componentimage25, applogIcon, nigeriaflagicon } from '../../assets/icons/IconIndex'
import CustomText from '../components/CustomText'
import { typescale } from '../constants/Typography'
import { Divider, Icon } from 'react-native-elements'
import CustomButton from '../components/CustomButton'
import { formReducer } from '../utils/reducers/FormReducers';
import FormActions from '../utils/actions/FormActions';
import CustomKeyboardAvoidingView from '../components/CustomKeyboardAvoidingView';
import { useNavigation } from '@react-navigation/native'

const initialState = {
    inputValue: {
        phone: "",
        password: "",
    },
    inputValidities: {
        phone: false,
        password: false,
    },
    formValid: false
}
export default function Login({nativation}) {
    const dispatch = useDispatch()
    const navigate=useNavigation()
    const [formState, dispatchFormState] = useReducer(formReducer, initialState)
    const [errorMatric, setErrorMatric] = useState(null);
    const [errorPassword, setErrorPassword] = useState(null);
    const [loading, setLoading] = useState(false);

    const [visible, setvisible] = useState(false)
    const [phone, setphone] = useState()
    const [password, setpassword] = useState()

    const onChangeTextHandler = useCallback((inputId, inputValue) => {
        const result = (FormActions(inputId, inputValue))
        dispatchFormState({ inputId, validationResult: result, inputValue })
    }, [dispatchFormState])

    const HandleClick=()=>{

        navigate.navigate("Register")
    }
    return (
        // <CustomKeyboardAvoidingView>
        <CustomPageCointainer edgeTop={"top"} style={styles.container}>
            
            <View style={styles.applogcontainer} >
                <Image source={applogIcon} />
                <CustomText text='MC' numberOfLines={undefined} style={{ ...typescale.displayMedium, fontSize: 48, fontWeight: 700, paddingRight: 0, paddingLeft: 0 }} />
                <CustomText text='FA' numberOfLines={undefined} style={{ ...typescale.displayMedium, fontSize: 48, fontWeight: 700, paddingLeft: 0, color: palette.text_pupple_color1 }} />
            </View>
            <CustomText text='Welcome' numberOfLines={undefined} style={{ ...typescale.headlineLarge,marginVertical:20, paddingLeft: 0, alignSelf: "baseline" }} />

            <View style={styles.inputcontainer}>

                <View style={styles.inputbox1}>
                    <Image source={nigeriaflagicon} />
                    <CustomText text='+234' numberOfLines={undefined} style={{ ...typescale.bodyMedium, paddingLeft: 3 }} />
                    <Divider style={{ marginRight: 15 }} color={palette.divider_color1} orientation='vertical' />
                    <TextInput
                    maxLength={12}
                    keyboardType='phone-pad' 
                    value={formState.inputValue['phone']}
                    id='phone' 
                    onChangeText={(txt)=>onChangeTextHandler("phone",txt)} style={styles.phoneinput} placeholder='Mobile Number' />
                </View>

                <View style={styles.inputbox1}>

                    <TextInput maxLength={6} keyboardType='number-pad' secureTextEntry={visible} value={formState.inputValue['password']} onChangeText={(txt)=>onChangeTextHandler("password",txt)} style={{ ...styles.phoneinput }} placeholder='MCFA PIN' />
                    <Icon onPress={()=>setvisible(!visible)} type='feather' name={visible?'eye':'eye-off'} color={palette.icon_color1} />
                </View>
                <CustomText text='Forgot your PIN?' numberOfLines={undefined} style={{ color: palette.text_pupple_color1, ...typescale.bodyMedium, paddingLeft: 0, alignSelf: "flex-start" }} />

            </View>
            <View style={{ borderRadius: 12, width: "100%", marginTop:20, }}>
                <CustomButton onPress={HandleClick} lable={"Sign In"} style={{ borderRadius: 12,padding:10 }} />
            </View>
            <View style={{ flexDirection: "row", width: "100%", alignItems: "center", justifyContent: "center",marginTop:20 }}>
                <CustomText text='New to MCFA?' numberOfLines={undefined} style={{ ...typescale.bodyMedium, paddingHorizontal: 0, alignSelf: "flex-start" }} />
                <CustomText text='Create an account now' numberOfLines={undefined} style={{ color: palette.text_pupple_color1, ...typescale.bodyMedium, paddingLeft: 2, alignSelf: "flex-start" }} />

            </View>
            <View style={{ flexDirection: "column", width: "100%", flex:1, marginTop:-20  }}>

            <Image style={{display:"flex",  alignSelf:"center",paddingHorizontal: 0,}}  source={Componentimage24} />

            </View>
            <View style={{ flexDirection: "row", width: "100%", alignItems: "center", justifyContent: "center" ,marginBottom:20}}>
                <CustomText text='By continuing, you agree to our ' numberOfLines={undefined} style={{ ...typescale.labelSmall, paddingHorizontal: 0, alignSelf: "flex-start" }} />
                <CustomText text='Terms & Condition' numberOfLines={undefined} style={{ color: palette.text_pupple_color1, ...typescale.labelSmall, paddingHorizontal: 0, alignSelf: "flex-start" }} />
                <CustomText text=' and ' numberOfLines={undefined} style={{ ...typescale.labelSmall, paddingHorizontal: 0, alignSelf: "flex-start" }} />
                <CustomText text='Privacy Policy'numberOfLines={undefined} style={{ color: palette.text_pupple_color1, ...typescale.labelSmall, paddingHorizontal: 0, alignSelf: "flex-start" }} />

            </View>
           
        </CustomPageCointainer> 
        // </CustomKeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        display: "flex",

        backgroundColor: palette.main_background_color,
        alignItems: 'center',
        paddingHorizontal: 34,
    },
    applogcontainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
        alignSelf: "baseline",
        marginTop:50,
    },
    inputcontainer: {
        display: "flex",
        paddingHorizontal:10,
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

    phoneinput: {
        ...typescale.bodyMedium,
        flexGrow: 1,
        fontWeight: "600",
    },
})
