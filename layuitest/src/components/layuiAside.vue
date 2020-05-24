<template>
  <div class>
    <div class="layui-side layui-bg-black">
      <div class="layui-side-scroll">
        <!-- 左侧导航区域（可配合layui已有的垂直导航） -->

        <ul class="layui-nav layui-nav-tree" lay-filter="test">
          <li class="layui-nav-item layui-nav-itemed">
            <a  ><router-link  to='/'>背调订单</router-link></a>
            
          </li>
          <li class="layui-nav-item">
            <a  ><router-link  to='/movie'>发起背调</router-link></a>
          </li>
          <li class="layui-nav-item">
            <a class href="javascript:;">套餐管理</a>
          </li>

          <li class="layui-nav-item">
            <a href="javascript:;">资产中心</a>
            <dl class="layui-nav-child">
              <dd>
                <a href="javascript:;">资产列表1</a>
              </dd>
              <dd>
                <a href="javascript:;">资产列表2</a>
              </dd>
              <dd>
                <a href>资产列表3</a>
              </dd>
            </dl>
          </li>
          <li class="layui-nav-item">
            <a href>云市场</a>
          </li>
          <li class="layui-nav-item">
            <a href>发布商品</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  name: "layuiAside",
  components: {},
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
<style  scoped>
/* //@import url(); 引入公共css类 */
</style>