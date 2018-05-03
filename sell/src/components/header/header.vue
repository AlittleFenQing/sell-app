<template>
  <div class="header">
     <div class="content-wrapper">
       <div class="avatar">
         <img :src="seller.avatar" width="64" height="64" alt="merchant-logo">
       </div>
       <div class="content">
         <div class="title">
           <span class="brand"></span>
           <span class="name">{{seller.name}}</span>
         </div>
         <div class="description">
           {{seller.description}}/{{seller.deliveryTime}}分钟送达
         </div>
         <div v-if="seller.supports" class="support">
           <span class="icon" :class="classMap[seller.supports[0].type]"></span>
           <span class="text">{{seller.supports[0].description}}</span>
         </div>
       </div>
       <div v-if="seller.supports" class="support-count" @click="showDetail">
         <span class="count">{{seller.supports.length}}个</span>
         <i class="icon-keyboard_arrow_right"></i>
       </div>
     </div>
     <div class="bulletin-wrapper" @click="showDetail">
       <span class="bulletin-title"></span>
       <span class="bulletin-text">{{seller.bulletin}}</span>
       <i class="icon-keyboard_arrow_right right2"></i>
     </div>
     <div  class="background">
       <img :src="seller.avatar" alt="bg-image" width="100%" height="100%">
     </div>
     <transition name="fade">
     <div class="detail" v-show="detailshow">
       <div class="detail-wrapper clearfix">
         <div class="detail-main">
           <h1 class="name">{{seller.name}}</h1>
           <div class="star-wrapper">
             <star :size="48" :score="seller.score"></star>
           </div>
           <div class="detail-title">
             <div class="line"></div>
             <div class="detail-text">优惠信息</div>
             <div class="line"></div>
           </div>
           <ul v-if="seller.supports" class="supports">
             <li class="support-item item">
               <span class="support-icon icon" :class="classMap[seller.supports[0].type]"></span>
               <span class="support-text text">{{seller.supports[0].description}}</span>
             </li>
              <li class="support-item item">
               <span class="support-icon icon" :class="classMap[seller.supports[1].type]"></span>
               <span class="support-text text">{{seller.supports[1].description}}</span>
             </li>
              <li class="support-item item">
               <span class="support-icon icon" :class="classMap[seller.supports[2].type]"></span>
               <span class="support-text text">{{seller.supports[2].description}}</span>
             </li>
              <li class="support-item item">
               <span class="support-icon icon" :class="classMap[seller.supports[3].type]"></span>
               <span class="support-text text">{{seller.supports[3].description}}</span>
             </li>
              <li class="support-item item">
               <span class="support-icon icon" :class="classMap[seller.supports[4].type]"></span>
               <span class="support-text text">{{seller.supports[4].description}}</span>
             </li>
           </ul>
           <div class="detail-title">
             <div class="line"></div>
             <div class="detail-text">商家公告</div>
             <div class="line"></div>
           </div>
           <div class="bulletin">
             <p class="content">{{seller.bulletin}}</p>
           </div>
         </div>
       </div>
       <div class="detail-close" @click="hideDetail">
         <i class="icon-close"></i>
       </div>
     </div>
     </transition>
  </div>
