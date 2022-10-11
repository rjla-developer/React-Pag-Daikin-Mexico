<?php
/*
Template Name: Home
*/
get_header(); ?>


<section class="heroHome">

  <video class="image-fill" data-width="960" data-height="540" autoplay="autoplay" loop="loop" muted="" id="home-video" poster="<?php echo get_template_directory_uri(); ?>/assets/img/video-poster.png">

    <source src="https://storage.googleapis.com/meg-sites/daikinmx/wp-content/themes/daikin/assets/video/home.mp4">
    <!-- <?php //echo get_template_directory_uri(); ?>/assets/video/home.mp4 -->

    <!-- <source src="http://daikin.jaimeeee.com/videos/home.webm" type="video/webm"> -->

  </video>

  <a href="#" class="scrollerButton"></a>

</section>


<section class="services spaceTop">
  <div class="wrapper" style="display:none;">
    <div class="bannerSubHeaderBackground BannerImg">
      <a href="https://www.youtube.com/watch?v=WwW3z40j1zc" class="bannerTypes">
        <div class="heroText" style="background:none !important"><!--empty--></div>
      </a>
    </div>
  </div>
</section>

<section id="freshAndPure">
  <div class="wrapper">
    <a href="<?php echo site_url(); ?>/fresh-and-pure" class="">
      <div class="custom-background"></div>
    </a>
  </div>
</section>

<section id="productos" class="services">
  <div class="wrapper">
    <div class="servicesBackground vrvImg">
      <a href="<?php echo site_url(); ?>/vrv" class="servicesTypes">
        <div class="heroText">
          <h1 class="sectionTitle sectionTitle--main">
            VRV
          </h1>
        </div>

      </a>
     </div>
    <div class="servicesBackground appliedImg">
      <a href="<?php echo site_url(); ?>/aplicado" class=" servicesTypes">
        <div class="heroText">
           <h1 class="sectionTitle sectionTitle--main">
             Aplicado
           </h1>
         </div>
      </a>
    </div>
    <div class="servicesBackground residentialImg">
      <a href="<?php echo site_url(); ?>/residencial" class=" servicesTypes">
        <div class="heroText">
          <h1 class="sectionTitle sectionTitle--main">
            Residencial
          </h1>
        </div>
      </a>
    </div>
  </div>
</section>

<section class="projects">
  <div class="heroText blueB transparent">
       <h1 class="sectionTitle sectionTitle--main plantTitle projectsTitle"> Proyectos </h1>
         <h2 class="blueB projectsTitle">  liderando el camino de la climatización sustentable</h2>
       </div>
  <div class="wrapper">
  <div class="projectsSlider owl-carousel">
    <a href="<?php echo home_url();?>/nuestros-proyectos?paged=27" class="projectsSliderBox">
      <h1>Centros comerciales</h1>
      <img src="<?php echo get_template_directory_uri(); ?>/assets/img/centros-comerciales.png" alt="Hotel">
    </a>
    <a href="<?php echo home_url();?>/nuestros-proyectos?paged=28" class="projectsSliderBox">
      <h1>Hoteles</h1>
      <img src="<?php echo get_template_directory_uri(); ?>/assets/img/hotelProject.png" alt="Hotel">
    </a>
    <a href="<?php echo home_url();?>/nuestros-proyectos?paged=31" class="projectsSliderBox">
      <h1>Infraestructura</h1>
      <img src="<?php echo get_template_directory_uri(); ?>/assets/img/infrastructure.png" alt="infrastructure">
    </a>
    <a href="<?php echo home_url();?>/nuestros-proyectos?paged=32" class="projectsSliderBox">
      <h1>Educacion</h1>
      <img src="<?php echo get_template_directory_uri(); ?>/assets/img/education.png" alt="Education">
    </a>
    <a href="<?php echo home_url();?>/nuestros-proyectos?paged=29" class="projectsSliderBox">
      <h1>Industria</h1>
      <img src="<?php echo get_template_directory_uri(); ?>/assets/img/industrias.png" alt="Hotel">
    </a>
    <a href="<?php echo home_url();?>/nuestros-proyectos?paged=26" class="projectsSliderBox">
      <h1>Oficinas</h1>
      <img src="<?php echo get_template_directory_uri(); ?>/assets/img/oficinas.png" alt="Hotel">
    </a>
    <a href="<?php echo home_url();?>/nuestros-proyectos?paged=30" class="projectsSliderBox">
      <h1>Hospitales</h1>
      <img src="<?php echo get_template_directory_uri(); ?>/assets/img/hospitales.png" alt="Hotel">
    </a>
  </div>
