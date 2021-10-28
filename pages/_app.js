/** @format */

import "../styles/globals.css";
import Header from "../components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <div className="antialiased text-gray-700">
      <Header />
      <main className="my-6">
        <Component {...pageProps} />
      </main>{" "}
      <footer className="w-full bg-green-400 font-medium py-2">
        <p className="site-container">makes with passion by huseyin gulcu</p>
      </footer>
    </div>
  );
}

export default MyApp;
