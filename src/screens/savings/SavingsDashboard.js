import { View, Text, Animated } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import CustomPageCointainer from '../../components/CustomPageContainer'
import { palette } from '../../constants/Colors'
import { useNavigation } from '@react-navigation/native'
import CustomText from '../../components/CustomText'
import Svg, { Path, G, Defs, ClipPath, Rect } from 'react-native-svg';
import { StyleSheet } from 'react-native'
import { typescale } from '../../constants/Typography'
import { Tab, Icon, TabView, FAB } from '@rneui/themed';
import { FlatList } from 'react-native'
import { Divider, Button } from '@rneui/themed';
import { LoadProfile, apiUrl, getData, getUser } from '../../utils/service/Api'
import axios from 'axios'
import { Alert } from 'react-native'

export default function SavingsDashboard({ route }) {
  const navigate = useNavigation()
  useLayoutEffect(() => {
    navigate.setOptions({

      title: "Saving Group",

    })
  }, [])

  const [notify, setnotify] = useState(0)
  const [notilist, setnotilist] = useState(['22******55 saved 9,000 (13 mins ago)', '22******55 saved 9,000 (11 mins ago)', '22******55 saved 9,000 (8 mins ago)', '22******55 saved 9,000 (11 mins ago)', '22******55 saved 9,000 (29 mins ago)', '22******55 saved 9,000 (11 mins ago)', '22******55 saved 9,000 (66 mins ago)'])
  const [index, setIndex] = React.useState(0);

  useEffect(() => {

    // console.log(route)
    if (notify < notilist.length) {
      showNextAnnoucement()
    } else {
      setnotify(0)
    }
  }, [notify])


  const translateY = new Animated.Value(4)
  const showNextAnnoucement = () => {
    Animated.timing(translateY, {
      toValue: 0,
      duration: 2000,
      useNativeDriver: false
    }).start(() => {
      setnotify((pre) => pre + 1)
      // setTimeout(() => hideNextAnnoucement(), 5000)
    })
  }
  const hideNextAnnoucement = () => {
    Animated.timing(translateY, {
      toValue: 4,
      duration: 500,
      useNativeDriver: false
    }).start(() => {
      if (notify < notilist.length - 1) {
        showNextAnnoucement()
      }

    })
  }
  const [trx, setTrx] = useState([])
  const [userData, setuserData] = useState()



  useEffect(() => {
    getaa()
  }, [])

  const getaa = async () => {
    setuserData(await getData("userData"))
    axios.get(apiUrl + "trx/" + route.params._id).then(async (e) => {

      setTrx(e.data)
    }).catch((err) => {
      console.log(err.message || JSON.stringify(err, null, 2))
      Alert.alert(err.data?.msg || err.message || "something wrong")
    })
  }

  const calculateTimeUntilDayOfWeek = (targetDay) => {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    // Get the current date and time
    const currentDate = new Date();

    // Find the index of the target day in the daysOfWeek array
    const targetDayIndex = daysOfWeek.indexOf(targetDay);

    if (targetDayIndex === -1) {
      // Invalid day of the week
      return 'Invalid day of the week';
    }

    // Get the current day of the week
    const currentDayIndex = currentDate.getDay();

    // Calculate the difference in days between the current day and the target day
    let daysUntilTargetDay = targetDayIndex - currentDayIndex;

    // If the target day is before the current day, add 7 to get the correct positive difference
    if (daysUntilTargetDay <= 0) {
      daysUntilTargetDay += 7;
    }

    // Calculate the time until the target day in milliseconds
    const timeUntilTargetDay = daysUntilTargetDay * 24 * 60 * 60 * 1000;

    // Calculate the target date by adding the time until the target day to the current date
    const targetDate = new Date(currentDate.getTime() + timeUntilTargetDay);

    // Return the result
    return {
      daysUntil: daysUntilTargetDay,
      targetDate: targetDate.toLocaleString(),
    };
  }
  const Contribute = async () => {
    console.log("Contribute")
    axios.post(apiUrl + "pay ", { userid: userData._id, groupid: route.params._id }).then(async (e) => {
      console.log(e.data)
      getaa()
      LoadProfile()
      // setTrx(e)
    }).catch((err) => {
      console.log(err.message || JSON.stringify(err, null, 2))
      Alert.alert(err.data?.msg || err.message || "something wrong")
    })
  }


  return (
    <CustomPageCointainer edgeTop={'top'} style={styles.container}>


      <View style={{ flexDirection: "row", alignItems: "center", alignSelf: "center", marginTop: 80 }}>
        <Svg width="15" height="17" viewBox="0 0 15 17" fill="none">
          <Path d="M0 5.66667H1.875V0H3.75L6.95625 5.66667H11.25V0H13.125V5.66667H15V7.55556H13.125V9.44444H15V11.3333H13.125V17H11.25L8.03437 11.3333H3.75V17H1.875V11.3333H0V9.44444H1.875V7.55556H0V5.66667ZM3.75 5.66667H4.80938L3.75 3.80611V5.66667ZM3.75 7.55556V9.44444H6.95625L5.8875 7.55556H3.75ZM11.25 13.2222V11.3333H10.1719L11.25 13.2222ZM8.025 7.55556L9.10312 9.44444H11.25V7.55556H8.025Z" fill="#B72DC3" />
        </Svg>
        <CustomText style={{ ...typescale.titleLarge, color: "#B72DC3", fontSize: 24, fontWeight: 700, padding: 0 }} text='80,000.00' />
      </View>

      <View style={{ marginHorizontal: 20, marginVertical: 20, height: 43, borderRadius: 7, backgroundColor: '#F5E3F5', flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingRight: 20, }}>
        <View style={{ borderTopRightRadius: 100, height: "100%", backgroundColor: '#DA92E0', alignItems: "center", alignSelf: "center", justifyContent: "center", paddingRight: 10 }}>
          <CustomText style={{ ...typescale.bodyMedium, color: "white", fontWeight: 600, padding: 10 }} text='Recent' />

        </View>
        <View>

          <Animated.View style={[{}, { transform: [{ translateY }] }]} >
            <CustomText style={{ ...typescale.bodyMedium, color: "#9A26A4", fontWeight: 600 }} text={notilist[notify]} />

          </Animated.View>

        </View>

      </View>
      <>
        <Tab
          value={index}
          onChange={(e) => setIndex(e)}
          indicatorStyle={{
            backgroundColor: '#DA92E0',
            height: 3,
          }}

        >
          <Tab.Item
            title="Details"
            titleStyle={{ fontSize: 12 }}
            icon={{ name: 'information-circle', type: 'ionicon', color: '#DA92E0' }}
          />
          <Tab.Item
            title="Transactions"
            titleStyle={{ fontSize: 12 }}
            icon={{ name: 'timer', type: 'ionicon', color: '#DA92E0' }}
          />
          <Tab.Item
            title="Participant"
            titleStyle={{ fontSize: 12 }}
            icon={{ name: 'people', type: 'ionicon', color: '#DA92E0' }}
          />
        </Tab>
        <>
          <TabView value={index} onChange={setIndex} animationType="spring">
            <TabView.Item style={{ width: '100%' }}>
              <View style={{ margin: 20, backgroundColor: 'white', padding: 5 }}>
                {/* <View style={{flexDirection:"row",justifyContent:"space-between" }}> */}
                <CustomText style={{ ...typescale.titleMedium, fontWeight: 600 }} text={'Group ID: ' + route.params._id} />
                <CustomText style={{ ...typescale.titleMedium, fontWeight: 600 }} text={'Group Name: ' + route.params.name} />
                <CustomText style={{ ...typescale.titleMedium, fontWeight: 600 }} text={'Amount to Contribute: ₦' + route.params.amount} />
                <CustomText style={{ ...typescale.titleMedium, fontWeight: 600 }} text={'Intervals : ' + route.params.inverval} />
                <CustomText style={{ ...typescale.bodyLarge, fontWeight: 500 }} text={'Days until Next Contribution : ' + calculateTimeUntilDayOfWeek(route.params.payDay).daysUntil + " days"} />
                <CustomText style={{ ...typescale.bodyLarge, fontWeight: 500 }} text={'Next Contribution : ' + calculateTimeUntilDayOfWeek(route.params.payDay).targetDate} />
                {
                  route.params.members.includes(userData._id) ? (
                    <>
                      {calculateTimeUntilDayOfWeek(route.params.payDay).daysUntil !== 0 && <Button onPress={Contribute} title={"Contribute"} />}
                    </>
                  ) : (<>
                    <Button title={"Join Group"} />
                  </>)
                }
                {/* </View> */}

              </View>
            </TabView.Item>
            <TabView.Item style={{ width: '100%', }}>
              <View style={{ margin: 20, backgroundColor: 'white', padding: 5 }}>
                <CustomText style={{ ...typescale.titleMedium, fontWeight: 600 }} text={'Transactions'} />
                <FlatList data={trx}
                  showsVerticalScrollIndicator={false}
                  renderItem={(probs) => <TransacList  {...probs} navigate={navigate} />} />
              </View>
            </TabView.Item>
            <TabView.Item style={{ width: '100%' }}>

              <View style={{ margin: 20, backgroundColor: 'white', padding: 5 }}>
                <CustomText style={{ ...typescale.titleMedium, fontWeight: 600 }} text={route.params.members.length + ' participants'} />
                <FlatList data={route.params.members}
                  showsVerticalScrollIndicator={false}
                  renderItem={(probs) => <ParticipantList {...probs} navigate={navigate} />} />
              </View>
            </TabView.Item>
          </TabView>
        </>
      </>
      {
        route.params.type !== "ROSCA" && (
          <FAB onPress={() => navigate.navigate("LoanTab")} style={{ position: "absolute", right: 1, bottom: 1, margin: 30 }} color="green" size="small" title="Request a loan" />

        )
      }

    </CustomPageCointainer>
  )
}
const TransacList = ({ index, item }) => {
  return (
    <View style={{ marginBottom: 10, marginLeft: 10 }}>
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
        <CustomText style={{ ...typescale.bodyMedium, fontWeight: 600, padding: 0 }} text={item.details} />

        <View style={{ flexDirection: "row", alignItems: "center", }}>
          <Icon size={15} color='green' type='feather' name={'plus'} />
          <Svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 12 11" fill="none">
            <Path d="M0 3.66667H1.5V0H3L5.565 3.66667H9V0H10.5V3.66667H12V4.88889H10.5V6.11111H12V7.33333H10.5V11H9L6.4275 7.33333H3V11H1.5V7.33333H0V6.11111H1.5V4.88889H0V3.66667ZM3 3.66667H3.8475L3 2.46278V3.66667ZM3 4.88889V6.11111H5.565L4.71 4.88889H3ZM9 8.55556V7.33333H8.1375L9 8.55556ZM6.42 4.88889L7.2825 6.11111H9V4.88889H6.42Z" fill="black" />
          </Svg>
          <CustomText style={{ ...typescale.bodyMedium, fontWeight: 600, padding: 0 }} text={item.amount+".00"||"2000.00"} />
        </View>
      </View>


      <CustomText style={{ ...typescale.labelSmall, fontWeight: 600, padding: 0 }} text={new Date(item.createdAt).toDateString()} />
      <Divider style={{ marginTop: 5 }} />
    </View>



  )

}

