/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/order */

import process1 from 'process';
import jsonServer from 'json-server';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import { User } from '@types';

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const port = process1.env.PORT || 8000;

const authUser: User = {
  id: 1,
  username: 'hana',
  displayName: 'Hana Kim',
  email: 'hana.kim@example.com',
  profileImageUrl: '/users/1.png',
  description:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
};

server.use(cookieParser());
server.use(express.json());

server.post('/auth/signin', (req, res) => {
  if (
    !(req.body['username'] === 'user' && req.body['password'] === 'password')
  ) {
    return res.status(401).json({
      message: 'Username or password are incorrect',
    });
  }

  res.cookie('token', 'dummy_token', {
    maxAge: 3600 * 1000,
    httpOnly: true,
  });
  res.status(201).json(authUser);
});

server.post('/auth/signout', (_, res) => {
  res.cookie('token', '', {
    maxAge: 0,
    httpOnly: true,
  });
  res.status(200).json({
    message: 'Sign out successfully',
  });
});

server.post('/purchases', (req, res) => {
  if (req.cookies['token'] !== 'dummy_token') {
    return res.status(401).json({
      message: 'Unauthorized',
    });
  }

  res.status(201).json({
    message: 'ok',
  });
});

server.get('/users/me', (req, res) => {
  if (req.cookies['token'] !== 'dummy_token') {
    return res.status(401).json({
      message: 'Unauthorized',
    });
  }

  res.status(200).json(authUser);
});

server.use(middlewares);
server.use(router);
server.listen(port, () => {
  console.log('Start listening...');
  console.log('http://localhost:' + port);
});
