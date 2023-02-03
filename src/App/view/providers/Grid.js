Ext.define('Smite.view.providers.Grid', {
  extend: 'Ext.grid.Panel',

  requires: ['Smite.store.Providers'],

  store: 'Smite.store.Providers',

  alias: 'widget.gridproviders',

  columns: [
    { text: 'Nome', width: 100, dataIndex: 'name', sortable: true, flex: 1 },
    { text: 'Telefone', width: 400, dataIndex: 'phone', sortable: true },
    { text: 'E-mail', width: 400, dataIndex: 'email', sortable: true },
    { text: 'Total Comprado', width: 400, dataIndex: 'total_purchased', sortable: true },
  ],
});
