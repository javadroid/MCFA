import { View, Text } from 'react-native'
import React from 'react'
import CustomPageCointainer from '../components/CustomPageContainer'

export default function Home() {
  return (
    <CustomPageCointainer edgeTop={'top'}>
      <Text>Home</Text>
    </CustomPageCointainer>
  )
}