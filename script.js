/*
Create an object called Multiplier with two methods: multiply and getCurrentValue. multiply should initially return the number supplied * 1 and from then on whatever the current value is times the number supplied.getCurrentValue should return the last answer returned from multiply.
*/

function Multiplier() {
  this.currentVal = 1;
  this.multiply = function(number) {
    this.currentVal *= number;
  };
  this.getCurrentVal = function() {
    console.log(this.currentVal);
  };
}
var calculate = new Multiplier();

calculate.multiply(2);
calculate.getCurrentVal();
calculate.multiply(4);
calculate.getCurrentVal();
calculate.multiply(2);
calculate.getCurrentVal();
calculate.multiply(2);
calculate.getCurrentVal();

/*
Implement an object model that allows you to store strings that represent a Photo. Your model should include an Album object that can contain many Photo objects in its photos attribute. Each Album should allow you to add a new photo, list all photos, and access a specific photo by the order it was added. Each Photo should store the photo's file name and the location the photo was taken in as strings. Create instances of each object defined to prove that your object model works.
*/

// function Album() {
//   this.photos = [];
//   this.addPhoto = function(photo) {
//     this.photos.push(photo);
//   };
//   this.showPhoto = function(photoNo) {
//     var photo = this.photos[photoNo];
//     return photo;
//   };
//   this.listPhotos = function() {
//     return this.photos;
//   };
// }

// function Photo(name, location) {
//   this.name = name;
//   this.location = location;
//   this.printPhotoInfo = function() {
//     console.log(
//       "Photo Name: " + this.name + "\n" + "Photo Location: " + this.location
//     );
//   };
// }

// var newPhoto = new Photo("beach", "New York");
// var anotherPhoto = new Photo("mountains", "West Virginia");
// var newAlbum = new Album();
// newAlbum.addPhoto(newPhoto);
// newAlbum.addPhoto(anotherPhoto);
// for (var photo of newAlbum.listPhotos()) {
//   photo.printPhotoInfo();
// }
// newAlbum.showPhoto(0).printPhotoInfo();
// newAlbum.showPhoto(1).printPhotoInfo();

/*=============================================
=            Album and Photo Functions            =
=============================================*/
function Album() {
  this.photos = [];
  this.addPhoto = function(photo) {
    this.photos.push(photo);
  };
  this.showPhoto = function(photoNo) {
    var photo = this.photos[photoNo];
    return photo;
  };
  this.listPhotos = function() {
    return this.photos;
  };
}

function Photo(name, location, fileURL) {
  this.name = name;
  this.location = location;
  this.fileURL = fileURL;
  this.printPhotoInfo = function() {
    console.log(
      "Photo Name: " +
        this.name +
        "\n" +
        "Photo Location: " +
        this.location +
        "\n" +
        "Photo URL: " +
        this.fileURL
    );
  };
}

/*=====  End of Album and Photo Functions  ======*/

/*=============================================
=   Create New Album and  Add to Album List     =
=============================================*/

var albumOption = document.getElementById("albumName");
var createModal = document.getElementById("albumInfo");
function openCreateAlbumModal() {
  createModal.style = "display:block;";
}

function closeAndCreateAlbum() {
  var albumList = document.getElementById("albumList");
  createModal.style = "display:none;";

  albumList.innerHTML +=
    "<option value=" +
    "'" +
    albumOption.value +
    "'" +
    ">" +
    albumOption.value +
    "</option>";
  albumOption.value = "";

  albumOption = new Album();
  return albumOption;
}

/*=======  End of Create New Album and  Add to Album List ================*/

/*=========================================================
=            Select an Album From Dropdown List            =
==========================================================*/

function ablumSelect() {
  var thisAlbum = document.getElementById("albumList").value;
  document.getElementById("albumTitle").innerText = thisAlbum;
}
/*=====  End of Select an Album From Dropdown List  ======*/

