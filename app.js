const express = require('express');
const exphbs  = require('express-handlebars'); 
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const path = require('path');
const blogRoutes = require('./routes/blogRoutes');

const app = express();

app.use(express.static('public'))
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }))

//connect to mongoDB
const dbURI = 'mongodb+srv://salome_36:77227@cluster0.pyrsa.mongodb.net/node-learn?retryWrites=true&w=majority'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
.then((result)=> app.listen(3000))
.catch((err) => console.log(err))

//set engine
app.engine('handlebars', exphbs({
    defaultLayout: 'main', 
    layoutsDir:path.join(__dirname, 'views/layouts')}));
app.set('view engine', 'handlebars');

//home routes
app.get('/', function (req, res) {
    res.redirect('/blogs')
});

app.get('/about', function (req, res) {
    res.render('about');
});
//blog routes
app.use('/blogs', blogRoutes)


//404 page
app.use((req,res)=>{
    res.status(404).render('404', {title: '404'})
})