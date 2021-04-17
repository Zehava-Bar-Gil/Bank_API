const fs = require('fs');
const usersJson = require('../users.json');
const users = usersJson;
const addUser = (req,res)=>{
    const {id, cash, credit} = req.body;

    let result = users.find((u) => {
        return u.id == id
    })

    if (!id) {
        return res.status(200).json({error: 'enter id'})
    }else if (result){
    return res.status(200).json({error: 'user exist'})
    }

    const obj = {
        id: id,
        cash: cash,
        credit: credit
    }
    users.push(obj);

    fs.writeFile('../users.json', JSON.stringify(users),err=>
    console.log(err));
    return res.send(obj);
}

const getUsers = (req,res)=>{
    if(users.length == 0){
    return res.send('hello')
    }else{
    return res.send(users) 
    }  
}


// const getUserById = (req,res)=>{
//     const {userId} = req.params;
//     let users = users.find((u)=>{
//         return u.id ==userId
//     })
//     return user
// }

module.exports = {
    addUser,
    getUsers,
    // getUserById
}
