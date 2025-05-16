'use client';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { restoreAuthFromSession } from '@/features/user-details/userDetailsSlice';
import { getAuthFromSession, syncAuthState } from '../utils/authUtils';

/**
 * Component to initialize authentication state
 * Place this inside your StoreProvider component
 */

const AuthInitializer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Check if we're in a browser environment
    if (typeof window !== 'undefined') {
      // Try to restore auth from session storage
      try {
        const authData = getAuthFromSession();
        if (authData && authData.token) {
          // Restore auth data to Redux
          dispatch(restoreAuthFromSession({
            token: authData.token,
            // user: {
            //   user_uuid: authData.user_uuid,
            //   first_name: authData.name
            // }
          }));
          
          // Ensure the auth status cookie is set for middleware
          syncAuthState(true);
          console.log('✅ Auth state restored from session storage');
        } else {
          // Ensure the auth status cookie is cleared
          syncAuthState(false);
          console.log('ℹ️ No auth data found in session storage');
        }
      } catch (error) {
        console.error('❌ Error initializing auth state:', error);
        syncAuthState(false);
      }
    }
  }, [dispatch]);

  // This component doesn't render anything
  return null;
};

export default AuthInitializer;