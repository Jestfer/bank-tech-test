describe('statementPrinter', () => {
  let account;
  let statement;

  beforeEach(() => {
    account = jasmine.createSpyObj('account', ['history']);

    account.history = {
      date: '26/3/2018',
      credit: 1000,
      debit: '-',
      balance: 1000,
    };

    statement = new StatementPrinter(account.history);
  });

  describe('#initialize', () => {
    it('it should take an account history object', () => {
      expect(statement.accHistory).toEqual({
        date: '26/3/2018',
        credit: 1000,
        debit: '-',
        balance: 1000,
      });
    });
  });

  describe('#printStatement', () => {
    const deposit = '26/3/2018 || 1000 || - || 1000';

    it('it should print the statement of the given account history', () => {
      expect(statement.printStatement()).toEqual(deposit);
    });
  });
});
