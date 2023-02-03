Ext.define('Smite.view.providers.WindowGrid', {
  extend: 'Ext.window.Window',

  id: 'window-grid-provider',
  title: 'Fornecedores',
  iconCls: 'icon-grid',
  width: 1100,
  height: 800,
  constrain: true,
  expandOnShow: false,
  flex: 410,
  layout: 'fit',
  maximizable: true,
  maximized: true,
  minimizable: true,

  items: [{
    dockedItems: [{
      xtype: 'toolbar',
      dock: 'top',
      overflowHandler: 'menu',
      items: [{
        xtype: 'button',
        text: 'Novo',
        iconCls: 'icon-add'
      }, '-',
      {
        xtype: 'button',
        text: 'Excluir',
        iconCls: 'icon-delete'
      }],
    },
    { xtype: 'gridproviders' }]
  }],

  bbar: [{
    xtype: 'pagingtoolbar',
    store: 'Smite.store.Providers',
    displayInfo: true,
    displayMsg: 'Exibindo os fornecedores {0} - {1} de {2}',
    emptyMsg: "Sem fornecedores para exibir"
  }],
});
