
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: ,
    authDomain: "train-9aa81.firebaseapp.com",
    databaseURL: "https://train-9aa81.firebaseio.com",
    projectId: "train-9aa81",
    storageBucket: "train-9aa81.appspot.com",
    messagingSenderId: "440802655585",
    appId: "1:440802655585:web:820660a11e2512c2739920"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var db = firebase.database();

   // 2. Button for adding Train
$("#btn-primary").on("click", function(event) {
  event.preventDefault();

  // Grabs user input
  var trainName = $("#train").val().trim();
  var trainDes = $("#des").val().trim();
  var trainTime = moment($("#time").val().trim(), "MM/DD/YYYY").format("X");
  var trainFreq = $("#freq").val().trim();

  // Creates local "temporary" object for holding train data
  var newTrain = {
    name: trainName,
    dest: trainDes,
    first: trainTime,
    frequency: trainFreq
  };

  // Uploads train data to the database
  db.ref().push(newTrain);

  // Logs everything to console
  console.log(newTrain.name);
  console.log(newTrain.dest);
  console.log(newTrain.first);
  console.log(newTrain.frequency);

  alert("Train successfully added");

  // Clears all of the text-boxes
  $("#train-input").val("");
  $("#des-input").val("");
  $("#time-input").val("");
  $("#freq-input").val("");
});

// 3. Create Firebase event for adding employee to the database and a row in the html when a user adds an entry
database.ref().on("child_added", function(childSnapshot) {
  console.log(childSnapshot.val());

  // Store everything into a variable.
  var trainName = childSnapshot.val().name;
  var trainDes = childSnapshot.val().dest;
  var trainTime = childSnapshot.val().first;
  var trainFreq = childSnapshot.val().frequency;

  // Train Info
  console.log(trainName);
  console.log(trainDes);
  console.log(trainTime);
  console.log(trainFreq);

  // Prettify the Train time
  var trainStart = moment.unix(trainTime).format("HH:MM");

 
  // Calculate the next train
  var nextTrain = trainStart + 
  console.log(nextTrain);

  // Create the new row
  var newRow = $("<tr>").append(
    $("<td>").text(trainName),
    $("<td>").text(trainDes),
    $("<td>").text(nextTrain),
    
  );

  // Append the new row to the table
  $("#trainSchedule > tbody").append(newRow);
});

