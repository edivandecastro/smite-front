Ext.define('Smite.controller.Provider', {
  extend: 'Ext.app.Controller',

  models: ['Smite.model.Provider'],

  views: [
    'Smite.view.providers.WindowForm',
    'Smite.view.providers.WindowGrid',
    'Smite.view.providers.Form',
    'Smite.view.providers.Grid',
  ],

  stores: ['Smite.store.Providers'],

  control: {
    'gridproviders': {
      render: 'onGridRender',
      itemdblclick: 'onGridItemClick'
    },
    'button#showGridProvider': {
      click: 'onGridProviderClick'
    },
    '#showFormProvider': {
      click: 'onFormProviderClick'
    },
    '#saveProvider': {
      click: 'onSaveProvider'
    }
  },

  onGridRender: function (grid, eOpts) {
    grid.getStore().load();
  },

  onGridProviderClick: function (btn, e, eOpts) {
    var panel = Ext.getCmp('containerPanel');
    var windowProvider = panel.child('#window-grid-provider');

    if (windowProvider === null) {
      var window = Ext.create('Smite.view.providers.WindowGrid');

      panel.add(window);
      window.show();
    }
  },

  onFormProviderClick: function (btn, e, eOpts) {
    var panel = Ext.getCmp('containerPanel');
    var windowProvider = panel.child('#window-form-provider');

    if (windowProvider === null) {
      var window = Ext.create('Smite.view.providers.WindowForm');

      panel.add(window);
      window.show();
    }
  },

  onSaveProvider: function (btn, e, eOpts) {
    console.log('saving');
  },

  onGridItemClick: function (row, record, item, index, e, eOpts) {
    var panel = Ext.getCmp('containerPanel');
    var windowProvider = panel.child('#window-form-provider');

    if (windowProvider === null) {
      var window = Ext.create('Smite.view.providers.WindowForm');
      window.setTitle('Editar Fornecedor');
      panel.add(window);
      window.show();
    }
  }
});
