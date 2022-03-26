<?php

// echo "<br /> categoriesObject categories category-vrv::: <br />";
// print_r($categoriesObject->categories->{'category-vrv'}->categories->{'category-vrv-lvl-1-opt-1'}->products->{'vrv-lvl-1-opt-1-prod-1'}->content->title);

if ($urlProduct !== false) {
    $urlProductArray = explode("/",substr($urlProduct, 1));

    $temporalFlag = false;
    $temporalArray = $categoriesObject->categories->{$urlProductArray[0]}; 

    foreach($urlProductArray as $urlProductKey => $urlProductValue){
        if($urlProductKey>0){
            if($temporalFlag){
                $temporalArray = $temporalArray->products->{$urlProductValue};
            }else{
                if($urlProductValue != "products"){
                    $temporalArray = $temporalArray->categories->{$urlProductValue};
                }
                else{
                    $temporalFlag = true;
                }
            }
        }
    }

    $product = $temporalArray;

    if ($product !== false) {
?>
        <div class="product-img">
        <?php
            foreach ($product->images as $value) { ?>
            <img src="<?= $value; ?>" alt="">
        <?php
            }
        ?>
        </div>
        <div class="product-info-cont container">
            <h3 class="blue-title-cult"><?= $product->content->title; ?></h3>
            <p class="dark-text"><?= $product->content->description; ?></p>
            <ul>
                <?php
                if ($product->content->features) {
                    foreach ($product->content->features as $value) {
                ?>
                        <li><i class="bi bi-chevron-right"></i><?= $value->feature; ?></li>
                <?php
                    }
                }
                ?>
            </ul>
            <?php
            if ($product->downloads) {
            ?>
                <div class="download-container">
                    <div class="download-icon">
                        <h3 class="blue-title-cult"><i class="bi bi-download"></i> Descargas</h3>
                    </div>
                    <div class="download-options">
                        <?php
                        foreach ($product->downloads as $value) {
                        ?>
                            <a target="_blank" href="<?= $value->download_link; ?>"><?= $value->download_text; ?></a>
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