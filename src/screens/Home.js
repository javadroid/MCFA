import { View, Text, FlatList, TouchableOpacity, Platform } from 'react-native'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import CustomPageCointainer from '../components/CustomPageContainer'
import { StyleSheet } from 'react-native'
import CustomText from '../components/CustomText'
import { Image } from 'react-native'
import { typescale } from '../constants/Typography'
import { palette } from '../constants/Colors'
import { Avatar, Badge, Icon, withBadge } from '@rneui/themed';
import Svg, { Path, G, Defs, ClipPath, Rect } from 'react-native-svg';
import { useWindowDimensions } from 'react-native'
import TransactionList, { TransactionView } from '../components/TransactionList'
export default function Home() {
    const width = useWindowDimensions().width
    const [position, setposition] = useState(1);
    // Access the FlatList by creating a ref
    const flatListRef = useRef(null);
    const scrollToIndex = (index) => {
        flatListRef.current.scrollToIndex({ index, animated: true });
    };
    const onScroll = (event) => {
        const offsetY = event.nativeEvent.contentOffset.x;
        const index = Math.floor(offsetY / width * 0.9 * 1.8); // Adjust ITEM_HEIGHT according to your item's height

        if (index <= 2) {
            setposition(index + 1);
       
        }

        // 
    };




    return (
        <CustomPageCointainer edgeTop={'top'} style={styles.container} >
            
            <View style={styles.applogcontainer} >
                <View style={{ flexDirection: "row" }}>
                    <CustomText text='MC' numberOfLines={undefined} style={{ ...typescale.titleMedium, fontSize: 20, fontWeight: 700, paddingRight: 0, paddingLeft: 0 }} />
                    <CustomText text='FA' numberOfLines={undefined} style={{ ...typescale.titleMedium, fontSize: 20, fontWeight: 700, paddingLeft: 0, color: palette.text_pupple_color1 }} />

                </View>

                <View style={{}}>
                    <Svg xmlns="http://www.w3.org/2000/svg" width="27" height="26" viewBox="0 0 27 26" fill="none">
                        <G clip-path="url(#clip0_45_695)">
                            <Path d="M24.6376 20.3161L24.3826 20.0995C23.6592 19.4788 23.026 18.767 22.5001 17.9834C21.9258 16.9019 21.5815 15.7208 21.4876 14.5095V10.9417C21.4926 9.03909 20.7759 7.20021 19.4722 5.77057C18.1684 4.34093 16.3675 3.41894 14.4076 3.17782V2.24615C14.4076 1.99044 14.3021 1.7452 14.1143 1.56438C13.9266 1.38356 13.6719 1.28198 13.4063 1.28198C13.1408 1.28198 12.8861 1.38356 12.6984 1.56438C12.5106 1.7452 12.4051 1.99044 12.4051 2.24615V3.19226C10.4628 3.45076 8.68358 4.37833 7.39699 5.80317C6.11041 7.22801 5.40365 9.05356 5.4076 10.9417V14.5095C5.31366 15.7208 4.96943 16.9019 4.3951 17.9834C3.87826 18.7651 3.25524 19.4767 2.5426 20.0995L2.2876 20.3161V22.3528H24.6376V20.3161Z" fill="#C34FCD" />
                            <Path d="M11.49 23.1111C11.5558 23.5689 11.7913 23.9883 12.1532 24.2919C12.5151 24.5955 12.9788 24.7627 13.4587 24.7627C13.9387 24.7627 14.4024 24.5955 14.7643 24.2919C15.1261 23.9883 15.3617 23.5689 15.4275 23.1111H11.49Z" fill="#C34FCD" />
                        </G>
                        <Defs>
                            <ClipPath id="clip0_45_695">
                                <Rect width="27" height="26" fill="white" />
                            </ClipPath>
                        </Defs>
                    </Svg>
                    <Badge
                        status="success"
                        containerStyle={{ position: 'absolute', top: 3, left: 18 }}
                    />
                </View>
            </View>
            <View style={{alignItems: 'center',}}>
                <View style={styles.cardMain}>

                <CustomText text='Hi Jessica' numberOfLines={undefined} style={{ ...typescale.titleMedium, fontSize: 18, fontWeight: 600, paddingRight: 0, paddingLeft: 0, color: palette.main_background_color }} />

                <View style={{ flexDirection: "row", alignItems: "center", flexShrink: 1, }}><Avatar
                    rounded
                    source={{
                        uri: 'https://randomuser.me/api/portraits/women/40.jpg',
                    }}
                    size="medium"
                />
                    <View style={{ flexDirection: "column", marginLeft: 6, }}>
                        <CustomText text='Welcome to MCFA' numberOfLines={undefined} style={{ ...typescale.bodySmall, fontSize: 13, fontWeight: 600, padding: 0, color: palette.main_background_color }} />


                        <CustomText text='Your quick path to seamless savings and 
                            smart borrowing. Contribute, track, and 
                            manage effortlessly. For a financially 
                            stress-free life, choose StashFund.'
                            numberOfLines={undefined} style={{ ...typescale.bodySmall, flexShrink: 1, fontSize: 13, fontWeight: 600, paddingRight: 0, paddingLeft: 0, color: palette.main_background_color }} />

                    </View>


                </View>


            </View>
                </View>
            

            <Progress position={position} />
            <View style={{ flexDirection: "row", marginRight: -34, marginLeft: -10 }}>
                <FlatList ref={flatListRef} showsHorizontalScrollIndicator={false} horizontal data={[1, 2, 3]}
                    renderItem={(probs) => <CardBalance visible={true} {...probs} />}
                    keyExtractor={(item, index) => index.toString()}

                    onScroll={onScroll}
                    scrollEventThrottle={30}

                    onScrollToIndexFailed={(info) => console.warn('Scroll to index failed:', info)}
                />
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
                <ButtonCircle text='Add Fund' />
                <ButtonCircle name='minus' text='Withdraw Fund' />
                <ButtonCircle name='minimize-2' text='Transfer Fund' />
            </View>
            <View style={{alignSelf:"flex-start", flexDirection: "row", justifyContent:"space-between", width: "110%" ,marginLeft:-15  }}>
                <BoxContain balance={"770.00"} text="Loan" />
                <BoxContain balance={"770.00"} text="Contribution" />
                <BoxContain />
            </View>
            <View style={{justifyContent:"space-between",alignItems:"center",flexDirection:"row", width:"100%",marginTop:10}}>
                <CustomText style={{...typescale.bodyMedium,color:palette.text_black_color1,fontWeight:600}} text='Recent transactions'/>
                <CustomText style={{...typescale.bodyMedium,color:palette.text_pupple_color1,fontWeight:600}} text='View all'/>
            </View>
            {/* <View style={{width:"100%",backgroundColor:"red",zIndex:-100}}> */}
            <TransactionList />
            {/* </View> */}
            

        </CustomPageCointainer>
    )
}


