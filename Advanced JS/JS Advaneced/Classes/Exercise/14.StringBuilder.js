describe('String Builder', () => {
    let stringBuilder;
    
    beforeEach(() => {
        stringBuilder = new StringBuilder();
    });

    describe('Class instantiation and structure', () => {
        it('the instance has all properties', () => {
            expect(stringBuilder.hasOwnProperty('_stringArray')).to.equal(true, 'Missing "_stringArray" as property.');
        });

        it('the instance has all functions attached to the prototype', () => {
            expect(Object.getPrototypeOf(stringBuilder).hasOwnProperty('append')).to.equal(true, 'Missing "append()" function.');
            expect(Object.getPrototypeOf(stringBuilder).hasOwnProperty('prepend')).to.equal(true, 'Missing "prepend()" function.');
            expect(Object.getPrototypeOf(stringBuilder).hasOwnProperty('insertAt')).to.equal(true, 'Missing "insertAt()" function.');
            expect(Object.getPrototypeOf(stringBuilder).hasOwnProperty('remove')).to.equal(true, 'Missing "remove()" function.');
            expect(Object.getPrototypeOf(stringBuilder).hasOwnProperty('toString')).to.equal(true, 'Missing "toString()" function.');
        });

        it('should throw an error if try to pass argument which is not a string to the constructor', () => {
            expect(function() { new StringBuilder(35.07); }).to.throw('Argument must be string');
        });
    });

    describe('Class functions', () => {        
        it('should initialize _stringArray to an empty array', () => {
            expect(stringBuilder._stringArray instanceof Array).to.equal(true, '_stringArray must be of type Array.');
            expect(stringBuilder._stringArray.length).to.equal(0, '_stringArray array must be initialized empty.');
        });
              
        it('append() should convert the passed in string argument to an array and add it to the end of the storage', () => {
            stringBuilder.append('Test ');
            expect(stringBuilder.toString()).to.equal('Test ', 'The string was not appended correctly.');
            stringBuilder.append('with a string');
            expect(stringBuilder.toString()).to.equal('Test with a string', 'The string was not appended correctly.');
        });

        it('prepend() should convert the passed in string argument to an array and add it to the beginning of the storage', () => {
            stringBuilder.prepend('with a string');
            expect(stringBuilder.toString()).to.equal('with a string', 'The string was not prepended correctly.');
            stringBuilder.prepend('test ');
            expect(stringBuilder.toString()).to.equal('test with a string', 'The string was not prepended correctly.');
            stringBuilder.prepend('This is some ');
            expect(stringBuilder.toString()).to.equal('This is some test with a string', 'The string was not prepended correctly.');
        });

        it('should throw an error if any of the passed in arguments are not strings', () => {
            expect(function() { stringBuilder.append(5); }).to.throw('Argument must be string');
            expect(function() { stringBuilder.prepend(['77']); }).to.throw('Argument must be string');
            expect(function() { stringBuilder.insertAt(17, 3); }).to.throw('Argument must be string');
        });

        it('insertAt() should convert the passed in string argument to an array and add it at the given index', () => {
            stringBuilder.append('This is some test with a string');
            stringBuilder.insertAt('passing ', 13);
            expect(stringBuilder.toString()).to.equal('This is some passing test with a string', 'The string was not inserted correctly.');
            expect(stringBuilder._stringArray.length).to.equal(39, 'The string was not inserted correctly.');
        });

        it('remove() should remove elements from the storage, starting at the given index (inclusive), length number of characters', () => {
            stringBuilder.append('This is some test with a string');
            stringBuilder.remove(8, 5);
            expect(stringBuilder.toString()).to.equal('This is test with a string', 'The string was not removed correctly.');
            expect(stringBuilder._stringArray.length).to.equal(26, 'The string was not removed correctly.');
        });
    });
});