</template>
<script type="text/exmascript-6">
import star from '../star/star.vue';
export default {
  props: {
    seller: {
      type: Object
    }
  },
  created () {
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
  },
  data () {
    return {
      detailshow: false
    };
  },
  methods: {
    showDetail () {
      this.detailshow = true;
    },
    hideDetail () {
      this.detailshow = false;
    }
  },
  components: {
    star
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
.header{
  color: #ffffff;
  position relative;
  background rgba(7,17,27,0.5);
  overflow hidden;
}
.background {
  left 0;
  top 0;
  width 100%;
  height 100%;
  z-index -1
  position absolute;
  filter blur(10px);
}
.content-wrapper{
   padding:24px 12px 18px 24px;
   font-size 0px;
   position relative;
}
.avatar{
   display: inline-block;
   vertical-align top;//顶部对齐
}
.avatar img{
  border-radius 2px;
}
.content{
  display: inline-block;
  margin-left 16px;
  font-size 14px;
}
.support-count{
  position absolute;
  right 12px;
  bottom 14px;
  padding 0 8px;
  height 24px;
  line-height 24px;
  border-radius 14px;
  background rgba(255,255,255,0.2);
  text-align center;
}
.count{
  vertical-align top;
  font-size 10px;
}
.icon-keyboard_arrow_right{
  margin-left 2px;
  font-size 10px;
 line-height 24px;
}
.title{
  margin:2px 0 8px 0;
}
.brand{
  width:30px;
  height: 18px;
  display:inline-block;
  vertical-align top;//水平对齐
  background-image url('./brand@2x.png');
  background-size 30px 18px;
}
.name{
  margin-left 6px;
  font-size 16px;
  line-height 18px;
  font-weight bold;
}
.description{
  margin-bottom 10px;
  line-height 12px;
  font-size 12px;
}
.icon{
  display inline-block;
  width 12px;
  height 12px;
  margin-right 4px;
  background-size 12px;
  background-repeat no-repeat;
  vertical-align top;
}
&.decrease{
  background-image url('./decrease_1@2x.png');
}
&.discount{
   background-image url('./discount_1@2x.png');
}
&.guarantee{
   background-image url('./guarantee_1@2x.png');
}
&.invoice{
   background-image url('./invoice_1@2x.png');
}
&.special{
  background-image url('./special_1@2x.png');
}
.text{
  vertical-align top;
  line-height 12px;
  font-size 10px;
}
.bulletin-wrapper{
  background-color rgba(7,17,27,0.2);
  position relative;
  height 28px;
  line-height 28px;
  padding 0px 22px 0 12px;
  white-space nowrap;//文本不会换行，直到遇到<br>标签为止
  text-overflow ellipsis;//文本溢出包含元素发生的事情，用省略号代替
  overflow hidden;
}
.bulletin-title{
  display inline-block;
  width 22px;
  height 12px;
  background-image url('./bulletin@2x.png')
  background-repeat no-repeat;
  background-size 22px 12px;
}
.bulletin-text{
 font-size 10px;
 margin 0 4px;
 vertical-align top;
}
.right2{
  position absolute;
  font-size 10px;
  right 12px;
}
.detail{
  transition all 0.5s;
  position fixed;
  z-index 100;
  top 0;
  left 0;
  width 100%;
  height 100%;
  overflow auto;
  background rgba(7,17,27,0.8);
}
&.fade-transition{
  opacity 1;
  background rgba(7,17,27,0.8);
}
&.fade-enter, &.fade-leave{
  opacity 0;
  background rgba(7,17,27,0);
}
.detail-wrapper{
  min-height 100%;
  width 100%;
}
.detail-main{
  margin-top 64px;
  padding-bottom 64px;
}
.detail-close{
  position relative;
  width 32px;
  height 32px;
  margin -60px auto 0px auto;
  clear both;
  font-size 32px;
  }
  .clearfix{
  display inline-block;
}
.clearfix:after{
  display block;
  content '';
  height 0;
  line-height 0;
  clear both;
  visibility hidden;
}
.name{
  line-height 16px;
  text-align center;
  font-size 16px;
  font-weight 700;
}
.star-wrapper{
  margin-top 18px;
  padding 2px 0;
  text-align center;
}
.detail-title{
  display flex;
  width 80%;
  margin 28px auto 24px auto;
}
.line{
  flex 1;
  position relative;
  top -6px;
  border-bottom 1px solid  rgba(255, 255, 255, 0.2);
}
.detail-text{
  text-align center;
  padding 0 12px;
  font-size 15px;
  font-weight 700;
}
.supports{
  width 80%;
  margin 0 auto;
}
.support-item{
  padding 0px 12px;
  margin-bottom 12px;
  font-size 0;
}
&:last-child{
  margin-bottom 0;
}
.support-icon{
  display inline-block;
  width 16px;
  height 16px;
  vertical-align top;
  margin-right 6px;
  background-size 16px 16px;
  background-repeat no-repeat;
}
&.decrease{
  background-image url('./decrease_1@2x.png');
}
&.discount{
   background-image url('./discount_1@2x.png');
}
&.guarantee{
   background-image url('./guarantee_1@2x.png');
}
&.invoice{
   background-image url('./invoice_1@2x.png');
}
&.special{
  background-image url('./special_1@2x.png');
}
.supports-text{
  line-height 16px;
  font-size 12px;
}
.bulletin{
  width 80%;
  margin auto;
}
.content{
  padding 0 12px;
  line-height 24px;
  font-size 12px;
}
</style>
