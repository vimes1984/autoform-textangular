Template.autoFormTextAngular.helpers({
   dataSchemaKey: function() {
        return this.atts['data-schema-key'];
    },

});
Template.autoFormTextAngular.created = function () {
  this.value = new ReactiveVar(this.data.value);
};
