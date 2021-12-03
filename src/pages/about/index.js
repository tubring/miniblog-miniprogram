import { RichText } from '@remax/wechat';
import * as React from 'react'
import { View, Text, Image } from 'remax/one'
import { requestInfo } from '../../api'
import { AppContext } from '../../context/AppContext';
import styles from './index.css'

export default () => {

  const { appInfo } = React.useContext(AppContext);

  return (
    <View className={styles.container}>
      <View className={styles.header}>
        <View>
          <Text className={styles.title}>{appInfo['app.name']}</Text>
          <Text className={styles.slogan}>一只妄图语冰的夏虫 {appInfo['app.slogan']}</Text>
        </View>
      </View>
      <View className={styles.body}>
        <RichText nodes={appInfo["app.about"]+"<p>自言自语、自娱自乐，所思所想、所见所闻。</p>"}></RichText>
      </View>
    </View>
  );
};
