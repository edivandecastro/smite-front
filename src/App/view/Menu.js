Ext.define('Smite.view.Menu', {
	extend: 'Ext.toolbar.Toolbar',
	xtype: 'smite-menu',

	requires: ['Smite.components.ButtonProvider'],

	items: [{
		xtype: 'smite-button-provider',
	}, '-', {
		xtype: 'splitbutton',
		text: 'Produtos',
		iconCls: 'toolbar-user-suit',
		handler: function () {
			console.log('Mostra o grid com produtos');
		},
		menu: [{
			text: 'Novo',
			iconCls: 'toolbar-user-add',
		}]
	}]
});
