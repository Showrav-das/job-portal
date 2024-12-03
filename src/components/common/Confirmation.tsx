import Layout from "../layout";
import { FadeText } from "../ui/fade-text";

export default function Confirmation() {
  return (
    <Layout>
      <div className=" text-center relative">
        <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
          <i className="fas fa-times"></i>
        </button>
        <img
          alt="A blue cloud illustration"
          className="mx-auto mb-6"
          height="100"
          src="https://storage.googleapis.com/a1aa/image/M8itoIAxDqbMA9GHhXNPre3BiEuAXepwo0sfAiEEMExORIunA.jpg"
          width="200"
        />
        <h1 className="text-2xl font-bold text-blue-500 mb-4">
          <FadeText
            className="text-2xl font-bold text-[#347ED7]"
            direction="down"
            framerProps={{
              show: { transition: { delay: 0.5 } },
            }}
            text=" Danke für Dein Interesse! 🙂"
          />
        </h1>
        <p className="text-gray-700 mb-6 max-w-lg text-lg mx-auto">
          Für unsere offenen Positionen (m/w/d) sind gewisse Qualifikationen
          erforderlich. Teile die Anzeige gerne mit Deinen Freunden, um uns bei
          der Suche zu unterstützen. 📲 Dein Team von der Praxis Dr. Georgiadis!
        </p>
      </div>
    </Layout>
  );
}
