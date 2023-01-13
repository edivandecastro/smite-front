Ext.define('Smite.components.ButtonProvider', {
  extend: 'Ext.button.Split',
  xtype: 'smite-button-provider',

  requires: [
    'Smite.view.Providers',
    'Ext.window.Window',
  ],

  itemId: 'showGridProvider',
  text: 'Fornecedores',
  iconCls: 'toolbar-user-suit',

  menu: [{
    text: 'Novo',
    iconCls: 'toolbar-user-add',
    handler: function () {
      console.log('abre o formulario de cadastro');
    },
  }]
});
