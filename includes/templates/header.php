<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="<?=GLOBAL_URL;?>build/plugins/bootstrap-icons/font/bootstrap-icons.css">
  <link rel="stylesheet" href="<?=GLOBAL_URL;?>build/css/app.css">
  <title>Daikin México</title>
</head>

<body>
  <div class="fixed-top" id="home">
    <nav class="navbar-custom navbar navbar-expand-lg navbar-dark">
      <div class="container">
        <a class="navbar-brand" href="<?=GLOBAL_URL;?>index.php"><img class="logo-img" src="<?=GLOBAL_URL;?>build/img/logo_171x37.png" alt=""><span class="country">MÉXICO</span></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="custom-nav collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="https://www.daikin.com/">DAIKIN GLOBAL <i class="bi bi-globe"></i></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="<?=GLOBAL_URL;?>includes/product/contact.php">CONTACTO</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <nav class="navbar-custom2 navbar navbar-expand-lg navbar-dark">
      <div class="container" id="home">
        <a class="navbar-brand mobile-menu" href="<?=GLOBAL_URL;?>index.php"><img class="logo-img" src="<?=GLOBAL_URL;?>build/img/logo_171x37.png" alt=""></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="custom-nav collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="<?=GLOBAL_URL;?>includes/product/cultura.php">Cultura Daikin</i></a>
            </li>
            <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Productos
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          
          <a class="dropdown-item" href="<?=GLOBAL_URL;?>includes/product/vrv.php?product=vrv-1"><i class="bi bi-chevron-right"></i>VRV</a>
          
          <a class="dropdown-item" href="<?=GLOBAL_URL;?>includes/product/residencial.php?product=residencial-1"><i class="bi bi-chevron-right"></i>Residencial</a>
          
          <a class="dropdown-item" href="<?=GLOBAL_URL;?>includes/product/aplicado.php?product=aplicado-1"><i class="bi bi-chevron-right"></i>Aplicado</a>
        </div>
      </li>

            <li class="nav-item">
              <a class="nav-link" href="<?=GLOBAL_URL;?>includes/product/services.php">Servicios</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="modal" data-target="#exampleModalCenter">Distribuidores</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="<?=GLOBAL_URL;?>includes/product/jobs.php">Bolsa de Trabajo</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="<?=GLOBAL_URL;?>includes/product/newsInt.php">Noticias e Industria</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="<?=GLOBAL_URL;?>includes/product/contact.php">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>