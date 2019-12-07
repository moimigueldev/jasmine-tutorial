import { greet } from "./my-function"

describe('My Function', () => {



    it('should greet', () => {
        const expectedName = 'moi';
        const result = greet( expectedName);

        expect(result).toContain(expectedName)
    })
})