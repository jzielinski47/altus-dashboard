import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Hero from "./sections/Hero";

export default function Home() {

  return (
    <>
      <Hero />
      <section>{"Placeholder for some section"}</section>
    </>
  );
}
