<?php
require '../functions.php';
includeTemplate('header', $inicio = true);
includeTemplate('modal');
?>


<section class="news">
    <h1 class="dark-title">Noticias</h1>
    <div class="slider slider-gral container">
        
        <div class="news-card">
            <div class="slide">
                <div class="news-wrapper">
                    <p class="blue-title news-name">Términos y Condiciones</p>
                    <div class="img-cont">
                        <img src="build/img/noticia2.jpg" alt=""> 
                    </div>
                    <div class="card-content">
                        <p class="dark-text-news">Términos y Condiciones de...
                        </p>
                        <div class="btn-news">
                            <a class="btn-dark" href="<?= GLOBAL_URL; ?>terminos-y-condiciones-de-venta-directa-de-equipo-y-servicio"><i class="bi bi-chevron-right"></i>Leer Más</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="news-card">
            <div class="slide">
                <div class="news-wrapper">
                    <p class="blue-title news-name">Daikin anuncia inversión </p>
                    <div class="img-cont">
                        <img src="build/img/noticia-5-chica.jpg" alt=""> 
                    </div>
                    <div class="card-content">
                        <p class="dark-text-news" style="font-size: 14px;">De $300 millones de dólares en San Luis Potosí...
                        </p>
                        <div class="btn-news">
                            <a class="btn-dark" href="<?= GLOBAL_URL; ?>daikin-inversion-san-luis-potosi"><i class="bi bi-chevron-right"></i>Leer Más</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="news-card">
            <div class="slide">
                <div class="news-wrapper">
                    <p class="blue-title news-name" style="font-size: 2rem;">Daikin Comfort Technologies</p>
                    <div class="img-cont">
                        <img height="175px" src="build/img/planta1.jpg" alt=""> 
                    </div>
                    <div class="card-content">
                        <p class="dark-text-news" style="font-size: 14px;">Daikin Comfort Technologies construirá...
                        </p>
                        <div class="btn-news">
                            <a class="btn-dark" href="<?= GLOBAL_URL; ?>daikin-comfort-technologies-planta"><i class="bi bi-chevron-right"></i>Leer Más</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</section>


<?php
includeTemplate('footer');
?>