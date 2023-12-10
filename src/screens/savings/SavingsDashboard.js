import { View, Text, Animated } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import CustomPageCointainer from '../../components/CustomPageContainer'
import { palette } from '../../constants/Colors'
import { useNavigation } from '@react-navigation/native'
import CustomText from '../../components/CustomText'
import Svg, { Path, G, Defs, ClipPath, Rect } from 'react-native-svg';
import { StyleSheet } from 'react-native'
import { typescale } from '../../constants/Typography'

export default function SavingsDashboard() {
  const navigate = useNavigation()
  useLayoutEffect(() => {
    navigate.setOptions({

      title: "Saving Group",

    })
  }, [])

  const [notify, setnotify] = useState(0)
  const [notilist, setnotilist] = useState(['22******55 saved 9,000 (13 mins ago)', '22******55 saved 9,000 (11 mins ago)', '22******55 saved 9,000 (8 mins ago)', '22******55 saved 9,000 (11 mins ago)', '22******55 saved 9,000 (29 mins ago)', '22******55 saved 9,000 (11 mins ago)', '22******55 saved 9,000 (66 mins ago)'])
  useEffect(() => {
    if (notify < notilist.length) {
      showNextAnnoucement()
    }
  }, [notify])


  const translateY = new Animated.Value(100)
  const showNextAnnoucement = () => {
    Animated.timing(translateY, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false
    }).start(() => {
      setnotify((pre) => pre + 1)
      setTimeout(() => hideNextAnnoucement(), 3000)
    })
  }
  const hideNextAnnoucement = () => {
    Animated.timing(translateY, {
      toValue: 100,
      duration: 500,
      useNativeDriver: false
    }).start(() => {
      if (notify < notilist.length - 1) {
        showNextAnnoucement()
      }

    })
  }
  return (
    <CustomPageCointainer edgeTop={'top'} style={styles.container}>
      <View style={{ marginTop: 50, }}>

        <View style={{ flexDirection: "row", alignItems: "center", alignSelf: "center" }}>
          <Svg width="15" height="17" viewBox="0 0 15 17" fill="none">
            <Path d="M0 5.66667H1.875V0H3.75L6.95625 5.66667H11.25V0H13.125V5.66667H15V7.55556H13.125V9.44444H15V11.3333H13.125V17H11.25L8.03437 11.3333H3.75V17H1.875V11.3333H0V9.44444H1.875V7.55556H0V5.66667ZM3.75 5.66667H4.80938L3.75 3.80611V5.66667ZM3.75 7.55556V9.44444H6.95625L5.8875 7.55556H3.75ZM11.25 13.2222V11.3333H10.1719L11.25 13.2222ZM8.025 7.55556L9.10312 9.44444H11.25V7.55556H8.025Z" fill="#B72DC3" />
          </Svg>
          <CustomText style={{ ...typescale.titleLarge, fontSize: 24, fontWeight: 700, padding: 0 }} text='80,000.00' />
        </View>

        <View style={{ height: 43, borderRadius: 7, backgroundColor: '#F5E3F5', flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingRight: 20, }}>
          <View style={{ borderTopRightRadius: 100, height: "100%", backgroundColor: '#DA92E0', alignItems: "center", alignSelf: "center", justifyContent: "center", paddingRight: 10 }}>
            <CustomText style={{ ...typescale.bodyMedium, color: "white", fontWeight: 600, padding: 10 }} text='Recent' />

          </View>
          <View>
            {/* <CustomText style={{ ...typescale.bodyMedium, color: "#9A26A4", fontWeight: 600 }} text={notify} /> */}
            

          </View>

        </View>

      </View>
    </CustomPageCointainer>
  )
}

const styles = StyleSheet.create({


  container: {
    flex: 1,

    display: "flex",

    backgroundColor: palette.main_background_color,

    paddingHorizontal: 20,
  },
})