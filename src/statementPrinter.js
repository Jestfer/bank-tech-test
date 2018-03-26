function StatementPrinter(accHistory) {
  this.data = accHistory;
}

StatementPrinter.prototype.printStatement = function printStatement() {
  return `date: ${this.data.date} || credit: ${this.data.credit.toString()} || debit: ${this.data.debit} || balance: ${this.data.balance.toString()}`;
};
