<?php
require 'includes/functions.php';
includeTemplate('header', $inicio = true);
includeTemplate('modal');
?>

<div class="hero">
    <div class="hero-content-container">
        <div class="hero-content">
            <h2 class="white-title">Líderes mundiales en aire acondicionado</h2>
            <p class="white-text text-content"><span>Daikin</span> es el principal innovador y proveedor mundial de soluciones avanzadas de aire acondicionado y calefacción de alta calidad para aplicaciones residenciales, comerciales e industriales.</p>
        </div>
    </div>
</div>

<section class="products" id="products">
    <div class="container">
        <h1 class="dark-title">Productos</h1>
        <h3 class="blue-title">Conoce los productos que daikin te ofrece</h3>
        <div class="product-container">

            <div class="product">
                <a href="<?= GLOBAL_URL; ?>includes/product/vrv.php?product=vrv-1">
                    <div class="prd-image">
                        <img class="product-img" srcset="build/img/vrv_4_series_03.png 428w,
                        build/img/vrv_4_series_03.png 856w" sizes="(min-width: 1280px) 1200px,
                        (min-width:768px) 400px,
                        100vw" src="build/img/fullhd/vrv_4_series_03.png" alt="test">
                    </div>
                    <h3 class="blue-title">VRV</h3>
                </a>
            </div>

            <div class="product">
                <a href="<?= GLOBAL_URL; ?>includes/product/aplicado.php?product=aplicado-1">
                    <div class="prd-image">
                        <img class="product-img" srcset="build/img/magnitude_aplicado_04.png 428w,
                        build/img/magnitude_aplicado_04.png 856w" sizes="(min-width: 1280px) 1200px,
                        (min-width:768px) 400px,
                        100vw" src="build/img/magnitude_aplicado_04.png" alt="test">
                    </div>
                    <h3 class="blue-title">Aplicado</h3>
                </a>
            </div>
            <div class="product">
                <a href="<?= GLOBAL_URL; ?>includes/product/residencial.php?product=residencial-1">
                    <div class="prd-image">
                        <img class="product-img" srcset="build/img/minisplit_residencial-02.png 428w,
                        build/img/minisplit_residencial_02.png 856w
                        " sizes="(min-width: 1280px) 1200px,
                        (min-width:768px) 400px,
                        100vw" src="build/img/minisplit_residencial-02.png" alt="test">
                    </div>
                    <h3 class="blue-title">Residencial</h3>
                </a>

            </div>

            <div class="product">
                <a href="<?= GLOBAL_URL; ?>includes/product/services.php">
                    <div class="prd-image">
                        <img class="product-img" srcset="build/img/refacciones_servicio_05.png 428w,
                        build/img/refacciones_servicio_05.png 856w" sizes="(min-width: 1280px) 1200px,
                        (min-width:768px) 400px,
                        100vw" src="build/img/refacciones_servicio_05.png" alt="test">
                    </div>
                    <h3 class="blue-title">Servicio</h3>

                </a>
            </div>
        </div>
    </div>
</section>

<section class="fresh-and-pure">
    <div class="container">
        <a href="#fresh-and-pure">
            <img src="build/img/fresh_pure_desktop.jpg" alt="">
        </a>
    </div>
</section>

