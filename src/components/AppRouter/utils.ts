import { TKeyValuePair } from "../../types";

/**
 * Helper to create static path out of placeholder e.g. `/path/:id` to be converted into `/path/1`
 * ```
 * const staticPath = pathBuilder('/path/:id', [{key:'id', value:1}]);
 * console.log(staticPath);// /path/1
 * ```
 * Note: If key not found the string is not replaced.
 *
 * @param path string with path props to replace
 * @param list list of key, value pairs to be matched and replaced in the path
 */
export const pathBuilder = <T = string>(
  path: string,
  list: TKeyValuePair<T>[],
  skipUndefined = false
): string => {
  console.log("pathBuilder", path, list);
  const pathParam = /(:[a-zA-Z0-9?]+)/gm;
  if (pathParam.test(path) === false) {
    const basePath =
      path.substr(-1) === "/" ? path.substr(0, path.length - 1) : path;
    return basePath; // no options
  }

  // search and replace from list
  let optionPath = list.reduce(
    (acc: string, curr: TKeyValuePair<T>): string => {
      // search and replace
      const { key, value } = curr;
      console.log("list", curr, key, `:${key}\\?{0,1}`);
      return acc.replace(
        // eslint-disable-next-line no-useless-escape
        new RegExp(`:${key}\\?{0,1}`),
        skipUndefined ? `${value || ""}` : `${value}`
      );
    },
    path
  );
  // strip any trailing slashes
  while (optionPath.substr(-1) === "/") {
    optionPath = optionPath.substr(0, optionPath.length - 1);
  }
  return optionPath;
};
