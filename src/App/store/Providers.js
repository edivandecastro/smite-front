Ext.define('Smite.store.Providers', {
  extend: 'Ext.data.Store',

  model: 'Smite.model.Provider',

  proxy: {
    type: 'ajax',
    url: 'https://snapcode.proxy.beeceptor.com/extjs/providers',
    reader: {
      type: 'json',
      rootProperty: 'providers',
    }
  },
});
