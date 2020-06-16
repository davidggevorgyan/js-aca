/* eslint-disable strict */

'use strict';

// -------------------------------------------- Task 1 --------------------------------------------

const Account = require( '../../src/home-work-ten/account' );
const Author = require( '../../src/home-work-ten/author' );
const Book = require( '../../src/home-work-ten/book' );
const Person = require( '../../src/home-work-ten/person' );
const Student = require( '../../src/home-work-ten/student' );
const Teacher = require( '../../src/home-work-ten/teacher' );

test( 'task1: should return stringified author object', () => {
	const a = new Author( 'Roger Zelazny', 'rogerzelazny@gmail.com', 'male' );
	expect( a.toString() ).toBe( 'Name:Roger Zelazny Email:rogerzelazny@gmail.com Gender:male' );
} );

test( 'task1: should throw exception for invalid author gender', () => {
	expect( () => {
		const a = new Author( 'Robot Bot', 'robotbot@gmail.com', 'robot' );
		a.toString();
	} ).toThrow( 'Invalid gender was used. Please use male or female' );
} );

test( 'task1: should return stringified book object with a valid getProfit', () => {
	const a = new Author( 'Roger Zelazny', 'rogerzelazny@gmail.com', 'male' );
	const b = new Book( 'The Chronicles of Amber', a, 10, 50000 );
	expect( b.toString() ).toBe( 'Title:The Chronicles of Amber Author:"Name:Roger Zelazny Email:rogerzelazny@gmail.com Gender:male" Price:10 Quantity:50000' );
	expect( b.getProfit() ).toBe( 500000 );
} );

test( 'task1: should throw exception for invalid author gender', () => {
	expect( () => {
		const b = new Book( 'The Chronicles of Amber', {}, 10, 50000 );
		b.toString();
	} ).toThrow( 'Author should be an instance of Author class' );
} );

// -------------------------------------------- Task 2 --------------------------------------------

test( 'task2: should set a new ID for each account', () => {
	const a = new Account( 'Name Surname', 2000 );
	const b = new Account();
	expect( a.id ).toBe( 0 );
	expect( b.id ).toBe( 1 );
	expect( a.toString() ).toBe( `Name:${ a.name } Balance:${ a.balance } ID:${ a.id }` );
} );

test( 'task2: should not be possible to set a new ID for existing customer', () => {
	const a = new Account( 'Test', 123 );
	expect( () => {
		a.id = 5;
	} ).toThrow( 'Cannot set property id of [object Object] which has only a getter' );
} );

test( 'task2: should add credit', () => {
	const a = new Account( 'Test', 1000 );
	expect( a.credit( 1000 ) ).toBe( 2000 );
	expect( a.balance ).toBe( 2000 );
} );

test( 'task2: should subtract debit', () => {
	const a = new Account( 'Test', 1000 );
	expect( a.debit( 1000 ) ).toBe( 0 );
	expect( a.balance ).toBe( 0 );
} );

test( 'task2: should throw error if debit amount is more than balance', () => {
	const a = new Account( 'Test', 500 );
	expect( () => {
		a.debit( 501 );
	} ).toThrow( 'Amount exceeded balance' );
} );

test( 'task2: should transfer money from one account to another', () => {
	const a1 = new Account( 'Name Surname', 500 );
	const b1 = new Account( 'Another-Name Another-Surname', 500 );
	expect( a1.transferTo( b1, 400 ) ).toBe( 100 );
	expect( a1.balance ).toBe( 100 );
	expect( b1.balance ).toBe( 900 );
} );

test( 'task2: should throw error if you are transferring data to not Account class object', () => {
	const a1 = new Account( 'Name Surname', 500 );
	const b1 = {};
	expect( () => {
		a1.transferTo( b1, 400 );
	} ).toThrow( 'Account should be an instance of Account class' );
} );

test( 'task2: should throw error if there are not enough funds', () => {
	const a1 = new Account( 'Name Surname', 500 );
	const b1 = new Account( 'Another-Name Another-Surname', 500 );
	expect( () => {
		a1.transferTo( b1, 501 );
	} ).toThrow( 'Amount exceeded balance' );
} );

