import {api_host} from './api.config'
import { promisify } from '@remax/framework-shared'

const getUserInfo = promisify(wx.getUserInfo)
const login = promisify(wx.login)
const request = promisify(wx.request)
const setStorage = promisify(wx.setStorage)


const wechatLogin = ()=>{
    let url = api_host + 'login/wechat'
    login().then((res)=>{
        if(res.data.code){
            url += '?code' + res.data.code
        }
        return request({url})
    }).then((res)=>{
        if(res.statusCode =='200'){
            let token = res.data.token
            
            setStorage({key:'token',data:token})

            $data = {
                withCredentials:true
            }
            return getUserInfo()
        }
    })
}