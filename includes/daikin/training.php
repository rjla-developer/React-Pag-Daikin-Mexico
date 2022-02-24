<?php
require '../functions.php';
includeTemplate('header', $inicio = true);
includeTemplate('modal');
?>

<div class="hero-training">
    <div class="overlay-training">
        <div class="daikin-products container">
            <h3 class="white-title-culture">Centro de entrenamiento</h3>
            <p class="white-text">Formando especialistas en aire acondicionado</p>
        </div>
    </div>
</div>

<div class="gray-separator">
    <h3 class="white-title-culture">Elige un curso</h3>
</div>
<div class="gray-separator">

    <div class="container btn-cont">
        <a class="btn-blue" href=""><i class="bi bi-chevron-right"></i> Daikin WBT</a>
    </div>
</div>


<div class="course-container container">
    <div class="daikin-wbt-container">
        <h3 class="blue-title-cult">Daikin WBT</h3>

        <p class="dark-text">Entrenamiento WEB.</p>
        <p class="dark-text">Sólo requieres computadora y conexión a internet.</p>
    </div>


    <div class="course-details">
        <div class="details-container">
            <h3 class="blue-title-cult">Duración</h3>
            <h3 class="blue-title-cult">Tamaño de grupo</h3>
            <h3 class="blue-title-cult">Prerequisitos</h3>
            <h3 class="blue-title-cult">Precio</h3>
            <h3 class="blue-title-cult">Capacitadores</h3>
            <h3 class="blue-title-cult">Horario</h3>
        </div>

        <div class="details-info">
            <p class="dark-text">1 dia (8horas)</p>
            <p class="dark-text">30 personas</p>
            <p class="dark-text">Ninguno</p>
            <p class="dark-text">$90 dólares américanos (más IVA)</p>
            <p class="dark-text">Francisco Raúl Chavolla</p>
            <p class="dark-text">00:00 - 23:59</p>
        </div>
    </div>
</div>

<div class="download-cont container">
    <a href="">Cuentas de depósito</a>
    <a href="">Hoteles Cercanos</a>
    <a href="">Fechas disponibles</a>
</div>

<div class="wrapper-info">
<div class="aditional-info-container container">
    <div class="people-title container">
        <h3 class="blue-title-cult">Personas y empresas certificadas</h3>
    </div>
    <div class="aditional-info container">

        <div class="extra-info"><i class="bi bi-geo-alt-fill"></i>
            <p class="dark-text">BLVD. Centro Industrial No. 1025 Fraccionamiento Industrial Puente de Vigas, Tlalnepantla de Baz, Edo. de México, C.P. 54070</p>
        </div>

        <div class="extra-info"><i class="bi bi-map"></i><a href="">Ver en mapa</a></div>

        <div class="extra-info"><i class="bi bi-telephone-fill"></i>
            <p class="dark-text">(55)50-46-63-20, EXT. 6461 y 6462</p>
        </div>

    </div>

</div>
</div>
<?php
includeTemplate('footer');
?>