describe('statementPrinter', () => {
  let account;
  let statement;

  beforeEach(() => {
    account = jasmine.createSpyObj('account', ['history']);

    account.history = {
      date: '26/3/2018',
      credit: 1000,
      debit: '',
      balance: 1000,
    };

    statement = new statementPrinter(account.history);
  });

  describe('#initialize', () => {
    it('it should take an account history object', () => {
      expect(statement.data).toEqual({
        date: '26/3/2018',
        credit: 1000,
        debit: '',
        balance: 1000,
      });
    });
  });
});
