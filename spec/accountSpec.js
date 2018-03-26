describe('account', () => {
  let account;

  beforeEach(() => {
    account = new Account();
  });

  describe('#initialize', () => {
    it('it initializes with a balance of 0', () => {
      expect(account.balance).toEqual(0);
    });

    it('it initializes with an empty history', () => {
      expect(account.history).toEqual([]);
    });
  });

  describe('#deposit', () => {
    it('it should update balance after customer deposits money', () => {
      account.deposit(1000);

      expect(account.balance).toEqual(1000);
    });

    it('it should reflect account movement in history', () => {
      account.deposit(1000);

      expect(account.history).toEqual([
        {
          date: '26/3/2018',
          credit: 1000,
          debit: '-',
          balance: 1000,
        },
      ]);
    });
  });

  describe('#withdraw', () => {
    beforeEach(() => {
      account.balance = 1000;
    });

    it('it should update balance after customer withdraws money', () => {
      account.withdraw(600);

      expect(account.balance).toEqual(400);
    });

    it('it should reflect account movement in history', () => {
      account.withdraw(600);

      expect(account.history).toEqual([
        {
          date: '26/3/2018',
          credit: '-',
          debit: 600,
          balance: 400,
        },
      ]);
    });

    it('it should raise an error if insufficient funds', () => {
      expect(() => { account.withdraw(1100); }).toThrowError('Insufficient funds. Why not opening a Premium Account?');
    });
  });
});
