var app=new Vue({
  el:'#app',
  data:{
    img:'../spotify.png',  //logo
    database:[],  //contiene tutti i dischi
    databaseCopy:[], //copia dell'array database
    allStr:'All'
  },
  mounted:function() {
    this.all(); // al caricamneto della pagina vedo tutti i dischi
  },
  methods:{
    filtro(author){  // filtro in base all'autore
      axios
        .get('data.php', {
          params:{
            'author':author  
          }
        })
        .then(res => {    // prendo i dati dal file data tramite axios
          this.database=res.data;
          if (this.databaseCopy.length==0) {
            this.databaseCopy=res.data;
          }
      });
    },

    all(){
      this.filtro('');  //ripristina la ricerca
    }
  }
});
