<template>  
    <div class="tab-bar-item" @click="itemClick">      
          <!-- <img src="../../assets/img/tabbar/home.svg" alt="">
          <div>首页</div> -->
          <div v-if="!isActive">
              <slot name="item-icon"></slot>
          </div>
          <div v-else>
              <slot name="item-icon-active"></slot>
          </div>
         
          <div :style="activeStyle">
              <slot name="item-text"></slot>
          </div>

    </div>
</template>

<script>
export default {
    name: "TabBarItem",
    props:{
        path: String,
        activeColor:{
            type: String,
            default: 'hotpink'
        }
    },
    data() {
        return {
            // isActive: false,
        }
    },
    computed: {
        isActive() {
            //  当前活跃的这一个路由（/home），是否包含 this.path，找到返回下标记0.. 没找到返回-1.
            // /home 包含 item1 => /home?                不等于-1   则找到。为true
            // /home 包含 item2 =>/category? 
            // /home 包含 item3 =>/cart?                即 这四个item 谁活跃 谁为true
            // /home 包含 item4 =>/profile? 

            return this.$route.path.indexOf(this.path) !== -1;
        },
        activeStyle() {
            return this.isActive ? {color: this.activeColor} : {}
        }
    },
    methods:{
        itemClick() {
            this.$router.push(this.path)
            
        }
    }
}
</script>

<style scoped>

.tab-bar-item {
  /* flex为1 是均等分 */
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;

}

.tab-bar-item img {
  margin-top: 3px;
  height: 24px;
  width: 24px;
  vertical-align: middle;
  margin-bottom: 2px;
}



</style>