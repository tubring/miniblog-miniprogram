import * as React from 'react'
import { useAppEvent } from 'remax/macro'
// import { getUserInfo, login, request, setStorageSync } from 'remax/wechat'
import { api_host } from './api/api.config'
import { requestInfo } from './api'
import { AppContext } from './context/AppContext'
import { promisify } from '@remax/framework-shared'
import './app.css'


// const getUserInfo = promisify(wx.getUserInfo)
const login = promisify(wx.login)
const request = promisify(wx.request)
const setStorageSync = promisify(wx.setStorageSync)


const App = props => {

    const [userInfo,setUserInfo] = React.useState(null);
    const [appInfo, setAppInfo] = React.useState({
        "app.name": "日思录",
        "app.slogan": "自言自语、自娱自乐，所思所想、所见所闻",
        "app.about":'About '
    });

    useAppEvent('onLaunch',()=>{
        console.log('onLaunch for function component')
        //获取网站基础信息
        requestInfo().then((res)=>{
            if(res.statusCode==200){
                setAppInfo(res.data)
            }
        })

        // userLogin()
    });


    React.useEffect(()=>{
        userLogin()
    },[])

    const userLogin = ()=>{
        return login().then((res)=>{
            let url = api_host + 'login/wechat'
            console.log('code:',res.code)
            if(res.code){

                url += '?code=' + res.code
            }
            return request({url})

        }).then((res)=>{
            console.log(res)
            if(res.statusCode==200){
                setUserInfo(res.data.user)
                // setStorageSync('token',res.data.token)
            }
        })
    }

    return (
        <AppContext.Provider
            value={{userInfo,setUserInfo,userLogin,appInfo}} 
        >
            {props.children}
        </AppContext.Provider>
    );
}

export default App;
