<template>
  <div class="product">
    <header class="g-header-container">
      <search-header />
    </header>

    <me-scroll class="product-slider"
      :data="recommends"
      pullDown
      pullUp
      @pull-down="pullToRefresh"
      @pull-up="pullToLoadMore"
      @scroll-end="scrollEnd"
      @scroll="scroll"
      @pull-down-transition-end="pullDownTransitionEnd"
      ref="scroll"
    >
      <product-slider ref="slider" />
      <!-- <home-nav/>
      <home-recommend @loaded="getRecommends" ref="recommend"/>-->
    </me-scroll>
  </div>
</template>

<script>
import SearchHeader from "./header";
import ProductSlider from "./productSlider";

export default {
  name: "Product",

  components: {
    SearchHeader,
    ProductSlider
  },
  data() {
    return {
      recommends: [],
      // isBacktopVisible: false,
      // isHeaderTransition: false
    };
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/mixins";
.product {
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  z-index: $product-z-index;
  width: 100%;
  height: 100%;
  background-color: $bgc-theme;
  
}
.product-slider{

}
</style>
