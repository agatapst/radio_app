Vue.component('card', {
    template: '#card',
    methods: {
      toggle() {
       this.showSection = !this.showSection
      }
    },
    data() {
      return {
        showSection: false,
        imageUrl: 'https://images.unsplash.com/photo-1547679905-3c132ce6d489?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80.jpg',
      }
    }
  })
  
var app = new Vue({
    el: '#vue-app',
    data: {
        stations: [
        {name: 'Radio ZET', fm: 81.5},
        {name: 'RMF FM', fm: 101.2},
        {name: 'Eska Rock', fm: 106.6},
        {name: 'Chili Zet', fm: 105.1},
        {name: 'Classic', fm: 88.1}
       ],
       clicked: false,
    },
    
    methods: {

    },

    computed: {
       
    }
});

