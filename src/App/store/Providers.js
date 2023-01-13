Ext.define('Smite.store.Providers', {
  extend: 'Ext.data.Store',

  xtype: 'store-provider',

  model: 'Smite.model.Provider',
  pageSize: 30,

  proxy: {
    type: 'rest',
    url: 'http://localhost:3000/providers',
    reader: {
      type: 'json',
      rootProperty: 'providers',
    }
  },
});
