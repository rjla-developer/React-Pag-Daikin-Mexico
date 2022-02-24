<?php
    require '../functions.php';
    includeTemplate('header', $inicio = true);
    includeTemplate('modal');
    include('vrv_body.php');
    includeTemplate('footer');
?>


<script>
    jQuery(document).ready(function ($) {
        console.log("*window.location.href: ", window.location.href);
        var url = window.location.href;
        var urlProductsArray = url.split("/productos/vrv/");
        console.log("*urlProductsArray: ", urlProductsArray);
        console.log("*urlProductsArray[1]: ", urlProductsArray[1]);
        if(typeof urlProductsArray[1] !== "undefined"){
            $(".product-item").removeClass("active");
            $(".product-item-"+urlProductsArray[1]).addClass("active");

            $(".product-item").parent("ul").parent("div").parent("div.collapse").removeClass("show");
            $(".product-item-"+urlProductsArray[1]).parent("ul").parent("div").parent("div.collapse").addClass("show");

            $(".product-item").parent("ul").parent("div").parent("div.collapse").parent("div.card").removeClass("selected");
            $(".product-item-"+urlProductsArray[1]).parent("ul").parent("div").parent("div.collapse").parent("div.card").addClass("selected");

            $(".product-item").parent("ul").parent("div").parent("div.collapse").parent("div.card").children("div.card-header").children("h5").children("button").addClass("collapsed");
            $(".product-item-"+urlProductsArray[1]).parent("ul").parent("div").parent("div.collapse").parent("div.card").children("div.card-header").children("h5").children("button").removeClass("collapsed");

            $(".product-item").parent("ul").parent("div").parent("div.collapse").parent("div.card").children("div.card-header").children("h5").children("button").children("i").removeClass("bi-chevron-down").addClass("bi-chevron-right");
            $(".product-item-"+urlProductsArray[1]).parent("ul").parent("div").parent("div.collapse").parent("div.card").children("div.card-header").children("h5").children("button").children("i").removeClass("bi-chevron-right").addClass("bi-chevron-down");
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