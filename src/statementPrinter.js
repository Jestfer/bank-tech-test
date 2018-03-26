function StatementPrinter(accHistory) {
  this.accHistory = accHistory;
}

StatementPrinter.prototype.printStatement = function printStatement() {
  this.printHeaders();
  return this.getHistory();
};

// PRIVATE

StatementPrinter.prototype.printHeaders = function printHeaders() {
  const headers = 'date || credit || debit || balance';
  console.log('date || credit || debit || balance');
  return headers;
};

StatementPrinter.prototype.getHistory = function getHistory() {
  const transactionData = `${this.accHistory.date} || ${this.accHistory.credit.toString()} || ${this.accHistory.debit.toString()} || ${this.accHistory.balance.toString()}`;
  console.log(transactionData);
  return transactionData;
};
