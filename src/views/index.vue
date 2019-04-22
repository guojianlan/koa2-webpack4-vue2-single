<template>
  <div class="example" @click="test">{{ msg }}
    {{$t('text')}}
    {{$t('a.b.c')}}
    {{$t('text_replace','',{html:'1'})}}
    {{hehe}}
    <div class="xiumi_main" v-if="showIframe">
     <iframe ref="xiumi_iframe"  src="http://192.168.1.95:3004/docTemplatePage/template1.html" width="100%" height="100%" @load="load" frameborder="0"></iframe>
    </div>
  </div>
 
</template>

<script>
import utils from '../utils/index.js'
import Vue from 'vue'
import {mapState,mapGetters,mapActions} from 'vuex'
export default {
  data () {
    return {
      xx:'aaaa',
      showIframe:false,
      msg: 'Hello world!!!',
      xiumi_url:"https://xiumi.us"
    }
  },
  computed:{
    ...mapGetters({
      hehe:'getIndexData'
    })
  },
  mounted(){
    console.log(this);
    // console.log(this.$store);
    this.$store.commit('SETINDEXDATA','111')
    // this.set_index_data(112222222)
    // this.set_login_data(111)
    // this.$store.dispatch('setHeHe');
  },
  methods:{
    ...mapActions([
      'set_index_data',
      'set_login_data'
    ]
    ),
    load(){
      console.log(1111);
      console.log(this.$refs['xiumi_iframe']);
      let self = this;
      this.$refs['xiumi_iframe'].contentWindow.postMessage('ready', "*");
      window.addEventListener('message', function (event) {
        console.log(event)
        if (event.origin == self.xiumi_url) {
            // editor.execCommand('insertHtml', event.data);
            // editor.fireEvent("catchRemoteImage");
            // dialog.close();
            console.log(event.data);
        }
    }, false);
    },
    test(){
      // this.showIframe = !this.showIframe
    
      this.$setLocale(Math.random()>0.5?'en':'zh');
    }
  }
}
</script>
<style lang="scss" scoped>
.example{
  color:darken($color: red, $amount: 0.2);
  span{
    color:red;
  }
  display:flex;
  box-sizing: border-box;
  transform: translateX(10px);
  background-image: url('../assets/images/404.png');
}
.xiumi_main{
  position:fixed;
  left:50%;
  width: 967px;
  height: 911px;
  transform: translateX(-50%);
}
</style>
