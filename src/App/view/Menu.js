Ext.define('Smite.view.Menu', {
	extend: 'Ext.toolbar.Toolbar',
	xtype: 'toolbar-overflowbar',

	items: [{
		xtype: 'splitbutton',
		text: 'Fornecedores',
		iconCls: 'toolbar-user-suit',
		handler: function () {
			console.log('Mostra o grid com fornecedores');
		},
		menu: [{
			text: 'Novo',
			iconCls: 'toolbar-user-add',
		}]
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
