<?php
require '../functions.php';
includeTemplate('header', $inicio = true);
includeTemplate('modal');
?>

<div class="wrapper container">
    <div class="news-hero2" style="background-image: url(../../build/img/noticia-5-grande.jpeg) !important;"></div>

    <div class="news-intro-cont">
        <div class="news-intro" style="max-width: 40rem;">
            <p class="white-text">
                Daikin anuncia inversión de $300 millones de dólares en San Luis Potosí para su segunda planta de producción en México
            </p>
        </div>
    </div>
</div>

<div class="news-wrapper">
    <div class="news-int container">

        <h4 class="blue-title-cult" style="font-size: 2rem;">    
            ●	Daikin busca integrar la producción a nivel local para mantener altos estándares de calidad y eficiencia, al mismo tiempo que se generan 2 mil 500 empleos en la entidad
            <br /><br />
            ●	La nueva planta de 11 hectáreas entrará en pleno funcionamiento en 2024 y complementará las capacidades regionales de fabricación para América del Norte y en América Latina
        </h4>
        
        <p class="dark-text">
            <b>San Luis Potosí, México, 12 de septiembre de 2022</b> 
            Daikin, multinacional líder de la industria de calefacción, ventilación y aire acondicionado (HVAC, por sus siglas en inglés) anunció una inversión de 300 millones de dólares, con lo que se estima se crearán más de 2 mil 500 empleos para la nueva planta que iniciará operaciones en 2024. Con lo anterior, la firma japonesa, reitera su confianza en México y en el estado de San Luis Potosí. 
        </p>
        <br />
        <p class="dark-text">
            La ceremonia de anuncio de inversión contó con la presencia del Secretario de Desarrollo Económico del Gobierno del Estado de San Luis Potosí, Juan Carlos Valladares Eichelmann, así como los ejecutivos, Shigeki Hagiwara, Oficial Asociado Senior, Representante de Latinoamérica, Daikin Industries, LTD y Andrés Benavides, Director General de Daikin Manufacturing Mexico. La inversión de Daikin en San Luis Potosí, forma parte de la estrategia de crecimiento de la compañía, en respuesta a la creciente demanda de productos en Latinoamérica y América del Norte. 
        </p>
        <br />
        <p class="dark-text">
            “La producción regional, la innovación, la calidad japonesa y también el fortalecimiento de vínculos con la sociedad en los países en que tenemos presencia, convertirán a Daikin en el líder de la industria de HVAC en Latinoamérica y Norteamérica”, afirmó Shigeki Hagiwara y Andrés Benavides agregó que en esta nueva fábrica se producirán productos residenciales y comerciales, ambos con tecnologías innovadoras y sustentables.
        </p>
        <br />
        <p class="dark-text">
            El Secretario de Desarrollo Económico del Gobierno del Estado, Juan Carlos Valladares Eichelmann, enfatizó “esta nueva inversión de Daikin, sienta un precedente importante para lograr el objetivo planteado por el gobernador Ricardo Gallardo Cardona para posicionar a San Luis Potosí como el mejor estado para invertir en México; al mismo tiempo, impulsar la expansión y el crecimiento de las empresas que actualmente se encuentran en territorio potosino”.
        </p>
    </div>
</div>

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
                            <a class="btn-dark" href="<?= GLOBAL_URL; ?>politica-anti-soborno-anti-lav-ado-de-dinero-y-de-ley-de-practicas-corruptas-en-el-extranjero-de-1977-foreign-corrupt-practices-act-o-fcpa"><i class="bi bi-chevron-right"></i>Leer Más</a>
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
                            <a class="btn-dark" href="<?= GLOBAL_URL; ?>terminos-y-condiciones-de-venta-directa-de-equipo-y-servicio"><i class="bi bi-chevron-right"></i>Leer Más</a>
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