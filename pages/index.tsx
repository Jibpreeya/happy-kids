import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Text.module.css";
import button from "@/styles/Button.module.css";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import NewItems from "@/components/NewItems";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <NewItems />
    </>
  );
}
