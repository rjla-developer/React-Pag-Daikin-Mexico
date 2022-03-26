<?php

// // echo "<br /> CATEGORY MENU >>> GLOBALS categories_array: <br />";
// // print_r($categoriesArray['categories']);

// // echo "<br /> CATEGORY MENU >>> GLOBALS category_url_product: <br />";
// // print_r($categoryUrlProduct);


// if (!is_null($categoryUrlProduct) && !is_null($categoriesArray['categories'])) {

//     foreach ($categoriesArray['categories'] as $key => $category) {

            // // echo "<br /> *======* <br />";

            // // echo "<br /> ***menu >>> key:::<br />";
            // // print_r($key);
            // echo "<br /> *------* <br />";

            // echo "<br /> ***menu >>> category:::<br />";
            // // print_r($category);
            // echo "<br /> *------* <br />";

//         recursiveMenuBuilder($category, "accordion");

//     }

// }

// $menuProductCategory = "";
// $menuCategoryUrlProduct = "";

function recursiveMenuBuilder($category, $dataParent="accordion", $urlParent="")
{
    // echo "<br /> ***recursiveMenuBuilder*** <br />";

    // echo "<br /> ***recursiveMenuBuilder>>> category::: <br />";
    // print_r($category);

    // echo "<br /> ***recursiveMenuBuilder>>> dataParent::: <br />";
    // print_r($dataParent);

    // echo "<br /> ***recursiveMenuBuilder>>> category[categories]::: <br />";
    // print_r($category["categories"]);
    if($category["level"]==0){
    //     // $menuProductCategory=str_replace("category-", "", $category["key"]);
    //     // echo "<br /> ***recursiveMenuBuilder>>> productCategory::: <br />";
    //     // print_r($menuProductCategory);

        if(sizeof($category['categories']) > 0){
            foreach ($category["categories"] as $k => $cat) {
                recursiveMenuBuilder($cat, "accordion", $urlParent.'/'.$category["key"]);
            }
        }
    }else{
        // $menuCategoryUrlProduct = explode("-",$categoryUrlProduct);
        // echo "<br /> ***recursiveMenuBuilder>>>  categoryUrlProduct[0]::: <br />";
        // print_r($menuCategoryUrlProduct[0]);
        
        // echo "<br /> ***recursiveMenuBuilder>>> productCategory::: <br />";
        // print_r($menuProductCategory);

        // if($menuCategoryUrlProduct==$menuProductCategory){
            echo '
            <div class="card">
                    <div class="card-header" id="heading-'.$category["key"].'">
                        <h5 class="mb-0">
                            <button class="btn btn-link" data-toggle="collapse" data-target="#collapse-'.$category["key"].'" aria-expanded="true" aria-controls="collapse-'.$category["key"].'">
                            ';
                            for($i = 0; $i < intval($category["level"]); $i++){
                                echo '&nbsp;&nbsp;&nbsp;';
                            }
                            echo '<i class="bi bi-chevron-right"></i>
                                '.$category["title"].'
                            </button>
                        </h5>
                    </div>

                    <div id="collapse-'.$category["key"].'" class="collapse" aria-labelledby="heading-'.$category["key"].'" data-parent="#'.$dataParent.'">
                        <div class="card-body card-0p">';

                            // echo "<br /> ***recursiveMenuBuilder>>> sizeof($category[products])::: <br />";
                            // print_r(sizeof($category['products']));

                            if(sizeof($category['products']) > 0){
                                $urlParent = $urlParent.'/'.$category["key"];
                                echo '<ul>';
                                    foreach($category['products'] as $prodKey => $prodValue){
                                        $id = $prodValue["id"];
                                        $title = $prodValue["content"]["title"];
                                        echo '
                                        <li class="product-item product-item-'.$id.'">';
                                            for($i = 0; $i < intval($category["level"]); $i++){
                                                echo '&nbsp;&nbsp;&nbsp;';
                                            }
                                        echo '
                                            <i class="bi bi-circle-fill"></i>
                                            <a href="'.GLOBAL_URL.'categorias'.$urlParent.'/products/'.$id.'">
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

                                    // echo "<br /> *** $category categories *** <br />";
                                    
                                    // echo "<br /> ***recursiveMenuBuilder>>> k::: <br />";
                                    // print_r($k);

                                    // echo "<br /> ***recursiveMenuBuilder>>> cat::: <br />";
                                    // print_r($cat);

                                    recursiveMenuBuilder($cat, 'collapse-'.$category["key"], $urlParent.'/'.$category["key"]);
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
            // echo "<br /> CATEGORY MENU >>> categoriesArray: <br />";
            // print_r($categoriesArray);

            // echo "<br /> CATEGORY MENU >>> GLOBALS categories_array: <br />";
            // print_r($categoriesArray['categories']);

            // echo "<br /> CATEGORY MENU >>> GLOBALS category_url_product: <br />";
            // print_r($categoryUrlProduct);

            // foreach ($categoriesArray as $key => $value) {
            //     echo "<br /> KEY: $key <br /> VALUE: <br />";
            //     print_r($value);
            // }
            
            // !is_null($categoryUrlProduct) && 
            if (!is_null($categoriesArray['categories'])) {

                foreach ($categoriesArray['categories'] as $key => $category) {

                    // echo "<br /> *======* <br />";

                    // echo "<br />****menu >>> key:::<br />";
                    // print_r($key);
                    // echo "<br /> *------* <br />";

                    // echo "<br />****menu >>> category:::<br />";
                    // print_r($category);
                    // echo "<br /> *------* <br />";

                    // echo "<br /> KEY: $key <br /> CATEGORY: <br />";
                    // print_r($category);

                    if($category["level"]==0){

                        // echo "<br /> ====== <br />";

                        // $menuProductCategory=str_replace("category-", "", $category["key"]);
                        // echo "<br /> ***onPage>>> <br /> menuProductCategory::: <br />";
                        // print_r($menuProductCategory);

                        // $menuCategoryUrlProduct = explode("-",$categoryUrlProduct)[0];
                        // echo "<br /> ***onPage>>> <br />  menuCategoryUrlProduct::: <br />";
                        // print_r($menuCategoryUrlProduct);


                        // $menuProductCategory = $category["key"];
                        // echo "<br /> ***onPage>>> <br /> menuProductCategory::: <br />";
                        // print_r($menuProductCategory);

                        // $menuCategoryUrlProduct = $categoryUrlProduct;
                        // echo "<br /> ***onPage>>> <br />  menuCategoryUrlProduct::: <br />";
                        // print_r($menuCategoryUrlProduct);

                        // echo "<br /> ====== <br />";

                        //Temporal - prueba.
                        // $menuCategoryUrlProduct = "residencial";

                        if($category["key"]==$categoryUrlProduct){
                            // echo "<br /> ===ENTRÓ=== <br />";
                            recursiveMenuBuilder($category, "accordion");
                        }

                    }

                }

            }
        ?>

    </div>
</div>
