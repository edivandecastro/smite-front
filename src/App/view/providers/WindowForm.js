Ext.define('Smite.view.providers.WindowForm', {
  extend: 'Ext.window.Window',

  id: 'window-form-provider',
  title: 'Novo Fornecedor',
  iconCls: 'icon-form',
  constrain: true,
  expandOnShow: false,
  flex: 410,
  layout: 'fit',
  minimizable: true,

  items: [{ xtype: 'formproviders' }],
});
