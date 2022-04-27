
// 获取图片的节点 拿到img的src

let name1=$$('#name')
console.log(name1);
let pValue=location.search;
console.log(pValue);
// 转化为数组
let pValueArr=pValue.split("?");
console.log(pValueArr[1]);
// 只需要其中的id
pValueArr=pValueArr[1];
console.log(pValueArr);

for(let j=0;j<10;j++){
    axioss.get(`http://127.0.0.1:9000/json-sever`).then(data => {
        console.log(JSON.parse(data));
       JSON.parse(data).forEach(function (v, i) {
           if(v.id==pValueArr){ 
               console.log(v);
               console.log(v.name);
               name1.innerHTML=v.name
           }     
       });
    });
}

axioss.get('http://127.0.0.1:9000/json-sever').then(data => {
     console.log(JSON.parse(data));
    JSON.parse(data).forEach(function (v, i) {
        if(v.id==pValueArr){ 
            console.log(v);
            console.log(v.name);
            name1.innerHTML=v.name
        }
    });

 });
