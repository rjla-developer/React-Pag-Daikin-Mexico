<!-- Modal -->
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Estados</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <select class="input2 form-custom" onchange="gotoPage(this)" name="state">
            <option value="0">-- Seleccionar --</option>
            <option value="<?= GLOBAL_URL; ?>distribuidores/cdmx">Ciudad de México</option>
            <option value="<?= GLOBAL_URL; ?>distribuidores/jalisco">Jalisco</option>            
            <option value="<?= GLOBAL_URL; ?>distribuidores/tamaulipas">Tamaulipas</option>
            <option value="<?= GLOBAL_URL; ?>distribuidores/nuevoleon">Nuevo León</option>
            <option value="<?= GLOBAL_URL; ?>distribuidores/bajacalifornia">Baja California</option>
            <option value="<?= GLOBAL_URL; ?>distribuidores/sonora">Sonora</option>
            <option value="<?= GLOBAL_URL; ?>distribuidores/bajacaliforniasur">Baja California Sur</option>
            <option value="<?= GLOBAL_URL; ?>distribuidores/quintanaroo">Quintana Roo</option>
            <option value="<?= GLOBAL_URL; ?>distribuidores/cancun">Cancún</option>
            <option value="<?= GLOBAL_URL; ?>distribuidores/yucatan">Yucatán</option>
            <option value="<?= GLOBAL_URL; ?>distribuidores/guanajuato">Guanajuato</option>
            <option value="<?= GLOBAL_URL; ?>distribuidores/puebla">Puebla</option>
            <option value="<?= GLOBAL_URL; ?>distribuidores/queretaro">Querétaro</option>
            <option value="<?= GLOBAL_URL; ?>distribuidores/aguascalientes">Aguascalientes</option>
            <option value="<?= GLOBAL_URL; ?>distribuidores/coahuila">Coahuila</option>
            <option value="<?= GLOBAL_URL; ?>distribuidores/michoacan">Michoacán</option>
            <option value="<?= GLOBAL_URL; ?>distribuidores/veracruz">Veracruz</option>
            <option value="<?= GLOBAL_URL; ?>distribuidores/sinaloa">Sinaloa</option>
            <option value="<?= GLOBAL_URL; ?>distribuidores/sanluispotosi">San Luis Potosí</option>
          </select>
      </div>
    </div>
  </div>
</div>