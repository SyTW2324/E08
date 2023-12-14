// user.test.ts

import { app } from "../../src/app.js";
import request from 'supertest';
import { expect } from 'chai';

describe('User Routes', () => {
  it('POST /signup - Debe registrar un nuevo usuario', async () => {
    const response = await request(app)
      .post('/signup')
      .send({
        id: 'testuser',
        full_name: 'tesy',
        mail: 'test@gmail.com',
        birth_date: '12/01/2020',
        password: 'testpassword',
      });

    expect(response.status).to.equal(201);
    expect(response.body).to.have.property('messagge', 'sign up successful');
    expect(response.body).to.have.property('token');
    expect(response.body).to.have.property('code', 1);
  });

  it('POST /signup - Debe manejar errores de registro', async () => {
    const response = await request(app)
      .post('/signup')
      .send({
        id: 'saul', 
        full_name: 'aaa',
        mail: 'test@gmail.com',
        birth_date: '12/01/2020',
        password: '1234',
      });

    expect(response.status).to.equal(406);
    expect(response.body).to.have.property('message', 'Try an other username');
    expect(response.body).to.have.property('code', 0);
  });

  it('POST /login - Debe iniciar sesión con credenciales válidas', async () => {
    const response = await request(app)
      .post('/login')
      .send({
        id: 'saul',
        password: '1234',
      });

    expect(response.status).to.equal(200);
    expect(response.body).to.have.property('message', 'Login successful');
    expect(response.body).to.have.property('token');
    expect(response.body).to.have.property('user');
    expect(response.body.user).to.have.property('id', 'saul');
  });

  it('POST /login - Debe manejar errores de inicio de sesión con credenciales inválidas', async () => {
    const response = await request(app)
      .post('/login')
      .send({
        id: 'testuser',
        password: 'invalidpassword',
      });

    expect(response.status).to.equal(401);
    expect(response.body).to.have.property('message', 'Invalid username or password');
    expect(response.body).to.have.property('code', 0);
  });
});
