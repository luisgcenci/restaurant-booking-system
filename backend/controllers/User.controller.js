const UserService = require('../services/UserService');


module.exports = class User{

    static apiCreateUser = async (req, res) => {

        try{
            const data = req.body;
            const createdUser = await UserService.createUser(data);

            if (!createdUser) return res.status(400).send('Invalid Email/Password.');

            return res.status(201).json({"jwt_token": createdUser});
        }catch (err){
            console.log(err);
            res.status(500).send(err);
        }
    }

    static apiSignInUser = async (req, res) => {
        try{
            const data = req.body;
            const userSignedIn = await UserService.signInUser(data);

            if (!userSignedIn) return res.status(401).send('Invalid Email/Password.');

            return res.status(201).json({"jwt_token": userSignedIn});

        }catch (err){
            console.log(err);
            return res.status(500).send(err);
        }
    }

    static apiUpdateUsername = async (req, res) => {
        try{
            const data = req.body;
            const userNameUpdated = await UserService.updateUsername(data);

            if (!userNameUpdated) return res.status(401).send('Could not update Username.');

            return res.status(201).json(userNameUpdated);

        }catch (err){
            console.log(err);
            return res.status(500).send(err);
        }
    }

    static apiUpdatePassword = async (req, res) => {
        try{
            const data = req.body;
            const passwordUpdated = await UserService.updatePassword(data);

            if (!passwordUpdated) return res.status(401).send('Could not update Password.');

            return res.status(201).json(passwordUpdated);

        }catch (err){
            console.log(err);
            return res.status(500).send(err);
        }
    }

    static apiDeleteUser = async (req, res) => {

        try{
            const data = req.body;
            const userDeleted = await UserService.deleteUser(data);

            if (!userDeleted) return res.status(401).send('Could not delete User.');

            return res.status(201).json(userDeleted);

        }catch(err){
            console.log(err);
            return res.status(500).send(err);
        }
    }

    static apiGetAuth =  async (req, res) => {
        
        res.json({auth: true})
    }
}