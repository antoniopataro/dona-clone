export const APP_NAME = import.meta.env.VITE_APP_NAME;

class LocalStorage {
  public get(key: string) {
    return localStorage.getItem(`${APP_NAME}:${key}`);
  }

  public set(key: string, value: string) {
    return localStorage.setItem(`${APP_NAME}:${key}`, value);
  }

  public clear() {
    return localStorage.clear();
  }
}

class SessionStorage {
  public get(key: string) {
    return sessionStorage.getItem(`${APP_NAME}:${key}`);
  }

  public set(key: string, value: string) {
    return sessionStorage.setItem(`${APP_NAME}:${key}`, value);
  }

  public clear() {
    return sessionStorage.clear();
  }
}

const local = new LocalStorage();
const session = new SessionStorage();

export { local, session };
