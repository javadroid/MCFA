import { View, Text, StyleSheet } from 'react-native'
import React, { useCallback, useLayoutEffect, useReducer, useState } from 'react'
import CustomTextInput from '../components/CustomTextInput'
import CustomKeyboardAvoidingView from '../components/CustomKeyboardAvoidingView'
import CustomPageCointainer from '../components/CustomPageContainer'
import { palette } from '../constants/Colors'
import { typescale } from '../constants/Typography'
import { useDispatch } from 'react-redux'
import { formReducer } from '../utils/reducers/FormReducers'
import FormActions from '../utils/actions/FormActions'
import CustomButton from '../components/CustomButton'
import CustomText from '../components/CustomText'
import { useNavigation } from '@react-navigation/native'
const initialState = {
  inputValue: {
    firstname: "",
    lastname: "",
    email: "",
    dob: "",
    gender: "",
    address: "",
    maritalStatus: "",
    salary: "",
    profession: "",
    jobStatus: "",
    Education: "",
    phone: "",
    password: "",

  },
  inputValidities: {
    firstname: false,
    phone: false,
    password: false,
    lastname: false,
    email: false,
    dob: false,
    gender: false,
    address: false,
    maritalStatus: false,
    salary: false,
    profession: false,
    jobStatus: false,
    education: false,
  },
  formValid: false
}
export default function Register({}) {
  const dispatch = useDispatch()
  
  const [formState, dispatchFormState] = useReducer(formReducer, initialState)
  const navigate=useNavigation()
  useLayoutEffect(() => {
    navigate.setOptions({
     
       title:"Create an account"
    })
}, [])
  const onChangeTextHandler = useCallback((inputId, inputValue) => {

    const result = (FormActions(inputId, inputValue))
    dispatchFormState({ inputId, validationResult: result, inputValue })
  }, [dispatchFormState])
  const onPress = () => {
    navigate.navigate("TabNavigation")
  }

  return (
    <CustomKeyboardAvoidingView>
      <CustomPageCointainer edgeTop={"top"} style={styles.container}>
      <CustomText text='Personal Information' numberOfLines={undefined} style={{marginTop:60, color: palette.text_pupple_color1, ...typescale.titleMedium, padding: 0, alignSelf: "flex-start" }} />
      <CustomText text='Please fill in the following information' numberOfLines={undefined} style={{ color: palette.text_black_color1, ...typescale.bodyMedium, paddingLeft: 0, alignSelf: "flex-start",marginBottom:20 }} />
<Progress/>
        <CustomTextInput containerstyle={{marginVertical: 15,}}  lable='First Name' error={formState.inputValidities['firstname']} style={styles.inputbox1} id={"firstname"} value={formState.inputValue['firstname']} onChangeText={onChangeTextHandler} keyboardType={undefined} />
        <CustomTextInput containerstyle={{marginVertical: 15,}} lable='Last Name' error={formState.inputValidities['lastname']} style={styles.inputbox1} id={"lastname"} value={formState.inputValue['lastname']} onChangeText={onChangeTextHandler} keyboardType={undefined} />
        <CustomTextInput containerstyle={{marginVertical: 15,}} lable='Email ID' error={formState.inputValidities['email']} style={styles.inputbox1} id={"email"} value={formState.inputValue['email']} onChangeText={onChangeTextHandler} keyboardType={"email-address"} />
        <CustomTextInput containerstyle={{marginVertical: 15,}} lable='Mobile Number' error={formState.inputValidities['phone']} style={styles.inputbox1} id={"phone"} value={formState.inputValue['phone']} onChangeText={onChangeTextHandler} keyboardType={"phone-pad"} />
        <CustomTextInput containerstyle={{marginVertical: 15,}} lable='Date of Birth' error={formState.inputValidities['dob']} style={styles.inputbox1} id={"dob"} value={formState.inputValue['dob']} onChangeText={onChangeTextHandler} keyboardType={undefined} />
        <CustomTextInput containerstyle={{marginVertical: 15,}} lable='Gender' error={formState.inputValidities['gender']} style={styles.inputbox1} id={"gender"} value={formState.inputValue['gender']} onChangeText={onChangeTextHandler} keyboardType={undefined} />
        
        <View style={{ borderRadius: 12, width: "100%", marginTop: 20, }}>
          <CustomButton onPress={onPress} lable={"Register"} style={{ borderRadius: 12, padding: 10 }} />
        </View>

      </CustomPageCointainer>
    </CustomKeyboardAvoidingView>
  )
}

const Progress=()=>{
 const [progress, setprogress] = useState(2)

 const next=()=>{
  setprogress(1+progress)
 }
 const prev=()=>{
  setprogress(progress-1)
 }
  return(
    <View style={{width:"100%",flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginBottom:20}}>

   
       <CustomText text='1'  style={{textAlign:"center",...typescale.bodyMedium,zIndex:99,color:"white",backgroundColor: palette.buttonicon_pupple_color1,borderColor:"transparent",borderRadius:1000,width:35,height:35, fontWeight:"600",  borderWidth:1,display:"flex", justifyContent:"center",alignItems:"center"}} numberOfLines={undefined}/>
       <View style={{backgroundColor:progress>=2?palette.buttonicon_pupple_color1:'black',height:1,flex:1}}></View>
       <CustomText text='2' style={{color:progress>=2?"white":null,backgroundColor:progress>=2?palette.buttonicon_pupple_color1:null,borderColor:progress>=2?"transparent":null,textAlign:"center",...typescale.bodyMedium,zIndex:99,borderRadius:1000,width:35,height:35, fontWeight:"600",  borderWidth:1,display:"flex", justifyContent:"center",alignItems:"center"}} numberOfLines={undefined}/>
       <View style={{backgroundColor:progress>=3?palette.buttonicon_pupple_color1:'black',height:1,flex:1}}></View>
       <CustomText text='3' style={{color:progress>=3?"white":null,backgroundColor:progress>=3?palette.buttonicon_pupple_color1:null,borderColor:progress>=3?"transparent":null,textAlign:"center",...typescale.bodyMedium,zIndex:99,borderRadius:1000,width:35,height:35, fontWeight:"600",  borderWidth:1,display:"flex", justifyContent:"center",alignItems:"center"}} numberOfLines={undefined}/>
       <View style={{backgroundColor:progress>=4?palette.buttonicon_pupple_color1:'black',height:1,flex:1}}></View>
       <CustomText text='4' style={{color:progress>=4?"white":null,backgroundColor:progress>=4?palette.buttonicon_pupple_color1:null,borderColor:progress>=4?"transparent":null,textAlign:"center",...typescale.bodyMedium,zIndex:99,borderRadius:1000, width:35,height:35, fontWeight:"600", borderWidth:1,display:"flex", justifyContent:"center",alignItems:"center"}} numberOfLines={undefined}/>
    
       
    </View>
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
    marginTop: 50,
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

    paddingVertical: 8,
    // marginVertical: 7,
    // marginHorizontal:100,

  },

  phoneinput: {
    ...typescale.bodyMedium,
    flexGrow: 1,
    fontWeight: "600",
  },
})