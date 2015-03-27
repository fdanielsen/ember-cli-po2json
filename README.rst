Ember CLI addon for broccoli-po2json
====================================

This is an Ember CLI addon to run broccoli-po2json on .po locale files.

It requires Ember CLI v0.2.0 or higher, and expects to find a `locale`
directory at the root of your app with the output from a gettext compiler.
This means the `locale` directory should contain directories with the names
of each locale you have translations for, and within these there should be
a `LC_MESSAGES` directory containing your .po files.

All `.po` files will be converted to JavaScript and stored as ES6 modules in
a `locales` module in your app. A `locales/index` module will also be written
that simply exports each locale module. In your app you can either import the
index module to get an object with each locale as keys, or import each locale
separately.
