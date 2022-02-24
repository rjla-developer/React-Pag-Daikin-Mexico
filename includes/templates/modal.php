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
            <option value="<?= GLOBAL_URL; ?>distribuidores/cdmx">Ciudad de México</option>
            <option value="<?= GLOBAL_URL; ?>distribuidores/guadalajara">Guadalajara</option>            
            <option value="<?= GLOBAL_URL; ?>distribuidores/matamoros">Matamoros</option>
            <option value="<?= GLOBAL_URL; ?>distribuidores/reynosa">Reynosa</option>
            <option value="<?= GLOBAL_URL; ?>distribuidores/tampico">Tampico</option>
            <option value="<?= GLOBAL_URL; ?>distribuidores/monterrey">Monterrey</option>
            <option value="<?= GLOBAL_URL; ?>distribuidores/mexicali">Mexicali</option>
            <option value="<?= GLOBAL_URL; ?>distribuidores/tijuana">Tijuana</option>
            <option value="<?= GLOBAL_URL; ?>distribuidores/hermosillo">Hermosillo</option>
            <option value="<?= GLOBAL_URL; ?>distribuidores/lapaz">La Paz</option>
            <option value="<?= GLOBAL_URL; ?>distribuidores/cancun">Cancún</option>
            <option value="<?= GLOBAL_URL; ?>distribuidores/merida">Mérida</option>
            <option value="<?= GLOBAL_URL; ?>distribuidores/leon">León</option>
            <option value="<?= GLOBAL_URL; ?>distribuidores/puebla">Puebla</option>
            <option value="<?= GLOBAL_URL; ?>distribuidores/queretaro">Querétaro</option>
            <option value="<?= GLOBAL_URL; ?>distribuidores/aguascalientes">Aguascalientes</option>
            <option value="<?= GLOBAL_URL; ?>distribuidores/torreon">Torreón</option>
          </select>
      </div>
    </div>
  </div>
</div>