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
});
