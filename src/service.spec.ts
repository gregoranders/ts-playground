import { useFetchAndConsole } from './service';

describe('service', () => {
  const mockedFetch = jest.fn();
  const mockedLog = jest.fn();
  const mockedError = jest.fn();
  const mockedWarn = jest.fn();

  global.fetch = mockedFetch;
  global.console.error = mockedError;
  global.console.log = mockedLog;
  global.console.warn = mockedWarn;

  beforeEach(() => {
    mockedFetch.mockClear();
    mockedError.mockClear();
    mockedLog.mockClear();
    mockedLog.mockClear();
  });

  const mockFetch = (status: number, statusText: string, body: string) => {
    mockedFetch.mockReturnValue(
      Promise.resolve({
        status,
        statusText,
        text: () => Promise.resolve(body),
      }),
    );
  };

  describe('useFetchAndConsole', () => {
    const url = 'http://test';
    const text = '1234';

    it('should invoke console.log on 200', async () => {
      const statusText = 'OK';
      mockFetch(200, statusText, text);

      const response = await useFetchAndConsole(url);

      expect(response).toStrictEqual(text);

      expect(mockedFetch).toHaveBeenNthCalledWith(1, url, undefined);
      expect(mockedLog).toHaveBeenNthCalledWith(1, statusText);
    });
    it('should invoke console.error on 404', async () => {
      const statusText = 'Not Found';

      mockFetch(404, statusText, text);

      const response = await useFetchAndConsole(url);

      expect(response).toStrictEqual(text);

      expect(mockedFetch).toHaveBeenNthCalledWith(1, url, undefined);
      expect(mockedError).toHaveBeenNthCalledWith(1, statusText);
    });
    it('should invoke console.warn if not 200 or 404', async () => {
      const statusText = 'Redirect';

      mockFetch(301, statusText, text);

      const response = await useFetchAndConsole(url);

      expect(response).toStrictEqual(text);

      expect(mockedFetch).toHaveBeenNthCalledWith(1, url, undefined);
      expect(mockedWarn).toHaveBeenNthCalledWith(1, statusText);
    });
  });
});
