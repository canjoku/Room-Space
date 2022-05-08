const userModel = require('../models/user_model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


function createUser(firstName, surname, email, department, password) {
    return userModel.findOne({email})
    .then(user => {
        if (user) {
            throw new Error('User already exists');
        }
        return bcrypt.hash(password, 12);
    })
    .then(hashedpassword => {
        const user = new userModel({
            firstName,
            surname,
            email,
            department,
            password: hashedpassword,
        })
        return user
        .save()
        .then(user => {
            return user
        }).catch(err => {
            throw err
        });
    })
    .catch(err => {
        throw err
    })
        
}

async function logInUser(email, password) {
    return userModel.findOne({email})
    .then(user => {
        if(user) {
            const isEqual = bcrypt.compare(password, user.password)
            if(isEqual) {
                const token = jwt.sign({
                    userId: user.id, email: user.email
                }, 'supersecretkey', {expiresIn: '1h'})
                const validatedUser = {userId: user.id, token: token, tokenExpiration: 1}
                return validatedUser
            }
        }
        else {
            throw new Error('user does not exist')
        }
        
    })
    .catch(err => {
        throw err
    })
    
}

function logOutUser() {
    return {
        hey: "Logout user"
    }
}

function deleteUser() {
    return {
        hey: "Waiting to decide"
    }
}

async function getUsers() {
    const user = userModel
    return user
    .find()
    .then(users => {
        return users.map(user => {
            return user
        })
    })
    .catch(err => {
        throw err;
    })

}


module.exports = {createUser, logInUser, logOutUser, deleteUser, getUsers}