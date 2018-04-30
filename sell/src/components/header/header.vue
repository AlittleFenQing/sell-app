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
       <div v-if="seller.supports" class="support-count">
         <span class="count">{{seller.supports.length}}个</span>
         <i class="icon-keyboard_arrow_right">></i>
       </div>
     </div>
     <div class="bulletin-wrapper">
       <span class="bulletin-title"></span>
       <span class="bulletin-text">{{seller.bulletin}}</span>
       <i class="icon-keyboard_arrow_right1">></i>
     </div>
  </div>
</template>
<script type="text/exmascript-6">
export default {
  props: {
    seller: {
      type: Object
    }
  },
  created () {
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
.header{
  color: #ffffff;
  background-color: #999;
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
.icon-keyboard_arrow_right1{
  position absolute;
  font-size 10px;
  right 12px;
}
</style>
