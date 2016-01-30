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
  },
  {
    title: "Chores",
    subtitle: "Do your chores."
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

// Add a click listener for select button click
habitMenu.on('select', function(event) {
  
  
  if (habits[event.itemIndex].title == "Studying") {
    
    //Make a list of study items
    var study = [
      {
        title: "Read",
        subtitle: "Did you read today?"
      },
      {
        title: "Homework",
        subtitle: "Did you do homework today?"
      }
    ];
    
    // Show a menu with clicked item details
    var studyMenu = new UI.Menu({
      sections: [{
        title: 'Study',
        items: study
      }]
    });
    
    // Show the new Menu
    studyMenu.show();
  }
  
  if (habits[event.itemIndex].title == "Fitness") {
    
    //Make a list of study items
    var fit = [
      {
        title: "Workout",
        subtitle: "Did you workout?"
      },
      {
        title: "Run",
        subtitle: "Did you run?"
      },
      {
        title: "Walk",
        subtitle: "Did you take a walk?"
      },
      {
        title: "Sports",
        subtitle: "Play any sports"
      }
    ];
    
    // Show a menu with clicked item details
    var fitMenu = new UI.Menu({
      sections: [{
        title: 'Fitness',
        items: fit
      }]
    });
    
    // Show the new Menu
    fitMenu.show();
  }
  
  if (habits[event.itemIndex].title == "Hygiene") {
    
    //Make a list of study items
    var hyg = [
      {
        title: "Shower",
        subtitle: "Did you take a shower"
      },
      {
        title: "Brush",
        subtitle: "Did you brush?"
      },
      {
        title: "Floss",
        subtitle: "Did you floss?"
      }
    ];
    
    // Show a menu with clicked item details
    var hygMenu = new UI.Menu({
      sections: [{
        title: 'Hygiene',
        items: hyg
      }]
    });
    
    // Show the new Menu
    hygMenu.show();
  }
  
  if (habits[event.itemIndex].title == "Chores") {
    
    //Make a list of study items
    var chore = [
      {
        title: "Make bed",
        subtitle: "Did you make your bed?"
      },
      {
        title: "Dishes",
        subtitle: "Did you wash your dishes?"
      },
      {
        title: "Clean room",
        subtitle: "Did you clean your room?"
      },
      {
        title: "Laundry",
        subtitle: "Did you do laundry?"
      }
    ];
    
    // Show a menu with clicked item details
    var choreMenu = new UI.Menu({
      sections: [{
        title: 'Chores',
        items: chore
      }]
    });
    
    // Show the new Menu
    choreMenu.show();
  }
});