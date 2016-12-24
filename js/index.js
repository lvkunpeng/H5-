/**
 * Created by 吕堃鹏 on 2016/12/20 0020.
 */
//移动端设备适配
var desW = 640;
var winW = document.documentElement.clientWidth;
document.documentElement.style.fontSize = winW / desW * 100 + 'px';
//
var mySwiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    loop:true,
    onTransitionEnd: function (swiper) {
        var curIndex = swiper.activeIndex;  //当前活动滑块的索引，也就是上一个滑块结束后，到下一个滑块的索引
        var slides = swiper.slides;//获取所有的滑块
        //要做的事情，通过当前活动滑块的索引找到对应对的滑块，并给与相应的索引。
        [].forEach.call(slides, function (item, index) {
            item.id = '';
            if(index == 0){
                slides[0].id = 'page' +(slides.length-2)
                return
            }
            if(index == slides.length-1){
                item.id = 'page' +(slides.length-3)
            }
            if (index == curIndex) {
                slides[curIndex].id = 'page' + (curIndex);
            }
        })
    },
    onInit: function (swiper) {
        var slides = swiper.slides;
        slides[0].id = 'page1'
    }
});
//音乐播放通过play方法  停止pause
//怎样判断音频文件是 播放还是停止的  xxx.paused true  停止   false播放