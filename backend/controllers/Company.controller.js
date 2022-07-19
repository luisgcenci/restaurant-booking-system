const CompanyService = require('../services/CompanyService');


module.exports = class Company{

    static apiGetOperations = async (req, res) => {
        try{
            const companyName = req.query.companyName;

            const gotOperation = await CompanyService.getOperation(companyName);

            if (!gotOperation) return res.status(400).send('Something went wrong.');

            return res.status(201).json(gotOperation);
        }catch (err){
            console.log(err);
            res.status(500).send(err);
        }
    }

    static apiGetTables = async (req, res) => {
        try{
            const companyName = req.query.companyName;

            const gotTables = await CompanyService.getTables(companyName);

            if (!gotTables) return res.status(400).send('Something went wrong.');

            return res.status(201).json(gotTables);
        }catch (err){
            console.log(err);
            res.status(500).send(err);
        }
    }

    static apiCreateCompany = async (req, res) => {

        try{
            const data = req.body;
            const createdCompany = await CompanyService.createCompany(data);

            if (!createdCompany) return res.status(400).send('Something went wrong.');

            return res.status(201).json(createdCompany);
        }catch (err){
            console.log(err);
            res.status(500).send(err);
        }
    }

    static apiInsertTable = async (req, res) => {

        try{
            const data = req.body;
            const tableInserted = await CompanyService.insertTable(data);

            if (!tableInserted) return res.status(400).send('Something went wrong.');

            return res.status(201).json(tableInserted);
        }catch (err){
            console.log(err);
            res.status(500).send(err);
        }
    }

    static apiCreateReservation = async (req, res) => {

        try{
            const companyName = req.query.companyName;
            const tableId = req.query.tableId;
            const reservationInfo = req.body;
            
            const createdReservation = await CompanyService.createReservation(companyName, tableId, reservationInfo);

            if (!createdReservation) return res.status(400).send('Something went wrong.');

            return res.status(201).json(createdReservation);
        }catch (err){
            console.log(err);
            res.status(500).send(err);
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
}