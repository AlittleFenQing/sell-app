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
<script type="text/ecmascript-6">
import header from './components/header/header.vue';
const ERR_OK = 0;
export default {
    data () {
      return {
        seller: {}
      };
    },
    created () {
      this.$http.get('/api/seller').then((response) => {
      response = response.json();
      if (response.error === ERR_OK) {
      this.seller = response.data;
      console.log(this.seller);
      }
      });
    },
    components: {
      'v-header': header
    }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
.tab {
  display: flex;
  width: 100%;
  height: 2.5rem;
  line-height: 2.5rem;
  border-bottom: 0.0625rem solid rgba(7, 17, 27, 0.1);
}

.tab-item {
  flex: 1;
  text-align: center;
}

.tab-item a {
  display: block;
  font-size: 14px;
  color: rga(77, 85, 93);
}

.active a {
  color: rgb(240, 20, 20);
}
</style>
