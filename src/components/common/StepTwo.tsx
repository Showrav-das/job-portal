import Layout from "@/components/layout";
import { CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useNavigate, useParams } from "react-router-dom";
import { FadeText } from "../ui/fade-text";

const Notification = ({ content }: { content: string }) => {
  return (
    <li
      className={cn(
        "overflow-hidden px-4 py-4 border sm:rounded-md sm:px-6",
        // animation styles
        "transition-all duration-500 ease-in-out hover:scale-[103%]"
      )}
    >
      {content}
    </li>
  );
};

interface Skill {
  label: string;
  value: string;
}

const skills: Skill[] = [
  { label: "Muttersprachlich", value: "native" },
  { label: "Fließend", value: "fluent" },
  { label: "Verhandlungssicher", value: "negotiate" },
  { label: "Grundkenntnisse", value: "basic" },
  {
    label: "Ich spreche kein deutsch / I don't speak german",
    value: "don't-speak",
  },
];

export default function StepTwo() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const handleNext = (value: string): void => {
    if (value === "native" || value === "fluent") {
      navigate(`/${id}/step-three`);
    } else {
      navigate(`/not-found`);
    }
  };

  return (
    <Layout>
      <CardTitle className="text-center max-w-lg mx-auto text-lg text-[#161C2D] sm:text-2xl font-semibold mb-6">
        <FadeText
          className="text-2xl font-bold text-[#347ED7]"
          direction="down"
          framerProps={{
            show: { transition: { delay: 0.5 } },
          }}
          text=" Wie würdest Du Deine Deutsch-Kenntnisse in Wort und Schrift beurteilen?"
        />
      </CardTitle>
      <div className="max-w-lg pl-8 mx-auto text-primary">
        <ul role="list" className="space-y-3 max-w-lg mx-auto text-primary">
          {skills.map((item, i) => (
            <div
              key={i}
              onClick={() => handleNext(item.value)}
              className="cursor-pointer"
            >
              <Notification content={item.label} />
            </div>
          ))}
        </ul>
      
      </div>
    </Layout>
  );
}
