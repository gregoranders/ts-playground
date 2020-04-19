import { normalizeBranchName } from './index';

describe('index.ts', () => {
  describe('normalizeBranchName', () => {
    const testData: { [key: string]: string } = {
      '/development': 'development',
      '/development/': 'development',
      development: 'development',
      'development/': 'development',
      'refs/heads/development': 'development',
      'refs/tags/refs/heads/development': 'development',
    };

    const tests = Object.keys(testData);

    tests.forEach((test) => {
      const expected = testData[test];
      it(`${test} => ${expected}`, () => {
        return expect(normalizeBranchName(test)).toEqual(expected);
      });
    });
  });
});
