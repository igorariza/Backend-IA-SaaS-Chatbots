export function Roles(...roles: string[]) {
  return (target: any, key: string, descriptor: PropertyDescriptor) => {
    Reflect.defineMetadata('roles', roles, target, key);
    return descriptor;
  };
}

export function Authenticated() {
  return (target: any, key: string, descriptor: PropertyDescriptor) => {
    Reflect.defineMetadata('isAuthenticated', true, target, key);
    return descriptor;
  };
}