<section class="projects" id="projects">
    <h1 class="dark-title">Proyectos</h1>
    <h3 class="blue-title">LIDERANDO EL CAMINO DE LA CLIMATIZACIÓN SUSTENTABLE</h3>
    <div class="slider container">
        <a href="<?= GLOBAL_URL; ?>includes/product/mall.php">
            <div class="project-card">
                <div class="slide">
                <div class="img-cont">
                    <img srcset="build/img/fullhd/retail_proyecto_111.jpg 350w,
                    build/img/4k/retail_proyecto_11.jpg 700w" sizes="(min-width: 1280px) 1200px,
                    (min-width:1100px) 400px,
                    100vw" src="build/img/fullhd/retail_proyecto_111.jpg" alt="test">
                </div>
                    <p class="blue-title project-name">CENTROS COMERCIALES</p>
                </div>
            </div>
        </a>
        <a href="<?= GLOBAL_URL; ?>includes/product/hotel.php">
            <div class="project-card">
                <div class="slide">
                    <div class="img-cont">
                        <img srcset="build/img/fullhd/hospitalidad_proyecto_071.jpg 350w,
                        build/img/4k/hospitalidad_proyecto_07.jpg 700w" sizes="(min-width: 1280px) 1200px,
                        (min-width:1100px) 400px,
                        100vw" src="build/img/fullhd/hospitalidad_proyecto_071.jpg" alt="test">
                    </div>
                    <p class="blue-title project-name">HOTELES</p>

                </div>
            </div>
        </a>

        <a href="<?= GLOBAL_URL; ?>includes/product/infraestructure.php">
            <div class="project-card">
                <div class="slide">
                    <div class="img-cont">
                        <img srcset="build/img/fullhd/entretenimiento_proyecto_141.jpg 350w,
                        build/img/4k/entretenimiento_proyecto_14.jpg 700w" sizes="(min-width: 1280px) 1200px,
                        (min-width:1100px) 400px,
                        100vw" src="build/img/fullhd/entretenimiento_proyecto_141.jpg" alt="test">
                    </div>
                    <p class="blue-title project-name">INFRAESTRUCTURA</p>
                </div>
            </div>
        </a>
        <a href="<?= GLOBAL_URL; ?>includes/product/industry.php">
            <div class="project-card">
                <div class="slide">
                    <div class="img-cont">
                        <img srcset="build/img/fullhd/industrial_proyecto_131.jpg 350w,
                        build/img/4k/industrial_proyecto_13.jpg 700w" sizes="(min-width: 1280px) 1200px,
                        (min-width:1100px) 400px,
                        100vw" src="build/img/fullhd/industrial_proyecto_131.jpg" alt="test">
                    </div>
                    <p class="blue-title project-name">INDUSTRIA</p>

                </div>
            </div>
        </a>
        <a href="<?= GLOBAL_URL; ?>includes/product/hospital.php">
            <div class="project-card">
                <div class="slide">
                    <div class="img-cont">
                        <img srcset="build/img/fullhd/hospital_salud_proyecto_091.jpg 350w,
                        build/img/4k/hospital_salud_proyecto_09.jpg 700w" sizes="(min-width: 1280px) 1200px,
                        (min-width:1100px) 400px,
                        100vw" src="build/img/fullhd/hospital_salud_proyecto_091.jpg" alt="test">
                    </div>
                    <p class="blue-title project-name">HOSPITALES</p>
                </div>

            </div>
        </a>
        <a href="<?= GLOBAL_URL; ?>includes/product/office.php">
            <div class="project-card">
                <div class="slide">
                    <div class="img-cont">
                        <img srcset="build/img/fullhd/oficina_proyecto_061.jpg 350w,
                        build/img/4k/oficina_proyecto_06.jpg 700w" sizes="(min-width: 1280px) 1200px,
                        (min-width:1100px) 400px,
                        100vw" src="build/img/fullhd/oficina_proyecto_061.jpg" alt="test">
                    </div>
                    <p class="blue-title project-name">OFICINAS</p>
                </div>

            </div>
        </a>
        <a href="<?= GLOBAL_URL; ?>includes/product/schools.php">
            <div class="project-card">
                <div class="slide">
                    <div class="img-cont">
                        <img srcset="build/img/fullhd/educacion_proyecto_101.jpg 350w,
                        build/img/4k/educacion_proyecto_10.jpg 700w" sizes="(min-width: 1280px) 1200px,
                        (min-width:1100px) 400px,
                        100vw" src="build/img/fullhd/educacion_proyecto_101.jpg" alt="test">
                    </div>
                    <p class="blue-title project-name">EDUCACIÓN</p>
                </div>

            </div>
        </a>
        <a href="<?= GLOBAL_URL; ?>includes/product/others.php">
            <div class="project-card">
                <div class="slide">
                    <div class="img-cont">
                        <img srcset="build/img/fullhd/banco_proyecto_121.jpg 350w,
                        build/img/4k/banco_proyecto_12.jpg 700w" sizes="(min-width: 1280px) 1200px,
                        (min-width:1100px) 400px,
                        100vw" src="build/img/fullhd/banco_proyecto_121.jpg" alt="test">
                    </div>
                    <p class="blue-title project-name">OTROS</p>

                </div>
            </div>
        </a>
    </div>
</section>

