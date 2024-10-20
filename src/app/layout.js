import { Montserrat } from "next/font/google";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import AppFooter from "@/components/AppFooter";
import StoreProvider from "@/store/StoreProvider";
import NextTopLoader from 'nextjs-toploader';
import "./globals.css";

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Haelsoft E-learning Platform",
  description: "A platform to gain digital skills",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ChatBot Script */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              window.__be = window.__be || {};
              window.__be.id = "66c75623c1b66e000723ae5c";
              (function() {
                var be = document.createElement('script');
                be.type = 'text/javascript';
                be.async = true;
                be.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'cdn.chatbot.com/widget/plugin.js';
                var s = document.getElementsByTagName('script')[0];
                s.parentNode.insertBefore(be, s);
              })();

              window.addEventListener('load', function() {
                const chatbotWidget = document.querySelector('.chatbot-widget');
                if (chatbotWidget) {
                  chatbotWidget.style.position = 'fixed';
                  chatbotWidget.style.bottom = '20px';
                  chatbotWidget.style.right = '5%'; // Adjust right positioning
                  chatbotWidget.style.zIndex = '10000';
                  chatbotWidget.style.maxWidth = 'calc(100% - 10px)'; // Prevent overflow on small screens
                }
              });
            `,
          }}
        />
        <noscript>
          You need to <a href="https://www.chatbot.com/help/chat-widget/enable-javascript-in-your-browser/" rel="noopener nofollow">enable JavaScript</a> in order to use the AI chatbot tool powered by <a href="https://www.chatbot.com/" rel="noopener nofollow" target="_blank">ChatBot</a>
        </noscript>
      </head>
      <body className={`${montserrat.className} antialiased`}>
        <StoreProvider>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            style={{ zIndex: 9999 }}
          />
          <NextTopLoader showSpinner={false} color="#F36400" />
          {children}
          <AppFooter />
        </StoreProvider>
      </body>
    </html>
  );
}
