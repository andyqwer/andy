<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->

    <div class="layui-layout-body">
      <div class="layui-layout layui-layout-admin">
        <layui-header />
        <!-- <layui-aside /> -->
        <div class="layui-body" style="backgrunder">
          <!-- 内容主体区域 -->
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import layuiHeader from "@/components/layuiHeader";
import layuiAside from "@/components/layuiAside";

export default {
  name: "App",
  components: {
    layuiHeader,
    layuiAside
  },
  mounted() {
    layui.use("element", function() {
      var element = layui.element;
    });
  }
};
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
  background-color: #eeeeee;
}
</style>
