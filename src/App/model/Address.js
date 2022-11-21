Ext.define('Smite.model.Address', {
  extend: 'Ext.data.Model',

  fields: [
    { name: 'street',        type: 'string' },
    { name: 'street_number', type: 'string' },
    { name: 'complement',    type: 'string' },
    { name: 'zipcode',       type: 'string' },
    { name: 'neighborhood',  type: 'number' },
    { name: 'city',          type: 'number' },
    { name: 'state',         type: 'number' },
  ],
});
