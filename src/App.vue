<template>
  <div id="app">
    <!-- <fang-button>默认按钮</fang-button>
    <fang-button type="primary">主要按钮</fang-button>
    <fang-button type="info">信息按钮</fang-button>
    <fang-button type="success">成功按钮</fang-button>
    <fang-button type="warning">警告按钮</fang-button>
    <fang-button type="danger">危险按钮</fang-button>
    
    <br />
    <fang-icon icon="sousuo"></fang-icon>
    <fang-icon icon="loading"></fang-icon>

    <br />
    <fang-button type="success" icon="sousuo">search</fang-button>
    <fang-button type="primary" icon="left" icon-position="left">pre</fang-button>
    <fang-button type="primary" icon="right" icon-position="right">next</fang-button>
    <fang-button type="danger" loading>loading</fang-button>
    <fang-button type="danger" @click="fn">click</fang-button> -->

    <stm-table :titarr="title" :datarr="content" check></stm-table>

  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    
  },
  data(){
    return {
      title: [
        {width: '150px', name: 'a', Ename: 'A'},
        {width: '150px', name: 'b', Ename: 'B'},
        {width: '150px', name: 'c', Ename: 'C'},
      ],
      content: [
        {width: '40px', name: 'a', A: '1', B: '2', C: '3'},
        {width: '40px', name: 'b', A: '4', B: '5', C: '6'},
        {width: '40px', name: 'c', A: '7', B: '8', C: '9'},
      ]
    }
  },
  methods: {
    fn(e){
      console.log(e);
    }
  }
}
</script>

<style lang="scss">

</style>
