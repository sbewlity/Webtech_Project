const express = require('express')
const contacts = express.Router();

//Check Input
function IsNullOrWhiteSpace(str)
{
    if (str == null) return true;
    return str.replace(/\s/g, '').length == 0;
}

//Test Contect
var Contact = [
    {
        id:1,
        First_Name:'Naphapon',
        Last_Name:'Pattharathimawong',
        email: '56660196@go.buu.ac.th'
    },
    {
        id:2,
        First_Name:'Chaiwat',
        Last_Name:'Duangpraphat',
        email: '55660230@go.buu.ac.th'
    },
    {
        id:3,
        First_Name:'Nattaporn',
        Last_Name:'Mornmee',
        email: '56660129@go.buu.ac.th'
    },
    {
        id:4,
        First_Name:'Tony',
        Last_Name:'Stark',
        email: 'ironman@starkindustries.com'
    },
    {
        id:5,
        First_Name:'Clint',
        Last_Name:'Barton',
        email: 'hawkeyes@avengers.com'
    }
]

//1.Develop GET /contacts API to list all contacts

contacts.get('/contacts',(req,res) => res.json(Contact))

//2.Develop POST /contacts API to create new contact

//3.Develop GET /contact/:id API to get contact information

//4.Develop PUT /contact/:id API to update contact information

//5.Develop DELETE /contacts/:id API to remove contact from list

//6.Develop GET /contacts?name= API to search contact by name

module.exports = contacts