const { json } = require('express');
const express = require('express');
const app = express();
app.get('/json-sever', (request, response) => {
    const data = [
        {
            "id": 101,
            "src": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c5c752522100ecd364cc53752bb660bc.jpg?thumb=1&w=220&h=220&f=webp&q=90",
            "src1": "https://cdn.cnbj1.fds.api.mi-img.com/product-images/xiaomicivibfbefe/section1-1.png",
            "price": 2599,
            "mesge1": "「购机可享6期免息；评价晒单前5000名送Xiaomi Civi 马卡龙色系硅胶保护壳；购机享碎屏保、延保5折",
            "mesge2": "轻薄潮流设计 | 丝绒AG工艺 | 原生美肌人像 | 像素级肌肤焕新技术 | 3200万高清质感自拍 | 双柔光灯+自动对焦 | 3D曲面OLED柔性屏 | 120Hz+Dolby Vision | 4500mAh 大电量 | 55W有线闪充 | 立体声双扬声器 | 多功能NFC",
            "intrduce": "Xiaomi Civi",
            "name": "Xiaomi Civi",
            "shoppingImg": "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1632713426.30988142.jpg"
        },
        {
            "id": 102,
            "src": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab07e0fcbec3beb8b0f409db8bee8da4.jpg?thumb=1&w=220&h=220&f=webp&q=90",
            "price": 4999,
            "mesge1": "「MiCare立省50元；最高享24期分期免息；建行信用卡分期最高减216元」",
            "mesge2": "CUP全面屏 | 真彩原色 + 120Hz | 一体化轻量陶瓷机身 | 高通骁龙™888+ | WiFi 6 增强版 | 石墨烯「冰封」散热系统4500mAh 大电量 | 常温 120W 快充 | 50W 无线快充 | 1 亿像素电影相机",
            "src1": "https://cdn.cnbj1.fds.api.mi-img.com/product-images/mix4/banner.jpeg",
            "intrduce": "CPU全面屏",
            "name": "Xiaomi Mix4",
            "shoppingImg": "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1628588553.56819324.jpg"
        },
        {
            "id": 103,
            "src": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/61454401f855cf5ed64747a6ac04bae5.jpg?thumb=1&w=220&h=220&f=webp&q=90",
            "src1": "https://cdn.cnbj1.fds.api.mi-img.com/product-images/mix4/banner.jpeg",
            "mesge1": "「全版本优惠100元；赠Keep 7日会员；赠897元善诊体检套餐；光大信用卡分期支付满1000元减80元，数量有限」",
            "mesge2": "天玑1100年度旗舰芯｜VC液冷散热｜120Hz旗舰变速金刚屏 ｜67W 闪充 5000mAh 大电池｜JBL 立体声双扬声器｜UFS 3.1｜6400万AI三摄｜多功能NFC 3.0",
            "price": 1599,
            "intrduce": "天玑1100年度旗舰芯",
            "name": "Note 10 Pro",
            "shoppingImg": "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1621955784.84614979.jpg"
        },
        {
            "id": 104,
            "mesge1": "「购机赠价值897元善诊三人体检套餐；加39元得小米新定制T恤；光大信用卡分期支付满1000元减80元，数量有限」",
            "mesge2": " 5G小金刚｜旗舰长续航｜双5G待机｜5000mAh充电宝级大容量｜4800万高清相机｜天玑700八核高性能处理器",
            "src": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8909080ddb0851af0b87530e2927844f.jpg?thumb=1&w=220&h=220&f=webp&q=90",
            "src1": "https://cdn.cnbj1.fds.api.mi-img.com/product-images/mix4/banner.jpeg",
            "price": 1099,
            "intrduce": "5G小金刚 | 旗舰长续航",
            "name": "Redmi Note 10 5G",
            "shoppingImg": "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1621955684.40846624.jpg"

        },
        {
            "id": 105,
            "mesge1": "「米金兑换1000元优惠券；购机赠价值399元芳纶纤维保护壳」",
            "mesge2": "8.01''折叠大屏｜澎湃C1自研专业影像芯片｜液态镜头｜1亿像素｜骁龙888｜67W快充｜5020mAh超大电池｜LPDDR5满血版｜WiFi6（增强版）｜哈曼卡顿立体声四扬声器",
            "src": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5dc32ec73299ff79556dcd1cf0f0ac11.png?thumb=1&w=220&h=220&f=webp&q=90",
            "src1": "https://cdn.cnbj1.fds.api.mi-img.com/product-images/mixfold/banner.jpg",
            "price": 9999,
            "intrduce": "折叠屏幕 | 自研芯片",
            "name": "小米MIX FOLD",
            "shoppingImg": "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1617098695.73526265.jpg"
        },
        {
            "id": 106,
            "mesge1": "「米金兑换200元优惠券；信用卡分期至高立省216元 」",
            "mesge2": "1/1.12''GN2｜128°超广角｜120X超长焦｜2K四微曲屏｜骁龙888｜IP68级防水｜67W 有线闪充｜67W 无线闪充｜10W 无线反充｜5000mAh超大电池｜LPDDR5｜WiFi6（增强版）｜哈曼卡顿音频认证｜立体声双扬声器",
            "src": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/eb69512d9d6430d865d457ec52eebb51.png?thumb=1&w=220&h=220&f=webp&q=90",
            "src1": "https://cdn.cnbj1.fds.api.mi-img.com/product-images/mi11ultra/section1-1.jpg",
            "price": 5499,
            "intrduce": "1/1.12 GN2 | 2K四微曲屏",
            "name": "小米11 Ultra",
            "shoppingImg": "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1617008568.53329550.jpg"
        },
        {
            "id": 107,
            "mesge1": "「领券下单立减400元；加849元得MiCare保障服务；+99元得冰封散热背夹」",
            "mesge2": "1/1.12''GN2｜骁龙888｜2K四微曲屏｜IP68级防水｜67W 有线闪充｜67W 无线闪充｜10W 无线反充｜5000mAh超大电池｜LPDDR5｜WiFi6（增强版）｜哈曼卡顿音频认证｜立体声双扬声器",
            "src": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/34caee2c867bfd8c5e0dc2d8c663e121.jpg?thumb=1&w=220&h=220&f=webp&q=90",
            "src1": "https://cdn.cnbj1.fds.api.mi-img.com/product-images/mi11Pro/section1-1.jpg",
            "price": 4499,
            "intrduce": "1/1.12 GN2 | 骁龙888",
            "name": "小米11 Pro",
            "shoppingImg": "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1617008373.36569503.jpg"
        },
        {
            "id": 108,
            "mesge1": "「优惠立减100元，到手价1999元起！购机最高可享12期免息；赠Keep会员7天体验卡；+29元得生生不息果冻包」",
            "mesge2": "轻薄、多彩 / 骁龙780G / 专业电影相机，前置超级夜景 / AMOLED 柔性直屏 / 超线性立体声双扬声器",
            "src": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cb554f30eaa0316b0a736c3d59f21584.png?thumb=1&w=220&h=220&f=webp&q=90",
            "src1": "https://cdn.cnbj1.fds.api.mi-img.com/product-images/mi11youth/section1.jpg",
            "price": 2099,
            "intrduce": "小米11 青春版 轻薄",
            "name": "小米11 青春版",
            "shoppingImg": "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1617014229.6133749.jpg"
        }
    ];
    // let str = JSON.stringify(data);
    response.setHeader("Access-Control-Allow-Origin","*");
    response.send(data);

    // Access-Control-Allow-Origin
});
app.listen(9000, () => {
    console.log("9000端口开启成功！");
});