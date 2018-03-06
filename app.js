var vm = new Vue ({
    el: '.app',
    data:{
      info_set:[
        {url:'img/image1.jpg',
        title:'First',
        summary:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium nesciunt nobis quis provident eum tempore, repudiandae libero impedit sint hic eveniet voluptate, ad animi cum quibusdam minima explicabo sit rerum.',
        category:'Lorem',},
        {url:'img/image2.jpg',
        title:'Second',
        summary:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium nesciunt nobis quis provident eum tempore, repudiandae libero impedit sint hic eveniet voluptate, ad animi cum quibusdam minima explicabo sit rerum.',
        category:'Lorem',},
        {url:'img/image3.jpg',
        title:'Third',
        summary:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium nesciunt nobis quis provident eum tempore, repudiandae libero impedit sint hic eveniet voluptate, ad animi cum quibusdam minima explicabo sit rerum.',
        category:'Lorem',},
        {url:'img/image4.jpg',
        title:'Example',
        summary:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium nesciunt nobis quis provident eum tempore, repudiandae libero impedit sint hic eveniet voluptate, ad animi cum quibusdam minima explicabo sit rerum.',
        category:'Lorem',},
        {url:'img/image5.jpg',
        title:'Template',
        summary:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium nesciunt nobis quis provident eum tempore, repudiandae libero impedit sint hic eveniet voluptate, ad animi cum quibusdam minima explicabo sit rerum.',
        category:'Lorem',},
        {url:'img/image6.jpg',
        title:'Title',
        summary:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium nesciunt nobis quis provident eum tempore, repudiandae libero impedit sint hic eveniet voluptate, ad animi cum quibusdam minima explicabo sit rerum.',
        category:'Lorem',},
      ] //array value here
    },
  })
  var vm = new Vue({
    el:'.app-2',
    data:{},
    methods:{
      sayhello:function() {
        alert('Hello,dear!')
      }
    },
  })
  var vm = new Vue({
    el:'.app-3',
    data:{
      message:'true',
    },
    methods:{
    },
  })
  
  var vm = new Vue ({
      el:'.app-4',
      data: {
          message: 'Please write something',
          limit: 50,
      },
      computed: {
          remain:function() {
              console.log(this.limit,this.message.length)
              return this.limit - this.message.length
          }
      },
      methods: {
          check:function() {
              if(this.remain<0) {
                  this.message = this.message.substr(0,this.limit)
              }
          }
      },
  })
  
  Vue.component('simple_comp'{
    template: '#temp',
    data: function() {
        return {}
    },
    props:[],
    methods: {},   
})
