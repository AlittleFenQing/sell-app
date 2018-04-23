<template>
  <div>
   <v-header></v-header>
    <div class="tab">
      <div class="tab">
        <div class="tab-item">
          <router-link to="/goods"> <a>商品</a></router-link>
        </div>
        <div class="tab-item">
          <router-link to="/ratings"> <a>评论</a></router-link>
        </div>
        <div class="tab-item">
          <router-link to="/seller"> <a>商家</a></router-link>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import header from './components/header/header.vue';

export default {
  components: {
    'v-header': header
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import "./common/stylus/mixin.styl";
.tab{
  display :flex
  width: 100%
  height: 40px
  line-height: 40px
  border-1px(black)
}
.tab-item{
  flex :1
  text-align :center
}
.tab-item a{
  display :block;
  font-size :14px;
  color:rga(77,85,93);
}
.active a{
  color:rgb(240,20,20);
}
</style>
