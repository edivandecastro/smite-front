Ext.define('Smite.view.providers.Form', {
  extend: 'Ext.form.Panel',

  alias: 'widget.formproviders',

  bodyPadding: 15,
  defaults: {
    anchor: '100%',
  },

  buttons: {
    submit: 'onSubmit'
  },

  items: [{
    xtype: 'textfield',
    name: 'name',
    fieldLabel: ' Nome'
  }, {
    xtype: 'textfield',
    padding: { top: 15 },
    name: 'phone',
    fieldLabel: 'Telefone'
  }, {
    xtype: 'textfield',
    padding: { top: 15 },
    name: 'email',
    fieldLabel: 'E-mail'
  }],

  dockedItems: [{
    xtype: 'toolbar',
    dock: 'bottom',
    layout: {
      type: 'hbox',
      pack: 'end',
    },
    items: [{
      xtype: 'button',
      text: 'Cancelar',
      iconCls: 'icon-cancel',
    }, {
      xtype: 'button',
      itemId: 'saveProvider',
      text: 'Salvar',
      iconCls: 'icon-save',
    }]
  }]
});