/*=============================================
=            Add Photos to Album and Display Photos            =
=============================================*/

function addPhotoToAlbum() {
  var photoName = document.getElementById("name").value;
  var photoLocation = document.getElementById("location").value;
  var photoUrl = document.getElementById("photoUrl").value;
  var photoToAdd = new Photo(photoName, photoLocation, photoUrl);
  albumOption.addPhoto(photoToAdd);
  function loadPhotos(photosUrl) {
    picContainer.innerHTML = "";
    for (var photoUrl of photosUrl) {
      picContainer.innerHTML =
        picContainer.innerHTML + "<img src=" + "'" + photoUrl + "'" + ">";
    }
  }

  loadPhotos(getURLs(albumOption));
}

/*=====  End of Add Photos to Album and Display Photos  ======*/

var newPhoto = new Photo(
  "beach",
  "New York",
  "https://source.unsplash.com/1600x900/?nature,water"
);
var anotherPhoto = new Photo(
  "mountains",
  "West Virginia",
  "https://source.unsplash.com/1600x900/?nyc,water"
);
var newAlbum = new Album();
newAlbum.addPhoto(newPhoto);
newAlbum.addPhoto(anotherPhoto);
for (var photo of newAlbum.listPhotos()) {
  photo.printPhotoInfo();
}
newAlbum.showPhoto(0).printPhotoInfo();
newAlbum.showPhoto(1).printPhotoInfo();

var picContainer = document.getElementById("container");
function getURLs(album) {
  URLs = [];
  for (var photo of album.photos) {
    URLs.push(photo.fileURL);
  }
  console.log(URLs);
  return URLs;
}

// function loadPhotos(photosUrl) {
//   for (var photoUrl of photosUrl) {
//     picContainer.innerHTML =
//       picContainer.innerHTML + "<img src=" + "'" + photoUrl + "'" + ">";
//   }
// }

// loadPhotos(getURLs(newAlbum));
/*
Create a prototypical Person object. From this object, extend a Teacher object and a Student object. Each of these objects should have attributes and methods pertinent to what they describe. Also create a School object that should be able to store instances of students and teachers. Make sure to write code afterwards that creates instances of these objects to make sure that what you've written works well and you're able to store the necessary data in each object.
*/

function Person(name) {
  this.name = name;
  this.showPersonInfo = function() {
    console.log("Name: " + name);
  };
}

function Teacher(name) {
  Person.call(this, name);
  Teacher.prototype = Object.create(Person.prototype);
}

function Student(name) {
  Person.call(this, name);
  Student.prototype = Object.create(Person.prototype);
}

function School() {
  this.teachers = [];
  this.students = [];
  this.addStudent = function(student) {
    this.students.push(student);
  };
  this.addTeacher = function(teacher) {
    this.teachers.push(teacher);
  };
  this.getStudents = function() {
    console.log(
      "-------------- This is a list of all the students name: --------------------"
    );
    for (var student of this.students) {
      console.log(student.name);
    }
    console.log(
      "--------------------- End of student list -------------------------"
    );
  };
  this.getTeacher = function() {
    console.log(
      "-------------- This is a list of all the teachers name: --------------------"
    );
    for (var teacher of this.teachers) {
      console.log(teacher.name);
    }
    console.log(
      "--------------------- End of student list -------------------------"
    );
  };
}

var damian = new Student("Damian");
var george = new Student("George");
var david = new Student("David");
var terry = new Student("Terry");
var bryan = new Teacher("Bryan");
var devin = new Teacher("Devin");
var NYCDA = new School();

NYCDA.addStudent(damian);
NYCDA.addStudent(george);
NYCDA.addStudent(david);
NYCDA.addStudent(terry);
NYCDA.addTeacher(bryan);
NYCDA.addTeacher(devin);
// bryan.showPersonInfo();

NYCDA.getStudents();
NYCDA.getTeacher();
