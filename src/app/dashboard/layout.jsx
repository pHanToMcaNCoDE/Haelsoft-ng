"use client";
import TopNav from "@/app/dashboard/(dashboardcomponents)/TopNav";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ResponsiveTopNav from "./(dashboardcomponents)/ResponsiveTopNav";
import { AnimatePresence, motion } from "framer-motion";
import Loader from "@/components/Loader";
import { setAuth } from "@/features/user-details/userDetailsSlice";
import { getAuthState } from "@/app/utils/authUtils";

const DashboardLayout = ({ children }) => {
  const { isAuthenticated, token } = useSelector((state) => state.userDetails);
  const authState = getAuthState();
  const pathname = usePathname();

  const router = useRouter();
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(true);
  const modalRef = useRef(null);
  const [closeModal, setCloseModal] = useState(false);

  const handleCloseModal = () => {
    setCloseModal(false);
  };

  const handleOpenModal = () => {
    if (closeModal) {
      handleCloseModal();
    }
  };

  useEffect(() => {
    const isCheckoutResultPage =
      pathname === "/dashboard/checkout/success" ||
      pathname === "/dashboard/checkout/failed";

    const restoreSession = async () => {
      try {
        const sessionData = sessionStorage.getItem("authSession");
        if (sessionData) {
          const parsedData = JSON.parse(sessionData);
          if (parsedData?.token && parsedData?.user) {
            dispatch(
              setAuth({ token: parsedData.token, user: parsedData.user })
            );
            setIsLoading(false);
            return;
          }
        }
        throw new Error("Session not found");
      } catch (error) {
        router.replace("/signin");
      }
    };
    if (isCheckoutResultPage && authState) {
      setIsLoading(false);
      return;
    } else if (!isAuthenticated || !token) {
      restoreSession();
    } else {
      setIsLoading(false);
    }
  }, [isAuthenticated, token, router, dispatch, pathname, authState]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className="min-h-screen">
      <div className="w-full">
        <TopNav setCloseModal={setCloseModal} />
        <AnimatePresence initial={false}>
          {closeModal ? (
            <motion.div
              ref={modalRef}
              onClick={handleOpenModal}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              key="box"
              className="fixed top-0 left-0 w-screen h-screen bg-black/60 z-50 lg:hidden"
            >
              <ResponsiveTopNav
                handleOpenModal={handleOpenModal}
                setCloseModal={setCloseModal}
              />
            </motion.div>
          ) : null}
        </AnimatePresence>
        <div>{children}</div>
      </div>
    </section>
  );
};

export default DashboardLayout;
