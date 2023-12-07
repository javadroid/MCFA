import { View, Text } from 'react-native'
import React,{useState,useEffect, useCallback} from 'react'
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen'
import * as Linking from 'expo-linking';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../screens/Login';
import Register from '../screens/Register';

const prefix = Linking.createURL('/');
SplashScreen.preventAutoHideAsync()
export default function MainNavigation() {
    const [isFontLoaded, setFontLoaded] = useState(false);
    useEffect(() => {
        loadFonts()
    }, [])
    

    async function loadFonts() {

        try{
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
        return (

            <SafeAreaProvider style={{ flex: 1 }} onLayout={onLayOut}>
                <NavigationContainer linking={linking}>
                 
                   <Register/>
                </NavigationContainer>
            </SafeAreaProvider>


        )
    }
}