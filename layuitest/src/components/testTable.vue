<template>
  <div class>
    <table id="demo" lay-filter="test"></table>
    <div id="test1"></div>
  </div>
</template>

<script>
import data from "./conif"
export default {
  name: "testTable",
  components: {},
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {
    layui.use("table", function() {
      var table = layui.table;
      //第一个实例
      table.render({
        elem: "#demo",
        height: 312,
        // url: "https://www.layui.com/demo/table/user/?page=1&limit=30", //数据接口
        // url: "./conif.js", //数据接口

        page: true, //开启分页
        cols: [
          [
            //表头
            { field: "id", title: "ID", width: 180, sort: true, fixed: "left" },
            { field: "username", title: "用户名", width: 80 },
            { field: "sex", title: "性别", width: 80, sort: true },
            { field: "city", title: "城市", width: 80 },
            { field: "sign", title: "签名", width: 177 },
            { field: "experience", title: "积分", width: 80, sort: true },
            { field: "score", title: "评分", width: 80, sort: true },
            { field: "classify", title: "职业", width: 80 },
            { field: "wealth", title: "财富", width: 100, sort: true }
          ]
        ]
      });
    });
  }
};
</script>
<style lang="" scoped>
</style>