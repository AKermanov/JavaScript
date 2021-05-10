describe('Sum numbers', ()=>{
    it('sums single number number', ()=>{
        expect(sum([1])).to.equal(1);
    });

    it('sums multiple numbers', ()=>{
        expect(sum([1, 1])).to.equal(2);
    });

    it('sums different numbers', ()=>{
        expect(sum([1, 2, 3])).to.equal(6);
    })
});
