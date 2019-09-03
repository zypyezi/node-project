<template>
    <div class="vue-app">
           当前登录用户为 {{data.name}}
    </div>
</template>

<script>

  import {mapState, mapMutations} from 'vuex'
  import $ from 'jquery'
  import {post} from '../axios'
  export default {
    name: 'vue-app',
    data(){
        return {
            data: []
        }
    },
    created () {
        // $.ajax({
        //     url: '/user',
        //     dataType: 'json',
        //     // 发现如果该字段出现错误， 可以返回数据，但是进入了false
        //     type: 'get',
        //     complete: (data)=>{
        //         console.log(data, 'complete')
        //     },
        //     success: (res) =>{
        //         console.log(res, 'success')
        //         this.data = res.data[0]
        //     },
        //     error: (data) =>{
        //         console.log(data, 'error')
        //     }
        // })

        // $.ajax({
        //     url: '/user',
        //     dataType: 'json',
        //     data:{
        //         query: 1
        //     },
        //     // 发现如果该字段出现错误， 可以返回数据，但是进入了false
        //     type: 'post',
        //     complete: (data)=>{
        //         console.log(data, 'complete')
        //     },
        //     success: (res) =>{
        //         console.log(res, 'success')
        //         // this.data = res.data[0]
        //     },
        //     error: (data) =>{
        //         console.log(data, 'error')
        //     }
        // })


        post('/user', JSON.stringify({query: 1}) )
    },
      computed:{
      },
      methods:{
          
      }

    }
</script>

<style lang="scss" scoped>


    .vue-app{
        color: aquamarine;
    }
 

</style>
