import React from 'react'
import { Image, Text, View } from 'remax/one'
import { Button, getUserInfo, OpenData } from 'remax/wechat'
import styles from './index.css'


export default (props)=>{

    return (
        <View>
            <View className={styles.header}>
                <Image className={styles.avatar} src=""></Image>
            </View>
            <View className={styles.content}>
                <View>申请获得以下权限</View>
                <Text className={styles.text_info}>获得你的公开信息(昵称，头像等)</Text>
                <Button className={styles.auth_buttuon} openType="getUserInfo" lang="zh_CN" onGetUserInfo={(event)=>{
                    console.log(event.detail.userInfo)
                }}>授权登录</Button>
            </View>

        </View>
    )


}