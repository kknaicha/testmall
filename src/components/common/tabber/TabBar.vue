<template>  
        <div id="tab-bar">
          <slot></slot>
      </div>
</template>

<script>
export default {
    name: "TabBar"
}
</script>

<style scoped>
#tab-bar {
  display: flex;
  background-color: #f6f6f6;
  /* 开启绝对定位 .搞到最下面 */
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  box-shadow: 0 -1px 1px rgba(100, 100, 100, .3)
}


</style>