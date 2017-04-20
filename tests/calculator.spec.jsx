import React from 'react';
import ReactDOM from 'react-dom';
import Calculator from '../src/logic/calculator';

describe('Calculator', () => {
    it('should return 0 with no arguments', () => {
        const calc = new Calculator();
        const result = calc.calculateInstallment();
        expect(result).toBe(0);
    });
    it('should return 0 with months 0', () => {
        const calc = new Calculator();
        const result = calc.calculateInstallment(1200, 0);
        expect(result).toBe(0);
    });
    it('should return 0 with amount 0', () => {
        const calc = new Calculator();
        const result = calc.calculateInstallment(0, 24);
        expect(result).toBe(0);
    });
    it('should return 43.87 with amount 1000 and months 24', () => {
        const calc = new Calculator();
        const result = calc.calculateInstallment(1000, 24);
        expect(result).toBe(43.87);
    });
    it('should return 28.31 with amount 1500 and months 60', () => {
        const calc = new Calculator();
        const result = calc.calculateInstallment(1500, 60);
        expect(result).toBe(28.31);
    });
});
