function Account() {
  this.balance = 0;
  this.history = [];
}

Account.prototype.deposit = function deposit(amount) {
  this.balance += amount;
};
