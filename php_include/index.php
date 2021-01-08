<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>

    <?php require_once 'data.php' ?>
    <link rel="stylesheet" href="css/style.css">

  </head>
  <body>
    <div id="app">

      <!-- intestazione -->
      <header>
        <img src="../spotify.png" class="logo" alt="">
      </header>

      <!-- corpo principale che contiene tutti i dischi-->
      <main>

        <?php
          for ($i=0; $i < count($database) ; $i++) {
            $disco=$database[$i];
            ?>
              <div class="disco">
                <img src="<?php echo $disco['poster'] ?>"alt="">
                <h3 class="title"><?php echo $disco['title'] ?></h3>
                <div><?php echo $disco['author'] ?></div>
                <div><?php echo $disco['year'] ?></div>
              </div>
            <?php
          }
        ?>

      </main>

    </div>
  </body>
</html>
