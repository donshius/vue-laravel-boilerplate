# vue-laravel-boilerplate

This is a Laravel 5.3 and Vue 2 boilerplate. It includes bundling with webpack and vue routing.

# How it works

Firstly, Laravel on any route loads only one view - main.blade.php which only includes the main js file and houses the
container for the app (div).

From then, Vue takes over and initializes the App component which is the main starting point from which
everything else is renderer such as router views.