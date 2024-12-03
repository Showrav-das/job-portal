import { cn } from "@/lib/utils";
import { FormEvent, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "../layout";
import { CardTitle } from "../ui/card";
import { FadeText } from "../ui/fade-text";
import ShinyButton from "../ui/shiny-button";

interface Skill {
  label: string;
  value: string;
}

const skills: Skill[] = [
  { label: "Überdurchschnittliche Vergütung zzgl. Boni", value: "native" },
  { label: "30 Tage Urlaub", value: "fluent" },
  {
    label: "3 freie Nachmittage und die Option auf eine 4 Tage Woche",
    value: "negotiate",
  },
  { label: "Tolle Fort- und Weiterbildungsmöglichkeiten", value: "basic" },
  {
    label: "Ein familiäres Team, in dem Deine Leistungen wertgeschätzt werden",
    value: "don't-speak",
  },
];

export default function StepThree() {
  const [multipleItem, setMultipleItem] = useState<string[]>([]);

  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    if (multipleItem.length) {
      navigate(`/${id}/step-four`);
    }
  };

  const toggleItem = (value: string) => {
    setMultipleItem(
      (prev) =>
        prev.includes(value)
          ? prev.filter((item) => item !== value) // Deselect item
          : [...prev, value] // Select item
    );
  };

  return (
    <Layout>
      <CardTitle className="text-center max-w-lg mx-auto text-lg text-[#161C2D] sm:text-2xl font-semibold mb-6"></CardTitle>
      <FadeText
        className="text-2xl flex items-center justify-center font-bold text-[#347ED7]"
        direction="down"
        framerProps={{
          show: { transition: { delay: 0.5 } },
        }}
        text="Worauf freust Du Dich am meisten?"
      />
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl pl-8 mx-auto mt-8 text-primary"
      >
        <div className="mt-2 cursor-pointer">
          <ul role="list" className="space-y-3 max-w-lg mx-auto text-primary">
            {skills.map((item, i) => (
              <div
                key={i}
                onClick={() => toggleItem(item.value)}
                className="cursor-pointer"
              >
                <Notification
                  content={item.label}
                  isSelected={multipleItem.includes(item.value)}
                />
              </div>
            ))}
          </ul>
        </div>
        <div className="flex justify-center items-center mt-8">
          <ShinyButton className="bg-primary text-white py-3">
            Zur letzten Frage!
          </ShinyButton>
        </div>
      </form>
    </Layout>
  );
}

const Notification = ({
  content,
  isSelected,
}: {
  content: string;
  isSelected: boolean;
}) => {
  return (
    <li
      className={cn(
        "overflow-hidden px-4 py-4 border sm:rounded-md sm:px-6",
        // animation styles
        "transition-all duration-500 ease-in-out hover:scale-[103%]",
        isSelected ? "border-primary" : "bg-white"
      )}
    >
      {content}
    </li>
  );
};
