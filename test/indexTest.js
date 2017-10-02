const expect = chai.expect;

describe('Fix the Scope', () => {
  describe('declare customerName to be bob in global scope', () => {
    it('returns the customerName', () => {
      expect(window.customerName).to.equal('bob');
    });
  });

  describe('upperCaseCustomerName()', () => {
    it('returns the customerName', () => {
      expect(window.customerName).to.equal('bob');

      upperCaseCustomerName();

      expect(window.customerName).to.equal('BOB');
    });
  });
  describe('setBestCustomer()', () => {
    it('setBestCustomer', () => {
      expect(window.bestCustomer).to.equal(undefined);

      window.setBestCustomer();

      expect(window.bestCustomer).to.equal('not bob');
    });
  });

  describe('overwriteBestCustomer()', () => {
    it('overwrites the best customer', () => {
      overwriteBestCustomer('maybe bob');

      expect(window.bestCustomer).to.equal('maybe bob');
    });
  });

  describe('reassignLeastFavorite()', () => {
    it('unsuccessfully tries to reassign the least favorite customer', () => {
      expect(changeLeastFavoriteCustomer).to.throw(TypeError);
    });
  });

  describe('attemptTwoFavoriteCustomers()', () => {
    it('unsuccessfully tries to declare favoriteCustomer with let two times', () => {
      expect(attemptTwoFavoriteCustomers).to.throw(SyntaxError);
    });
  });
});
