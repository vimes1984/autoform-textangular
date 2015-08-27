Package.describe({
  name: 'vimes1984:autoform-textangular',
  version: '1.1.1',
  // Brief, one-line summary of the package.
  summary: 'Integrate textangular into autoforms',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/vimes1984/autoform-textangular',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');

  var both = ['client', 'server'];
  //both client and server
  api.use([
    'angular:angular@1.2.0',
    'urigo:angular@0.9.3',
    'templating',
    'reactive-var',
    'aldeed:autoform@4.2.2'
  ], both);

  api.use([
    //'fraywing:text-angular@1.3.11',
    //'netanelgilad:text-angular@1.3.7',
  ], 'client');

  api.addFiles([
    //Autoform stuff
    'lib/client/template.html',
    'lib/client/template.js',
    'lib/client/autoform-textangular.js',
    //Text angular library stuff
    'lib/client/rangy-core.js',
    'lib/client/rangy-selectionsaverestore.js',
    'lib/client/textAngular.js',
    'lib/client/textAngular-sanitize.js',
    'lib/client/textAngularSetup.js',
    'lib/client/textAngular.css',
    'lib/client/textAngular.js',
  ], 'client');

  api.addFiles('autoform-textangular.js');


});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('vimes1984:autoform-textangular');
  api.addFiles('autoform-textangular-tests.js');
});
