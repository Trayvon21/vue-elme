<template>
  <div>
    <van-swipe indicator-color="#0096ff" :autoplay="3000">
      <van-swipe-item>
        <div class="swipe">
          <div v-for="item in list2" :key="item.id" class="box">
            <div>
              <img :src="`https://fuss10.elemecdn.com/${item.image_url}`" alt />
            </div>
            <div>{{ item.title }}</div>
          </div>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div class="swipe">
          <div v-for="item in list" :key="item.id" class="box">
            <div>
              <img :src="`https://fuss10.elemecdn.com/${item.image_url}`" alt />
            </div>
            <div>{{ item.title }}</div>
          </div>
        </div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: []
    };
  },
  components: {},
  methods: {},
  mounted() {},
  watch: {},
  computed: {
    //将轮播图的arr调取出来，并拆分为两部分
    list2() {
      this.list = this.$store.state.list;
      let list2 = this.list.splice(0, 8);
      return list2;
    }
  }
};
</script>

<style scoped lang='scss'>
.box {
  text-align: center;
  width: 25%;
  font-size: 14px;
  img {
    width: 50px;
  }
}
.swipe {
  display: flex;
  height: 180px;
  width: 100%;
  flex-wrap: wrap;
}
</style>