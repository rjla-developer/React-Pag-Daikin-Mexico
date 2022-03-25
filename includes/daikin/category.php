<?php
    require '../functions.php';


    $categoriesFlag = false;
    $categoriesJson = file_get_contents("https://storage.googleapis.com/meg-crm.appspot.com/RG0PUw2IUTELgo2cVOF4/cms/lineups.json");
    $categoriesJsonDecode = json_decode($categoriesJson, true);
    $categoriesArray = $categoriesJsonDecode['categories'];
    $categoryUrlProduct = (isset($_GET['product'])) ? $_GET['product'] : null;

    // echo "<br /> categoriesFlag::: <br />";
    // print_r($categoriesFlag);
    // echo "<br /> categoriesJson::: <br />";
    // print_r($categoriesJson);
    // echo "<br /> categoriesJsonDecode::: <br />";
    // print_r($categoriesJsonDecode);
    // echo "<br /> categoriesArray::: <br />";
    // print_r($categoriesArray);
    // echo "<br /> categoryUrlProduct::: <br />";
    // print_r($categoryUrlProduct);

    $GLOBALS['categories_array']=null;
    // echo "<br /> GLOBALS categories_array: <br />";
    // print_r($GLOBALS['categories_array']);

    $GLOBALS['category_url_product']=null;
    // echo "<br /> GLOBALS category_url_product: <br />";
    // print_r($GLOBALS['category_url_product']);

    if (!is_null($categoryUrlProduct) && !is_null($categoriesArray)) {
        // echo "<br /> ENTRÓ $categoryUrlProduct !== false  && !is_null($categoriesArray) <br />";
        // echo "<br /> >>>categoriesArray::: <br />";
        // print_r($categoriesArray);
        $GLOBALS['categories_array']=$categoriesArray;
        $GLOBALS['category_url_product']=$categoryUrlProduct;
    }
    // echo "<br /> GLOBALS categories_array: <br />";
    // print_r($GLOBALS['categories_array']);

    // echo "<br /> GLOBALS category_url_product: <br />";
    // print_r($GLOBALS['category_url_product']);


    includeTemplate('header', $inicio = true);
    includeTemplate('modal');
    include('category_body.php');
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