import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from '../../constants/theme';
import { hp, isDarkMode } from '../../helpers/common';
import { FlatList } from 'react-native';
import { Image } from 'expo-image';

const Notifications = () => {
    const theme = useTheme();
    const dark = isDarkMode();
    const styles = StyleSheet.create({
        cardBg: {
            margin: 10
        }
    })
    const data = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            name: "Suhail",
            age: 25,
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            name: "Suhail",
            age: 22,
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            name: "Suhail",
            age: 30,
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d78',
            name: "Suhail",
            age: 40,
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d70',
            name: "Suhail",
            age: 10,
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d99',
            name: "Suhail",
            age: 42,
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d7sdf',
            name: "Suhail",
            age: 31,
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d9vv',
            name: "Suhail",
            age: 33,
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d7ddf',
            name: "Suhail",
            age: 44,
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29dvs9vv',
            name: "Muhammed Suhail",
            age: 62,
        },
    ];
    return (
        <FlatList
            // ListHeaderComponent={<Header />}
            data={data}
            renderItem={({ item }) => <NotificationCard item={item} />}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.cardBg}
        />
    )
}

export default Notifications;


const NotificationCard = ({ item }) => {
    const theme = useTheme();
    const styles = StyleSheet.create({
        image: {
            height: hp(7),
            width: hp(7),
            overflow: 'hidden',
            borderRadius: 100,
        },
        flex: {
            display: 'flex',
            flexDirection: 'row',
        },
        text: {
            color: theme.colors.text,
            fontFamily: 'Poppins',
            fontSize: 16
        }
    })
    return (
        <View style={{ ...styles.flex, gap: 20, margin: 10 }}>
            <Image
                style={styles.image}
                source="https://imgs.search.brave.com/mcOdqwcFzAhtP2cbePhQ75If1XH6gRMnTebpabURp88/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLWNsYW4u/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDI0LzExL2hhcHB5/LWx1ZmZ5LXNtaWxp/bmctam95ZnVsLWV4/cHJlc3Npb24tZGVz/a3RvcC13YWxscGFw/ZXItY292ZXIuanBn"
                contentFit="fill"
            />
            <Text style={styles.text}>Notifications</Text>
            <Text style={{ ...styles.text, position: 'absolute', bottom: 0, right: 0, fontSize: 12 }}>1 hr ago</Text>
        </View>
    )
}