import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { Image, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { FontAwesome } from '@expo/vector-icons';
import Svg, { Path } from 'react-native-svg'; // Import the necessary SVG components

import { AntDesign } from '@expo/vector-icons';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import { Icon } from 'react-native-elements';
import Home from '../screens/Home';
import Loans from '../screens/Loans';
import Saving from '../screens/Saving';
import Profile from '../screens/Profile';
import { typescale } from '../constants/Typography';


const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()
// const Drawer = createDrawerNavigator()

export default function TabNavigation() {
  return (

    <Tab.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerTransparent: true, headerTitleAlign: 'center',
        tabBarShowLabel: true,
        
        tabBarLabelStyle:{
            ...typescale.labelMedium
        },
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          height: 50,
          elevation: 2,
        }
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size, focused }) =>
            <Icon
              name="home"
              type='feather'
              size={size}
            // color={focused ? colors.primaryHover : colors.grey} 
            />
        }}
        name='Home'
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size, focused }) =>

          <Svg width="35" height="35">
          <Path
            d="M23.5156 10.3906C23.5156 9.20085 23.1628 8.03779 22.5018 7.04853C21.8408 6.05926 20.9013 5.28822 19.8021 4.83291C18.7029 4.37761 17.4933 4.25848 16.3264 4.49059C15.1595 4.72271 14.0876 5.29564 13.2463 6.13694C12.405 6.97824 11.8321 8.05012 11.6 9.21704C11.3679 10.384 11.487 11.5935 11.9423 12.6927C12.3976 13.7919 13.1686 14.7314 14.1579 15.3924C15.1472 16.0534 16.3102 16.4063 17.5 16.4063C19.0949 16.4044 20.6239 15.7701 21.7517 14.6423C22.8794 13.5146 23.5138 11.9855 23.5156 10.3906ZM17.5 14.2188C16.7429 14.2188 16.0027 13.9942 15.3732 13.5736C14.7437 13.153 14.253 12.5551 13.9633 11.8556C13.6735 11.1561 13.5977 10.3864 13.7454 9.6438C13.8931 8.90121 14.2577 8.21911 14.7931 7.68373C15.3285 7.14836 16.0106 6.78377 16.7532 6.63606C17.4958 6.48835 18.2655 6.56416 18.965 6.8539C19.6645 7.14364 20.2623 7.6343 20.683 8.26384C21.1036 8.89337 21.3281 9.6335 21.3281 10.3906C21.3281 11.4059 20.9248 12.3796 20.2069 13.0975C19.489 13.8154 18.5153 14.2188 17.5 14.2188ZM25.7031 17.5C24.5133 17.5 23.3503 17.8528 22.361 18.5138C21.3718 19.1748 20.6007 20.1143 20.1454 21.2135C19.6901 22.3128 19.571 23.5223 19.8031 24.6892C20.0352 25.8561 20.6081 26.928 21.4494 27.7693C22.2907 28.6106 23.3626 29.1835 24.5295 29.4157C25.6965 29.6478 26.906 29.5286 28.0052 29.0733C29.1044 28.618 30.0439 27.847 30.7049 26.8577C31.3659 25.8685 31.7188 24.7054 31.7188 23.5156C31.7169 21.9207 31.0826 20.3917 29.9548 19.2639C28.8271 18.1362 27.298 17.5018 25.7031 17.5ZM25.7031 27.3438C24.946 27.3438 24.2059 27.1192 23.5763 26.6986C22.9468 26.278 22.4561 25.6801 22.1664 24.9806C21.8767 24.2811 21.8008 23.5114 21.9486 22.7688C22.0963 22.0262 22.4609 21.3441 22.9962 20.8087C23.5316 20.2734 24.2137 19.9088 24.9563 19.7611C25.6989 19.6133 26.4686 19.6892 27.1681 19.9789C27.8676 20.2686 28.4655 20.7593 28.8861 21.3888C29.3067 22.0184 29.5313 22.7585 29.5313 23.5156C29.5313 24.5309 29.1279 25.5046 28.41 26.2225C27.6921 26.9404 26.7184 27.3438 25.7031 27.3438ZM9.29688 17.5C8.1071 17.5 6.94404 17.8528 5.95478 18.5138C4.96551 19.1748 4.19447 20.1143 3.73916 21.2135C3.28386 22.3128 3.16473 23.5223 3.39684 24.6892C3.62896 25.8561 4.20189 26.928 5.04319 27.7693C5.88449 28.6106 6.95637 29.1835 8.12329 29.4157C9.2902 29.6478 10.4997 29.5286 11.599 29.0733C12.6982 28.618 13.6377 27.847 14.2987 26.8577C14.9597 25.8685 15.3125 24.7054 15.3125 23.5156C15.3107 21.9207 14.6763 20.3917 13.5486 19.2639C12.4208 18.1362 10.8918 17.5018 9.29688 17.5ZM9.29688 27.3438C8.53975 27.3438 7.79962 27.1192 7.17009 26.6986C6.54055 26.278 6.04989 25.6801 5.76015 24.9806C5.47041 24.2811 5.3946 23.5114 5.54231 22.7688C5.69002 22.0262 6.05461 21.3441 6.58998 20.8087C7.12536 20.2734 7.80746 19.9088 8.55005 19.7611C9.29263 19.6133 10.0623 19.6892 10.7618 19.9789C11.4613 20.2686 12.0592 20.7593 12.4798 21.3888C12.9005 22.0184 13.125 22.7585 13.125 23.5156C13.125 24.5309 12.7217 25.5046 12.0038 26.2225C11.2859 26.9404 10.3122 27.3438 9.29688 27.3438Z" 
            fill="#5D5959"
          />
        </Svg>
         
         
        }}
        name='Loans'
        component={Loans}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size, focused }) =>
            <Icon
              name="home"
              type='feather'
              size={size}
            // color={focused ? colors.primaryHover : colors.grey} 
            />
        }}
        name='Savings'
        component={Saving}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size, focused }) =>
            <Icon
              name="home"
              type='feather'
              size={size}
            // color={focused ? colors.primaryHover : colors.grey} 
            />
        }}
        name='Profile'
        component={Profile}
      />

    </Tab.Navigator>
  )
}
