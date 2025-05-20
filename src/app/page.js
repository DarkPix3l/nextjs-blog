import Image from "next/image";
/* import styles from "./page.module.css"; */
import Header from "./_components/(navigation)/Header";
import Footer from "./_components/(navigation)/Footer";
import HeroPosts from "./_components/HeroPosts";


export default function Home() {
  return (
    <>
      <Header />
      <HeroPosts />
      <Footer />
    </>
  );
}
