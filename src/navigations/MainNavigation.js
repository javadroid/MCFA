import { View, Text } from 'react-native'
import React, { useState, useEffect, useCallback } from 'react'
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen'
import * as Linking from 'expo-linking';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../screens/Login';
import Register from '../screens/Register';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TabNavigation from './TabNavigation';
import { getData } from '../utils/service/Api';

const prefix = Linking.createURL('/');
SplashScreen.preventAutoHideAsync()
export default function MainNavigation() {
    const [isFontLoaded, setFontLoaded] = useState(false);
    const [userData, setuserData] = useState();
    useEffect(() => {
       
        loadFonts()
    }, [])

    useEffect(() => {
        checkUser()
      
    }, [])
const checkUser=async()=>{
    console.log("MainNavigation checking auth",userData?.Users?._id)
    setuserData(await getData("userData"))
}

    async function loadFonts() {

        try {
            await Font.loadAsync({
                'segoe': require('../../assets/fonts/Segoe-UI-Font/segoe.ttf'),
            });

        } catch (error) {

            console.error("prepareFont", JSON.stringify(error))
        }
        finally {
            setFontLoaded(true)
        }
    }

    const onLayOut = useCallback(async () => {
        if (isFontLoaded) {
            await SplashScreen.hideAsync()
        }
    },
        [isFontLoaded],
    )


    if (!isFontLoaded) {
        return null
    } else {
        const linking = {
            prefixes: [prefix],
        };

        const Stack = createNativeStackNavigator()
        return (

            <SafeAreaProvider style={{ flex: 1 }} onLayout={onLayOut}>
                <NavigationContainer linking={linking}>
                    <Stack.Navigator initialRouteName={userData?'TabNavigation':"Login"}>
                        <Stack.Group screenOptions={{ headerTransparent: true, headerShadowVisible: false }}>
                            <Stack.Screen
                                name='Register'
                                component={Register}
                                options={{
                                    headerShown:false,
                                }} />
                            <Stack.Screen options={{
                                headerTitle: '',
                                headerShown:false,
                            }} name='Login' component={Login}
                            />

                            <Stack.Screen options={{
                               headerShown: false,
                               
                                headerTransparent: true
                            }} name='TabNavigation' component={TabNavigation}
                            />
                        </Stack.Group>



                    </Stack.Navigator>

                </NavigationContainer>
            </SafeAreaProvider>


        )
    }
}