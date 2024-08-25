export function validate<T extends string>(searchParams: URLSearchParams, param: string, validValues: T[]): T | undefined;
export function validate<T extends string>(searchParams: URLSearchParams, param: string, validValues: T[], defaultValue: T): T;
export function validate<T extends string>(searchParams: URLSearchParams, param: string, validValues: T[], defaultValue?: T): T | undefined {
  const p = searchParams.get(param);
  if (p && validValues.includes(p as T)) {
    return p as T;
  } else {
    return defaultValue;
  }
}
