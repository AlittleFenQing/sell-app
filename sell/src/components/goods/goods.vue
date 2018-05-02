<template>
    <div class="goods">
        <div class="menu-wrapper">
            <ul>
                <li v-for="item in goods" :key="item.type" class="menu-item">
                    <span class="text">
                        <span v-show="item.type>0" class="icon" :class="classMap[item.type]"></span>{{item.name}}
                    </span>
                </li>
            </ul>
        </div>
        <div class="foots-wrapper">
            <ul>
                <li v-for="(item,index) in goods" :key="index" class="food-list">
                    <h1 class="title">{{item.name}}</h1>
                    <ul>
                        <li v-for="(food,index) in item.foods" class="food-item" :key="index">
                            <div class="icon">
                                <img :src="food.icon">
                            </div>
                            <div class="content">
                                <h2 class="name">{{food.name}}</h2>
                                <p class="desc">{{food.description}}</p>
                                <div class="extra">
                                    <span class="count">月售{{food.sellCount}}份</span>
                                    <span>好评率{{food.rating}}</span>
                                </div>
                                <div class="price">
                                    <span class="now">￥{{food.price}}</span>
                                    <span v-show="food.oldPrice" class="old">￥{{food.oldPrice}}</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
export default {
    props: {
        seller: {
            type: Object
        }
    },
    data () {
        return {
            goods: []
        };
    },
 created: function () {
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
      this.$http.get('/api/goods').then((res) => {
        this.goods = res.body.data;
      }, (err) => {
        console.log(err);
      });
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
.goods
    position absolute;
    width 100%;
    top 191px;
    bottom 46px;
    display flex;
    overflow hidden;
    .menu-wrapper
        flex 0 0 80px;
        width 80px;
        background #f3f5f7;
    .menu-item
        padding 0 12px;
        display table;
        height 54px;
        width 56px;
        line-height 14px;
        .icon
            display inline-block;
            width 12px;
            height 12px;
            margin-right 2px;
            background-size 12px;
            background-repeat no-repeat;
            vertical-align top;
            &.decrease{
            background-image url('./decrease_3@2x.png');
            }
            &.discount{
            background-image url('./discount_3@2x.png');
            }
            &.guarantee{
            background-image url('./guarantee_3@2x.png');
            }
            &.invoice{
            background-image url('./invoice_3@2x.png');
            }
            &.special{
            background-image url('./special_3@2x.png');
            }
        .text
            display table-cell;
            width 56px;
            vertical-align middle;
            font-size 12px;
            border-bottom .0625rem solid rgba(7,17,27,0.1)
    .foods-wrapper
        flex 1;
    .title
        padding-left 14px;
        height 26px;
        line-height 26px;
        border-left 2px solid #d9dde1;
        font-size 12px;
        color rgb(147,153,159);
        background-color #f3f5f7;
    .food-item
        display flex;
        margin 18px;
        padding-bottom 18px;
        border-bottom .0625rem solid rgba(7,17,27,0.1);
        &:last-child
            border-bottom none;
            padding-bottom 0px;
    .icon
        flex 0 0 80px
        margin-right 10px;
    .icon img
        width 80px;
        height 80px;
    .content
        flex 1;
        .name
            margin 2px 0 8px 0;
            height 14px;
            line-height 14px;
            font-size 14px;
            color rgb(7, 17, 27);
        .desc, .extra
            line-height 10px;
            font-size 10px;
            color rgb(147,153,159);
        .desc
            margin-bottom 8px;
        .extra
            .count
                margin-right 12px;
        .price
            font-weight 700;
            line-height 24px;
            .now
                margin-right 18px;
                font-size 14px;
                color rgb(240,20,20);
            .old
                text-decoration line-through
                font-size 10px;
                color rgb(147,153,159);
</style>
