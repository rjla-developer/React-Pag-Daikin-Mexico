<?php


// $urlProduct = (isset($_GET['product'])) ? $_GET['product'] : false;
// print_r("urlProduct: ");
// print_r($urlProduct);


// echo "<br /> urlProduct::: <br />";
// print_r($urlProduct);


// echo "<br /> categoriesArray::: <br />";
// print_r($categoriesArray);


// echo "<br /> categoriesObject::: <br />";
// print_r($categoriesObject);


// echo "<br /> categoriesArray categories::: <br />";
// print_r($categoriesObject->categories);


// echo "<br /> categoriesArray categories category-vrv::: <br />";
// print_r($categoriesObject->categories->{'category-vrv'}->categories->{'category-vrv-lvl-1-opt-1'}->products->{'vrv-lvl-1-opt-1-prod-1'}->content->title);



if ($urlProduct !== false) {

    // $value = $categoriesObject->categories->{'category-vrv'}->categories->{'category-vrv-lvl-1-opt-1'}->products->{'vrv-lvl-1-opt-1-prod-1'}->content->title;

    $urlProductArray = explode("/",substr($urlProduct, 1));
    // $urlProductArray = array_shift($urlProductArray);

    // echo "<br /> urlProductArray::: <br />";
    // print_r($urlProductArray);

    $temporalFlag = false;
    $temporalArray = $categoriesObject->categories->{$urlProductArray[0]}; 

    // echo "<br /> temporalArray::: <br />";
    // print_r($temporalArray);
    // echo "<br /> ====== <br />";

    foreach($urlProductArray as $urlProductKey => $urlProductValue){
        // echo "<br /> urlProductKey::: <br />";
        // print_r($urlProductKey);

        // echo "<br /> urlProductValue::: <br />";
        // print_r($urlProductValue);

        if($urlProductKey>0){
            if($temporalFlag){
                // echo"<br /> entró a IF temporalFlag == true <br />";
                $temporalArray = $temporalArray->products->{$urlProductValue};
                // echo "<br /> temporalArray::: <br />";
                // print_r($temporalArray);
                // echo "<br /> ______ <br />";
            }else{
                // echo"<br /> entró a ELSE temporalFlag == true <br />";
                if($urlProductValue != "products"){
                    // echo"<br /> entró a IF urlProductValue != products <br />";
                    $temporalArray = $temporalArray->categories->{$urlProductValue};
                    // echo "<br /> temporalArray::: <br />";
                    // print_r($temporalArray);
                    // echo "<br /> ______ <br />";
                }
                else{
                    // echo"<br /> entró a ELSE urlProductValue != products <br />";
                    $temporalFlag = true;
                }
            }
        }
    }

    // echo "<br /> temporalArray::: <br />";
    // print_r($temporalArray);

    // $value = $temporalArray;

    // $value = $categoriesObject->categories->{'category-vrv'}->categories->{'category-vrv-lvl-1-opt-1'}->products->{'vrv-lvl-1-opt-1-prod-1'};

    $product = $temporalArray;

    // echo "<br /> product: <br />";
    // print_r($product);

    // foreach ($products as $value) {
    //     if ($value['id'] === $urlProduct) {
    //         $product = $value;
    //     }
    // }

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