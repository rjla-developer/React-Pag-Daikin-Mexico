<?php
require '../functions.php';
includeTemplate('header', $inicio = true);
includeTemplate('modal');
?>

<div class="wrapper container">
    <div class="news-hero3">

    </div>

    <div class="news-intro-cont">
        <div class="news-intro">
            <p class="white-text">
                ANFAD Nombra nuevo Vicepresidente en el sector de aire acondicionado.
            </p>
        </div>
    </div>
</div>

<div class="news-wrapper">
    <div class="news-int container">
        <h3 class="blue-title-cult">ANFAD Nombra nuevo Vicepresidente en el sector de aire acondicionado.</h3>
        <p class="dark-text">El pasado 26 de mayo, se reunió el Comité Directivo de Aires acondicionados de la Asociación Nacional de Fabricantes de Aparatos Domésticos (ANFAD), A. C., en donde, además de revisar diferentes temas, se eligió al nuevo Vicepresidente del Sector. Con el consenso unánime de todos los Asociados del Sector, resultó electo el Ing Francisco Javier Moreno López, quien a partir de mayo ocupa esta Vicepresidencia de ANFAD.</p>
        <p class="dark-text">El nuevo Vicepresidente, que actualmente ocupa el cargo de Director Comercial en la multinacional japonesa Daikin, es Ingeniero en Alimentos con especialidad en Ingeniería en Refrigeración graduado de la UNAM, cuenta con un MBA por la EGADE Business School-Estrategia de Negocios, y lo respaldan más de 26 años de experiencia en la industria de la refrigeración y aire acondicionado.</p>
        <p class="dark-text">Ante el nombramiento, comenta que “resulta todo un hito en mi carrera, por la importancia de estar como representante de la Asociación en una Industria tan relevante como lo es el HVAC, y al mismo tiempo, es una gran responsabilidad con los agremiados ya que mediante voto han depositado la confianza en mi persona para dirigir y acompañar los planes e iniciativas que surgen dentro del sector”, afirma el directivo.</p>
        <p class="dark-text">Además, mantiene clara la dirección y los objetivos junto con ANFAD, para “llevar la voz y opinión de la Industria en los foros relevantes que ayuden a brindar las bases de crecimiento, tomando en cuenta nuestra responsabilidad con el medio ambiente y al mismo tiempo ofreciendo mayores beneficios a los usuarios de los equipos que fabricamos, por que a final de cuentas ellos son el motor y la razón de ser de esta industria”, afirma el nuevo Vicepresidente.</p>
    </div>
</div>




<section class="news-cont">
    <h1 class="blue-title-cult container">Otras noticias sobre Daikin México</h1>
    <div class="slider container">

        <div class="news-card">
            <div class="slide">
                <div class="news-wrapper">
                    <p class="blue-title news-name">Términos y Condiciones</p>
                    <div class="img-cont">
                        <img height="170px" src="../../build/img/noticia2.jpg" alt=""> 
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
                        <img height="170px" src="build/img/noticia-5-chica.jpg" alt=""> 
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
                        <p class="blue-title news-name">Daikin Comfort Technologies</p>
                        <div class="img-cont">
                            <img height="170px" src="../../build/img/planta1.jpg" alt=""> 
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