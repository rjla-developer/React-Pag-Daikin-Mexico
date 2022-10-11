<?php

// // echo "<br /> CATEGORY MENU >>> GLOBALS categories_array: <br />";
// // print_r($GLOBALS['categories_array']);

// // echo "<br /> CATEGORY MENU >>> GLOBALS category_url_product: <br />";
// // print_r($GLOBALS['category_url_product']);


// if (!is_null($GLOBALS['category_url_product']) && !is_null($GLOBALS['categories_array'])) {

//     foreach ($GLOBALS['categories_array'] as $key => $category) {

            // // echo "<br /> *======* <br />";

            // // echo "<br /> ***menu >>> key:::<br />";
            // // print_r($key);
            // echo "<br /> *------* <br />";

            // echo "<br /> ***menu >>> category:::<br />";
            // // print_r($category);
            // echo "<br /> *------* <br />";

//         recursiveMenuBuilder($category["category"]);

//     }

// }

$GLOBALS["productCategory"]="";
$GLOBALS["categoryUrlProduct"] ="";

function recursiveMenuBuilder($category, $dataParent="accordion")
{
    // echo "<br /> ***recursiveMenuBuilder*** <br />";
    // echo "<br /> ***recursiveMenuBuilder>>> category::: <br />";
    // print_r($category);

    // echo "<br /> ***recursiveMenuBuilder>>> category[categories]::: <br />";
    // print_r($category["categories"]);
    if($category["level"]==0){
        // $GLOBALS["productCategory"]=str_replace("category-", "", $category["key"]);
        // echo "<br /> ***recursiveMenuBuilder>>> productCategory::: <br />";
        // print_r($GLOBALS["productCategory"]);

        if(sizeof($category['categories']) > 0){
            foreach ($category["categories"] as $k => $cat) {
                recursiveMenuBuilder($cat["category"]);
            }
        }
    }else{
        // $GLOBALS["categoryUrlProduct"] = explode("-",$GLOBALS['category_url_product']);
        // echo "<br /> ***recursiveMenuBuilder>>>  categoryUrlProduct[0]::: <br />";
        // print_r($GLOBALS["categoryUrlProduct"][0]);
        
        // echo "<br /> ***recursiveMenuBuilder>>> productCategory::: <br />";
        // print_r($GLOBALS["productCategory"]);

        // if($GLOBALS["categoryUrlProduct"]==$GLOBALS["productCategory"]){
            echo '
            <div class="card">
                    <div class="card-header" id="heading'.$category["key"].'">
                        <h5 class="mb-0">
                            <button class="btn btn-link" data-toggle="collapse" data-target="#collapse'.$category["key"].'" aria-expanded="true" aria-controls="collapse'.$category["key"].'"><i class="bi bi-chevron-right"></i>
                                '.$category["title"].'
                            </button>
                        </h5>
                    </div>

                    <div id="collapse'.$category["key"].'" class="collapse" aria-labelledby="heading'.$category["key"].'" data-parent="#'.$dataParent.'">
                        <div class="card-body card-0p">';

                            // echo "<br /> ***recursiveMenuBuilder>>> sizeof($category[products])::: <br />";
                            // print_r(sizeof($category['products']));

                            if(sizeof($category['products']) > 0){
                                echo '<ul>';
                                    foreach($category['products'] as $prodKey => $prodValue){
                                        $id = $prodValue["id"];
                                        $title = $prodValue["content"]["title"];
                                        echo '
                                        <li class="product-item product-item-'.$id.'">
                                            <i class="bi bi-circle-fill"></i>
                                            <a href="'.GLOBAL_URL.'productos/'.$GLOBALS["categoryUrlProduct"].'/'.$id.'">
                                                '.$title.'
                                            </a>
                                        </li>';
                                    }
                                echo '</ul>';
                            }

                            // echo "<br /> ***recursiveMenuBuilder>>> sizeof($category[categories])::: <br />";
                            // print_r(sizeof($category['categories']));

                            if(sizeof($category['categories']) > 0){
                                foreach ($category["categories"] as $k => $cat) {
                                    recursiveMenuBuilder($cat["category"], 'collapse'.$category["key"]);
                                }
                            }

            echo '      </div>
                    </div>
                </div>
            ';
        
        // }
    }
}

?>

<div class="products-menu-container">
    <div id="accordion">

        <?php
            // echo "<br /> CATEGORY MENU >>> GLOBALS categories_array: <br />";
            // print_r($GLOBALS['categories_array']);

            // echo "<br /> CATEGORY MENU >>> GLOBALS category_url_product: <br />";
            // print_r($GLOBALS['category_url_product']);

            if (!is_null($GLOBALS['category_url_product']) && !is_null($GLOBALS['categories_array'])) {

                foreach ($GLOBALS['categories_array'] as $key => $category) {

                    // echo "<br /> *======* <br />";

                    // echo "<br />****menu >>> key:::<br />";
                    // print_r($key);
                    // echo "<br /> *------* <br />";

                    // echo "<br />****menu >>> category:::<br />";
                    // print_r($category);
                    // echo "<br /> *------* <br />";

                    if($category["category"]["level"]==0){

                        // echo "<br /> ====== <br />";

                        $GLOBALS["productCategory"]=str_replace("category-", "", $category["category"]["key"]);
                        // echo "<br /> ***onPage>>> <br /> productCategory::: <br />";
                        // print_r($GLOBALS["productCategory"]);

                        $GLOBALS["categoryUrlProduct"] = explode("-",$GLOBALS['category_url_product']);
                        // echo "<br /> ***onPage>>> <br />  categoryUrlProduct[0]::: <br />";
                        // print_r($GLOBALS["categoryUrlProduct"][0]);

                        // echo "<br /> ====== <br />";

                        //Temporal - prueba.
                        $GLOBALS["categoryUrlProduct"] = "residencial";
                        if($GLOBALS["categoryUrlProduct"]==$GLOBALS["productCategory"]){
                            recursiveMenuBuilder($category["category"]);
                        }

                    }

                }

            }
        ?>

    </div>
</div>
