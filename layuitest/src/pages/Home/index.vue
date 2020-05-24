<template>
  <div class>
    <layui-aside />
    <!-- <div class="con">
      <span class="layui-breadcrumb">
        <a href>首页</a>
        <a href>国际新闻</a>
        <a href>亚太地区</a>
        <a>
          <cite>正文</cite>
        </a>
      </span>
    </div>-->

    <div class="layui-tab">
      <ul class="layui-tab-title">
        <li class="layui-this">全部订单</li>
        <li>代授权</li>
        <li>调查进行中</li>
        <li>被拒绝</li>
        <li>已出报告</li>
        <li>待支付</li>
        <li>退款中</li>
        <li>已退款</li>
      </ul>
      <div class="layui-tab-content">
        <div class="layui-tab-item layui-show">
          全部订单
          <test-table />

          <div id="test1"></div>
        </div>
        <div class="layui-tab-item">代授权</div>
        <div class="layui-tab-item">调查进行中</div>
        <div class="layui-tab-item">被拒绝</div>
        <div class="layui-tab-item">已出报告</div>
        <div class="layui-tab-item">待支付</div>
        <div class="layui-tab-item">退款中</div>
        <div class="layui-tab-item">已退款</div>
      </div>
    </div>
  </div>
</template>

<script>
//例如：import 《组件名称》 from '《组件路径》';
import layuiAside from "@/components/layuiAside";
import testTable from "@/components/testTable";

export default {
  //import引入的组件需要注入到对象中才能使用
  name: "Home",
  components: {
    layuiAside,
    testTable
  },
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    
    layui.use("element", function() {
      var element = layui.element;

      //…
    });
  },
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='' scoped>
.con {
  padding: 10px;
}
</style>