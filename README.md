RapidProto
=

A small application stack that helps developing prototypes with a click hint (indicating where the user may click 
to continue the user journey), SASS and Handlebars support. Built on top of grunt because it does the job and I learned 
quite a bit from it. (The grunt tasks are far from optimal, though).

The grunt tasks are livereloading every change that is made to any prototype specific file, including all files in 
`assets/`, `sass/` and `pages/`. Assets are synced on create and delete and also trigger a live reload to add images 
and JS files fast without having to fiddle much.

This prototype stack uses [Kanbasu](http://kanbasu.liip.ch/) as a CSS framework and 
[animate.css](https://daneden.github.io/animate.css/) for click hint animations.

Usage
-

Clone this repository (or fork and clone it) and execute the following:

    npm install
    grunt

Grunt will then start the webserver on Port **8801** and will start live reloading. Alter the files in `pages/` or 
`sass/` and start building your prototype.
