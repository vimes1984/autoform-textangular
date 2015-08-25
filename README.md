# AutoForm text-angular schema addon...
this is a autoform wysiwyg editor using:
http://textangular.com/

###Usage###

1) Install `meteor add vimes1984:autoform-textangular`

2) Create schema

```
var BookSchema = new SimpleSchema({
  title: {
    type: String,
    label: "Title",
    max: 200
  },
  content: {
    type: String,
    label: "Yet another poem",
    autoform: {
      afFieldInput: {
        type: 'textangular'
      }
    }
  }
});
```

3) Attach schema to your collection `Books.attachSchema(BookSchema)`

4) Generate the form with `{{> quickform}}` or `{{#autoform}}`

```
{{> quickForm collection="Books" type="insert"}}
```
