Template.autoFormTextAngular.helpers({
   dataSchemaKey: function() {
        return this.atts['data-schema-key'];
    },

});
Template.autoFormTextAngular.created = function () {
  this.value = new ReactiveVar(this.data.value);
};
Template.autoFormTextAngular.rendered = function () {

      console.log( $(this) );
      console.log(  );
      if(!$(this.firstNode).hasClass('ta-root')){        
        // create an injector
        var $injector = angular.injector(['ng', 'textAngular']);
        // use the injector to kick off your application
        // use the type inference to auto inject arguments, or use implicit injection
        $injector.invoke(function($rootScope, $compile, $document) {
          $compile($document)($rootScope);
          $rootScope.$digest();
        });
      }
};
