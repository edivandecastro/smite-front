Ext.define('Smite.model.Provider', {
  extend: 'Ext.data.Model',

  fields: [
    { name: 'name',  type: 'string' },
    { name: 'phone', type: 'string' },
    { name: 'email', type: 'string' },
    { name: 'total_purchased',  type: 'number' },
  ],

  validators: {
    name:  "presence",
    phone: "presence",
    email: "presence",
  },

  hasOne: {
    model: 'Smite.model.Address'
  }
})
