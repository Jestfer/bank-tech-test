function Account() {
  this.balance = 0;
  this.history = [];
}

Account.prototype.deposit = function deposit(amount) {
  let movDate = new Date();

  this.balance += amount;

  this.history.push({
    date: (`${movDate.getDate()}/0${movDate.getMonth() + 1}/${movDate.getFullYear()}`),
    credit: amount,
    debit: '',
    balance: this.balance,
  });
};
