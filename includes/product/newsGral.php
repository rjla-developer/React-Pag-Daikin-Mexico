<?php
require '../functions.php';
includeTemplate('header', $inicio = true);
includeTemplate('modal');
?>


<section class="news-cont">
    <h1 class="blue-title-cult container">Otras noticias sobre Daikin México</h1>
    <div class="slider container">
        <div class="news-card">
            <div class="slide">
                <div class="news-wrapper">
                    <p class="blue-title news-name">Política Antisoborno</p>
                    <div class="img-cont">
                        <img src="../../build/img/noticia1.jpg" alt=""> 
                    </div>
                    <div class="card-content">
                        <p class="dark-text-news">Política anti-soborno, antilavado
                            de dinero...
                        </p>
                        <div class="btn-news">
                            <a class="btn-dark" href="<?= GLOBAL_URL; ?>includes/product/newsInt.php"><i class="bi bi-chevron-right"></i>Leer Más</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="news-card">
            <div class="slide">
                <div class="news-wrapper">
                    <p class="blue-title news-name">Términos y Condiciones</p>
                    <div class="img-cont">
                        <img src="../../build/img/noticia2.jpg" alt=""> 
                    </div>
                    <div class="card-content">
                        <p class="dark-text-news">Términos y Condiciones de...
                        </p>
                        <div class="btn-news">
                            <a class="btn-dark" href="<?= GLOBAL_URL; ?>includes/product/newsInt2.php"><i class="bi bi-chevron-right"></i>Leer Más</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="news-card">
            <div class="slide">
                    <div class="news-wrapper">
                        <p class="blue-title news-name">Nuevo vicepresidente</p>
                        <div class="img-cont">
                            <img src="../../build/img/noticia4.jpg" alt=""> 
                        </div>
                        <div class="card-content">
                            <p class="dark-text-news">Ing. Javier Moreno Nuevo Vice...
                            </p>
                        <div class="btn-news">
                            <a class="btn-dark" href="<?= GLOBAL_URL; ?>includes/product/newsInt3.php"><i class="bi bi-chevron-right"></i>Leer Más</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>

<section class="news-cont">
        <div class="news-card">
            <div class="slide">
                <div class="news-wrapper">
                        <p class="blue-title news-name">Nuevo vicepresidente</p>
                        <div class="img-cont">
                            <img src="../../build/img/noticia1.jpg" alt=""> 
                        </div>
                        <div class="card-content">
                            <p class="dark-text-news">Ing. Javier Moreno Nuevo Vice...
                            </p>
                        <div class="btn-news">
                            <a class="btn-dark" href="<?= GLOBAL_URL; ?>includes/product/newsInt3.php"><i class="bi bi-chevron-right"></i>Leer Más</a>
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