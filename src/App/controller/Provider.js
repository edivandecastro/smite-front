Ext.define('Smite.controller.Provider', {
  extend: 'Ext.app.Controller',

  requires: ['Smite.view.GridProviders'],

  models: ['Smite.model.Provider'],

  stores: ['Smite.store.Providers'],

  control: {
    'gridproviders': {
      render: 'onGridRender'
    },
    'button#showGridProvider': {
      click: 'showGridProvider'
    },
  },

  onGridRender: function (grid, eOpts) {
    grid.getStore().load();
  },

  showGridProvider: function (btn, e, eOpts) {
    var panel = Ext.getCmp('containerPanel');
    var windowProvider = panel.child('#window-provider');

    if (windowProvider === null) {
      var window = Ext.create('Smite.components.FactoryWindow', {
        items: [{ xtype: 'gridproviders' }]
      })

      panel.add(window);
      window.show();
    }
  },
});
