<?php
$purificadoresJson = file_get_contents("../../purificadores.json");
$purificadoresJsonDecode = json_decode($purificadoresJson, true);
$products = $purificadoresJsonDecode['products'];
$product = false;
$urlProduct = (isset($_GET['product'])) ? $_GET['product'] : false;


if ($urlProduct !== false) {

    foreach ($products as $value) {
        if ($value['id'] === $urlProduct) {
            $product = $value;
        }
    }

    if ($product !== false) {
?>
        <div class="product-img">
            <img src="<?= GLOBAL_URL; ?>/build/img/purificadores/<?= $product['image']; ?>" alt="">
        </div>
        <div class="product-info-cont container">
            <h3 class="blue-title-cult"><?= $product['content']['title']; ?></h3>
            <p class="dark-text"><?= $product['content']['description']; ?></p>
            <p class="dark-text"><?= $product['content']['summary']; ?></p>
            <ul>
                <?php
                if ($product['content']['features']) {
                    foreach ($product['content']['features'] as $value) {
                ?>
                        <li><i class="bi bi-chevron-right"></i><?= $value['feature']; ?></li>
                <?php
                    }
                }
                ?>
            </ul>
            <?php
            if ($product['downloads']) {
            ?>
                <div class="download-container">
                    <div class="download-icon">
                        <h3 class="blue-title-cult"><i class="bi bi-download"> Descargas</i></h3>
                    </div>
                    <div class="download-options">
                        <?php
                        foreach ($product['downloads'] as $value) {
                        ?>
                            <a target="blank" href="<?= $value['download_link']; ?>"><?= $value['download_text']; ?></a>
                        <?php
                        }
                        ?>
                    </div>
                </div>
            <?php
            }
            ?>
        </div>
<?php
    }
}
?>