const Progress = ({ position = 1 }) => {

    return (

        <View style={{ alignSelf: "center", marginTop: 5, flexDirection: "row" }}>

            <View style={{ height: 1.5, width: 20, marginLeft: 10, backgroundColor: position === 1 ? palette.card_blue_color1 : palette.hiddenblue, }}>

            </View>
            <View style={{ height: 1.5, width: 20, marginLeft: 10, backgroundColor: position === 2 ? palette.card_red_color1 : palette.hiddenblue, }}>

            </View>
            <View style={{ height: 1.5, width: 20, marginLeft: 10, backgroundColor: position === 3 ? palette.card_orange_color1 : palette.hiddenblue, }}>

            </View>
        </View>
    )
}

const CardBalance = ({ visible, index, key, item }) => {
    const width = useWindowDimensions().width
   
    return (

        <View style={{ borderRadius: 8, elevation: 5, backgroundColor: "white", marginVertical: 20, paddingRight: 0, marginRight: 10, width: width * 0.9 }}>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 20, paddingVertical: 10, }}>

                <View style={{ justifyContent: "space-between", }}>
                    <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}>
                        <Svg width="22" height="19" viewBox="0 0 22 19" fill="none">
                            <Path d="M3.66675 7.125H5.50008V2.375H7.33342L10.4684 7.125H14.6667V2.375H16.5001V7.125H18.3334V8.70833H16.5001V10.2917H18.3334V11.875H16.5001V16.625H14.6667L11.5226 11.875H7.33342V16.625H5.50008V11.875H3.66675V10.2917H5.50008V8.70833H3.66675V7.125ZM7.33342 7.125H8.36925L7.33342 5.56542V7.125ZM7.33342 8.70833V10.2917H10.4684L9.42342 8.70833H7.33342ZM14.6667 13.4583V11.875H13.6126L14.6667 13.4583ZM11.5134 8.70833L12.5676 10.2917H14.6667V8.70833H11.5134Z" fill="black" />
                        </Svg>
                        <CustomText style={{ ...typescale.titleMedium, fontSize: 18, fontWeight: 700, padding: 0 }} text={visible ? '770.00' : '***.**'} />
                    </View>
                    <CustomText style={{ ...typescale.titleMedium, fontSize: 18, fontWeight: 600, padding: 0, color: palette.text_white_color2, }}
                        text={index === 0 ? 'Account balance' : index === 1 ? 'Total savings balance' : 'Total outstanding loan'} />
                </View>
                <Icon onPress={() => { }} type='feather' name={visible ? 'eye' : 'eye-off'} />
            </View>

            <View style={{ borderBottomEndRadius: 8, borderBottomStartRadius: 8, height: 16, backgroundColor: index === 0 ? palette.card_blue_color1 : index === 1 ? palette.card_red_color1 : palette.card_orange_color1 }}>

            </View>
        </View>


    )
}

