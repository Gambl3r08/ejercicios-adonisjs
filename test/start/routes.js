'use strict'
const os = require('os')
/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')
Route.get('/sayhi', ()=>'Hello from Adonis js' )
Route.get('/data', (info)=>{
    info = os.platform()
    info += "\n"
    info += os.release()
    info += "\n"
    info += os.freemem()
    info += "\n"
    info += os.homedir()
    info += "\n"
    info += os.networkInterfaces()
    info += "\n"
    info += os.uptime()
    info += "\n"
    info += os.arch()
    
    
    
    
    return info
})
