<?php
require '../functions.php';
includeTemplate('header', $inicio = true);
includeTemplate('modal');

$fileJson = file_get_contents("../../mall.json");
$fileJsonDecode = json_decode($fileJson, true);
$projects = $fileJsonDecode['projects'];
?>

<div class="projects-intro container">
    <div class="projects-title">
        <h3 class="blue-title-cult">
            Proyectos
        </h3>
        <p class="dark-text">Liderando el camino de la climatización sustentable</p>
    </div>
    <div class="daikin-prj">
        <p class="dark-text">Daikin ha sido parte esencial en la construcción de edificios reconocidos en el mundo por su alta eficiencia y confort. Los siguientes casos son historias de éxito que muestran como Daikin, junto con sus aliados estratégicos y clientes, han creado soluciones para resolver los retos de cada aplicación, beneficiando tanto a los propietarios como a sus ocupantes.</p>
    </div>
</div>

<div class="hero-projects">
    <div class="overlay-projects">
        <div class="daikin-projects container">
            <h3 class="white-title-culture">Centros Comerciales</h3>
        </div>
    </div>
</div>


<section class="slides-container">
    <div class="slider-projects container">
        <?php
        foreach ($projects as $value) {
            $project = $value;
        ?>
            <div class="project-prj-card">
                <div class="slide-prj">
                    <div class="img-prj-container" style="background-image:url(../../build/img/<?= $project['image']; ?>);">

                    </div>
                    <div class="info-prj-container">
                        <h3 class="blue-title-cult"><?= $project['content']['title']; ?></h3>
                        <div class="location-date">
                            <i class="bi bi-geo-alt-fill"></i>
                            <p class="dark-text"><?= $project['content']['place']; ?></p>
                        </div>
                        <div class="location-date">
                            <i class="bi bi-calendar"></i>
                            <p><?= $project['content']['year']; ?></p>
                        </div>
                        <h3 class="dark-title-cult"><?= $project['content']['subtitle']; ?></h3>
                        <ul>
                            <?php
                            if ($project['content']['features']) {
                                foreach ($project['content']['features'] as $value) {
                            ?>
                                    <li><i class="bi bi-chevron-right"></i><?= $value['feature']; ?></li>
                            <?php
                                }
                            }
                            ?>
                        </ul>
                    </div>
                </div>
            </div>
        <?php
        }
        ?>
    </div>
</section>


<?php
includeTemplate('footer');
?>