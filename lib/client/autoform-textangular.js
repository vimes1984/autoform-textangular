AutoForm.addInputType('textangular', {
    template: 'autoFormTextAngular',
    valueOut: function() {
        var getcode = this.find('[ng-model="html"]').html();
        console.log(this.find('[ng-model="html"]').html());
        return getcode;
    }
});
