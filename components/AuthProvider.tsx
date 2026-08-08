"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

/** デモ会員用。sessionStorage のためタブを閉じると消える（DB保存なし） */
const AUTH_KEY = "nook-interior-demo-auth";
const FAVORITE_KEY = "nook-interior-demo-favorites";
const LEGACY_AUTH_KEY = "nook-interior-auth";
const LEGACY_FAVORITE_KEY = "nook-interior-favorites";

export type AuthUser = {
  name: string;
  email: string;
};

type AuthContextValue = {
  ready: boolean;
  user: AuthUser | null;
  favoriteIds: string[];
  isDemoAuth: true;
  login: (user: AuthUser) => void;
  logout: () => void;
  register: (user: AuthUser) => void;
  toggleFavorite: (productId: string) => void;
  isFavorite: (productId: string) => boolean;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);
  const [user, setUser] = useState<AuthUser | null>(null);
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);

  useEffect(() => {
    try {
      // 以前の localStorage デモデータを掃除
      window.localStorage.removeItem(LEGACY_AUTH_KEY);
      window.localStorage.removeItem(LEGACY_FAVORITE_KEY);

      const authRaw = window.sessionStorage.getItem(AUTH_KEY);
      const favRaw = window.sessionStorage.getItem(FAVORITE_KEY);
      if (authRaw) setUser(JSON.parse(authRaw) as AuthUser);
      if (favRaw) setFavoriteIds(JSON.parse(favRaw) as string[]);
    } catch {
      setUser(null);
      setFavoriteIds([]);
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    if (user) {
      window.sessionStorage.setItem(AUTH_KEY, JSON.stringify(user));
    } else {
      window.sessionStorage.removeItem(AUTH_KEY);
    }
  }, [user, ready]);

  useEffect(() => {
    if (!ready) return;
    window.sessionStorage.setItem(FAVORITE_KEY, JSON.stringify(favoriteIds));
  }, [favoriteIds, ready]);

  const login = useCallback((next: AuthUser) => setUser(next), []);
  const logout = useCallback(() => {
    setUser(null);
    setFavoriteIds([]);
    window.sessionStorage.removeItem(AUTH_KEY);
    window.sessionStorage.removeItem(FAVORITE_KEY);
  }, []);
  const register = useCallback((next: AuthUser) => setUser(next), []);

  const toggleFavorite = useCallback((productId: string) => {
    setFavoriteIds((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId],
    );
  }, []);

  const isFavorite = useCallback(
    (productId: string) => favoriteIds.includes(productId),
    [favoriteIds],
  );

  const value = useMemo(
    () => ({
      ready,
      user,
      favoriteIds,
      isDemoAuth: true as const,
      login,
      logout,
      register,
      toggleFavorite,
      isFavorite,
    }),
    [
      ready,
      user,
      favoriteIds,
      login,
      logout,
      register,
      toggleFavorite,
      isFavorite,
    ],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}
