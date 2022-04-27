window.addEventListener('load', () => {
    ; (function () { 
        function $(obj, flag) {
            return flag == true ? document.querySelectorAll(obj) : document.querySelector(obj);
        };
        // 添加动画阴影
        let animateArr = [
            ...$('.center5_4_1', true),
            ...$('.center5_5_1', true),
            ...$('.center4_3_2', true),
            ...$('.center4_3_1', true),
            ...$('.center10_2', true),
            ...$('.center5_2_1', true),
            ...$('.center5_2_2', true),
            $('.center10_1'),
        ]
        animateArr.forEach(item => {
            item.classList.add('animate');
        });


        // 轮播图
        ; (function () {
            let lbtBgArr = ["a5a3a3", "929795", "9e9c9c", "877f78", "989ea3", "a4a1a2"];
            let lbtSrcArr = [
                "./img/lbt-banner01.jpg",
                "./img/lbt-banner02.webp",
                "./img/lbt-banner03.webp",
                "./img/lbt-banner04.webp",
                "./img/lbt-banner05.webp",
                "./img/lbt-banner06.webp",
            ];
            // 点击小圆点时触发
            let index = 0, timer = null;
            $('.center1_1xtb dd', true).forEach((item, i) => {
                item.addEventListener('click', function () {
                    index = i;
                    $('.beijing').classList.remove('beijing');
                    this.classList.add('beijing');
                    $('.lbtBanner').setAttribute('src', lbtSrcArr[i]);
                    $('.center1_1').style.background = `#${lbtBgArr[i]}`;
                });
            });
            // 左边
            $('#center1_1left').addEventListener('click', function () {
                index--;
                index < 0 ? index = 5 : index;
                $('.beijing').classList.remove('beijing');
                $('.center1_1xtb dd', true)[index].classList.add('beijing');
                $('.lbtBanner').setAttribute('src', lbtSrcArr[index]);
                $('.center1_1').style.background = `#${lbtBgArr[index]}`;
            });
            // 右边
            $('#center1_1right').addEventListener('click', function () {
                index++;
                index >= 6 ? index = 0 : index;
                $('.beijing').classList.remove('beijing');
                $('.center1_1xtb dd', true)[index].classList.add('beijing');
                $('.lbtBanner').setAttribute('src', lbtSrcArr[index]);
                $('.center1_1').style.background = `#${lbtBgArr[index]}`;
            });
            $('.banner-lbt').addEventListener('mouseover', function () {
                clearInterval(timer);
                timer = null;
            })
            $('.banner-lbt').addEventListener('mouseout', function () {
                timer = setInterval(() => { $('#center1_1right').click() }, 2500);
            })
            // 自动播放
            timer = setInterval(() => { $('#center1_1right').click() }, 2500);
        })();



        //透明
        function animationOP(obj, end, callback) {
            let step = 0, sum = 0;
            sum = sum < end ? sum = 0 : sum = 100;
            clearInterval(obj.times);
            obj.times = setInterval(() => {
                step = end > sum ? 10 : -10;
                if (sum === end) {
                    callback && callback();
                    clearInterval(obj.times);
                    return;
                };
                sum += step;
                obj.style.opacity = sum / 100;
            }, 30)
        };
    })();
});

$(() => {
    ; (function () { 
        // 购物车
        $(".car").mouseenter(function () {
            $(".cars").stop().slideDown()
            $(".car").css('background', '#fff')
        });
        $(".car").mouseleave(function () {
            $(".cars").stop().slideUp();
            $(".car").css('background', 'silver')
        })

        let cartTop = localStorage.getItem('cart');
        var div1 = document.getElementsByClassName('cars')
        // console.log(cartTop);
        let html = '';
        let Height = 0;
        let number = 0;
        let moneyAll = 0;
        // console.log(number,moneyAll);
        JSON.parse(cartTop).forEach(data => {
            console.log(data);
            html += `						
		<tr>
			<td>
				<div class='goodsImg'>
			    <img src="${data.src}" alt="">
		        </div>
                <div calss='goodsName' id='goodsName' style='width: 100px;height:42px;float: left;line-height:72px;white-space: nowrap;overflow:hidden;'>${data.name}</div>
                <div class='moneyAndNum' style="line-height:72px">${data.price}元×${data.num}</div>                              
		    </td>
		</tr>
		`;
            // console.log(number,moneyAll);
            Height += 85;
            number += parseInt(`${data.num}`);
            moneyAll += parseInt(`${data.price * data.num}`)
            // console.log(number,moneyAll);
        });
        var div = document.getElementById('cars')
        // console.log(div);
        // console.log(div.innerHTML); 
        div.innerHTML = html + `<tfoot>
	    <tr>
            <td>
                <div style="width:150px;height:72px;float:left">
                    <p style="width:150px;height:22px;font-size:12px;line-height:22px;">共<span>${number}</span>件</p>
                    <p style="width:150px;height:50px;font-size:18px;line-height:40px;color:#ff6700">共<span>${moneyAll}</span>元</p>
                </div>
                <button class="settlement-btn"><a href="shopcart.html"style="color:white;background:rgba(0,0,0,0)">去购物车结算</a></button>
            </td>
         </tr>
	</tfoot>`
        Height += 85;
        div1[0].style.height += Height + 'px';
        var number1 = document.getElementById('allnum');
        number1.innerHTML = `${number}`;
    })();
});