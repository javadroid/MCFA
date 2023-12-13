import { View, Text, StyleSheet } from 'react-native'
import React, { useCallback, useEffect, useLayoutEffect, useReducer, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import FormActions from '../../utils/actions/FormActions'
import { formReducer } from '../../utils/reducers/FormReducers'
import { palette } from '../../constants/Colors'
import { typescale } from '../../constants/Typography'
import  Created from './Created'
import CustomButton from '../../components/CustomButton'
import CustomTextInput from '../../components/CustomTextInput'
import CustomPageCointainer from '../../components/CustomPageContainer'
import CustomKeyboardAvoidingView from '../../components/CustomKeyboardAvoidingView'
import { Dialog } from '@rneui/base'
import { SelectList } from 'react-native-dropdown-select-list'
import axios from 'axios'
import { Alert } from 'react-native'
import { apiUrl, getData } from '../../utils/service/Api'



const initialState = {
  inputValue: {
    name: "",
    amount: "",
    inverval: "",
    payDay: "",
    visibility: "",
    interest:"",
    details: "",


  },
  inputValidities: {
    name: false,
    interest:false,
    amount: false,
    inverval: false,
    payDay: false,
    visibility: false,

    details: false,

  },
  formValid: false
}

const data = [
  { key: '1', value: '1 week' },
  { key: '2', value: '2 weeks' },
  { key: '3', value: '1 month' },
  { key: '4', value: '3 month' },
  { key: '5', value: '6 month' },
  { key: '6', value: '1 year' },

]

const data2 = [
  { key: '1', value: 'Monday' },
  { key: '2', value: 'Tuesday' },
  { key: '3', value: 'Wednesday' },
  { key: '4', value: 'Thursday' },
  { key: '5', value: 'Friday' },
  { key: '6', value: 'Saturday' },
  { key: '7', value: 'Sunday' },

]
export default function CreateROSCAGroup({route}) {

  const dispatch = useDispatch()
  const [visible, setVisible] = useState(false);
  const [success, setsuccess] = useState(false);
  const [formState, dispatchFormState] = useReducer(formReducer, initialState)
  const navigate = useNavigation()
  const [userData, setuserData] = useState();
  useEffect(() => {
    checkUser()
  
}, [])
const checkUser=async()=>{

setuserData(await getData("userData"))
}
  useLayoutEffect(() => {
    navigate.setOptions({

      title: `CREATE ${route.params.name} GROUP`,
      headerShown: !success,
      headerStyle: { backgroundColor: palette.main_background_color }
    })
  }, [success])
  const onChangeTextHandler = useCallback((inputId, inputValue) => {

    const result = (FormActions(inputId, inputValue))
    dispatchFormState({ inputId, validationResult: result, inputValue })
  }, [dispatchFormState])

  const onPress = () => {
    // setVisible(!visible);
    console.log(formState.inputValue)
    createGroup()

  }

  const toggleDialog = () => {
    setVisible(!visible);
  };
const createGroup=()=>{
  axios.post(apiUrl + "group", {...formState.inputValue,status:"Active",type:route.params.name,members:[userData.Users._id]}).then((e) => {
    console.log(e.data)
    navigate.goBack()
}).catch((err) => {
  console.log(err)
    Alert.alert("dfsdfd")
})

}

  return (
    <>
      {success ? (
        <Created navigate={navigate} />
      ) : (
        <CustomKeyboardAvoidingView style={{}}>
          <CustomPageCointainer edgeTop={"top"} style={styles.container}>
            <CustomTextInput containerstyle={{ marginVertical: 15, }} lable='Name of group' error={formState.inputValidities['name']} style={styles.inputbox1} id={"name"} value={formState.inputValue['name']} onChangeText={onChangeTextHandler} keyboardType={undefined} />
            <CustomTextInput containerstyle={{ marginVertical: 15, }} lable='Amount to contribute' error={formState.inputValidities['amount']} style={styles.inputbox1} id={"amount"} value={formState.inputValue['amount']} onChangeText={onChangeTextHandler} keyboardType={"number-pad"} />
            <CustomTextInput containerstyle={{ marginVertical: 15, }} lable='Loan Interest' error={formState.inputValidities['interest']} style={styles.inputbox1} id={"interest"} value={formState.inputValue['interest']} onChangeText={onChangeTextHandler} keyboardType={"number-pad"} />
            {/* <CustomTextInput containerstyle={{ marginVertical: 15, }} lable='Loan Interest' error={formState.inputValidities['interest']} style={styles.inputbox1} id={"interest"} value={formState.inputValue['interest']} onChangeText={onChangeTextHandler} keyboardType={"number-pad"} /> */}
            

           <CustomTextInput containerstyle={{ marginVertical: 15, }} lable='Details | Rules' error={formState.inputValidities['details']} style={styles.inputbox1} id={"details"} value={formState.inputValue['details']} onChangeText={onChangeTextHandler} keyboardType={undefined} />
            <SelectList boxStyles={{ borderWidth: 0,alignSelf:"flex-start", borderBottomWidth: 1, marginBottom: 25 }}
                                setSelected={(val) => onChangeTextHandler("inverval",val)}
                                data={data}
                                placeholder='Payment Interval'
                                save="value"
                            />
                            <SelectList boxStyles={{ borderWidth: 0,alignSelf:"flex-start", borderBottomWidth: 1, marginBottom: 25 }}
                                setSelected={(val) => onChangeTextHandler("payDay",val)}
                                data={data2}
                                placeholder='Payment Day'
                                save="value"
                            />
                            <SelectList boxStyles={{ borderWidth: 0,alignSelf:"flex-start", borderBottomWidth: 1, marginBottom: 25 }}
                                setSelected={(val) => onChangeTextHandler("visibility",val)}
                                data={[{key:"1",value:"Public"},{key:"2",value:"Private"}]}
                                placeholder='Visibililty'
                                save="value"
                            />
            <View style={{ borderRadius: 12, width: "100%", marginTop: 20, }}>
              <CustomButton onPress={onPress} lable={"Submit"} style={{ borderRadius: 12, padding: 10 }} />
            </View>

          </CustomPageCointainer>
          <Dialog
            isVisible={visible}
            style={{ backgroundColor: 'white' }}

            onBackdropPress={toggleDialog}
          >
            <Dialog.Title title="CREATE ASCA GROUP" />
            <Text style={{ color: "white", }}>Do you want to proceed?</Text>
            <Dialog.Actions>
              <Dialog.Button title="Yes" onPress={() => setsuccess(true)} />
              <Dialog.Button title="Cancel" onPress={() => toggleDialog()} />
            </Dialog.Actions>
          </Dialog>
        </CustomKeyboardAvoidingView>
      )}
    </>


  )


}
const styles = StyleSheet.create({
  container: {
    flex: 1,

    display: "flex",
    justifyContent: "center",
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