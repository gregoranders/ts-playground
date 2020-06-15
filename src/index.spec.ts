import { normalizeBranchName } from './index';

describe('index', () => {
  describe('normalizeBranchName', () => {
    const testData: { [key: string]: string } = {
      '/development': 'development',
      '/development/': 'development',
      // eslint-disable-next-line prettier/prettier
      'development': 'development',
      'development/': 'development',
      'refs/heads/development': 'development',
      'refs/tags/refs/heads/development': 'development',
    };

    const tests = Object.keys(testData);

    tests.forEach((test) => {
      const expected = testData[test];
      it(`should normalize '${test}' to '${expected}'`, () => {
        return expect(normalizeBranchName(test)).toEqual(expected);
      });
    });
  });
});
