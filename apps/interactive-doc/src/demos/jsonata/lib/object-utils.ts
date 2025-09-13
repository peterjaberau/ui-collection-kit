function* traverseFn(obj: any, path = [] as string[]): any {
  for (var key of Object.keys(obj)) {
    const itemPath = path.concat(key);
    yield [key, obj[key], itemPath.join("."), obj];
    if (obj[key] !== null && typeof obj[key] == "object") {
      yield* traverseFn(obj[key], itemPath);
    }
  }
}

export const traverse = traverseFn;
