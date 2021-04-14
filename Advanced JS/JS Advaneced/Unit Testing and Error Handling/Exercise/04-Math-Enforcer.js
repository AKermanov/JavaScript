 describe('check mathEnforcer', () => {
        it('addFive - param is not a Number', () => {
            assert.equal(typeof mathEnforcer.addFive('a'), 'undefined', 'Wrong output')
        })
        it('addFive - bachkane test', () => {
            assert.equal(mathEnforcer.addFive(10), 15, '.addFive is faulty')
        })
        it('addFive - bachkane test - negative', () => {
            assert.equal(mathEnforcer.addFive(-10), -5, '.addFive is faulty')
        })
        it('addFive - bachkane test floating point ', () => {
            assert.equal(mathEnforcer.addFive(100.5), 105.5, '.addFive is faulty')
        })
        it('addFive - bachkane test - floating point closeTo', () => {
            assert.closeTo(mathEnforcer.addFive(100.001), 105, 0.01, '.addFive is faulty')
        })


        it('subtractTen - param is not a Number', () => {
            assert.equal(typeof mathEnforcer.subtractTen('10'), 'undefined', 'Wrong output')
        })
        it('subtractTen - bachkane test', () => {
            assert.equal(mathEnforcer.subtractTen(101), 91, '.subtractTen is faulty')
        })
        it('subtractTen - bachkane test - negative', () => {
            assert.equal(mathEnforcer.subtractTen(-10), -20, '.subtractTen is faulty')
        })
        it('subtractTen - bachkane test floating point ', () => {
            assert.equal(mathEnforcer.subtractTen(100.5), 90.5, '.subtractTen is faulty')
        })
        it('subtractTen - bachkane test floating point closeTo', () => {
            assert.closeTo(mathEnforcer.subtractTen(100.001), 90, 0.01, '.subtractTen is faulty')
        })


        it('sum - 1st param is not a Number', () => {
            assert.equal(typeof mathEnforcer.sum('101', 19), 'undefined', 'Wrong output')
        })
        it('sum - 2nd param is not a Number', () => {
            assert.equal(typeof mathEnforcer.sum(101, '19'), 'undefined', 'Wrong output')
        })
        it('sum - bachkane test', () => {
            assert.equal(mathEnforcer.sum(101.03, 18.97), 120, '.sum is faulty')
        })
        it('sum - bachkane test - negative 1', () => {
            assert.equal(mathEnforcer.sum(-10, 10), 0, '.sum is faulty')
        })
        it('sum - bachkane test - negative 2', () => {
            assert.equal(mathEnforcer.sum(-10, -10), -20, '.sum is faulty')
        })
        it('sum - bachkane test floating point ', () => {
            assert.equal(mathEnforcer.sum(100.5, 5), 105.5, '.sum is faulty')
        })
        it('sum - bachkane test floating point closeTo', () => {
            assert.closeTo(mathEnforcer.sum(100, 0.001), 100, 0.01, '.sum is faulty')
        })
    })
