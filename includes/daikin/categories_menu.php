<?php

function recursiveMenuBuilder($category, $dataParent="accordion", $urlParent="")
{

    if($category["level"]==0){
        if(sizeof($category['categories']) > 0){
            foreach ($category["categories"] as $k => $cat) {
                recursiveMenuBuilder($cat, "accordion", $urlParent.'/'.$category["key"]);
            }
        }
    }else{
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

                        if(sizeof($category['categories']) > 0){
                            foreach ($category["categories"] as $k => $cat) {
                                recursiveMenuBuilder($cat, 'collapse-'.$category["key"], $urlParent.'/'.$category["key"]);
                            }
                        }
        echo '      </div>
                </div>
            </div>
        ';
    }
}

?>

<div class="products-menu-container">
    <div id="accordion">

        <?php 
            if (!is_null($categoryUrlProduct) && !is_null($categoriesArray['categories'])) {

                foreach ($categoriesArray['categories'] as $key => $category) {

                    if($category["level"]==0){
                        if($category["key"]==$categoryUrlProduct){
                            recursiveMenuBuilder($category, "accordion");
                        }

                    }

                }

            }
        ?>

    </div>
</div>
