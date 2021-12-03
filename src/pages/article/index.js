import * as React from 'react'
import { ArticleList} from '../../components/ArticleList/index'
import { View } from 'remax/one'
import { useQuery } from 'remax'
import { requestArticles } from '../../api'

export default (props)=>{
    
    const query = useQuery()

    const [articles, setArticles] = React.useState([])

    React.useEffect(()=>{
        let params = {}
        if(query.keywords){
            params = {keywords: query.keywords}
        }else if(query.category_id){
            params = {category_id:query.category_id}
        }
        
        requestArticles(params).then((res)=>{
            if(res.statusCode=='200'){
                setArticles(res.data.data);
            }

        })

    },[])
    
    return (
        <View>
            <ArticleList articles={articles}></ArticleList>
        </View>
    )

}