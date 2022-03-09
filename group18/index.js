const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

// Added:
const { query } = require('express');
const res = require('express/lib/response');
const { Pool } = require('pg/lib');
const { Client } = require('pg');

// Old:
// express()
//   .use(express.static(path.join(__dirname, 'public')))
//   .set('views', path.join(__dirname, 'views'))
//   .set('view engine', 'ejs')
//   .get('/', (req, res) => res.render('pages/index'))
//   .listen(PORT, () => console.log(`Listening on ${ PORT }`))

// New:
var url = require('url');
var util = require('util');

var app=express()
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => res.render('pages/index'))


var leaderborad = null;





