// utils/authUtils.js

/**
 * Clear authentication data from sessionStorage
 */
export const clearAuth = () => {
  sessionStorage.removeItem("authSession");
};

/**
 * Save authentication data to sessionStorage
 * @param {Object} authData - The authentication data to save
 */
export const saveAuthToSession = (authData) => {
  try {
    if (authData && authData.token) {
      sessionStorage.setItem("authSession", JSON.stringify(authData));
    } else {
      clearAuth();
    }
  } catch (error) {
    console.error("Error saving auth to session:", error);
  }
};

/**
 * Get authentication data from sessionStorage
 * @returns {Object|null} The authentication data or null if not found
 */
export const getAuthFromSession = () => {
  try {
    const sessionData = sessionStorage.getItem("authSession");
    return sessionData ? JSON.parse(sessionData) : null;
  } catch (error) {
    console.error("Error getting auth from session:", error);
    return null;
  }
};


// utils/authUtils.js
export const syncAuthState = (isAuthenticated = false) => {
  if (isAuthenticated) {
    document.cookie = "authStatus=true; path=/; max-age=86400; SameSite=Strict";
  } else {
    document.cookie = "authStatus=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    sessionStorage.removeItem("authSession");
  }
};

export const getAuthState = () => {
  const authStatus = typeof window !== 'undefined' ? window?.document?.cookie
    .split(";")
    .find((cookie) => cookie.startsWith("authStatus=")) : null;
  return authStatus?.split("=")[1] === "true";
};


