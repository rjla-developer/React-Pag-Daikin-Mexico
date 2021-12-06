<?php
require '../functions.php';
includeTemplate('header', $inicio = true);
includeTemplate('modal');
?>
<div class="contact-container">

    <div class="hero-contact">
        <div class="overlay-contact">
        </div>
    </div>

    <div class="flex-cont-container container">
        <div class="form-container container">
            <form action="" class="validate-form">

                <h3 class="blue-title-cult">Contáctanos</h3>

                <div class="field field-validate" data-validate="El Nombre es obligatorio">
                    <label for="name">Nombre completo<span> *</span></label>
                    <input class="form-control input2" type="text" name="name">
                </div>

                <div class="field">
                    <label for="company">Compañia</label>
                    <input class="form-control" type="text" id="company">
                </div>

                <div class="field field-validate" data-validate="Selecciona un Estado">
                    <label for="">Estado <span> *</span></label>
                    <select class="input2 form-control" name="state">
                        <option value="0">-- Seleccionar --</option>
                        <option value="CDMX">Ciudad de México</option>
                        <option value="AGS">Aguascalientes</option>
                        <option value="BCN">Baja California</option>
                        <option value="BCS">Baja California Sur</option>
                        <option value="CAM">Campeche</option>
                        <option value="CHP">Chiapas</option>
                        <option value="CHI">Chihuahua</option>
                        <option value="COA">Coahuila</option>
                        <option value="COL">Colima</option>
                        <option value="DUR">Durango</option>
                        <option value="GTO">Guanajuato</option>
                        <option value="GRO">Guerrero</option>
                        <option value="HGO">Hidalgo</option>
                        <option value="JAL">Jalisco</option>
                        <option value="MEX">M&eacute;xico</option>
                        <option value="MIC">Michoac&aacute;n</option>
                        <option value="MOR">Morelos</option>
                        <option value="NAY">Nayarit</option>
                        <option value="NLE">Nuevo Le&oacute;n</option>
                        <option value="OAX">Oaxaca</option>
                        <option value="PUE">Puebla</option>
                        <option value="QRO">Quer&eacute;taro</option>
                        <option value="ROO">Quintana Roo</option>
                        <option value="SLP">San Luis Potos&iacute;</option>
                        <option value="SIN">Sinaloa</option>
                        <option value="SON">Sonora</option>
                        <option value="TAB">Tabasco</option>
                        <option value="TAM">Tamaulipas</option>
                        <option value="TLX">Tlaxcala</option>
                        <option value="VER">Veracruz</option>
                        <option value="YUC">Yucat&aacute;n</option>
                        <option value="ZAC">Zacatecas</option>
                    </select>
                </div>

                <div class="field field-validate" data-validate="La Ciudad es obligatoria">
                    <label for="city">Ciudad<span> *</span></label>
                    <input class="form-control input2" type="text" name="city">
                </div>

                <div class="field field-validate" data-validate="El número de teléfono no es válido">
                    <label for="phone">Teléfono<span> *</span></label>
                    <input class="form-control input2" type="tel" name="phone">
                </div>

                <div class="field">
                    <label for="">Tipo de negocio</label>
                    <select class="form-control">
                        <option value="NIN">Ningúno</option>
                        <option value="RES">Cliente residencial</option>
                        <option value="CORP">Cliente corporativo</option>
                        <option value="DIS">Distribuidor</option>
                        <option value="CONT">Contratista</option>
                        <option value="CONS">Consultor</option>
                        <option value="PTS">Partes</option>
                        <option value="SERV">Servicio</option>
                        <option value="NAP">No aplica</option>
                    </select>
                </div>

                <div class="field">
                    <label for="">Producto de interés</label>
                    <select class="form-control">
                        <option value="NIN">Ningúno</option>
                        <option value="RESP">Residencial</option>
                        <option value="COM">Comercial</option>
                        <option value="VOL">Volumen de refrigerante variable</option>
                        <option value="IND">Industrial</option>
                        <option value="APL">Aplicado</option>
                        <option value="ENF">Enfriadores alquilados</option>
                        <option value="SERV">Servicio</option>
                        <option value="PTS">Partes</option>
                        <option value="NAP">No aplica</option>
                    </select>
                </div>

                <div class="field">
                    <label for="">¿Cómo conoció acerca de Daikin?</label>
                    <select class="form-control">
                        <option value="EVT">Eventos</option>
                        <option value="FB">Facebook/Instagram</option>
                        <option value="AMG">Amigos & familia</option>
                        <option value="SEA">Búsqueda de Google</option>
                        <option value="INS">Instalador</option>
                        <option value="LKN">LinkedIn</option>
                        <option value="NWS">Boletín informativo</option>
                        <option value="ANS">Anuncios online</option>
                        <option value="PTS">Representante de ventas</option>
                        <option value="OTH">Otro</option>
                    </select>
                </div>

                <div class="field field-validate" data-validate="Asunto no puede estar vacio">
                    <label for="">Asunto<span> *</span></label>
                    <textarea class="input2 form-control" name="message" id="message" cols="30" rows="10"></textarea>
                </div>

                <div class="button-cont">
                    <button class="btn-form" type="submit"><i class="bi bi-chevron-right"></i>Enviar</button>
                </div>
            </form>
        </div>
    </div>

    <div class="background-container">
        <div class="information-container">
            <div class="contact-information">
                <div class="information-content">
                    <h3 class="blue-title-cult">Información de contacto</h3>
                    <div class="info-text">
                        <i class="bi bi-telephone-fill"></i>
                        <p>55 5147 0148</p>
                    </div>

                    <div class="info-text">
                        <i class="bi bi-geo-alt-fill"></i>
                        <p>Cda. Mercaderes 16, San José Insurgentes, Benito Juárez, 03900 Ciudad de México, CDMX</p>
                    </div>

                    <h3 class="blue-title-cult">Conoce nuestras redes sociales</h3>
                    <div class="social-container">
                        <div class="social-media">
                            <a href=""><i class="bi bi-facebook"></i></a>
                        </div>
                        <div class="social-media">
                            <a href=""><i class="bi bi-twitter"></i></a>
                        </div>
                        <div class="social-media">
                            <a href=""><i class="bi bi-youtube"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>




<?php
includeTemplate('footer');
?>