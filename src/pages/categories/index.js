import * as React from 'react';
import { View, Text, Image, navigateTo } from 'remax/one';
import { requestCategories } from '../../api';
import styles from './index.css';

export default () => {

  const [category, setCategory] = React.useState([]);

  React.useEffect(()=>{
    requestCategories().then((res)=>{
      console.log(res);
      if(res.statusCode=='200'){
        setCategory(res.data);
      }
    })
  },[])

  const categoryList = category.map((item)=>(
    <View className={styles.cate_item} key={item.id} onTap={
      ()=>{
        navigateTo({url:'/pages/article/index?category_id='+item.id})
      }
    }>
      <Text>{item.name}</Text>
    </View>
  ))

  return (
    <View className={styles.container}>
      
      <View className={styles.cate_item} onTap={()=>{
          navigateTo({url:'/pages/article/index'})
        }
      }>
        <Text>全部</Text>
      </View>
      
      {categoryList}
    </View>
  );
};
