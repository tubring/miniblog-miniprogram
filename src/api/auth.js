import { api_host } from "./api.config"
import { promisify } from '@remax/framework-shared'


const request = promisify(wx.request)
const getStorageSync = promisify(wx.getStorageSync)

const authRequest = (data)=>{
    let token = getStorageSync('token')
    // console.log('token:',token)
    let header = {
        Accept:'application/json',
        Authorization:'Bearer ' + token,
    }
    return request({...data,header})
}

export { authRequest }