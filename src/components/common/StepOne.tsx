import Layout from "@/components/layout";
import { CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useNavigate, useParams } from "react-router-dom";
import { FadeText } from "../ui/fade-text";

interface Experience {
  label: string;
  value: string;
}

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

const experiences: Experience[] = [
  { label: "1-4 Jahre", value: "4" },
  { label: "5-10 Jahre", value: "10" },
  { label: "11-15 Jahre", value: "15" },
  { label: "16 und mehr Jahre", value: "16" },
];

export default function StepOne() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  console.log("prefix", id);

  const handleNext = (value: string) => {
    if (value === "4") {
      navigate(`/not-found`);
    } else {
      navigate(`/${id}/step-two`);
    }
  };

  return (
    <Layout>
      <CardTitle className="text-center text-lg text-[#161C2D] sm:text-2xl font-semibold mb-6">
        <FadeText
          className="text-2xl font-bold text-[#347ED7]"
          direction="down"
          framerProps={{
            show: { transition: { delay: 0.5 } },
          }}
          text="Wieviele Jahre Berufserfahrung bringst Du mit?"
        />
      </CardTitle>
      <div className="max-w-sm mx-auto text-primary">
        <ul role="list" className="space-y-3 max-w-lg mx-auto text-primary">
          {experiences.map((item, i) => (
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
