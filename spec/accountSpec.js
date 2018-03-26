describe('Account', () => {
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
  });
});
