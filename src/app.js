/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');

// Make a list of menu items
var habits = [
  {
    title: "Studying",
    subtitle: "Learn."
  },
  {
    title: "Fitness",
    subtitle: "Don't be weak."
  },
  {
    title: "Hygiene",
    subtitle: "Don't smell bad."
  }
];

// Create the Menu, supplying the list of habits
var habitMenu = new UI.Menu({
  sections: [{
    title: 'Habits',
    items: habits
  }]
});

// Show the Menu
habitMenu.show();