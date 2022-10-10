<?php
require '../functions.php';
includeTemplate('header', $inicio = true);
includeTemplate('modal');
?>

<div class="jobs-container">
    <div class="jobs-information container">
        <div class="job-offer">
            <h3 class="blue-title-cult">Bolsa de trabajo</h3>

            <p class="dark-text">Bienvenido al portal de reclutamiento Daikin México</p>

            <p class="dark-text">Gracias por el interés en formar parte de nuestro equipo, donde Daikin nos da la oportunidad de poder exponer y llevar a la práctica todo nuestro potencial y creatividad para poder sobrepasar las metas y objetivos establecido</p>

            <p class="dark-text">Te invitamos a conocer las oportunidades que tenemos para ti</p>

            <h3 class="blue-title-cult">¡Únete a nuestro equipo en alguna de nuestras oficinas!</h3>

            <p class="dark-text">"Somos una empresa plenamente comprometida con todos nestros colaboradores, con el medio ambiente y principalmente, con el desarrollo en todos los sentidos"</p>

            <h3 class="blue-title-cult">Daikin México</h3>
        </div>
    </div>
    <div class="jobs-img"></div>
</div>

<div class="job-form-container container">
    <h3 class="blue-title-cult">Datos personales</h3>

    <div class="form-cont">
        <form action="" class="validate-form">

            <div class="field field-validate" data-validate="Nombre es requerido">
                <label for="name">Nombre completo <span> *</span></label>
                <input type="text" class="input2" name="name">
            </div>

            <div class="field validate-field" data-validate="El télefono no es válido">
                <label for="phone">Teléfono <span> *</span></label>
                <input type="tel" name="phone">
            </div>

            <div class="field">
                <label for="salary">Requerimiento salarial</label>
                <input type="text" name="salary">
            </div>

            <div class="field validate-field" data-validate="El email no es válido">
                <label for="email">Correo electrónico <span> *</span></label>
                <input type="email" name="email">
            </div>

            <div class="field validate-field">
                <label for="date">Fecha de nacimiento <span> *</span></label>
                <input type="text" name="date" placeholder="(dd/mm/yyyy)">
            </div>

        </form>
        <button class="btn-form" type="submit"><i class="bi bi-chevron-right"></i>Aplica ahora</button>
    </div>

</div>




<?php
includeTemplate('footer');
?>