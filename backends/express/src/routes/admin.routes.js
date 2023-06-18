import { Router } from 'express';

// import all controllers
// import SessionController from './app/controllers/SessionController';

export const routes = new Router();

// Add routes
routes.get('/', (req, res) =>{
    res.render("login", { layout: 'layout/admin' });
});
routes.get('/list', (req, res) =>{
    res.render("list", { layout: 'layout/admin' })
});
routes.get('/edit/:id', (req, res) =>{
    res.render("form", { layout: 'layout/admin' })
});
routes.get('/create/:id', (req, res) =>{
    res.render("form", { layout: 'layout/admin' })
});
// routes.post('/', SessionController.store);
// routes.put('/', SessionController.store);
// routes.delete('/', SessionController.store);
