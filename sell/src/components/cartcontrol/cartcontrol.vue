<template>
  <div class="cartcontrol">
       <transition name="fade">
        <div class="cart-decrease" v-show="food.count>0" @click="decreaseCart">
                <div class=" inner icon-remove_circle_outline"></div>
        </div>
      </transition>
      <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
      <div class="cart-add icon-add_circle" @click="addCart"></div>
  </div>
</template>

<script type="text/ecmascript-6">
import Vue from 'vue';
export default {
  data () {
    return {
    };
  },
  components: {
  },
  props: {
      food: {
          type: Object
      }
  },
  created () {
  },
  methods: {
      addCart (event) {
          if (!event._constructed) {
            return;
         }
          if (!this.food.count) {
              Vue.set(this.food, 'count', 1);
          } else {
              this.food.count++;
          }
      },
      decreaseCart (event) {
           if (!event._constructed) {
            return;
         }
          if (this.food.count) {
              this.food.count--;
          }
      }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
.cartcontrol{
    font-size 0;
    right 0px;
}
.cart-decrease{
    display inline-block;
     transition all 0.4s;
}
.inner{
    display inline-block
    font-size 24px;
    line-height 24px;
    color rgb(0,160,220);
}
/* 进入开始 */
&.fade-enter{
  transform: translateX(24px);
  opacity: 0;
}
/* 出去终点 */
&.fade-leave{
    transform: translateX(24px);
  opacity: 0;
}
.cart-count{
    display inline-block;
    font-size 10px;
    vertical-align top;
    display inline-block;
    width 12px;
    line-height 24px;
    text-align center;
    color rgb(147,153,159);
}
.cart-add{
    font-size 24px;
    display inline-block;
    font-size 24px;
    line-height 24px;
    color rgb(0,160,220);
}
</style>
