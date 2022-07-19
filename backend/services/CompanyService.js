const Company = require('../models/Company');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

module.exports = class CompanyService{

    //create
    static createCompany = async (data) => {

        const name = data.name;
        const operation = data.operation;

        if (!operation || !name) return false;

        try {
            const newCompany = Company({
                name: name,
                operation: operation,
            });

            const response = await newCompany.save();
            return response;
        } catch (err){
            console.log(err); 
            return false;
        }
    }

    static createReservation = async (companyName, tableId, reservationInfo) => {

        if (!companyName || !tableId || !reservationInfo) return false;

        let company = await this.getCompany(companyName);
        let day = reservationInfo.from;
        day = new Date(day).toLocaleDateString('en-US');
        let key = new Date().getTime();
        let path = `tables.${tableId}.reservations.${day}.${[key]}`

        reservationInfo.timestamp = String(key);

        company.set({
            [path]: reservationInfo
        }
        );

        try {
            let response = await company.save();
            response = {'reservation': response.tables[tableId].reservations};
            return response;
        } catch (err){
            console.log(err); 
            return false;
        }
    }


    static insertTable = async (data) => {

        const companyName = data.companyName;
        const tableid = data.tableid;
        const seats = data.seats;

        if (!companyName | !tableid || !seats) return false;

        const company = await this.getCompany(companyName);

        if (!company) return false;

        company.tables[tableid] = {
            'reservations': {},
            'seats': seats
        }

        company.markModified('tables');

        try {
            const response = await company.save();
            return response;
        } catch (err){
            console.log(err); 
            return false;
        }
    }

    //getters
    static getCompany = async (name) => {
        try{
            const company = await Company.findOne({name: name});
            return company;
        } catch(err){
            console.log(err);
            return null;
        }
    }

    static getOperation = async (companyName) => {
        try{
            const company = await Company.findOne({name: companyName});
            return company.operation;
        } catch(err){
            console.log(err);
            return null;
        }
    }

    static getTables = async (companyName) => {
        try{
            const company = await Company.findOne({name: companyName});
            return company.tables;
        } catch(err){
            console.log(err);
            return null;
        }
    }



    //delete
    // static deleteUser = async (data) => {
    //     const username = data.username;
    //     const password = data.password;

    //     const user = await this.credentialsCheck(username, password);

    //     if (!user) return false;

    //     const response = await User.deleteMany({
    //         "username": user.username
    //     });
        
    //     return response;
    // }

}