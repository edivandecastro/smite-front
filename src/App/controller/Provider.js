Ext.define('Smite.controller.Provider', {
  extend: 'Ext.app.Controller',

  models: ['Smite.model.Provider'],

  stores: ['Smite.store.Providers'],

  control: {
    'providers': {
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
      var window = Ext.create('Ext.window.Window', {
        id: 'window-provider',
        xtype: 'window',
        width: 1100,
        height: 800,
        constrain: true,
        expandOnShow: false,
        flex: 410,
        layout: 'fit',
        maximizable: true,
        maximized: true,
        minimizable: true,
        items: [
          {
            xtype: 'providers'
          },
        ]
      });

      panel.add(window);
      window.show();
    }
  },
});
