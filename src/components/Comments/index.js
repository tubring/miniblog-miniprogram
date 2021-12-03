import * as React from 'react';
import { View, Image, Text } from 'remax/one';
import styles from './index.css';

export default (props)=>{
    const comments = props.comments?props.comments:[]

    const commentList = comments.map((comment)=>{
        return (
            <View className={styles.comment_item} key={comment.id}>
                <View class={styles.left}>
                    <Image className={styles.avatar} src={comment.user?comment.user.avatar:''}></Image>
                </View>
                <View className={styles.right}>
                    <View className={styles.post_info}>
                        <Text className={styles.username}>{comment.user?comment.user.nickname:''}</Text>
                        <Text className={styles.posted_at}>{comment.created_at}</Text>
                    </View>
                    <Text className={styles.comment}>{comment.content}</Text>
                    
                </View>
            </View>
        )

    });

    

    return (
        <View className={styles.comment_container}>{commentList}</View>
    )

}