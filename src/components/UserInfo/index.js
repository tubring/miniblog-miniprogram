import React from 'react'
import { Image, View, Text } from 'remax/one'
import { OpenData } from 'remax/wechat'
import { AppContext } from '../../context/AppContext'
import styles from './index.css'

export default ()=>{

    const {userInfo} = React.useContext(AppContext)

    return (
        <View className={styles.user_info}>

            {/* <View className="">
                <Image className={styles.avatar} src={userInfo.avatar_url} />
                <Text className={styles.nickname}>{userInfo.nickname}</Text>
            </View> */}

            <View className={styles.avatar}>
                <OpenData type="userAvatarUrl" ></OpenData>
            </View>
            <View className={styles.nickname}>
                <OpenData type="userNickName" ></OpenData>
            </View>
        </View>
    )

}