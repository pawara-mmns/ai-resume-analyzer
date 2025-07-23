import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Smart feedback for your dream" },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <section className="section"></section>
    <div className="page-heading">
      <h1>Track Your Application & Resume Ratings</h1>
      <h2>Review your submission and check AI-powered feedback.</h2>

    </div>
  </main>
}
