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
 * const branch = normalizeBranchName(`refs/heads/master`);
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
  for (const regex of strip) {
    clean = clean.replace(regex, '');
  }
  return clean;
}

/**
 * default export
 *
 * @public
 */
export default normalizeBranchName;
