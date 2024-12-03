import Layout from "@/components/layout";
import { AnimatedList } from "@/components/ui/animated-list";
import { CardTitle } from "@/components/ui/card";
import { FadeText } from "@/components/ui/fade-text";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

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

export default function FullTime() {
  return (
    <Layout>
      <CardTitle className="text-center  text-[#161C2D] sm:text-2xl font-semibold mb-6">
        <FadeText
          className="text-2xl font-bold text-[#347ED7]"
          direction="down"
          framerProps={{
            show: { transition: { delay: 0.5 } },
          }}
          text="Hast Du eine abgeschlossene Ausbildung als MFA?"
        />
      </CardTitle>
      <AnimatedList>
        <ul role="list" className="space-y-3 flex flex-col gap-2 max-w-lg mx-auto text-primary">
          {/* {items.map((content, index) => ( */}
          <Link to="step-one">
            <Notification content="Ja klar!" />
          </Link>
          <Link to="/not-found">
            <Notification content="Leider nicht" />
          </Link>
          {/* ))} */}
        </ul>
      </AnimatedList>
    </Layout>
  );
}
