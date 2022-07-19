const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

module.exports = class UserService{

    //create
    static createUser = async (data) => {

        const username = data.username;
        const password = data.password;

        if (!username || !password) return false;

        const passwordEncrypted = await bcrypt.hash(password, 10);

        try {
            const newUser = User({
                username: username,
                password: passwordEncrypted,
            });

            const token = jwt.sign(
                {user_id: newUser._id, username},
                process.env.TOKEN_KEY,
                {
                    expiresIn: '2h',
                }
            )
            
            newUser.token = token;

            const response = await newUser.save();
            return response.token;
        } catch (err){
            console.log(err); 
            return false;
        }
    }

    //read
    static getUserByUsername = async (username) => {
        try{
            const user = await User.findOne({username: username});
            return user;
        } catch(err){
            console.log(err);
            return null;
        }
    }

    static getUserByToken = async (token) => {
        try{
            const config = process.env;
            const decoded = jwt.verify(token, config.TOKEN_KEY);
            const userId = decoded.user_id;

            const user = await User.findOne({_id: userId});
            return user;
        } catch(err){
            console.log(err);
            return null;
        }
    }

    //updates
    static updateUsername = async(data) => {
        
        const username = data.username;
        const password = data.password;
        const newUsername = data.newUsername;
        const token = data.token;

        const user = await this.credentialsCheck(username, password, token);

        if (!user) return false;

        user.username = newUsername;

        const response = await user.save();
        return {"username": response.username};
    }

    static updatePassword = async(data) => {
        
        const username = data.username;
        const password = data.password;
        const newPassword = data.newPassword;
        let response = false;

        const user = await this.credentialsCheck(username, password);

        if (!user) return response;

        const newPasswordEncrypted = await bcrypt.hash(newPassword, 10);
        user.password = newPasswordEncrypted;

        try{
            await user.save();
            response = {'message': 'Password Updated.'}
        }catch(err){
            console.log(err);
        };

        return response;
    }

    //delete
    static deleteUser = async (data) => {
        const username = data.username;
        const password = data.password;

        const user = await this.credentialsCheck(username, password);

        if (!user) return false;

        const response = await User.deleteMany({
            "username": user.username
        });
        
        return response;
    }

    //sign in
    static signInUser = async (data) => {

        const username = data.username;
        const password = data.password;

        const user = await this.credentialsCheck(username, password);

        if (!user) return false;

        try {
            const token = jwt.sign(
                {
                    user_id: user._id,
                    username
                },
                process.env.TOKEN_KEY,
                {
                    expiresIn: '2h',
                }
            );

            user.token = token;
            const response = await user.save();

            return response.token;

        }catch (err){
            console.log(err);
        }

        return false;
    }

    //helpers
    static credentialsCheck = async (username, password, token) => {

        if ( (!username || !password) && !token) return false;

        let user = null;

        if (username && password) {
            user = await this.getUserByUsername(username);
            if (!user) return false;
            const passwordCheck = await this.checkPasswords(user.password, password);
            if (!passwordCheck) return false;

        }else if (token){
            user = await this.getUserByToken(token);
            if (!user) return false;
        }

        return user;
    }

    static checkPasswords = async (userPassword, passwordToMatch) => {

        if (!userPassword || !passwordToMatch) return false;

        try{
            const passwordsMatch = await bcrypt.compare(passwordToMatch, userPassword);

            return passwordsMatch;
        }catch(err){
            console.log(err);
        }

        return false;
    }
}