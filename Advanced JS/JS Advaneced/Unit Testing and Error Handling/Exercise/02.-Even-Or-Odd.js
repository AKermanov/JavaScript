describe('check isOddOrEvene', () => {
  it('Type is string', () => {
    assert.isUndefined(isOddOrEven(1), 'Message a==a');
  });
    it('Is even', () => {
      assert.equal(isOddOrEven('aa'),'even', 'Message a==a');
    });
    it('Is odd', () => {
      assert.equal(isOddOrEven('a'), 'odd', 'Message a==a');
    });
});
