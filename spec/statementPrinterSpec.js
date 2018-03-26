describe('statementPrinter', () => {
  let account, statement, headersToString, depositToString, withdrawalToString, historyStringify;

  beforeEach(() => {
    account = jasmine.createSpyObj('account', ['history']);

    account.history = [
      {
        date: '26/3/2018',
        credit: 1000,
        debit: '-',
        balance: 1000,
      },
      {
        date: '26/3/2018',
        credit: '-',
        debit: 600,
        balance: 400,
      },
    ];

    statement = new StatementPrinter(account.history);

    headersToString = 'date || credit || debit || balance'
    depositToString = '26/3/2018 || 1000 || - || 1000'
    withdrawalToString = '26/3/2018 || - || 400 || 400'

    const historyStringify = [headersToString, depositToString, withdrawalToString].join('\n');
  });

  describe('#initialize', () => {
    it('it should take an account history object with various transactions', () => {
      expect(statement.accHistory).toEqual([
        {
          date: '26/3/2018',
          credit: 1000,
          debit: '-',
          balance: 1000,
        },
        {
          date: '26/3/2018',
          credit: '-',
          debit: 600,
          balance: 400,
        },
      ]);
    });
  });

  describe('#printStatement', () => {
    it('it should print the statement of the given account history', () => {
      expect(statement.printStatement()).toEqual(historyStringify);
    });
  });
});
