

var expect = require('chai').expect;

var file = require('./main.js')

describe('function isOddNumber()', () => {
    it('should be true if 1', () => {
        const result = file.isOddNumber(1);
        expect(result).to.be.true;
    });

    it('should be false if 2', () => {
        const result = file.isOddNumber(2);
        expect(result).to.be.false;
    });

    it('should be true if 3', () => {
        const result = file.isOddNumber(3);
        expect(result).to.be.true;
    });

    it('should be false if 4', () => {
        const result = file.isOddNumber(4);
        expect(result).to.be.false;
    });

    it('should be true if 5',function(){
        const result = file.isOddNumber(5);
        expect(result).to.be.true;
    });
});

describe('function countEvenNumber()', () => {

    it('should equal 0 if null ',function(){
        const result = file.countEvenNumber(null);
        expect(result).to.equal(0);
    });

    it('should equal 0 if [] ',function(){
        const result = file.countEvenNumber([]);
        expect(result).to.equal(0);
    });

    it('should equal 1 if [1,2,3] ',function(){
        const result = file.countEvenNumber([1,2,3]);
        expect(result).to.equal(1);
    });

    it('should equal 2 if [1,2,3,4] ',function(){
        const result = file.countEvenNumber([1,2,3,4]);
        expect(result).to.equal(2);
    });

    it('should equal 3 if [1,2,3,4,5,6] ',function(){
        const result = file.countEvenNumber([1,2,3,4,5,6]);
        expect(result).to.equal(3);
    });
});

describe('function isPrimeNumber()', () => {

    it('should equal true if 2 ',function(){
        const result = file.isPrimeNumber(2);
        expect(result).to.equal(true);
    });

    it('should equal true if 3 ',function(){
        const result = file.isPrimeNumber(3);
        expect(result).to.equal(true);
    });

    it('should equal true if 5 ',function(){
        const result = file.isPrimeNumber(5);
        expect(result).to.equal(true);
    });

    it('should equal true if 97',function(){
        const result = file.isPrimeNumber(97);
        expect(result).to.equal(true);
    });

    it('should equal true if 997',function(){
        const result = file.isPrimeNumber(997);
        expect(result).to.equal(true);
    });
});