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
  { label: "Zwischen 8-12 Uhr.", value: "native" },
  { label: "Zwischen 12- 14 Uhr.", value: "fluent" },
  {
    label: "Zwischen 14 - 17 Uhr.",
    value: "negotiate",
  },
  { label: "Zwischen 17 - 19 Uhr.", value: "basic" },
];

export default function StepFour() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  return (
    <Layout>
      <CardTitle className="text-center max-w-2xl mx-auto text-lg text-[#161C2D] sm:text-2xl font-semibold mb-6">
        <FadeText
          className="text-2xl font-bold text-[#347ED7]"
          direction="down"
          framerProps={{
            show: { transition: { delay: 0.5 } },
          }}
          text="Fast geschafft: Letzte Frage!"
        />
        <FadeText
          className="text-2xl font-bold text-[#347ED7]"
          direction="down"
          framerProps={{
            show: { transition: { delay: 0.8 } },
          }}
          text="Wann können wir Dich am besten erreichen?"
        />
      </CardTitle>
      <div className="max-w-md mx-auto">
        {/* <div className="max-w-2xl mx-auto text-primary"> */}
        <ul role="list" className="space-y-3  text-primary">
          {skills.map((item, i) => (
            <div
              key={i}
              onClick={() => navigate(`/${id}/step-five`)}
              className="cursor-pointer"
            >
              <Notification content={item.label} />
            </div>
          ))}
        </ul>

        {/* {skills.map((item, i) => (
            <div
              className="mt-2 cursor-pointer"
              key={i}
              onClick={() => navigate(`/${id}/step-five`)}
            >
              <RadioGroup defaultValue="comfortable">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="default" id={item.value} />
                  <Label
                    htmlFor={item.value}
                    className="cursor-pointer text-xl"
                  >
                    <FadeText
                      className="text-xl font-bold text-primary"
                      direction="down"
                      framerProps={{
                        show: { transition: { delay: 0.2 } },
                      }}
                      text={item.label}
                    />
                  </Label>
                </div>
              </RadioGroup>
            </div>
          ))} */}
        {/* </div> */}
      </div>
    </Layout>
  );
}
