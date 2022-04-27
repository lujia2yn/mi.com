let cartTop = localStorage.getItem('cart');
console.log(cartTop);
let html = '';
JSON.parse(cartTop).forEach(data => {
    // console.log(data);
    html += `<tr goods='${data.id}'>
        <td><input type='checkbox' class="checOne" checked=''></td>
        <td><img src="${data.src}"  style="height: 100px;width: 100px;"></td>
        <td>${data.name}</td>
        <td>${data.price}元</td>
        <td><button class="jian">-</button><span class='goods-num'> ${data.num}</span> <button class='add'>+</button></td>
        <td class='goods-price'>${data.num*data.price}</td>
        <td><button class='delete'>删除</button></td>
        </tr>`;
});
var div=document.querySelector('#cars')
// console.log(div);
// this.div.innerHTML = html