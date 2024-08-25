import { ReadonlyURLSearchParams } from "next/navigation";

export function validate<T extends string>(searchParams: ReadonlyURLSearchParams, param: string, validValues: T[]): T | undefined;
export function validate<T extends string>(searchParams: ReadonlyURLSearchParams, param: string, validValues: T[], defaultValue: T): T;

export function validate<T extends string>(searchParams: ReadonlyURLSearchParams, param: string, validValues: T[], defaultValue?: T): T | undefined {
  const p = searchParams.get(param);
  if (p && validValues.includes(p as T)) {
    return p as T;
  } else {
    return defaultValue;
  }
}
