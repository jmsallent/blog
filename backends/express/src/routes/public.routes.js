import { Router } from 'express';

// import all controllers
// import SessionController from './app/controllers/SessionController';

const routes = new Router();

// Add routes
routes.get('/', function(req, res) {
    var locals = {
      title: 'Page Title',
      description: 'Page Description',
      header: 'Page Header'
    };
    res.render('index');
  });
  
routes.get('/post', function(req, res) {
    var locals = {
    title: 'Page Title',
    description: 'Page Description',
    header: 'Page Header'
    };
    res.render('post');
});
