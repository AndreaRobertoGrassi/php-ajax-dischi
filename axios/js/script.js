var app=new Vue({
  el:'#app',
  data:{
    img:'../spotify.png',  //logo
    database:[]  //contiene tutti gli hotels
  },
  mounted:function() {
    axios.get('data.php').then(res => {    // prendo i dati dal file data tramite axios
      this.database=res.data;
    });
  }
});
