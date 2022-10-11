<!-- Modal -->
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Ciudades</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <select class="input2 form-custom" onchange="gotoPage(this)" name="state">
            <option value="0">-- Seleccionar --</option>
            <option value="<?= GLOBAL_URL; ?>includes/product/distribution.php?city=cdmx">Ciudad de México</option>
            <option value="<?= GLOBAL_URL; ?>includes/product/distribution.php?city=guadalajara">Guadalajara</option>            
            <option value="<?= GLOBAL_URL; ?>includes/product/distribution.php?city=matamoros">Matamoros</option>
            <option value="<?= GLOBAL_URL; ?>includes/product/distribution.php?city=reynosa">Reynosa</option>
            <option value="<?= GLOBAL_URL; ?>includes/product/distribution.php?city=tampico">Tampico</option>
            <option value="<?= GLOBAL_URL; ?>includes/product/distribution.php?city=monterrey">Monterrey</option>
            <option value="<?= GLOBAL_URL; ?>includes/product/distribution.php?city=mexicali">Mexicali</option>
            <option value="<?= GLOBAL_URL; ?>includes/product/distribution.php?city=tijuana">Tijuana</option>
            <option value="<?= GLOBAL_URL; ?>includes/product/distribution.php?city=hermosillo">Hermosillo</option>
            <option value="<?= GLOBAL_URL; ?>includes/product/distribution.php?city=lapaz">La Paz</option>
            <option value="<?= GLOBAL_URL; ?>includes/product/distribution.php?city=cancun">Cancún</option>
            <option value="<?= GLOBAL_URL; ?>includes/product/distribution.php?city=merida">Mérida</option>
            <option value="<?= GLOBAL_URL; ?>includes/product/distribution.php?city=leon">León</option>
            <option value="<?= GLOBAL_URL; ?>includes/product/distribution.php?city=puebla">Puebla</option>
            <option value="<?= GLOBAL_URL; ?>includes/product/distribution.php?city=queretaro">Querétaro</option>
            <option value="<?= GLOBAL_URL; ?>includes/product/distribution.php?city=aguascalientes">Aguascalientes</option>
            <option value="<?= GLOBAL_URL; ?>includes/product/distribution.php?city=torreon">Torreón</option>
          </select>
      </div>
    </div>
  </div>
</div>