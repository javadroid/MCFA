import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { Image, View, Text } from 'react-native'
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
import { palette } from '../constants/Colors';
import MyGroups from '../screens/savings/MyGroups';
import CreateROSCAGroup from '../screens/savings/CreateROSCAGroup';
import CreateASCAGroup from '../screens/savings/CreateASCAGroup';
import Created from '../screens/savings/Created';
import SavingsDashboard from '../screens/savings/SavingsDashboard';


const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()
// const Drawer = createDrawerNavigator()
const SavingTab=()=>{
  return(
    <Stack.Navigator initialRouteName={'Saving'}>
    <Stack.Group screenOptions={{ headerTransparent: true, headerShadowVisible:false }}>
        <Stack.Screen
            name='Saving'
            component={Saving}
            options={{
              headerShown:false,
              headerTitle:""
            }} />
            <Stack.Screen
            name='MyGroups'
            component={MyGroups}
            options={{
              headerTitle:""
            }} />
             <Stack.Screen
            name='CreateROSCAGroup'
            component={CreateROSCAGroup}
            options={{
              headerTransparent: false, 
              
            }} />
              <Stack.Screen
            name='CreateASCAGroup'
            component={CreateASCAGroup}
            options={{
              headerTransparent: false, 
              
            }} />
             <Stack.Screen
            name='SavingsDashboard'
            component={SavingsDashboard}
            options={{
              
              
            }} />
        <Stack.Screen options={{
            headerShown:false,
            headerTitleAlign: 'center',
            headerTransparent: true
        }} name='Savings' component={Saving}
        />

        <Stack.Screen options={{
           headerShown: false,
           
            headerTransparent: true
        }} name='TabNavigation' component={TabNavigation}
        /> 
         {/* <Stack.Screen options={{
           headerShown: false,
           headerLeft:()=><></>,
            headerTransparent: true
        }} name='Created' component={Created}
        />  */}
    </Stack.Group>



</Stack.Navigator>
  )
}
export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerTransparent: true,
        tabBarShowLabel: true,
        headerShown: false,
        tabBarLabelStyle: {
          ...typescale.labelMedium
        },
        headerShown: false,
        tabBarHideOnKeyboard: true,

      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size, focused }) =>
            <Svg width="35" height="35">
              <Path
                d="M16.0854 3.77703C16.4807 3.44226 16.982 3.25854 17.5 3.25854C18.018 3.25854 18.5193 3.44226 18.9146 3.77703L29.8521 13.0564C30.0943 13.2617 30.2889 13.5173 30.4223 13.8054C30.5558 14.0935 30.625 14.4072 30.625 14.7247V28.4374C30.625 29.0176 30.3945 29.574 29.9843 29.9842C29.5741 30.3945 29.0177 30.6249 28.4375 30.6249H20.0521C19.762 30.6249 19.4838 30.5097 19.2787 30.3046C19.0736 30.0995 18.9583 29.8213 18.9583 29.5312V20.4166H16.0417V29.5312C16.0417 29.8213 15.9264 30.0995 15.7213 30.3046C15.5162 30.5097 15.238 30.6249 14.9479 30.6249H6.5625C5.98234 30.6249 5.42594 30.3945 5.0157 29.9842C4.60547 29.574 4.375 29.0176 4.375 28.4374V14.7247C4.375 14.0831 4.65792 13.472 5.14792 13.0564L16.0854 3.77703ZM17.5 5.44536L6.5625 14.7247V28.4374H13.8542V19.3229C13.8542 19.0328 13.9694 18.7546 14.1745 18.5495C14.3796 18.3443 14.6578 18.2291 14.9479 18.2291H20.0521C20.3422 18.2291 20.6204 18.3443 20.8255 18.5495C21.0306 18.7546 21.1458 19.0328 21.1458 19.3229V28.4374H28.4375V14.7247L17.5 5.44536Z"
                fill={!focused ? "#5D5959" : palette.buttonicon_pupple_color1}
              />
            </Svg>

          ,
          tabBarLabel: ({ color, size, focused, children }) =>
            <Text style={{ ...typescale.bodyMedium, color: !focused ? "#5D5959" : palette.buttonicon_pupple_color1 }}>{'Home'}</Text>
          ,
          
            headerShown: false,
             headerTransparent: true
         
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
                fill={!focused ? "#5D5959" : palette.buttonicon_pupple_color1}
              />
            </Svg>,
          tabBarLabel: ({ color, size, focused, children }) =>
            <Text style={{ ...typescale.bodyMedium, color: !focused ? "#5D5959" : palette.buttonicon_pupple_color1 }}>{'Loans'}</Text>
          ,

        }}
        name='Loans'
        component={Loans}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size, focused }) =>
            <Svg width="35" height="35">
              <Path
                d="M16.1175 21.057H11.1731C10.8805 21.057 10.6435 21.294 10.6435 21.5866V29.2635C10.6435 29.5561 10.8805 29.793 11.1731 29.793H16.1175C16.4101 29.793 16.6467 29.5561 16.6467 29.2635V21.5862C16.6467 21.2936 16.4098 21.057 16.1175 21.057ZM23.827 5.20728H18.8825C18.5899 5.20728 18.353 5.44423 18.353 5.73683V29.2631C18.353 29.5557 18.5899 29.7927 18.8825 29.7927H23.827C24.1196 29.7927 24.3565 29.5557 24.3565 29.2631V5.73683C24.3565 5.44423 24.1196 5.20728 23.827 5.20728ZM31.576 12.3546H26.6315C26.3389 12.3546 26.102 12.5916 26.102 12.8842V29.2631C26.102 29.5557 26.3389 29.7927 26.6315 29.7927H31.5756C31.8682 29.7927 32.1052 29.5557 32.1052 29.2631V12.8842C32.1052 12.5919 31.8682 12.3546 31.576 12.3546ZM8.36853 12.3546H3.42408C3.13148 12.3546 2.89453 12.5916 2.89453 12.8842V29.2631C2.89453 29.5557 3.13148 29.7927 3.42408 29.7927H8.36853C8.66113 29.7927 8.89808 29.5557 8.89808 29.2631V12.8842C8.89808 12.5919 8.66113 12.3546 8.36853 12.3546Z"
                fill={!focused ? "#5D5959" : palette.buttonicon_pupple_color1}
              />
            </Svg>,
          tabBarLabel: ({ color, size, focused, children }) =>
            <Text style={{ ...typescale.bodyMedium, color: !focused ? "#5D5959" : palette.buttonicon_pupple_color1 }}>{'Savings'}</Text>
          ,
        }}
        name='SavingTab'
        component={SavingTab}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size, focused }) =>
        
            <Svg style={{}} width="26" height="26">
              <Path
                d="M1.83325 22.2498C1.83325 20.7027 2.44783 19.219 3.5418 18.125C4.63576 17.0311 6.11949 16.4165 7.66659 16.4165H19.3333C20.8803 16.4165 22.3641 17.0311 23.458 18.125C24.552 19.219 25.1666 20.7027 25.1666 22.2498C25.1666 23.0234 24.8593 23.7653 24.3123 24.3122C23.7653 24.8592 23.0235 25.1665 22.2499 25.1665H4.74992C3.97637 25.1665 3.2345 24.8592 2.68752 24.3122C2.14054 23.7653 1.83325 23.0234 1.83325 22.2498Z"
                stroke={!focused ? "#5D5959" : palette.buttonicon_pupple_color1} stroke-width="3.64583" stroke-linejoin="round"
                fill={!focused ? "#5D5959" : palette.buttonicon_pupple_color1}
              />
              <Path
                d="M13.5 10.5833C15.9162 10.5833 17.875 8.6245 17.875 6.20825C17.875 3.79201 15.9162 1.83325 13.5 1.83325C11.0838 1.83325 9.125 3.79201 9.125 6.20825C9.125 8.6245 11.0838 10.5833 13.5 10.5833Z"
                stroke-width="3.64583"
                stroke={!focused ? "#5D5959" : palette.buttonicon_pupple_color1}
                fill={!focused ? "#5D5959" : palette.buttonicon_pupple_color1}
              />
            </Svg>
          
            ,
          tabBarLabel: ({ color, size, focused, children }) =>
            <Text style={{ ...typescale.bodyMedium, color: !focused ? "#5D5959" : palette.buttonicon_pupple_color1 }}>{'Me'}</Text>
          ,
        }}
        name='Profile'
        component={Profile}
      />

    </Tab.Navigator>
  )
}
