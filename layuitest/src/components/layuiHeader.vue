<template>
  <div class="layui-header">
    <div class="layui-logo">
      <a href>logo标志位置
        <!-- <router-link to="/" ></router-link> -->
      </a>
    </div>
    <!-- 头部区域（可配合layui已有的水平导航） -->
    <!-- <ul class="layui-nav layui-layout-left">
      <li class="layui-nav-item">
        <a href>主页</a>
      </li>
      <li class="layui-nav-item">
        <a href>电影</a>
      </li>
      <li class="layui-nav-item">
        <a href>电视剧</a>
      </li>
      <li class="layui-nav-item">
        <a href="javascript:;">特色频道</a>
        <dl class="layui-nav-child">
          <dd>
            <a href>影视</a>
          </dd>
          <dd>
            <a href>游戏</a>
          </dd>
          <dd>
            <a href>音乐</a>
          </dd>
          <dd>
            <a href>美食</a>
          </dd>
        </dl>
      </li>
    </ul>-->
    <ul class="layui-nav layui-layout-right">
      <li class="layui-nav-item">
        <a href="javascript:;">
          <img src="http://t.cn/RCzsdCq" class="layui-nav-img" />
          贤心
        </a>
        <dl class="layui-nav-child">
          <dd>
            <a href>基本资料</a>
          </dd>
          <dd>
            <a href>安全设置</a>
          </dd>
        </dl>
      </li>
      <li class="layui-nav-item">
        <a href>退了</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "layuiHeader",
  components: {},
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  created() {
    layui.use("element", function() {
      var element = layui.element;

      //…
    });
  }
};
</script>
<style lang="" scoped>
.layui-nav-child {
  z-index: 1000;
}
</style>