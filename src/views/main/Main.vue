<template>
  <div class="main">
    <!-- 顶部 -->
    <top />
    <!-- 导航 -->
    <slideshow class="slideshow" />
    <!-- 商家信息 -->
    <recommend />
  </div>
</template>

<script>
import top from "../../components/main/Top";
import recommend from "../../components/main/recommend/recommend";
import slideshow from "../../components/main/Slideshow";
export default {
  data() {
    return {};
  },
  components: {
    slideshow,
    recommend,
    top
  },
  methods: {
  },
  mounted() {
  },
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