Vue.component('simple_comp',{
    template: '#temp',
    data: function() {
        return {
            message: 'There is a new value'
        }
    },
    props:[],
    methods: {},   
})

var vm = new Vue({
    el: '#app',
    data:{},
    computed:{},
    methods:{},
})


/* you can register it local like this:

var vm1 = new Vue({
    el:'#app1',
    components:{
        comp:{
        template: '#temp',
        data: function() {
        return {
            message: 'There is a new value'
        }
    },
        props:[],
        methods: {}, 
        }
    }
})*/

Vue.component('comp',{
    template:'#temp1',
    data: function() {
        return {
            message: 'New component '+this.prop,
        }
    },
    props: ['prop'],
    methods:{},
})

var vm = new Vue({
    el:'#app1',
    data:{
        vue_data:'New data value',
    },
})
