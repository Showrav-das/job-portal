import Layout from "../layout";
import BoxReveal from "../ui/box-reveal";

export default function NotFound() {
  return (
    <Layout>
      <BoxReveal boxColor={"#047957"} duration={0.5}>
        <div className="flex flex-col text-primary justify-center max-w-3xl mx-auto items-center">
          <h2 className="mt-5 text-3xl">
            Danke für Dein Interesse!{" "}
            {/* <span className="text-[#5046e6]">Design Engineers</span> */}
          </h2>
          <h2 className="mt-5 text-3xl">
            Für unsere offenen Positionen (m/w/d) sind gewisse Qualifikationen
            erforderlich.{" "}
          </h2>
          <h2 className="mt-5 text-3xl"> Teile die Anzeige gerne mit Deinen</h2>
          <h2 className="mt-5 text-3xl">
            Freunden, um uns bei der Suche zu unterstützen. 📲 Dein Team von der
            Praxis Dr. Georgiadis!
          </h2>
        </div>
      </BoxReveal>
    </Layout>
  );
}
