<template>
  <div class="main">
    <!-- 顶部 -->
    <top />
    <!-- 轮播 -->
    <slideshow class="slideshow" />
    <!-- 商家信息 -->
    <recommend />
  </div>
</template>

<script>
import top from "../../components/main/Top";//引入顶部
import slideshow from "../../components/main/Slideshow";//引入轮播
import recommend from "../../components/main/recommend/recommend";//引入商家信息

export default {
  data() {
    return {};
  },
  components: {
    slideshow,
    recommend,
    top
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.main {
  width: 100%;
  overflow: scroll;
  .slideshow {
    border-bottom: 10px solid #f4f4f4;
  }
  .recommend {
    height: 500px;
  }
}
</style>