import * as React from "react";
import Layout from "../components/Layout";
import { header, btn } from "../styles/home.module.css";
import { Link } from "gatsby";

export default function Home({ data }) {
  return (
    <Layout>
      <section className={header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>
            Laboris exercitation qui quis esse anim minim culpa minim fugiat
            elit duis aliqua qui. Laboris adipisicing cupidatat nisi duis nulla
            culpa nisi esse ad ad. Elit ad do tempor incididunt non id Lorem
            eiusmod aliquip tempor et ullamco do. Ea fugiat amet qui duis anim.
            Cillum laboris excepteur ea occaecat proident veniam tempor magna.
          </p>
          <Link to="/projects" className={btn}>
            My Portfolio Projects
          </Link>
        </div>
        <img
          src="/image_one.png"
          alt="site banner"
          style={{ maxWidth: "100%" }}
        />
      </section>
    </Layout>
  );
}
