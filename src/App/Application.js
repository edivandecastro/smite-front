Ext.define('Smite.Application', {
  extend: 'Ext.app.Application',
  name: 'Smite',

  requires: [
    'Smite.view.Viewport',
    'Smite.controller.Main',
  ],

  controllers: ['Smite.controller.Main'],

  launch:  function() {
    Ext.create('Smite.view.Viewport');
  }
});