test( 'task2: should return true for same Accounts via identifyAccounts', () => {
	const a1 = new Account( 'Name Surname', 500 );
	const z1 = a1;
	const b1 = new Account( 'Another-Name Another-Surname', 500 );
	expect( Account.identifyAccounts( a1, z1 ) ).toBe( true );
	expect( Account.identifyAccounts( a1, b1 ) ).toBe( false );
} );

test( 'task2: should return true for same Accounts via identifyAccounts', () => {
	const a1 = new Account( 'Name Surname', 500 );
	const z1 = {};
	expect( () => {
		Account.identifyAccounts( a1, z1 );
	} ).toThrow( 'Accounts should be instances of Account class' );
} );

// -------------------------------------------- Task 3 --------------------------------------------

test( 'task3: should return valid to string for teacher', () => {
	const teacher1 = new Teacher( 'Davit', 'Margaryan', 'male', 31, 'JavaScript', 1000000 );
	expect( teacher1.toString() ).toBe( 'FirstName:Davit LastName:Margaryan Gender:male Age:31 Program:JavaScript Pay:1000000' );
} );

test( 'task3: should return valid to string for person', () => {
	const person1 = new Person( 'Davit', 'Margaryan', 'male', 31 );
	expect( person1.toString() ).toBe( 'FirstName:Davit LastName:Margaryan Gender:male Age:31' );
} );

test( 'task3: should return valid to string for student', () => {
	const person1 = new Student( 'David', 'Tester', 'male', 31, ['JavaScript', 'Java'], 2020, 100000 );
	expect( person1.toString() ).toBe( 'FirstName:David LastName:Tester Gender:male Age:31 Program:JavaScript,Java Year:2020 Fee:100000' );
} );

test( 'task3: should throw an error if you are trying to set student programs as not array', () => {
	expect( () => {
		const person1 = new Student( 'David', 'Tester', 'male', 31, {}, 2020, 100000 );
		person1.toString();
	} ).toThrow( 'Programs should be array of strings' );
} );

test( 'task3: should throw an error if you are trying to set student programs as not array of strings', () => {
	expect( () => {
		const person1 = new Student( 'David', 'Tester', 'male', 31, ['Java', 'JS', 1], 2020, 100000 );
		person1.toString();
	} ).toThrow( 'Programs should be array of strings' );
} );

test( 'task3: should throw an error if you are trying to pass an exam for not assigned program', () => {
	const person1 = new Student( 'David', 'Tester', 'male', 31, ['JavaScript', 'Java'], 2020, 100000 );
	expect( () => {
		person1.passExam( 'Python', 90 );
	} ).toThrow( 'Specified program is not assigned to this student' );
} );

test( 'task3: should throw an error if you are trying to pass an exam with negative grade', () => {
	const person1 = new Student( 'David', 'Tester', 'male', 31, ['JavaScript', 'Java'], 2020, 100000 );
	expect( () => {
		person1.passExam( 'JavaScript', -1 );
	} ).toThrow( 'Grade should be between 0 and 100' );
} );

test( 'task3: should throw an error if you are trying to pass an exam with grade over 100', () => {
	const person1 = new Student( 'David', 'Tester', 'male', 31, ['JavaScript', 'Java'], 2020, 100000 );
	expect( () => {
		person1.passExam( 'JavaScript', 101 );
	} ).toThrow( 'Grade should be between 0 and 100' );
} );

test( 'task3: should throw an error if you are trying to pass an exam with grade over 100', () => {
	const person1 = new Student( 'David', 'Tester', 'male', 31, ['JavaScript', 'Java'], 2020, 100000 );
	person1.passExam( 'JavaScript', 90 );
	expect( person1.year ).toBe( 2020 );
	person1.passExam( 'Java', 10 );
	expect( person1.year ).toBe( 2020 );
	person1.passExam( 'Java', 50 );
	expect( person1.year ).toBe( 2021 );

	const person2 = new Student( 'Ani', 'Tester', 'female', 20, ['JavaScript'], 2020, 50000 );
	expect( person2.year ).toBe( 2020 );
	person2.passExam( 'JavaScript', 100 );
	expect( person2.year ).toBe( 2021 );
} );
