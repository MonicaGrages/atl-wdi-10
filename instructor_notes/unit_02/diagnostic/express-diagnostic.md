# Diagnostic Unit 2.1

### Question 1: What is the Request/Response Cycle?  How does it work?
The request/response cycle is the process of communication between server and
client computers. The request is made by the client when they try to access a
web page by a certain url, and the response is what is sent back by the server.



### Question 2: What are the differences between a GET request and a POST request?
A get request is made for the user to read or view something, and a post
request is made to create or add content.

### Question 3: What does `npm init` do?
It starts node package manager so you can use or download node packages?

### Question 4: What does CRUD stand for?  What are the HTTP verbs that are associated with each function?
Create = POST
Read = GET
Update = PUT
Delete = DELETE

### Question 5: If we have a form where we want to create new data, what type of `method` do we use in our form?
POST

### Question 6: If the following form was submitted, what would `action="myScript.js"` do?
This would update the name that was entered in the form.

```
<form method="POST" action="myScript.js?_method=PUT">
  <input type="text" value="name"/>
  <button type="submit">Submit</button>
</form>
```


### Question 7: Write an express route that handles a POST request to the url `/menus` and redirects to the `/homepage`
router.post('/menus', function (request, response) {
  //something else goes here?
  response.redirect('/');
});

### Question 8: In the following express route, write how you would grab the values of `:id` and `:song_id` in javascript.

req.params.id
req.params.song_id

```
app.get("/artist/:id/song/:song_id"), function(req, res){
  //hmm...
}
```



### Question 9: What is MVC? How have we been using it so far?
Model - this is where the database things are?,

View - handlebars,

Controller - making separate controller files for express routers outside of our server.js

## Bonus Question

### Question 10: Write an express route that handles a GET request to the url `/products` and sends back the JSON object {error: "Bad Request"}
router.get('/products', function (req, res) {
  res.send({error: "Bad Request"});
});
