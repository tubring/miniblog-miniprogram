import * as React from 'react'
import { useQuery } from 'remax'
import { View, Text, Image, Input, Button} from 'remax/one'
import { RichText} from 'remax/wechat'
import styles from './detail.css'
import Comments from '../../components/Comments/index'
import { postComment, requestArticle } from '../../api'
import { AppContext } from '../../context/AppContext'
import toast from '../../components/Toast'

export default (props) => {
  
  const query = useQuery()

  const { appInfo } = React.useContext(AppContext)
  const [article, setArticle] =  React.useState({})
  const [commentTxt, setCommentTxt] = React.useState('')

  const id = query.id  

  React.useEffect(() => {
   
    requestArticle(id).then((res)=>{
      console.log(res)
      if(res.statusCode == 200){
        setArticle(res.data)
      }else if(res.statusCode==401){
        toast({title:'您没有访问权限!'})
      }
    })
    
    
  },[]);


  const commentInput = (event)=>{
    console.log(event.target.value);
    setCommentTxt(event.target.value);

  }

  const submitComment = (event)=>{
    console.log(event);
    console.log(commentTxt);

    if(appInfo['app.commentable']!==1){
      toast({title:'评论功能未开启!'})
      return
    }
   
    postComment(id,commentTxt).then((res)=>{
      if(res.statusCode==201){

      }
    })

  }
  
  return (
    <View className={styles.container}>
      <Image className={styles.photo} src="/examples/example.jpg"></Image>
      <Text className={styles.title}>{article.title}</Text>
      <View className={styles.article_info}>
        <Text className={styles.author}>作者：{article.author}</Text>
        <Text className={styles.posted_at}>{article.created_at}</Text>
      </View>
      <View className={styles.tags}>
        <Text className={styles.label}>标签1</Text>
        <Text className={styles.label}>标签2</Text>
      </View>
      <View className={styles.content}>
        <RichText nodes={article.content}></RichText>
      </View>

      {/* comments List component */}
      <View className={styles.comments}>
        <Comments comments={article.comments}></Comments>
      </View>
      {/*end of comment list */}

      {/* Reply Input */}
      {appInfo['commentable']&&article.commentable?
        <View className={styles.reply}>
          <Input className={styles.input} value={commentTxt} onInput={(event)=>{commentInput(event)}} placeholder="发表您的看法"/>
          <Button className={styles.submit} onTap={(event)=>(submitComment(event))}>提交</Button>
        </View>
        :''
      }
      {/* End of Input*/}

    </View>
  )

}
