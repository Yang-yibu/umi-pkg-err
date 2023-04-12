const TokenKey = 'ggjSq_token';

type IToken = {
  /** Token */
  token: string;
  /** 用户 ID */
  uid: string;
};

export function getToken(): IToken | undefined {
  return window.basilIns.get(TokenKey);
}

export function setToken(token: IToken) {
  return window.basilIns.set(TokenKey, token);
  // return Cookies.set(TokenKey, token);
}

export function removeToken() {
  return window.basilIns.remove(TokenKey);
  // return Cookies.remove(TokenKey);
}
