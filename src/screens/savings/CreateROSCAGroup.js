import { View, Text, StyleSheet } from 'react-native'
import React, { useCallback, useLayoutEffect, useReducer, useState } from 'react'
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




const initialState = {
  inputValue: {
    name: "",
    amount: "",
    inverval: "",
    payDay: "",
    visibility: "",

    details: "",


  },
  inputValidities: {
    name: false,

    amount: false,
    inverval: false,
    payDay: false,
    visibility: false,

    details: false,

  },
  formValid: false
}
export default function CreateROSCAGroup() {

  const dispatch = useDispatch()
  const [visible, setVisible] = useState(false);
  const [success, setsuccess] = useState(false);
  const [formState, dispatchFormState] = useReducer(formReducer, initialState)
  const navigate = useNavigation()
  useLayoutEffect(() => {
    navigate.setOptions({

      title: "CREATE ROSCA GROUP",
      headerShown: !success,
      headerStyle: { backgroundColor: palette.main_background_color }
    })
  }, [success])
  const onChangeTextHandler = useCallback((inputId, inputValue) => {

    const result = (FormActions(inputId, inputValue))
    dispatchFormState({ inputId, validationResult: result, inputValue })
  }, [dispatchFormState])

  const onPress = () => {
    setVisible(!visible);

  }

  const toggleDialog = () => {
    setVisible(!visible);
  };


  return (
    <>
      {success ? (
        <Created navigate={navigate} />
      ) : (
        <CustomKeyboardAvoidingView style={{}}>
          <CustomPageCointainer edgeTop={"top"} style={styles.container}>
            <CustomTextInput containerstyle={{ marginVertical: 15, }} lable='Name of group' error={formState.inputValidities['name']} style={styles.inputbox1} id={"name"} value={formState.inputValue['name']} onChangeText={onChangeTextHandler} keyboardType={undefined} />
            <CustomTextInput containerstyle={{ marginVertical: 15, }} lable='Amount to contribute' error={formState.inputValidities['amount']} style={styles.inputbox1} id={"amount"} value={formState.inputValue['amount']} onChangeText={onChangeTextHandler} keyboardType={undefined} />
            <CustomTextInput containerstyle={{ marginVertical: 15, }} lable='Payment Interval' error={formState.inputValidities['interval']} style={styles.inputbox1} id={"interval"} value={formState.inputValue['interval']} onChangeText={onChangeTextHandler} keyboardType={undefined} />
            <CustomTextInput containerstyle={{ marginVertical: 15, }} lable='Payment Day' error={formState.inputValidities['payDay']} style={styles.inputbox1} id={"payDay"} value={formState.inputValue['payDay']} onChangeText={onChangeTextHandler} keyboardType={undefined} />
            <CustomTextInput containerstyle={{ marginVertical: 15, }} lable='Visibililty' error={formState.inputValidities['visibililty']} style={styles.inputbox1} id={"visibililty"} value={formState.inputValue['visibililty']} onChangeText={onChangeTextHandler} keyboardType={undefined} />
            <CustomTextInput containerstyle={{ marginVertical: 15, }} lable='Details | Rules' error={formState.inputValidities['details']} style={styles.inputbox1} id={"details"} value={formState.inputValue['details']} onChangeText={onChangeTextHandler} keyboardType={undefined} />

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