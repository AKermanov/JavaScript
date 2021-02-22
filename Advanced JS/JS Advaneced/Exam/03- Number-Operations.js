describe('Number Operations Tests', function () {
  it('works fine', function () {
    assert.equal(numberOperations.powNumber(3), 9);
  });

  it('numberChecker', () => {
    assert.throw(
      () => numberOperations.numberChecker('Test'),
      'The input is not a number!'
    );
    assert.equal(
      numberOperations.numberChecker('10'),
      'The number is lower than 100!'
    );
    assert.equal(
      numberOperations.numberChecker(10),
      'The number is lower than 100!'
    );
    assert.equal(
      numberOperations.numberChecker('100'),
      'The number is greater or equal to 100!'
    );
    assert.equal(
      numberOperations.numberChecker(100),
      'The number is greater or equal to 100!'
    );
    assert.equal(
      numberOperations.numberChecker('101'),
      'The number is greater or equal to 100!'
    );
    assert.equal(
      numberOperations.numberChecker(101),
      'The number is greater or equal to 100!'
    );
  });

  it('Sum Array ', () => {
    let a1 = [1, 2];
    let a2 = [1, 2, 3];

    assert.deepEqual(numberOperations.sumArrays(a1, a2), [2, 4, 3]);
  });

  it('Sum Array 2', () => {
    let a1 = [1, 2, 3];
    let a2 = [1, 2];

    assert.deepEqual(numberOperations.sumArrays(a1, a2), [2, 4, 3]);
  });
});
