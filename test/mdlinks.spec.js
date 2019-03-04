const mdLinks = require('../mdlinks.js');
const chai = require('chai');
const index = require('../index.js')


describe('mdLinks', () => {

  it('Debería ser una función', () => {
    expect(typeof mdLinks).toBe('function');
  });
});


describe('index', () => {

  it('Debería ser una funcion', () => {
    expect(typeof index).toBe('function');
  });

});
