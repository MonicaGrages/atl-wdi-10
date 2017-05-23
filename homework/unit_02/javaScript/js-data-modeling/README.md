[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Data Modeling with JavaScript

Every computer program deals with managing data. How you choose to represent
these data within your program can have far-reaching implications on every other
part of your application; consequently, reversing those decision becomes more
and more costly over time, as the program becomes more complex. For this reason,
thinking carefully in advance about how you want to model your data within your
application can pay very big dividends.

## Choosing Entities/Abstractions

One of the first challenges in modeling data is deciding what data to model.
Let's consider an app we want to make, called Senior Paws. Senior Paws is an app for dog sitters taking care of old dogs, where you can track the dog's information, like its name, favorite treat, medication, and its owners. What attributes are most important to include in our data model?

![image](data_modeling.png)


### Directions

Data Modeling Round 2! Take a look at each of the app descriptions below. For each description:
  1. Create a data model for the app by listing at least two relevant
entities/abstractions (e.g. Senior Paws app, above) that the app might use, and list properties that make sense for that use case. You *don't* have to list all of them.
  1. Create Javascript objects of those entities and assign what data type the _value_ of those properties should be
  1. Give an example of a relationship of the model. Keep in mind, not _everything_ has to be connected to _everything_.

### 1. Ultra E-mail App

This app provides easy access to all your e-mail service providers in one app. The app will let you select one of your email addresses and view your e-mails for that address.

```
Write your answer here or in a separate js file.

A User has:
  -id number (one to one)
  -email account(s) (one to many)

user = {
    id_number : Number,
    accounts : [{}]
  }

An Email Account has:
  -id number (one to one)
  -name/service provider (one to one)
  -associated user id number (one to one)
  -email(s) (one to many)

account = {
  id_number : Number,
  provider : String,
  emails : [{}]
}

An Email has:
  -id number (one to one)
  -sender (one to one)
  -content (one to one)
  -timestamp (one to one)

email = {
  id_number : Number,
  sender : String,
  content : String,
  timestamp : Date
}
```

### 2. Radio on the Internet app

This app hosts a ton of radio stations, each featuring their own playlists of songs. The radio stations can be listed by genre or popularity.


```
Write your answer here or in a separate js file.

A song has:
  -id number (one to one)
  -title (one to one)
  -artist (one to one)
  -length  (one to one)
  -genre(s) (one to many)
  -release date (one to one)

song = {
  id_number : Number,
  title : String,
  artist : String,
  length : Number,
  genres : [String, String]
}

An album has:
  -id number (one to one)
  -title (one to one)
  -artist (one to one)
  -song(s) (one to many)
  -genre (one to many)
  -release date (one to one)

album = {
  id_number : Number,
  title : String,
  artist : String,
  song : [{}],
  genre : [String, String]
  release_date : Date
}

A playlist has:
  -id number (one to one)
  -song(s) (one to many)
  -title (one to one)

playlist = {
  in_number : Number,
  song : [{}],
  title : String
}
```

### 3. Rock Concert App

This app will be a tool for managing all of your favorite bands' concerts; it will keep track of their tour dates, ticket purchasing, and next recommended show.

```
Write your answer here or in a separate js file.

A band will have:
  -name (one to one)
  -id number (one to one)
  -tour(s) (one to many)

band = {
  name : String,
  id_number : Number,
  tour : [{}]
}

A user will have:
  -name (one to one)
  -id number (one to one)
  -location (one to one)

user = {
  name : String,
  id_number : Number,
  location : String
}

A tour will have:
  -id number (one to one)
  -date(s) (one to many)
  -location(s) (one to many)
  -ticket purchasing function (one to one)

tour = {
  id_number : Number,
  date : [Date, Date, Date]
  location : [String, String, String]
}
```

### 4. Coffee To-Go App

This app will allow customers to browse a list of coffeeshops nearby, order drinks off of their menu, add those drinks to a shopping cart, and save that cart as a past order once the purchase is complete.
```
Write your answer here or in a separate js file.

A coffeeshop will have:
  -name (one to one)
  -id number (one to one)
  -location(s) (one to many)
  -menu (one to one)
  -order function (one to one)

coffeeshop = {
  name : String
  id_number : Number,
  location : String,
  menu : [{}],
  order : function() {}
}

A user will have:
  -name (one to one)
  -id number (one to one)
  -location (one to one)
  -saved orders (one to many)

user = {
  name : String,
  id_number : Number,
  location : String,
  orders : [{}]
}

```

### 5. Team Tracker App

This app shows you all the latest stats from your favorite sports teams. You can view individual player stats and full team stats.

```
Write your answer here or in a separate js file.

A team will have:
  -id number (one to one)
  -name (one to one)
  -players (one to many)
  -number of wins (one to one)

team = {
  id_number : Number,
  name : Name,
  players : [{}],
  wins : Number
}

A player will have:
  -id number (one to one)
  -name (one to one)
  -age (one to one)
  -number of points scored (one to one)

player = {
  id_number : String,
  name : String,
  age : Number,
  points : Number
}
```


### Final Thoughts:

Q. When you were creating relationships between the models, what were some thoughts or questions you had to help guide a connection between them?

```
Write your answer here or in a separate js file.

- Is this a one to one or one to many relationship?
- Are any of the attributes inherited from or actually belonging to another model?
```

### Reading and Videos for Tomorrow
Now that you've had some practice really thinking about the data design of an app, we're going to learn about MongoDB, a no-SQL database. Starting tomorrow, our Express apps will be talking to the Mongo database through Mongoose. Since we're covering a LOT of ground tomorrow, take some time to introduce yourself to concepts and lingo surrounding MongoDB and Mongoose. You will _not_ have to memorize the technical details here.

- [MongoDB's Ridiculously Cheery Promo video: 2mins video](https://www.youtube.com/watch?v=CvIr-2lMLsk)
- [The Good and Bad of MongoDB: 30mins video](https://www.youtube.com/watch?v=hWxnRi_WXtg)
- [What is Mongoose? 2 min Video](https://www.youtube.com/watch?v=swWRUvluSkE)
- [Official Mongoose Website](http://mongoosejs.com/index.html)
- [Official Mongoose Docs](http://mongoosejs.com/docs/index.html)

## Submitting Your Work

  When you're ready to submit your work,

  1. Add, commit, and push your code.
  2. Add a link to the slack channel theme along with your name and you comfort level with the homework.
