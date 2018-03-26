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
  this.accHistory.forEach((transaction) => {
    console.log(`${transaction.date} || ${transaction.credit.toString()} || ${transaction.debit.toString()} || ${transaction.balance.toString()}`);
  });
};
