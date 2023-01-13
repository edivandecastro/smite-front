Ext.define('Smite.view.Viewport', {
  extend: 'Ext.container.Viewport',
  xtype: 'smite-viewport',

  layout: 'fit',

  requires: [
    'Smite.view.Menu',
    'Smite.view.Container',
  ],

  items: [{
    xtype: 'panel',
    title: 'SMITE',

    items: [
      {
        dockedItems: [{
          xtype: 'smite-menu',
          dock: 'top',
          overflowHandler: 'menu'
        }],
      },
      {
        xtype: 'smite-container'
      }
    ]
  }],
});