<section class="solution-center" id="dsc">
    <div class="solution-description">
        <div class="line">
            <h3 class="dark-title alt-title">Daikin Solution Center</h3>
        </div>
        <p>Buscando proveer a los distribuidores,
            contratistas, e instaladores de aire acondicionado,
            calefacción y ventilación en el país con nuevas
            opciones de productos y servicios,
            <span class="">DAIKIN AIRCONDITIONING MÉXICO</span> tiene el gusto
            de informar a sus clientes y amigos sobre la
            creación de la nueva división de productos
            postventa.
        </p>
    </div>
    <div class="center-info">
        <div class="center-container">
            <div class="dsc-cont">
                <div class="dsc">
                    <h3 class="white-title alt-color">DSC MONTERREY</h3>
                    <p class="white-text"><i class="bi bi-telephone-fill"></i>01 818 333 13 35</p>
                    <p class="white-text"><span>EXT.</span> 6701</p>
                </div>
            </div>
            <div class="dsc-cont">
                <div class="dsc">
                    <h3 class="white-title alt-color">DSC LEÓN</h3>
                    <p class="white-text phone-dsc"><i class="bi bi-telephone-fill"></i>01 477 162 55 90</p>
                    <p class="white-text"><span>EXT.</span> 6801</p>
                </div>
            </div>
            <div class="dsc-cont">
                <div class="dsc">
                    <h3 class="white-title alt-color">DSC GUADALAJARA</h3>
                    <p class="white-text phone-dsc"><i class="bi bi-telephone-fill"></i>01 331 454 19 00</p>
                    <p class="white-text"><span>EXT.</span> 6601</p>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="training-station">
    <div class="training-img">
        <img srcset="build/img/centro_de_entrenamiento_16-OK.jpg 1032w,
                    build/img/centro_de_entrenamiento_16-OK.jpg 2064w" sizes="(min-width: 1280px) 1200px,
                    (min-width:1100px) 400px,100vw" 
                    src="build/img/centro_de_entrenamiento_16-OK.jpg" alt="Daikin">
    </div>

    <div class="training-info container">
        <div class="training-content">
            <h2 class="dark-title">Centro de entrenamiento</h2>
            <h3>Formando especialistas en aire acondicionado.</h3>
            <p class="dot-center"><i class="bi bi-circle-fill"></i></p>
            <div class="btn-main">
                <a class="btn-dark" href="<?= GLOBAL_URL; ?>includes/product/training.php"><i class="bi bi-chevron-right"></i>Conoce Más</a>
            </div>
        </div>
    </div>
</section>


<section class="distribution-daikin container">
    <div class="map-container">
        <a data-toggle="modal" data-target="#exampleModalCenter">
        <img srcset="build/img/fullhd/red_distribuidores_171.jpg 791w,
                    build/img/4k/red_distribuidores_17.jpg 1582w" sizes="(min-width: 1280px) 1200px,
                    (min-width:1100px) 400px,
                    100vw" src="build/img/fullhd/red_distribuidores_171.jpg" alt="test"></a>
    </div>
    <div class="map-info">
        <div class="map-content">
            <h2 class="dark-title">Red de distribuidores Daikin</h2>
            <h3>Conoce los Estados de la República en
                donde se encuentran nuestros distribuidores</h3>
            <div class="btn-main-red">
                <a class="btn-blue" data-toggle="modal" data-target="#exampleModalCenter"><i class="bi bi-chevron-right"></i>Conoce Más</a>
            </div>
        </div>
    </div>
</section>


<!-- NEWS -->

<section class="news">
    <h1 class="dark-title">Noticias</h1>
    <div class="slider container">
        <div class="news-card">
            <div class="slide">
                <div class="news-wrapper">
                    <p class="blue-title news-name">Política Antisoborno</p>
                    <div class="img-cont">
                        <img src="build/img/noticia1.jpg" alt=""> 
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
                        <img src="build/img/noticia2.jpg" alt=""> 
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
                            <img src="build/img/noticia4.jpg" alt=""> 
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

        <div class="news-card">
            <div class="slide">
                    <div class="news-wrapper">
                        <p class="blue-title news-name">Nuevo vicepresidente</p>
                        <div class="img-cont">
                            <img src="build/img/noticia4.jpg" alt=""> 
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
    </div>
</section>


<?php
includeTemplate('footer');
?>