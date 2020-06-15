/**
 * ts-playground
 *
 * @packageDocumentation
 */

/**
 * @internal
 */
const strip: RegExp[] = [/^refs\/tags\//, /^refs\/heads\//, /^\//, /\/$/];

/**
 * normalize `branch name`
 *
 * @example
 * ```ts
 * const branch = normalize(`refs/heads/master`);
 *
 * expect(branch).toEqual('master');
 * ```
 *
 * @param branch - `branch name`
 * @returns normalized `branch name`
 *
 * @public
 */
export function normalizeBranchName(branch: string): string {
  let clean = branch;
  strip.forEach((regex) => {
    clean = clean.replace(regex, '');
  });
  return clean;
}

/**
 * default export
 *
 * @public
 */
export default normalizeBranchName;