</section>

<section id="servicio" class="dscServices">
  <div class="dsc">
    <div class="wrapper">
      <div class="dscSlider">
        <div class="dscSliderBox left">
          <span class="dscBoxStyle">
            <span class="dcsBox">
              <span class="dscTag">
                Servicio - DSC
              </span>
              <span class="dscTitle">
                Daikin solution Center
              </span>
              <p class="dscContent">
                Buscando proveer a los distribuidores, contratistas, e instaladores de aire acondicionado, calefacción y ventilación en el país con nuevas opciones de productos y servicios, Daikin Airconditioning México tiene el gusto de informar a sus clientes y amigos sobre la creación de la nueva división de productos postventa.
              </p>
              <span class="dscButton">
                <a class="dscButton" href="#"> Contacto <img src="<?php echo get_template_directory_uri(); ?>/assets/img/button.png" alt="button"></a>
              </span>
            </span>
          </span>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="entertainmentCenter">
  <div class="entertainment">
      <section class="hero">
        <a href="<?php echo site_url(); ?>/centro-de-entrenamiento" class="heroText">
          <h1 class="sectionTitle sectionTitle--main">Centro de entrenamiento</h1>
          <h2>formando especialistas en aire acondicionado.</h2>
        </a>
        <div class="moreButton">
          <a href="<?php echo site_url(); ?>/centro-de-entrenamiento"> Ver más <img src="<?php echo get_template_directory_uri(); ?>/assets/img/button.png" alt="button"></a>
        </div>
      </section>
  </div>
</section>

  <section id="distribuidores" class="hero map">
    <div class="heroText">
      <h1 class="sectionTitle sectionTitle--main">Red de distribuidores de Daikin</h1>
    </div>
    <div class="moreButton">
      <a href="<?php echo site_url(); ?>/distribuidores"> Ver más <img src="<?php echo get_template_directory_uri(); ?>/assets/img/button.png" alt="button"></a>
    </div>
  </section>


  <section id="noticias" class="projects">
    <div class="heroText blueB transparent">
     <h1 class="sectionTitle sectionTitle--main plantTitle newsTitle"> Noticias e Industria </h1>
   </div>
   <div class="newsBottom">
    <div class="wrapper">
    <div class="articles">
      <?php

      $args = array(
        'post_type' => 'post',
        'posts_per_page' => 3,
        'orderby'        => 'most_recent',
      );

      $query = new WP_Query( $args );
        if ( $query->have_posts() ) {
        	while ( $query->have_posts() ) {
        		$query->the_post(); ?>
            <div class="article">
				<a href="<?php the_permalink();?>">
              		<?php the_post_thumbnail('article');?>
				</a>
              <div class="newsContent">
                <p class="newsTitle">
                  <span class="newsDate"><?php the_time( 'd/m/Y' ); ?> | </span><?php the_title(); ?>
                </p>
                <p class="newsDesc">
                  <?php the_excerpt(); ?> <a href="<?php the_permalink(); ?>">  Ver más...</a>
                </p>
              </div>
            </div>
            <?php
          } // end while
        } // end if
      ?>
    </div>
  </div>
    </div>
  </section>
  <div class="modal modal--contact">
    <div class="modal-bg"></div>
    <div class="modal-content">
      <div class="close"></div>
      <div class="modal-contact">
        <h3>Contacto DSC</h3>
        <div class="infoLeft">
          <h4>DSC Monterrey</h4>
          <p class="name">Juan Fernández</p>
          <p><strong>Tel:</strong> 018183331335</p>
          <p><strong>ext.</strong> 6701</p>
        </div>
        <div class="infoRight">
          <h4>DSC Guadalajara</h4>
          <p class="name">Alejandro Guerrero</p>
          <p><strong>Tel:</strong> 013314541900 </p>
          <p><strong>ext.</strong> 6601</p>
        </div>
		<div class="infoRight">
          <h4>DSC León</h4>
          <p class="name">Josué  Morales</p>
          <p><strong>Tel:</strong> 014771625590 </p>
          <p><strong>ext.</strong> 6801</p>
        </div>
		
      </div>
      </div>
    </div>
  </div>

<?php get_footer(); ?>
