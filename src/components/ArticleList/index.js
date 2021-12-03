import * as React from 'react';
import { View, Text, Input, Image, navigateTo } from 'remax/one';
import styles from './index.css';
import {formateTime} from '../../utils/index'


const ArticleList = (props) => {

  const articles = props.articles;

  React.useEffect(()=>{
    console.log('articles:',props.articles);
  },[])

  const renderList = articles.map((article)=>{
    return (
      <View className={styles.article} key={article.id}>
        <Image className={styles.photo} src={"/examples/example.jpg"} />
        <View className={styles.content}>
          <Text className={styles.posted_at}>{formateTime(article.created_at)}</Text>
          <Text className={styles.title} onTap={()=>navigateTo({url:'/pages/article/detail?id='+article.id})}>{article.title}</Text>
          <Text className={styles.brief}>{article.description}</Text>
        </View>
        
      </View>
    )

  })


  return (
    <View>
      { renderList }
    </View>
  );
};


export {ArticleList};