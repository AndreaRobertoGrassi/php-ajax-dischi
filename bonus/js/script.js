var app=new Vue({
  el:'#app',
  data:{
    img:'../spotify.png',  //logo
    database:[],  //contiene tutti i dischi
    databaseCopy:[], //copia dell'array database
    allStr:'All'
  },
  mounted:function() {
    this.filtro();
  },
  methods:{
    filtro(author=this.allStr){
      console.log('autore',author);
      axios
        .get('data.php', {
          params:{
            'author':author    //sarebbe la stessa cosa che scrivere nell'url ?'min'=
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
      console.log(this.databaseCopy);
      this.database=this.databaseCopy;
    }
  }
});
