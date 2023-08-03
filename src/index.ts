export class Obj {
  static check(obj: any) {
    if (
      typeof obj === "string" ||
      typeof obj === "boolean" ||
      typeof obj === "number"
    )
      return false;

    if (Array.isArray(obj)) return false;

    const keys: string[] = Object.keys(obj);

    if (keys.length === 0) return false;

    return true;
  }
}
