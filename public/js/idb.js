// create variable to hold db connection
let db;
// establish a connection to IndexedDB database and set it to version 1
const request = indexedDB.open("budget_tracker", 1);

// this event will emit if the database version changes (nonexistant to version 1, v1 to v2, etc.)
request.onupgradeneeded = function (event) {
  // save a reference to the database
  const db = event.target.result;
  // create an object store (table), set it to have an auto incrementing primary key of sorts
  db.createObjectStore("new_transaction", { autoIncrement: true });
};

// upon a successful
request.onsuccess = function (event) {
  // when db is successfully created with its object store (from onupgradedneeded event above) or simply established a connection, save reference to db in global variable
  db = event.target.result;

  // check if app is online,
  if (navigator.onLine) {
  }
};

request.onerror = function (event) {
  // log error here
  console.log(event.target.errorCode);
};
