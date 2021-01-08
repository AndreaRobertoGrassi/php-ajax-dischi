<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>

    <link rel="stylesheet" href="css/style.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.21.1/axios.min.js" integrity="sha512-bZS47S7sPOxkjU/4Bt0zrhEtWx0y0CRkhEp8IckzK+ltifIIE9EMIMTuT/mEzoIMewUINruDBIR/jJnbguonqQ==" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.js"></script>

  </head>
  <body>
    <div id="app">

      <!-- intestazione -->
      <header>
        <img :src="img" class="logo" alt="">
      </header>


      <!-- corpo principale che contiene tutti i dischi-->
      <main>
        <div class="disco" v-for="disco in database">
          <img :src="disco.poster"alt="">
          <h3 class="title">{{disco.title}}</h3>
          <div>{{disco.author}}</div>
          <div>{{disco.year}}</div>
        </div>
      </main>

    </div>

    <!-- SCRIPT -->
    <script src="js/script.js" charset="utf-8"></script>
  </body>
</html>
