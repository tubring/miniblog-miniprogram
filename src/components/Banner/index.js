import * as React from 'react'
import {View, Text, Image, Button, navigateTo} from 'remax/one'
import {Swiper, SwiperItem} from 'remax/wechat'
import styles from './index.css'

export default (props)=>{

    const banners = props.banners

    const itemList = banners.map((banner)=>(
        <SwiperItem className={styles.banner_container} key={banner.id}>
            <Image className={styles.banner} src={banner.image_url} onTap={()=>(navigateTo('/pages/articles/detail?id='+banner.link_url))} />
        </SwiperItem>
    ))

                                                                
    return (
        <Swiper indicatorColor="red" indicatorDots={true} indicatorActiveColor="green" autoplay="true">
            <SwiperItem className={styles.container}>
                <Image className={styles.banner} src={"/examples/example.jpg"} />
            </SwiperItem>
            <SwiperItem className={styles.container}>
                <Image className={styles.banner} src={"/examples/example.jpg"} />
            </SwiperItem>

            {itemList}
        
        </Swiper>
    )

}