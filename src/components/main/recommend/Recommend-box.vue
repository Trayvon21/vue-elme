<template>
  <div class="mian">
    <div class="left">
      <img src="../../../assets/images/demo.jpg" alt />
    </div>
    <div class="center">
      <div>{{shop.name}}</div>
      <div class="rating">
        <van-rate v-model="shop.rating" :size="14" readonly />
        {{shop.rating}}
      </div>
      <div
        class="delivery"
      >￥{{shop.float_minimum_order_amount}}起送 / {{shop.piecewise_agent_fee.tips}}</div>
    </div>
    <div class="right">
      <div class="supports">{{shop.supports|dir}}</div>
      <div class="transmit"><span class="delivery-mode">{{shop.delivery_mode.text}}</span></div>
      <div>{{shop.distance}}/<span class="blue">{{shop.order_lead_time}}</span></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    shop: {
      type: Object,
      default: () => {}
    }
  },
  filters: {
    dir(val) {
      let arr=[]
      val.map((item)=>arr.push(item.icon_name))
      return arr.join(" ");
    }
  },
  components: {},
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.mian {
  width: 100%;
  display: flex;
  margin-top: 20px;
  .left {
    width: 25%;
    padding: 0 15px;
    img {
      width: 70px;
    }
  }
  .center {
    width: 40%;
    text-align: left;
    .rating {
      font-size: 14px;
      margin: 10px 0;
    }
    .delivery {
      font-size: 12px;
    }
  }
  .right {
    width: 35%;
    padding-right: 10px;
    font-size: 12px;
    text-align: right;
    .supports{
      color:gray;
    }
    .transmit {
      height: 14px;
      color: white;
      margin: 15px 0;
      .delivery-mode{
         background: #57A9FF;
      }
    }
    .blue{
      color: #57A9FF;
    }
  }
}
</style>