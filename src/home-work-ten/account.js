class Account {

	static #nextID = 0;

	constructor( name, balance ) {
		this.name = name;
		this.balance = balance;
		this._id = Account.#nextID;
		Account.#nextID += 1;
	}

	get name() {
		return this._name;
	}

	set name( value ) {
		this._name = value;
	}

	get id() {
		return this._id;
	}

	get balance() {
		return this._balance;
	}

	set balance( value ) {
		this._balance = value;
	}

	credit( amount ) {
		this.balance += amount;
		return this.balance;
	}

	debit( amount ) {
		if ( amount > this.balance ) {
			throw new RangeError( 'Amount exceeded balance' );
		} else {
			this.balance -= amount;
			return this.balance;
		}
	}

	transferTo( account, amount ) {
		if ( account instanceof Account ) {
			this.debit( amount );
			account.credit( amount );
			return this.balance;
		}
		throw new TypeError( 'Account should be an instance of Account class' );
	}

	static identifyAccounts( accountFirst, accountSecond ) {
		if ( accountFirst instanceof Account && accountSecond instanceof Account ) {
			return accountFirst.toString() === accountSecond.toString();
		}
		throw new TypeError( 'Accounts should be instances of Account class' );
	}

	toString() {
		return `Name:${ this.name } Balance:${ this.balance } ID:${ this.id }`;
	}

}

module.exports = Account;
