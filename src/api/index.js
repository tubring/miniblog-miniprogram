import { promisify } from '@remax/framework-shared'
import {api_host} from './api.config'
import { authRequest } from "./auth"

const request = promisify(wx.request)

const requestIndex = ()=>{
    let url = api_host + 'index'
    return request({url})
}

const requestArticles = (params={}) =>{
    let url = api_host + 'articles'
    if(params.keywords){
        url += '?keywords=' + params.keywords
    }
    if(params.category_id){
        url += '?category_id=' + params.category_id
    }
    return request({url})
}

const requestArticle = (id) =>{
    let url = api_host + 'articles/' + id
    return authRequest({url})
}

const postComment = (id,data)=>{
    let postData ={
        url: api_host + 'articles/' + id +'/comments',
        method:'POST',
        data:{
            content:data
        }
    }
    return authRequest(postData)
}

const updateComment = (id, data)=>{
    let updateData ={
        url: api_host + 'comments/' + id ,
        method:'PUT',
        data:{
            content:data
        }
    }
    return authRequest(updateData)
}

const deleteComment = (id)=>{
    let url = api_host + 'comments/' + id
    return authRequest({url,method:'DELETE'})
}

const requestCategories = () =>{
    let url = api_host + 'category' 
    return authRequest({url})
}

//无需登录
const requestInfo = ()=>{
    let url = api_host + 'app-info'
    return request({url})
}

const postFeedback = (data)=>{
    let url = api_host + 'feedback'

    return authRequest({url,data:data,method:'POST'})
}



export {requestIndex, requestArticles, requestArticle, requestCategories, postComment, updateComment, deleteComment, requestInfo, postFeedback}