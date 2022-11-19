Ext.define('Smite.Application', {
  extend: 'Ext.container.Viewport',

  layout: 'fit',

  requires: ['Smite.view.Menu'],

  items: [{
    xtype: 'panel',
    title: 'SMITE',

    items: [{
      dockedItems: [{
        xtype: 'toolbar-overflowbar',
        dock: 'top',
        overflowHandler: 'menu'
      }]
    }]
  }],

  renderTo: 'container',
});
