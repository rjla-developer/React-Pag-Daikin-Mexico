<?php
    require '../functions.php';

    $categoriesFlag = false;

    // $url_lineups = "https://storage.googleapis.com/meg-crm.appspot.com/RG0PUw2IUTELgo2cVOF4/cms/lineups.json";
    // $url_lineups = "https://storage.googleapis.com/meg-crm.appspot.com/RG0PUw2IUTELgo2cVOF4/cms/categories_v2.json";
    $url_lineups = "../../categories_v2.json";

    if (file_exists($cache_lineups_file) && (filemtime($cache_lineups_file) > (time() - 60 * 1 ))) {
        // Cache file is less than five minutes old. 
        // Don't bother refreshing, just use the file as-is.
        $file = file_get_contents($cache_lineups_file);
     } else {
        // Our cache is out-of-date, so load the data from our remote server,
        // and also save it over our cache for next time.
        $file = file_get_contents($url_lineups);
        file_put_contents($cache_lineups_file, $file, LOCK_EX);
     }

    $categoriesJson = $file;

    $categoriesObject = json_decode($categoriesJson);
    $categoriesArray = json_decode($categoriesJson, true);

    $product = false;
    $urlProduct = (isset($_GET['route'])) ? $_GET['route'] : null;
    $categoryUrlProduct = explode("/",substr($urlProduct, 1))[0];


    includeTemplate('header', $inicio = true);
    includeTemplate('modal');
    include('categories_body.php');
    includeTemplate('footer');
?>


<script>
    jQuery(document).ready(function ($) {
        console.log("*window.location.href: ", window.location.href);
        var url = window.location.href;
        var categoryUrlProductsArray = url.split("/productos/category/");
        console.log("*categoryUrlProductsArray: ", categoryUrlProductsArray);
        console.log("*categoryUrlProductsArray[1]: ", categoryUrlProductsArray[1]);
        if(typeof categoryUrlProductsArray[1] !== "undefined"){
            $(".product-item").removeClass("active");
            $(".product-item-"+categoryUrlProductsArray[1]).addClass("active");

            $(".product-item").parent("ul").parent("div").parent("div.collapse").removeClass("show");
            $(".product-item-"+categoryUrlProductsArray[1]).parent("ul").parent("div").parent("div.collapse").addClass("show");

            $(".product-item").parent("ul").parent("div").parent("div.collapse").parent("div.card").removeClass("selected");
            $(".product-item-"+categoryUrlProductsArray[1]).parent("ul").parent("div").parent("div.collapse").parent("div.card").addClass("selected");

            $(".product-item").parent("ul").parent("div").parent("div.collapse").parent("div.card").children("div.card-header").children("h5").children("button").addClass("collapsed");
            $(".product-item-"+categoryUrlProductsArray[1]).parent("ul").parent("div").parent("div.collapse").parent("div.card").children("div.card-header").children("h5").children("button").removeClass("collapsed");

            $(".product-item").parent("ul").parent("div").parent("div.collapse").parent("div.card").children("div.card-header").children("h5").children("button").children("i").removeClass("bi-chevron-down").addClass("bi-chevron-right");
            $(".product-item-"+categoryUrlProductsArray[1]).parent("ul").parent("div").parent("div.collapse").parent("div.card").children("div.card-header").children("h5").children("button").children("i").removeClass("bi-chevron-right").addClass("bi-chevron-down");
        }

        $(".btn.btn-link").on("click", function() {
            console.log(".btn.btn-link", $(this).hasClass("collapsed"));
            if($(this).hasClass("collapsed")){
                $(this).children("i.bi").removeClass("bi-chevron-right").addClass("bi-chevron-down");
            }else{
                $("i.bi").removeClass("bi-chevron-down").addClass("bi-chevron-right");
            }
        });
    });
</script>