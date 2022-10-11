<?php
require '../functions.php';
includeTemplate('header', $inicio = true);
includeTemplate('modal');

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$url_lineups = "https://daikinmx.megcrm.mx/internal/api/training-center/events";

$file = file_get_contents($url_lineups);
$coursesJson = $file;

$coursesObject = json_decode($coursesJson);
$events = json_decode($coursesJson, true);

// print_r("\n\n url_lineups: ");
// print_r($url_lineups);
// print_r("\n\n events: ");
// print_r($events);

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

<?php
//$events = $coursesArray["events"];
for ($i = 0; $i < sizeof($events); $i++) {
    // echo '<i class="bi bi-chevron-right"></i>'.$events[$i]["title"].'';
    // style="gap: 3rem !important; margin: 3rem auto !important;"
?>
    <div class="course-container container details">

        <div class="daikin-wbt-container text-center pt-5 border-top-cls index-<?=$i;?>">
            <h3 class="blue-title-cult"><?= $events[$i]["title"]; ?></h3>
            <img src="<?= $events[$i]["banner_url"]; ?>" class="img-fluid" />
            <p class="dark-text"><?= $events[$i]["description"]; ?></p>
        </div>

        <div class="course-details">
            <div class="details-col first">
                <h3 class="blue-title-cult">Duración</h3>
                <p class="dark-text">Del <b><?= $events[$i]["from"]; ?></b> al <b><?= $events[$i]["to"]; ?></b> </p>
                <h3 class="blue-title-cult">Dirección</h3>
                <p class="dark-text"><?= $events[$i]["address"]; ?></p>
                <?php if ($events[$i]['documents']) { ?>
                <?php } ?>
            </div>

            <div class="details-col">
                <h3 class="blue-title-cult">Regístrate: </h3>
                <p class="dark-text mt-3"> <a target="_blank" href="<?= $events[$i]["registration_form"]; ?>"> <?= $events[$i]["registration_form"]; ?> </a> </p>

                <h3 class="blue-title-cult">Documentos: </h3>
                <?php if ($events[$i]['documents']) { ?>
                    <div class="download-container">
                        <div class="download-options">
                            <?php
                            foreach ($events[$i]['documents'] as $document) {
                                // print_r("\n\n value: ");
                                // print_r($value);
                            ?>
                                <div class="download-option mt-3">
                                    <a target="blank" href="<?= $document['url']; ?>"> <?= $document['name']; ?></a>
                                </div>
                            <?php
                            }
                            ?>
                        </div>
                    </div>
                <?php
                }
                ?>
            </div>
        </div>
    </div>
<?php } ?>

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