import * as React from 'react';
import { View, Text,Input, Image, navigateTo} from 'remax/one';
import styles from './index.css';
import {ArticleList} from '../../components/ArticleList/index';
import Banners from '../../components/Banner/index'
import LoginButton from '../../components/LoginButton'
import { requestIndex } from '../../api';

export default () => {

  const [data, setData] = React.useState({
    banners: [{id:1, image_url:'/examples/example.jpg',link_url:1}],
    articles:[]
  });

  const requestData = ()=>{
    requestIndex().then((res)=>{
      console.log('indexRequest:',res);
      if(res.statusCode==200){
        console.log('success:');
        setData(res.data);
      }
    })
  }

  React.useEffect(()=>{
    requestData()
  },[]);

  const searchArticle = (event)=>{
    console.log(event);
    var keywords = event.target.value;
    if(keywords.trim()){
      return;
    }

    navigateTo('/pages/article/index?keywords='+keywords)

  }


  return (
    <View className={styles.app}>

      <View>
        <Banners banners={data.banners} />
      </View>

      <View>
        <Input className={styles.search} onConfirm={(event)=>{searchArticle(event)}} placeholder="搜索"/>
      </View>

      <View className={styles.article_container}>
        <ArticleList articles={data.articles} />
      </View>
      
    </View>
  );
};


