Ext.define('Smite.model.Product', {
  extend: 'Ext.data.Model',

  fields: [
    { name: 'description',      type: 'string' },
    { name: 'code',             type: 'string' },
    { name: 'unit_measurement', type: 'string' },
    { name: 'minimum_stock',    type: 'int' },
    { name: 'cost',             type: 'number' },
    { name: 'price',            type: 'number' },
  ],

  validators: {
    description:      "presence",
    code:             "presence",
    unit_measurement: "presence",
    minimum_stock:    "presence",
    cost:             "presence",
    price:            "presence",
  }
});
