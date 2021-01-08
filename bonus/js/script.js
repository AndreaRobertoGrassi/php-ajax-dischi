var app=new Vue({
  el:'#app',
  data:{
    img:'../spotify.png',  //logo
    database:[]  //contiene tutti gli hotels
  },
  mounted:function() {
    this.filtro();
  },
  methods:{
    filtro(author='tutti'){
      console.log('autore',author);
      axios
        .get('data.php', {
          params:{
            'author':author
          }
        })
        .then(res => {    // prendo i dati dal file data tramite axios
          this.database=res.data;
      });
    }
  }
});
