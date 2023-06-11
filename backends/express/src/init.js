import express from 'express';
import expressLayouts from 'express-ejs-layouts';
import { connectDB } from './db/db.js';
export const app = express();
connectDB()

app.use(express.static('public'))
app.use(expressLayouts)
app.set('layout', 'layout')
app.set('view engine', 'ejs')

app.use(expressLayouts);

app.get('/', function(req, res) {
  var locals = {
    title: 'Page Title',
    description: 'Page Description',
    header: 'Page Header'
  };
  res.render('index');
});

app.get('/post', function(req, res) {
    var locals = {
      title: 'Page Title',
      description: 'Page Description',
      header: 'Page Header'
    };
    res.render('post');
  });