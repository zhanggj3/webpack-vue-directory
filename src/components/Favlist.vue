<template id="template-home">
  <div>
    <div v-for="item in list" class="title">{{ item.name }}</div>
    <button @click="press();">ssssssssssssss</button>
  </div>
</template>

<script>
export default {
  data(){
    return {
        list:[
            {
                id:1,
                name:"bu111111是煞笔说的话考5ha"
            },
            {
                id:2,
                name:"f22gggg水水水水和ggggg221111111ff"
            },
            {
                id:3,
                name:"ddddhdh1111111失敬就是杀44dd"
            },
            {
                id:4,
                name:"woshid杀杀杀"
            }
        ]
    }
  },
  methods:{
    press(){
        this.$axios({
            method: 'post',
            url: '/gateway/user/login',
            data: {}
        }).then(function(data){
            console.log(data)
        })
    }
  }
}
</script>
<style>
    body {
        background-color: #ccc;
    }
    .title {
        color:red;
        font-size: 30px;
        display: flex;
    }
</style>