const ParticipantList = ({ index, item }) => {
  const [userName, setuserName] = useState("")
  const [userData, setuserData] = useState()
  const get = async () => {
    setuserData(await getData("userData"))
    const ss = await getUser(item)
    console.log({ ss })
    setuserName(ss)
  }

  useEffect(() => {
    get()
  }, [])

  return (
    <View style={{ flexDirection: "row", alignItems: "center", marginLeft: 10, }}>
      <Svg width="15" height="20" viewBox="0 0 22 21" fill="none">
        <Path d="M11 15.75C14.0376 15.75 16.5 13.3995 16.5 10.5C16.5 7.6005 14.0376 5.25 11 5.25C7.96243 5.25 5.5 7.6005 5.5 10.5C5.5 13.3995 7.96243 15.75 11 15.75Z" fill="#DA92E0" />
      </Svg>

      <CustomText style={{ ...typescale.titleMedium, fontWeight: 600, flexGrow: 1, paddingLeft: 0 }} text={userName} />
      <CustomText style={{ ...typescale.bodySmall, fontWeight: 600, }} text={userData.firstname + " " + userData?.lastname === userName && '(You)'} />

    </View>
  )

}

const styles = StyleSheet.create({


  container: {
    flex: 1,

    display: "flex",

    backgroundColor: palette.main_background_color,


  },
})