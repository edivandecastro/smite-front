Ext.define('Smite.view.GridProviders', {
  extend: 'Ext.grid.Panel',
  alias: 'widget.gridproviders',

  requires: ['Smite.store.Providers'],

  store: 'Smite.store.Providers',

  title: 'Fornecedores',
  iconCls: 'icon-grid',

  columns: [
    { text: 'Nome', width: 100, dataIndex: 'name', sortable: true, flex: 1 },
    { text: 'Telefone', width: 400, dataIndex: 'phone', sortable: true },
    { text: 'E-mail', width: 400, dataIndex: 'email', sortable: true },
    { text: 'Total Comprado', width: 400, dataIndex: 'total_purchased', sortable: true },
  ],
  bbar: [{
    xtype: 'pagingtoolbar',
    store: 'Smite.store.Providers',
    displayInfo: true,
    displayMsg: 'Exibindo os fornecedores {0} - {1} de {2}',
    emptyMsg: "Sem fornecedores para exibir"
  }],
});
