function Account() {
  this.balance = 0;
  this.history = [];
}

Account.prototype.deposit = function deposit(amount) {
  const movDate = new Date();

  this.balance += amount;

  this.history.push({
    date: (`${movDate.getDate()}/${movDate.getMonth() + 1}/${movDate.getFullYear()}`),
    credit: amount,
    debit: '-',
    balance: this.balance,
  });

  return true;
};

Account.prototype.withdraw = function withdraw(amount) {
  const movDate = new Date();

  this.checkFunds(amount);

  this.balance -= amount;

  this.history.push({
    date: (`${movDate.getDate()}/${movDate.getMonth() + 1}/${movDate.getFullYear()}`),
    credit: '-',
    debit: amount,
    balance: this.balance,
  });

  return true;
};

// PRIVATE

Account.prototype.checkFunds = function checkFunds(amount) {
  if (amount > this.balance) {
    throw new Error('Insufficient funds. Why not opening a Premium Account?');
  }
};

// track movement
