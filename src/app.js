/**
 * Welcome to Hackucsc2016!
 *
 * This is where you write your app.
 */

var UI = require('ui');
var health = 100;
var exp = 0;

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
    
    if (study[event.itemIndex].title == "Read") {
      // Add a click listener for select button click
      studyMenu.on('select', function(event) {

        // Show a card with clicked item details
        var studyCard = new UI.Card({
          title: study[event.itemIndex].title,
          body: study[event.itemIndex].subtitle + "\n" + "\nhealth: " + health + "\nexp: " + exp
        });

        // Show the new Card
        studyCard.show();
        
        studyCard.on('click', 'up', function(event){
          exp += 5;
        });
        
        studyCard.on('click', 'down', function(event){
          health -= 3;
        });
      });
    }
    
    if (study[event.itemIndex].title == "Homework") {
      // Add a click listener for select button click
      studyMenu.on('select', function(event) {
        
        // Show a card with clicked item details
        var studyCard = new UI.Card({
          title: study[event.itemIndex].title,
          body: study[event.itemIndex].subtitle + "\n" + "\nhealth: " + health + "\nexp: " + exp
        });
        
        //Show the new Card
        studyCard.show();
        
        studyCard.on('click', 'up', function(event) {
          exp += 5;
        });
        
        studyCard.on('click', 'down', function(event) {
          health -= 3;
        });
      });
    }
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
        subtitle: "Play any sports?"
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
    
    if (fit[event.itemIndex].title == "Workout") {
      // Add a click listener for select button click
      fitMenu.on('select', function(event) {

        // Show a card with clicked item details
        var fitCard = new UI.Card({
          title: fit[event.itemIndex].title,
          body: fit[event.itemIndex].subtitle + "\n" + "\nhealth: " + health + "\nexp: " + exp
        });

        // Show the new Card
        fitCard.show();
        
        fitCard.on('click', 'up', function(event) {
          exp += 5;
        });
        
        fitCard.on('click', 'up', function(event) {
          health -= 3;
        });
      });
    }
    
    if (fit[event.itemIndex].title == "Run") {
      fitMenu.on('select', function(event) {
        
        var fitCard = new UI.Card({
          title: fit[event.itemIndex].title,
          subtitle: fit[event.itemIndex].subtitle + "\n" + "\nhealth: " + health + "\nexp: " + exp
        });
        
        fitCard.show();
        
        fitCard.on('click', 'up', function(event) {
          exp += 5;
        });
        
        fitCard.on('click', 'up', function(event) {
          health -= 3;
        });
      });
    }
    
    if (fit[event.itemIndex].title == "Walk") {
      fitMenu.on('select', function(event) {
        
        var fitCard = new UI.Card({
          title: fit[event.itemIndex].title,
          body: fit[event.itemIndex].subtitle + "\n" + "\nhealth: " + health + "\nexp: " + exp 
        });
        
        fitCard.show();
        
        fitCard.on('click', 'up', function(event) {
          exp += 5;
        });
        
        fitCard.on('click', 'up', function(event) {
          health -= 3;
        });
      });
    }
    
    if (fit[event.itemIndex].title == "Sports") {
      fitMenu.on('select', function(event) {
         
        var fitCard = new UI.Card({
          title: fit[event.itemIndex].title,
          body: fit[event.itemIndex].subtitle + "\n" + "\nhealth: " + health + "\exp: " + exp
        });
      
        fitCard.show();
        
        fitCard.on('click', 'up', function(event) {
          exp += 5;
        });
        
        fitCard.on('click', 'down', function(event) {
          health -= 3;
        });
      });
    }
  }
  
  if (habits[event.itemIndex].title == "Hygiene") {
    
    //Make a list of study items
    var hyg = [
      {
        title: "Shower",
        subtitle: "Did you take a shower?"
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
    
    if (hyg[event.itemIndex].title == "Shower") {
      hygMenu.on('select', function(event) {
        
        var hygCard = new UI.Card ({
          title: hyg[event.itemIndex].title,
          body: hyg[event.itemIndex].subtitle + "\n" + "\nhealth: " + health + "\nexp: " + exp 
        });
        
        hygCard.show();
        
        hygCard.on('click', 'up', function(event) {
          exp += 5;
        });
        
        hygCard.on('click', 'down', function(event) {
          health -= 3;
        });
      });
    }
    
    if (hyg[event.itemIndex].title == "Brush") {
      hygMenu.on('select', function(event) {
        
        var hygCard = new UI.Card ({
          title: hyg[event.itemIndex].title,
          body: hyg[event.itemIndex].subtitle + "\n" + "\nhealth: " + health + "\nexp: " + exp
        });
        
        hygCard.show();
        
        hygCard.on('click', 'up', function(event) {
          exp += 5;
        });
        
        hygCard.on('click', 'down', function(event) {
          health -= 3;
        });
      });
    }
    
    if (hyg[event.itemIndex].title == "Floss") {
      hygMenu.on('select', function(event) {
        
        var hygCard = new UI.Card({
          title: hyg[event.itemIndex].title,
          body: hyg[event.itemIndex].subtitle + "\n" + "\nhealth: " + health + "\nexp: " + exp
        });
        
        hygCard.show();
        
        hygCard.on('click', 'up', function(event) {
          exp += 5;
        });
        
        hygCard.on('click', 'down', function(event) {
          health -= 3;
        });
      });
    }
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
    
    if (chore[event.itemIndex].title == "Make bed") {
      choreMenu.on('select', function(event) {
        
        var choreCard = new UI.Card ({
          title: chore[event.itemIndex].title,
          body: chore[event.itemIndex].subtitle + "\n" + "\nhealth: " + health + "\nexp: " + exp
        });
        
        choreCard.show();
        
        choreCard.on('click', 'up', function(event) {
          exp += 5;
        });
        
        choreCard.on('click', 'down', function(event) {
          health -= 3;
        });
      });
    }
    
    if (chore[event.itemIndex].title == "Dishes") {
      choreMenu.on('select', function(event) {
        
        var choreCard = new UI.Card ({
          title: chore[event.itemIndex].title,
          body: chore[event.itemIndex].subtitle + "\n" + "\nhealth: " + health + "\exp: " + exp
        });
        
        choreCard.show();
        
        choreCard.on('click', 'up', function(event) {
          exp += 5;
        });
        
        choreCard.on('click', 'down', function(event) {
          health -= 3;
        });
      });
    }
    
    if (chore[event.itemIndex].title == "Clean room") {
      choreMenu.on('select', function(event) {
        
        var choreCard = new UI.Card ({
          title: chore[event.itemIndex].title,
          body: chore[event.itemIndex].subtitle + "\n" + "\nhealth: " + health + "\exp: " + exp
        });
        
        choreCard.show();
        
        choreCard.on('click', 'up', function(event) {
          exp += 5;
        });
        
        choreCard.on('click', 'down', function(event) {
          health -= 3;
        });
      });
    }
    
    if (chore[event.itemIndex].title == "Laundry") {
      choreMenu.on('select', function(event) {
        
        var choreCard = new UI.Card({
          title: chore[event.itemIndex].title,
          body: chore[event.itemIndex].subtitle + "\n" + "\nhealth: " + health + "\nexp: " + exp
        });
        
        choreCard.show();
        
        choreCard.on('click', 'up', function(event) {
          exp += 5;
        });
        
        choreCard.on('click', 'down', function(event) {
          health -= 3;
        });
      });
    }
  }
});