const ButtonCircle = ({ type = 'feather', name = 'plus', onPress, text = "Add Fund" }) => {
    return (
        <TouchableOpacity style={{ justifyContent: "center", alignItems: "center" }} onPress={onPress} >
            <View style={{ borderRadius: 100, backgroundColor: "#EEEEEE", width: 49, height: 49, justifyContent: "center", alignItems: "center" }}>
                <View style={{ borderRadius: 100, backgroundColor: "black" }}>
                    <Icon style={{ zIndex: 100 }} color={'white'} type={type} name={name} />
                </View>
            </View>


            <CustomText text={text} style={{ ...typescale.labelMedium }} numberOfLines={undefined} />
        </TouchableOpacity>
    )
}

const BoxContain = ({ type = 'feather', name = 'plus', onPress, visible = true, text, balance }) => {
    const width = useWindowDimensions().width
    return (
        <TouchableOpacity onPress={onPress} style={{ backgroundColor: "#EEEEEE", borderRadius: 8, elevation: 5, minWidth: width * 0.25 }}>


            <View style={{ flexDirection: "row", alignItems: "center", marginLeft: 10, marginRight: 20 }}>
                {
                    text === 'Loan' && (<>
                        <Svg width="9" height="8">
                            <Path
                                d="M6.40385 1.91304C6.40385 1.53468 6.29219 1.16481 6.08299 0.850214C5.87379 0.535616 5.57645 0.290416 5.22857 0.145623C4.88069 0.000828893 4.49789 -0.0370557 4.12858 0.0367594C3.75927 0.110575 3.42004 0.292774 3.15378 0.560318C2.88752 0.827862 2.7062 1.16873 2.63274 1.53983C2.55928 1.91092 2.59698 2.29557 2.74108 2.64513C2.88517 2.9947 3.12919 3.29347 3.44228 3.50368C3.75537 3.71389 4.12346 3.82609 4.5 3.82609C5.00476 3.82551 5.48867 3.62378 5.84559 3.26513C6.20251 2.90649 6.40327 2.42024 6.40385 1.91304ZM4.5 3.13043C4.26038 3.13043 4.02614 3.05904 3.82691 2.92527C3.62767 2.7915 3.47238 2.60137 3.38069 2.37892C3.28899 2.15647 3.26499 1.91169 3.31174 1.67554C3.35849 1.43939 3.47388 1.22247 3.64331 1.05222C3.81275 0.881963 4.02863 0.766018 4.26364 0.719045C4.49866 0.672071 4.74226 0.69618 4.96364 0.788321C5.18502 0.880463 5.37423 1.0365 5.50736 1.2367C5.64048 1.4369 5.71154 1.67227 5.71154 1.91304C5.71154 2.23592 5.5839 2.54556 5.35669 2.77387C5.12948 3.00217 4.82132 3.13043 4.5 3.13043ZM7.09615 4.17391C6.71961 4.17391 6.35152 4.28611 6.03843 4.49632C5.72535 4.70653 5.48133 5.0053 5.33723 5.35487C5.19313 5.70443 5.15543 6.08908 5.22889 6.46017C5.30235 6.83127 5.48367 7.17214 5.74993 7.43968C6.01619 7.70723 6.35542 7.88943 6.72473 7.96324C7.09404 8.03706 7.47684 7.99917 7.82472 7.85438C8.17261 7.70958 8.46995 7.46438 8.67914 7.14979C8.88834 6.83519 9 6.46532 9 6.08696C8.99943 5.57976 8.79866 5.09351 8.44174 4.73487C8.08483 4.37623 7.60091 4.17449 7.09615 4.17391ZM7.09615 7.30435C6.85653 7.30435 6.6223 7.23295 6.42306 7.09918C6.22382 6.96541 6.06854 6.77528 5.97684 6.55283C5.88514 6.33038 5.86115 6.08561 5.9079 5.84945C5.95464 5.6133 6.07003 5.39639 6.23947 5.22613C6.4089 5.05588 6.62478 4.93993 6.85979 4.89296C7.09481 4.84598 7.33841 4.87009 7.55979 4.96223C7.78117 5.05438 7.97039 5.21041 8.10351 5.41061C8.23664 5.61081 8.30769 5.84618 8.30769 6.08696C8.30769 6.40983 8.18005 6.71948 7.95284 6.94778C7.72563 7.17609 7.41747 7.30435 7.09615 7.30435ZM1.90385 4.17391C1.5273 4.17391 1.15921 4.28611 0.846127 4.49632C0.533041 4.70653 0.28902 5.0053 0.144923 5.35487C0.000824908 5.70443 -0.0368776 6.08908 0.0365827 6.46017C0.110043 6.83127 0.291367 7.17214 0.557624 7.43968C0.823882 7.70723 1.16312 7.88943 1.53243 7.96324C1.90173 8.03706 2.28453 7.99917 2.63242 7.85438C2.9803 7.70958 3.27764 7.46438 3.48684 7.14979C3.69603 6.83519 3.80769 6.46532 3.80769 6.08696C3.80712 5.57976 3.60635 5.09351 3.24944 4.73487C2.89252 4.37623 2.4086 4.17449 1.90385 4.17391ZM1.90385 7.30435C1.66423 7.30435 1.42999 7.23295 1.23075 7.09918C1.03152 6.96541 0.87623 6.77528 0.784531 6.55283C0.692833 6.33038 0.66884 6.08561 0.715588 5.84945C0.762335 5.6133 0.877723 5.39639 1.04716 5.22613C1.2166 5.05588 1.43247 4.93993 1.66749 4.89296C1.9025 4.84598 2.1461 4.87009 2.36748 4.96223C2.58886 5.05438 2.77808 5.21041 2.9112 5.41061C3.04433 5.61081 3.11539 5.84618 3.11539 6.08696C3.11539 6.40983 2.98774 6.71948 2.76053 6.94778C2.53333 7.17609 2.22517 7.30435 1.90385 7.30435Z" fill="#5D5959" />

                        </Svg>
                    </>)
                }
                {
                    text === 'Contribution' && (<>
                        <Svg width="9" height="9">
                            <Path
                                d="M4.14459 5.41476H2.87316C2.79791 5.41476 2.73698 5.47569 2.73698 5.55093V7.52499C2.73698 7.60023 2.79791 7.66116 2.87316 7.66116H4.14459C4.21983 7.66116 4.28067 7.60023 4.28067 7.52499V5.55084C4.28067 5.4756 4.21974 5.41476 4.14459 5.41476ZM6.12702 1.33911H4.85559C4.78035 1.33911 4.71942 1.40004 4.71942 1.47528V7.5249C4.71942 7.60014 4.78035 7.66107 4.85559 7.66107H6.12702C6.20226 7.66107 6.26319 7.60014 6.26319 7.5249V1.47528C6.26319 1.40004 6.20226 1.33911 6.12702 1.33911ZM8.11962 3.177H6.84818C6.77294 3.177 6.71202 3.23793 6.71202 3.31317V7.5249C6.71202 7.60014 6.77294 7.66107 6.84818 7.66107H8.11953C8.19477 7.66107 8.2557 7.60014 8.2557 7.5249V3.31317C8.2557 3.23802 8.19477 3.177 8.11962 3.177ZM2.15198 3.177H0.880555C0.805315 3.177 0.744385 3.23793 0.744385 3.31317V7.5249C0.744385 7.60014 0.805315 7.66107 0.880555 7.66107H2.15198C2.22722 7.66107 2.28815 7.60014 2.28815 7.5249V3.31317C2.28815 3.23802 2.22722 3.177 2.15198 3.177Z" fill="#5D5959" />

                        </Svg>
                    </>)
                }
                <CustomText style={{ ...typescale.labelSmall, padding: 0, marginVertical: 5, marginLeft: 2 }} text={text} />


            </View>

            <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10, marginLeft: 10, marginRight: 20 }}>
                {
                    balance && (<>
                        <Svg width="16" height="12" viewBox="0 0 16 12" fill="none">

                            <Path d="M2.66675 4.5H4.00008V1.5H5.33342L7.61342 4.5H10.6667V1.5H12.0001V4.5H13.3334V5.5H12.0001V6.5H13.3334V7.5H12.0001V10.5H10.6667L8.38008 7.5H5.33342V10.5H4.00008V7.5H2.66675V6.5H4.00008V5.5H2.66675V4.5ZM5.33342 4.5H6.08675L5.33342 3.515V4.5ZM5.33342 5.5V6.5H7.61342L6.85342 5.5H5.33342ZM10.6667 8.5V7.5H9.90008L10.6667 8.5ZM8.37342 5.5L9.14008 6.5H10.6667V5.5H8.37342Z" fill="black" />

                        </Svg>
                    </>)
                }
                <CustomText style={{ ...typescale.bodyMedium, fontWeight: 600, padding: 0 }} text={visible ? balance : '***.**'} />
            </View>

            <View style={{ borderBottomEndRadius: 8, borderBottomStartRadius: 8, height: 30, justifyContent: "center", alignItems: "center", backgroundColor: "#E3E3E3" }}>
                <CustomText style={{ ...typescale.bodySmall, fontWeight: 600, padding: 0 }} text={text&&"Apply now"} />
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    cardMain: {
        // Android styles
        elevation: 5,
        flexShrink: 1,
        backgroundColor: palette.card_pupple_color1,
        // marginRight: 40,
        borderRadius: 8,
        paddingHorizontal: 20,
        paddingVertical: 8,
        paddingRight: 40,
        // iOS styles
        ...Platform.select({
            ios: {
                shadowColor: 'rgba(0, 0, 0, 0.25)',
                shadowOffset: {
                    width: 3,
                    height: 4,
                },
                shadowOpacity: 1,
                shadowRadius: 1.5,
            },
        }),
    },

    container: {
        flex: 1,

        display: "flex",

        backgroundColor: palette.main_background_color,
        
        paddingHorizontal: 34,
    },
    applogcontainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "space-between",
        alignSelf: "baseline",
        marginTop: 30,
        width: "100%"
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
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
        width: "100%",
        borderColor: palette.boarder_color1,
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 9,
        paddingVertical: 14,
        marginVertical: 7,
        // marginHorizontal:100,

    },

    phoneinput: {
        ...typescale.bodyMedium,
        flexGrow: 1,
        fontWeight: "600",
    },
})