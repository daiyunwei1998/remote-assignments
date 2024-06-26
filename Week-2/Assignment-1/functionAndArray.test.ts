import {max, findPosition} from './functionAndArray'

describe('Testing max function', function() {
    it('Should return 5', function() {
        expect(max([1, 2, 4, 5])).toBe(5);
    });
    it('Should return 7',function() {
        expect(max([5, 2, 7, 1, 6])).toBe(7);
    });

    it('Should throw an error for an empty array', function() {
        expect(() => max([])).toThrow(); // max([]) on its own would execute immediately, rather than being executed during the test.
    });
})

describe('Testing find position function', function() {
    it('Should print 0', function() {
        expect(findPosition([5, 2, 7, 1, 6], 5)).toBe(0);
    })
    it('Should print 2', function() {
        expect(findPosition([5, 2, 7, 1, 6], 7)).toBe(2);
    })
    it('Should print 2', function() {
        expect(findPosition([5, 2, 7, 7, 7, 1, 6], 7)).toBe(2);
    })
    it('Should print -1', function() {
        expect(findPosition([5, 2, 7, 1, 6], 8)).toBe(-1);
    })
    it('Should throw an error', function() {
        expect(() => {findPosition([], 8)}).toThrow();
    })
})