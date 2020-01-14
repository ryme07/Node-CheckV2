import mysql from 'mysql';
import { DbHandler } from '../core/db.handler';

export default () => {

    const connexion = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    });

    DbHandler.getInstance(connexion);

    // tslint:disable-next-line: only-arrow-functions
    connexion.connect( function(err) {
        if (err) { throw err; }
        console.log('connected!');
    });

    return connexion;
};
