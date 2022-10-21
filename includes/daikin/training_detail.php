<?php
require '../functions.php';
includeTemplate('header', $inicio = true);
includeTemplate('modal');

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$id = "";

if(isset($_GET['id'])){
    $id = $_GET['id'];
    // print_r("*get id: ");
    // print_r($_GET["id"]);
    // print_r($id);
}else{
    $newURL = "http://daikin-mx-website.meg.lo/includes/daikin/training.php";
    header('Location: '.$newURL);
    exit;
}

$url_lineups = "https://daikinmx.megcrm.mx/internal/api/training-center/events/".$id;
print_r("\n\n url_lineups: ");
print_r($url_lineups);

$file = file_get_contents($url_lineups);
$coursesJson = $file;

$coursesObject = json_decode($coursesJson);
$event = json_decode($coursesJson, true);

// print_r("\n\n url_lineups: ");
// print_r($url_lineups);
// print_r("\n\n event: ");
// print_r($event);
?>

<div class="hero-training">
    <div class="overlay-training">
        <div class="daikin-products container">
            <h3 class="white-title-culture">Centro de entrenamiento</h3>
            <p class="white-text">Formando especialistas en aire acondicionado</p>
        </div>
    </div>
</div>
<!-- style="border-top: 1px solid #dddddd; padding-top: 25px;" -->
    <div class="course-container container details">

        <div class="daikin-wbt-container text-center">
        
            <?php if(isset($event["title"])){ ?>
                <h3 class="blue-title-cult"><?=$event["title"];?></h3>
            <?php } ?>
            <?php if(isset($event["banner_url"])){ ?>
                <img src="<?=$event["banner_url"];?>" class="img-fluid" />
            <?php } ?>
            <?php if(isset($event["description"])){ ?>
                <p class="dark-text"><?=$event["description"];?></p>
            <?php } ?>

        </div>

        <div class="course-details">
            <div class="details-col first">

                <?php if(isset($event["from"]) || isset($event["to"])){ ?>
                    <h3 class="blue-title-cult">Duración</h3>
                    <p class="dark-text">
                        <?php if(isset($event["from"])){ ?>
                            Del <b><?=$event["from"];?></b> 
                        <?php } ?>
                        
                        <?php if(isset($event["to"])){ ?>
                            al <b><?=$event["to"];?></b> 
                        <?php } ?>
                    </p>
                <?php } ?>
                
                <?php if(isset($event["address"])){ ?>
                    <h3 class="blue-title-cult">Dirección</h3>
                    <p class="dark-text"><?=$event["address"];?></p>
                <?php } ?>

            </div>

            <div class="details-col">

                <?php if(isset($event["documents"])){ ?>
                    <?php if(sizeof($event["documents"]) > 0){ ?>
                        <h3 class="blue-title-cult">Documentos: </h3>
                        <div class="download-container">
                            <div class="download-options">
                                <?php
                                    foreach ($event['documents'] as $document) {
                                        // print_r("\n\n value: ");
                                        // print_r($value);
                                ?>
                                    <div class="download-option mt-3">
                                        <a target="blank" href="<?= $document['url']; ?>">  
                                            <?= $document['name']; ?>
                                        </a>
                                    </div>
                                <?php } ?>
                            </div>
                        </div>
                    <?php } ?>
                <?php } ?>


                <?php if(isset($event["registration_form"])){ ?>
                    <!-- <h3 class="blue-title-cult">Regístrate: </h3>
                    <p class="dark-text mt-3"> 
                        <a target="_blank" href="<?=$event["registration_form"];?>"> 
                            <?=$event["registration_form"];?> 
                        </a> 
                    </p> -->

                    <div class="register-button">
                        <a target="_blank" href="<?= $event["registration_form"]; ?>">
                            <button type="button" class="btn btn-primary"> Regístrate </button>
                        </a>
                    </div>
                <?php } ?>
                
            </div>
        </div>
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