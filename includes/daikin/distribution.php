<?php
require '../functions.php';
includeTemplate('header', $inicio = true);
includeTemplate('modal');

$state = false;
$stateUrl = (isset($_GET['state'])) ? $_GET['state'] : false;
$cityUrl = (isset($_GET['city'])) ? $_GET['city'] : false;

// print_r('---');
// print_r($state);
// print_r('---');
// print_r($stateUrl);
// print_r('---cityUrl:::');
// print_r($cityUrl);
// var_dump($cityUrl);

$fileJson = file_get_contents("../../distributorsByState.json");
$cities = json_decode($fileJson, true);

$state = $cities[$stateUrl];
$stateName = $state['state'];
$cities = $state['cities'];

// print_r('---');
// print_r($cities);

if ($stateUrl !== false && $cities !== false) {
?>
    <div class="container">
        <div class="distribution-container">
            
            <h1 class="blue-title-cult state-name"><?= $stateName; ?></h1>

            <?php
                foreach ($cities as $stateVal) {

                    $cityId = $stateVal['id'];
                    $cityName = $stateVal['city'];
                    $distributors = $stateVal['distributors'];

                    // print_r('---cityId:::');
                    // print_r($cityId);
                    // print_r('---cityName:::');
                    // print_r($cityName);
                    // print_r('---distributors:::');
                    // print_r($distributors);

                    if($cityUrl===false || (strtolower($cityUrl) === strtolower($cityId))){
            ?>

            <h3 class="blue-title-cult city-name"><?= $cityName; ?></h3>

            <?php
                foreach ($distributors as $value) {
                $distributor = $value;

            ?>
            

            <div class="partner-container">

            <?php
                if($distributor['content']['map']!=""){
            ?>

                <div class="partner-info">

            <?php
                }else{
            ?>

                <div class="partner-info" style="grid-template-columns: repeat(1,1fr);">

            <?php
                }
            ?>

                    <div class="partner-img">
                        <div class="partner-logo">
                            <img style="max-width: 300px; max-height: 150px;" src="../../build/img/logos/<?= $distributor['content']['image']; ?>" alt="">
                        </div>
                        <div class="contact-details">
                            <h3 class="dark-title align-left"><?= $distributor['content']['partner']; ?></h3>
                        <?php if($distributor['content']['titular'] != ""){ ?>
                            <!-- <div class="details">
                                <p class="dark-text">Titular</p>
                                <p class="dark-text"><?= $distributor['content']['titular']; ?></p>
                            </div> -->
                        <?php } ?>
                        <div class="details">
                            <p class="dark-text">Calle</p>
                            <p class="dark-text"><?= $distributor['content']['calle']; ?></p>
                        </div>
                        <div class="details">
                            <p class="dark-text">Teléfono</p>
                            <p class="dark-text"><?= $distributor['content']['phone']; ?></p>
                        </div>
                        <div class="details">
                            <p class="dark-text">E-Mail</p>
                            <a class="dark-text" href="mailto:<?= $distributor['content']['email']; ?>"><?= $distributor['content']['email']; ?></a>
                        </div>
                        <?php if($distributor['content']['site'] != ""){ ?>
                            <div class="details">
                                <p class="dark-text">Sitio Web</p>
                                <a class="dark-text" target="_blank" href="http://<?= $distributor['content']['site']; ?>"><?= $distributor['content']['site']; ?></a>
                            </div>
                        <?php } ?>
                        </div>
                    </div>

                    <?php
                        if($distributor['content']['map']!=""){
                    ?>
                        <div class="location-wrapper">
                            <iframe src="<?= $distributor['content']['map']; ?>" frameborder="0"></iframe>
                        </div>
                    <?php
                        }
                    ?>
                </div>
            </div>
            <?php
                } } }
            ?>
        </div>
    </div>
<?php
}
includeTemplate('footer');
?>