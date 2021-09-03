<?php
require '../functions.php';
includeTemplate('header');
?>
<div class=" tabs-container">
  <div class="row">
    <div class="bg-tabs">
      <div class="tabs-container-links">
        <nav class="container-tabs">
          <div class="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
            <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Cultura Daikin</a>
            <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-about-us" role="tab" aria-controls="nav-profile" aria-selected="false">Nosotros</a>
            <a class="timeline-tab nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-history" role="tab" aria-controls="nav-contact" aria-selected="false">Historia</a>
            <a class="nav-item nav-link responsability" id="nav-about-tab" data-toggle="tab" href="#nav-environment" role="tab" aria-controls="nav-about" aria-selected="false">Responsabilidad Ambiental</a>
            <a class="nav-item nav-link nav-grid" id="nav-plant-tab" data-toggle="tab" href="#nav-plant" role="tab" aria-controls="nav-plant" aria-selected="false">Planta</a>
          </div>
        </nav>
      </div>
      <div class="tab-content" id="nav-tabContent">
        <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
          <div class="hero-tabs">
            <div class="overlay">
              <div class="culture-daikin container">
                <h3 class="white-title-culture">Cultura Daikin</h3>
                <p class="white-text">Situado al este del continente asiático, Japón tiene cuatro estaciones distintivas:
                  primavera, verano, otoño e invierno.</p>
                <p class="white-text">Japón es un país insular que se propaga ampliamente, de norte a sur, rodeada de mar.
                  Hokkaido, en el norte se encuentra en una zona subártica con temperaturas muy por debajo de cero
                  grados en los inviernos, mientras Okinawa, en el sur se encuentra en una zona subtropical con
                  temperaturas altas durante todo el año. Por otra parte, el clima es muy diferente dependiendo de si
                  usted se encuentra del lado del Océano Pacífico o el Mar de Japón y en diferentes regiones.</p>
                <p class="white-text">Los equipos de aire acondicionado Daikin han evolucionado en respuesta a tal diversidad climática.</p>
              </div>
            </div>
          </div>
          <div class="weather">
            <h3 class="white-title-culture">Clima</h3>
          </div>


          <div class="weather-container">
            <div class="weather-img">
              <img class="" src="<?= GLOBAL_URL; ?>/build/img/cultura_material_11.jpg" alt="">
            </div>
            <div class="weather-info2 container">
              <h3 class="blue-title-cult container">Primavera alegre y calma</h3>
              <p class="date-text container">Marzo-Mayo</p>
              <p class="dark-text container">
                La primavera en Japón es un momento en que las nuevas bellas hojas
                verdes y los árboles de cerezos brotan, así como las flores de varios colores
                florecen. La temperatura se eleva gradualmente después de que los
                cerezos florecen a finales de marzo. El clima es suave y cómodo en esta
                época del año.
              </p>
            </div>
          </div>



          <div class="weather-container secondary">
            <div class="weather-img img-columns">
              <img src="<?= GLOBAL_URL; ?>/build/img/cultura_material_10.jpg" alt="">
            </div>
            <div class="weather-info container info-columns">
              <h3 class="blue-title-cult container">Verano cálido y húmedo</h3>
              <p class="date-text container">JUNIO-AGOSTO</p>
              <p class="dark-text container">
                En muchos lugares, las temperaturas suben por encima de 30 ° C
                durante el día. Con aire húmedo que viene desde el sur, aumenta el
                nivel de humedad y la gente siente que la temperatura es más elevada
                que la temperatura real.
              </p>
              <p class="dark-text container">
                Por lo tanto, la gente en Japón requieren la función de
                deshumidificación además de enfriamiento. Con esto, el verano
                húmedo y caluroso se convirtió en una estación del año cómoda.
              </p>
            </div>
          </div>
          <div class="weather-container secondary">
            <div class="weather-img">
              <img src="<?= GLOBAL_URL; ?>/build/img/cultura_material_05.jpg" alt="">
            </div>
            <div class="weather-info2 container">
              <h3 class="blue-title-cult container">Otoño con follaje brillante y colorido</h3>
              <p class="date-text container">SEPTIEMBRE-NOVIEMBRE</p>
              <p class="dark-text container">
                Después de que el calor del verano se enfría, se empiezan a sentir
                escalofríos por las mañanas y las noches. Damos la bienvenida a la
                temporada de hojas de otoño y la cosecha. Podemos disfrutar de la belleza
                del cielo claro y el follaje de color rojo y amarillo brillante.
              </p>
            </div>
          </div>
          <div class="weather-container secondary img-columns">
            <div class="weather-img">
              <img src="<?= GLOBAL_URL; ?>/build/img/cultura_material_03.jpg" alt="">
            </div>
            <div class="weather-info container info-columns">
              <h3 class="blue-title-cult container">Invierno severo con nieve intensa</h3>
              <p class="date-text container">DICIEMBRE-FEBRERO</p>
              <p class="dark-text container">
                A parte de las temperaturas frías severas, se puede experimentar
                nieve intensa en el invierno. Debido al viento estacional, el lado del
                Mar de Japón estará cubierto de nieve, mientras que el lado del
                Océano Pacífico se vuelve seco.
              </p>
              <p class="dark-text container">
                A fin de sobrepasar el frío severo y seco del invierno, se requirió
                que los aires acondicionados puedan humidificar mientras calientan
                poderosamente la habitación.
              </p>
            </div>
          </div>
          <div class="weather">
            <h3 class="white-title-culture">Recursos</h3>
          </div>
          <div class="grid-container">
            <div class="resources-container">
              <div class="resources-card">
                <h3 class="dark-title-cult">Tecnologías de ahorro de
                  energía, originado por el recurso
                  limitado de energía en Japón</h3>
                <p class="dark-text">Japón depende de otros países para el suministro de
                  energía, debido a sus limitados recursos. Como
                  resultado, la manufactura japonesa ha logrado un alto
                  rendimiento ambiental, enfocado en el consumo de
                  combustible en los automóviles y el consumo de energía
                  en la electrónica del hogar.</p>
              </div>
            </div>

            <div class="resources-container blue-secondary">
              <div class="resources-card">
                <h3 class="dark-title-cult">Aire acondicionado, sólo
                  habitaciones ocupadas</h3>
                <p class="dark-text">Un sistema de aire acondicionado convencional enfría
                  todo el edificio, incluyendo las habitaciones
                  desocupadas.</p>
                <p class="dark-text">Con el fin de crear ambientes cómodos utilizando
                  menos energía, se nos ocurrió el concepto de aire
                  acondicionado sólo en habitaciones necesarias.</p>
              </div>
            </div>
            <div class="resources-container">
              <div class="resources-card">
                <h3 class="dark-title-cult">Ahorro de Energía a través de la
                  Tecnología Inverter</h3>
                <p class="dark-text">Inverter es una tecnología de ahorro de energía capaz
                  de eliminar funciones con desperdicio de energía al
                  controlar eficientemente la velocidad del motor.</p>
                <p class="dark-text">En comparación con los equipos no Inverter, los aires
                  acondicionados Inverter consumen aproximadamente
                  un 60% menos de energía.</p>
              </div>
            </div>
          </div>
          <div class="hero-tabs resources-banner">
            <div class="overlay overlay-resources">
              <div class="culture-daikin container">
                <h3 class="white-title-culture">De Japón para el mundo</h3>
                <h4 class="company-name">DAIKIN</h4>
                <p class="white-text">La diversidad climática de Japón y los recursos limitados llevaron al nacimiento de las tecnologías de Daikin, una Marca de Japón.</p>
                <p class="white-text">Daikin continuará llevando al mundo estas tecnologías a las personas de varios países para vivir sus vidas cotidianas con mayor</p>
              </div>
            </div>
          </div>
        </div>
        <!--First Tab Content Ends -->

        <div class="tab-pane fade" id="nav-about-us" role="tabpanel" aria-labelledby="nav-profile-tab">
          <div class="hero-tabs about-banner">
            <div class="overlay overlay-resources">
              <div class="culture-daikin container">
                <h3 class="white-title-culture">Nosotros</h3>
                <p class="white-text">Somos la compañía más grande de aire acondicionado, calefacción, ventilación y refrigeración a nivel
                  mundial. Ofrecemos soluciones innovadoras de climatización para satisfacer necesidades en mercados
                  residenciales, comerciales e industriales.</p>
              </div>
            </div>
          </div>
          <div class="intro-container container">
            <h3 class="blue-title-cult">Somos reconocidos mundialmente por nuestra calidad y versatilidad en las soluciones que ofrecemos.</h3>
            <p class="dark-text">Nos involucramos de inicio a fin en el diseño de nuestros sistemas HVAC, proporcionando óptimos beneficios que superen sus expectativas en cuanto a:</p>
            <div class="benefits-container">
              <div class="benefits-card">
                <p class="blue-text">Eficiencia energética</p>
              </div>
              <div class="benefits-card">
                <p class="blue-text">Calidad superior del
                  aire interior. (Calidad en
                  el aire acondicionado)Eficiencia energética</p>
              </div>
              <div class="benefits-card">
                <p class="blue-text">Menor costo para la
                  propiedad. (Reducción
                  de costos)</p>
              </div>
              <div class="benefits-card">
                <p class="blue-text">Funcionamiento silencioso</p>
              </div>
            </div>
            <p class="dark-text">Millones de personas cada día dependen de nuestros productos para proporcionar el clima adecuado a numerosos edificios mundialmente destacados
              por su confort y sustentabilidad.</p>
          </div>
          <div class="daikin-philosophy-container">
            <div class="daikin-philosophy container">
              <h3 class="white-title-culture">Filosofía Daikin</h3>
              <p class="white-text">Escuchamos y satisfacemos los deseos y necesidades de nuestros clientes. Contribuimos a la
                comunidad con las más avanzadas tecnologías e innovaciones, anticipando las necesidades
                futuras del mercado y preservando el medio ambiente. Nuestra gente es nuestro más
                preciado recurso. Somos un grupo experto, flexible y comprometido que ofrece soluciones,
                no simplemente productos. Construimos relaciones amigables y constructivas con nuestros
                aliados de negocio para lograr el beneficio mutuo.</p>
            </div>
          </div>
          <div class="general-info-container">
            <div class="custom-grid container">
              <div class="img-custom-grid">
                <img src="<?= GLOBAL_URL; ?>/build/img/cultura_material_09.jpg" alt="">
              </div>
              <div class="custom-grid-text container">
                <h3 class="blue-title-cult">Soluciones innovadoras</h3>
                <p class="dark-text">En Daikin siempre buscamos crear nuevas tecnologías en aire acondicionado para satisfacer
                  las necesidades de nuestros clientes. Por ello contamos con nuestro Centro de Desarrollo
                  ubicado en Minneapolis, USA, el cual está altamente equipado para acelerar el desarrollo de
                  nuevas e innovadoras creaciones, como: avances tecnológicos, innovaciones en ahorro de
                  energía, entre otros, con la finalidad de crear experiencias y soluciones únicas, efectivas y
                  sustentables.</p>
              </div>
            </div>
            <div class="custom-grid2">
              <div class="custom-grid-img">
                <img src="<?= GLOBAL_URL; ?>/build/img/cultura_material_07.jpg" alt="">
              </div>
              <div class="local-support container">
                <h3 class="blue-title-cult">Presencia Global, Soporte Local</h3>
                <p class="dark-text">En Daikin tendrán la seguridad de contar siempre con un representante cerca de su
                  localidad, quienes combinan un amplio conocimiento de nuestros productos y la
                  experiencia local para ofrecer soluciones efectivas y adaptables. Cobertura en más de
                  75 países para asegurar que nuestros productos y servicios estén siempre a su
                  alcance.</p>
                <div class="link-grid-container">
                  <a href="">México</a>
                  <a href="">Global</a>
                  <a href="">Contactos de Ventas y Servicios</a>
                  <a href="">Localidades Daikin</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--Second Tab Content Ends -->


        <div class="timeline-container tab-pane fade" id="nav-history" role="tabpanel" aria-labelledby="nav-contact-tab">
          <div class="container timeline-container">
            <div class="col-md-12">
              <div class="card">
                <div class="card-body">
                  <h3 class="blue-title-cult">Una historia de innovaciones
                    desde 1924</h6>
                    <div id="content">
                      <ul class="timeline">
                        <li class="event" data-date="1924">
                          <p>Akira Yamada fundó Osaka Kogyosho Ltd.</p>
                        </li>
                        <li class="event" data-date="1934">
                          <p>DAIKIN inicia con pruebas refrigerantes.</p>
                        </li>
                        <li class="event" data-date="1958">
                          <p>Primer paquete bomba de calor.</p>
                        </li>
                        <li class="event" data-date="1969">
                          <p>Primer sistema multi-Split.</p>
                        </li>
                        <li class="event" data-date="1972">
                          <p>Primer paquete enfriado por agua.</p>
                        </li>
                        <li class="event" data-date="1982">
                          <p>Primer Sistema VRV®
                            (Volumen de Refrigerante Variable).</p>
                        </li>
                        <li class="event" data-date="1992">
                          <p>Refrigerante que no afecta la capa de ozono.</p>
                        </li>
                        <li class="event" data-date="1995">
                          <p>Primer paquete enfriado por agua.</p>
                        </li>
                        <li class="event" data-date="2003">
                          <p>Magnitude™ Chiller con compresor magnético.</p>
                        </li>
                        <li class="event" data-date="2006">
                          <p>DAIKIN adquiere a McQuay®.</p>
                        </li>
                        <li class="event" data-date="2009">
                          <p>Pathdinder™ Chiller enfriado por aire.</p>
                        </li>
                        <li class="event" data-date="2011">
                          <p>DAIKIN Rabel™ Rooftop.</p>
                        </li>
                        <li class="event" data-date="2012">
                          <p>DAIKIN adquiere a Goodman® líder de
                            equipo residencial en USA.</p>
                        </li>
                        <li class="event" data-date="2013">
                          <p>Se completa el proceso de integración
                            de marca DAIKIN.</p>
                        </li>
                        <li class="event" data-date="2014">
                          <p>DAIKIN VRV® IV.</p>
                        </li>
                      </ul>
                    </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <!--Third tab ends -->


        <div class="tab-pane fade custom-position" id="nav-environment" role="tabpanel" aria-labelledby="nav-about-tab">
          <div class="general-container">
            <div class="general-blue">
              <div class="container blue-container">
                <div class=" flex-blue">
                  <h3 class="white-title-culture">Responsabilidad ambiental</h3>
                  <p class="white-text">Estamos comprometidos con las prácticas sostenibles como parte de nuestra cultura corporativa.
                    Como empresa HVAC, tenemos una oportunidad única para hacer la diferencia en iniciativas
                    sustentables. Nuestros productos de aire acondicionado y sistemas, ahorran energía, reducen el
                    impacto ambiental y ayudan a las instalaciones a ganar puntos hacia la certificación LEED®.</p>
                </div>
              </div>
            </div>
            <div class="white-general">
              <div class="container white-container">
                <div class="flex-blue">
                  <h3 class="blue-title-cult">Responsabilidad ambiental</h3>
                  <ul>
                    <li class="dark-text">Productos de alta eficiencia energética que ayudan a reducir la huella del CO2 y el uso de recursos
                      naturales.</li>
                    <li class="dark-text">La reducción de emisiones de gases (“greenhouse gas”) de los procesos de producción y fomentamos
                      la cultura ecológica, empezando por nosotros mismos.</li>
                  </ul>
                </div>
              </div>
            </div>
            <img src="<?= GLOBAL_URL; ?>/build/img/cultura_material_02.jpg" alt="">
          </div>
        </div>
        <!--Fourth tab ends -->


        <div class="tab-pane fade" id="nav-plant" role="tabpanel" aria-labelledby="nav-plant-tab">
          <div class="hero-plant-container">
            <div class="hero-plant">
              <img src="<?= GLOBAL_URL; ?>/build/img/cultura_material_04.jpg" alt="">
            </div>
            <div class="white-div container">
            </div>
            <div class="text-cont">

              <div class="title-cont">
                <h3 class="blue-title-cult container">Planta</h3>
              </div>
              <p class="dark-text container">Después de 10 años de operación en la ciudad de México, en enero de 2011 la planta Daikin
                México fue reubicada en la ciudad de San Luis Potosí con el fin de expandir su capacidad
                productiva y ampliar su cadena logística.</p>
              <p class="dark-text container">Nuestro sistema de fabricación combina la producción en línea con la producción personalizada,
                confiriendo así un alto valor agregado en términos de la personalización de nuestros productos,
                “trajes hechos a la medida”, sin que esto incurra en los altos costos típicos que generaría un
                producto diseñado y fabricado para cumplir con los requerimientos particulares de un cliente.</p>
              <p class="dark-text container">En esta planta fabricamos equipos para venta nacional y de exportación para los Estados Unidos
                de Norteamérica, Canadá, Latinoamérica y recientemente a los EAU.</p>
            </div>
          </div>


          <div class="our-products-container container">
            <h3 class="blue-title-cult container">Nuestros productos:</h3>
            <div class="our-products">
              <div class="card-products">
                <p class="dart-text">Manejadoras
                  semi-custom para
                  aplicaciones Confort.</p>
              </div>
              <div class="card-products">
                <p class="dart-text">Manejadoras custom
                  para aplicaciones
                  Confort, IAQ, grado
                  farmacéutico y
                  alimenticio.</p>
              </div>
              <div class="card-products">
                <p class="dart-text">Chillers enfriados por
                  aire.</p>
              </div>
              <div class="card-products">
                <p class="dart-text">Gabinetes para Filtración
                  química (AAF).</p>
              </div>
            </div>
          </div>
          <div class="adress-container">
            <div class="adress-info container">
              <h3 class="white-title-culture">Mercaderes # 20-301 Colonia San José Insurgentes C.P. 03900, México, D.F.</h3>
              <h3 class="white-title-culture">+(52)(55) 5147 0148</h3>
            </div>
          </div>
        </div>
        <!--Fifth tab ends -->
      </div>

    </div>
  </div>
</div>






<?php
includeTemplate('footer');
?>