<?php
require '../functions.php';
includeTemplate('header', $inicio = true);
includeTemplate('modal');

$city = false;
$cityUrl = (isset($_GET['city'])) ? $_GET['city'] : false;

print_r($city);
print_r('---');
print_r($cityUrl);

$fileJson = file_get_contents("../../distributors.json");
$cities = json_decode($fileJson, true);

$city = $cities[$cityUrl];
$name = $city['city'];
$state = $city['state'];
$distributors = $city['distributors'];

if ($cityUrl !== false && $city !== false) {
?>
    <div class="container">
        <div class="distribution-container">
            
            <h1 class="blue-title-cult state-name"><?= $name; ?></h1>
            <h3 class="blue-title-cult city-name"><?= $state; ?></h3>

            <?php
                foreach ($distributors as $value) {
                $distributor = $value;
            ?>

            <div class="partner-container">
                <div class="partner-info">
                    <div class="partner-img">
                        <div class="partner-logo">
                            <img src="../../build/img/logos/<?= $distributor['content']['image']; ?>" alt="">
                        </div>
                        <div class="contact-details">
                            <h3 class="dark-title align-left"><?= $distributor['content']['partner']; ?></h3>
                        <div class="details">
                            <p class="dark-text">Titular</p>
                            <p class="dark-text"><?= $distributor['content']['titular']; ?></p>
                        </div>
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
                            <p class="dark-text"><?= $distributor['content']['email']; ?></p>
                        </div>
                        <div class="details">
                            <p class="dark-text">Sitio Web</p>
                            <p class="dark-text"><?= $distributor['content']['site']; ?></p>
                        </div>
                    </div>
                    </div>
                    
                    <div class="location-wrapper">
                        <iframe src="<?= $distributor['content']['map']; ?>" frameborder="0"></iframe>
                    </div>
                </div>
            </div>
            <?php
            }
            ?>
        </div>
    </div>
<?php
}
includeTemplate('footer');
?>