/**
 * ts-playground-service
 *
 * @packageDocumentation
 */

/**
 * use fetch and console
 *
 * @remarks
 * See `spec` for mock example.
 *
 * @example
 * ```ts
 * const text = useFetchAndConsole('http://...');
 *
 * console.log(text);
 * ```
 *
 * @param input - request info
 * @param init - request init
 * @returns `body` of response
 *
 * @public
 */
export async function useFetchAndConsole(input: RequestInfo, init?: RequestInit): Promise<string> {
  const resonse = await fetch(input, init);

  if (resonse.status === 200) {
    console.log(`${resonse.statusText}`);
  } else if (resonse.status === 404) {
    console.error(`${resonse.statusText}`);
  } else {
    console.warn(`${resonse.statusText}`);
  }

  return await resonse.text();
}
