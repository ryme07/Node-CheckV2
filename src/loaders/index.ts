import { Application } from 'express';
import express from './express';
import mysql from './mysql';

export default async (app: Application) => {

    await express(app);
    console.log('express initialized');

    await mysql();
    console.log('mySQL initialized');
} ;
