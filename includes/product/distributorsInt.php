<?php
require '../functions.php';
includeTemplate('header', $inicio = true);

$fileJson = file_get_contents("../../map.json");
$fileJsonDecode = json_decode($fileJson, true);
$states = $fileJsonDecode['states'];

$state = false;
$urlState = (isset($_GET['estado'])) ? $_GET['estado'] : false;


if ($urlState !== false) {

    foreach ($states as $value) {
        if ($value['id'] === $urlState) {
            $state = $value;
        }
    }

    if ($state !== false) {
?>


        <div class="state-wrapper">
            <div class="state-info container">
                <a class="return" href="distribuidores.php"><i class="bi bi-chevron-left"></i> Regresar</a>

                <h3 class="blue-title-cult"><?= $state['content']['state']; ?></h3>

                <div class="city-picker">
                    <?php
                    if (isset($state['content']['cities'])) {
                        if (sizeof($state['content']['cities']) != 1) {
                            foreach ($state['content']['cities'] as $val) {
                    ?>
                                <a class="state-btn" href="<?= $val['link']; ?>"><?= $val['name']; ?></a>
                    <?php
                            }
                        }
                    }
                    ?>
                </div>
            </div>
        </div>


        <div class="map-wrapper">
            <iframe src="<?= $state['content']['city']['link']; ?>" width="100%" height="690" frameborder="0"> </iframe>
        </div>


<?php
    }
}
includeTemplate('footer');
?>