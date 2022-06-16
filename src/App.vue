<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/fuse">Fuse</router-link> |
    <router-link to="/export">export</router-link> |
    <router-link to="/digui">递归</router-link> |
    <router-link to="/tuozhuai">拖拽业务</router-link> |
    <router-link to="/slot">插槽</router-link> |
    <router-link to="/Axios">axios请求</router-link> |
    <router-link to="/echarts">echarts</router-link> |
    <router-link to="/ctrl">一键复制与自定义指令</router-link> |
    <router-link to="/postMian">外包面试题</router-link>
  </div>
  <!-- 切换路由时添加动画 -->
  <!-- <transition name="component-fade" mode="out-in"> -->
  <router-view />
  <!-- </transition> -->
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 3s ease;
}

.component-fade-enter-from,
.component-fade-leave-to {
  opacity: 0;
}
</style>
