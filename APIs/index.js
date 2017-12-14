const express = require('express')
const apis = express.Router();
const bodyParser = require('body-parser')

apis.use(bodyParser.json())

//Check Input
function IsNullOrWhiteSpace(str)
{
    if (str == null) return true;
    return str.replace(/\s/g, '').length == 0;
}

//Test Contacts
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

apis.get('/contacts',(req,res) => res.json(Contact))

//2.Develop POST /contacts API to create new contact

apis.post('/contacts',(req,res) => {
    const list = {
                    id: Contact.length+1,
                    First_Name: req.body.First_Name,
                    Last_Name: req.body.Last_Name,
                    email : req.body.email
                 }
    if(!IsNullOrWhiteSpace(list.First_Name) && !IsNullOrWhiteSpace(list.Last_Name) && !IsNullOrWhiteSpace(list.email))
    {
        Contact.push(list)
        res.json("Contact has been added")
    }
    else{
        res.send("Don't leave blank(s)")}
})

//3.Develop GET /contact/:id API to get contact information



//4.Develop PUT /contact/:id API to update contact information



//5.Develop DELETE /contacts/:id API to remove contact from list

//6.Develop GET /contacts?name= API to search contact by name

module.exports = apis