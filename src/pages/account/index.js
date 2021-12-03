import * as React from 'react';
import { View, Text, Input, Image } from 'remax/one';
import styles from './index.css';
import UserInfo from '../../components/UserInfo'
import { AppContext } from '../../context/AppContext';

export default (props) => {

  const value = React.useContext(AppContext)


  const [currentTabId,setCurrentTabId] = React.useState(0)

  const navActive = (event) =>{
    let currentId = event.currentTarget.dataset.id
    setCurrentTabId(currentId)
  }

  React.useEffect(()=>{
    console.log(value)
  },[])

  return (
    <View className={styles.container}>
      
      {/* 未登录 */}
      <View className={styles.header}>
        <UserInfo />
      </View>

      <View className={styles.my_info}>
          <View className={styles.nav}>
            <Text className={styles.nav_item + (currentTabId==0?' '+styles.active:'')} onTap={(event)=>{navActive(event)}} data-id="0">浏览</Text>
            <Text className={styles.nav_item + (currentTabId==1?' '+styles.active:'')} onTap={(event)=>{navActive(event)}} data-id="1">点赞</Text>
            <Text className={styles.nav_item + (currentTabId==2?' '+styles.active:'')} onTap={(event)=>{navActive(event)}} data-id="2">评论</Text>
          </View>
          <View className={styles.nav_content}>
            <View className={styles.content_list + ' ' + (currentTabId==0?styles.show:styles.hidden)} >
              浏览历史
            </View>
            <View className={styles.content_list + ' ' + (currentTabId==1?styles.show:styles.hidden)} >
              点赞列表/收藏列表
            </View>
            <View className={styles.content_list + ' ' + (currentTabId==2?styles.show:styles.hidden)} >
              评论列表
            </View>
          </View>
      </View>

    </View>
  );
};
