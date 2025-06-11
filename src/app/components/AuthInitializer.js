'use client';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { restoreAuthFromSession } from '@/features/user-details/userDetailsSlice';
import { getAuthFromSession, syncAuthState } from '../utils/authUtils';
import { getAuthState } from "@/app/utils/authUtils";
import { usePathname } from 'next/navigation';

/**
 * Component to initialize authentication state
 * Place this inside your StoreProvider component
 */

const AuthInitializer = () => {
  const dispatch = useDispatch();
  const pathname = usePathname();
  const authState = getAuthState();

  useEffect(() => {
    // Check if we're in a browser environment
    if (typeof window !== 'undefined') {
      const isCheckoutResultPage =
        pathname === "/dashboard/checkout/success" ||
        pathname === "/dashboard/checkout/failed";

      if (isCheckoutResultPage && authState) {
        return;
      }

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
          if (isCheckoutResultPage && authState) {

            return;
          }
          else {
            syncAuthState(false);
          }



        }
      } catch (error) {
        console.error('❌ Error initializing auth state:', error);
        syncAuthState(false);
      }
    }
  }, [dispatch, pathname, authState]);

  // This component doesn't render anything
  return null;
};

export default AuthInitializer;