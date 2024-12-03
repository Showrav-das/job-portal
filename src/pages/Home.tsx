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

export default function Home() {
  return (
    <Layout>
      <CardTitle className="text-center text-lg text-[#161C2D] sm:text-2xl font-semibold mb-6">
        <FadeText
          className="text-2xl font-bold text-[#347ED7]"
          direction="down"
          framerProps={{
            show: { transition: { delay: 0.5 } },
          }}
          text="Los geht´s mit der ersten Frage!"
        />
        <FadeText
          className="text-2xl font-bold text-[#347ED7]"
          direction="down"
          framerProps={{
            show: { transition: { delay: 0.8 } },
          }}
          text="Möchtest Du lieber in Teil- oder in Vollzeit arbeiten?"
        />
      </CardTitle>
      <div className="text-primary">
        <AnimatedList>
          <ul
            role="list"
            className="space-y-3 flex gap-2 flex-col max-w-lg mx-auto"
          >
            {/* {items.map((content, index) => ( */}
            <Link to="/teilzeit">
              <Notification content="Teilzeit" />
            </Link>
            <Link to="vollzeit">
              <Notification content="Vollzeit" />
            </Link>
            {/* ))} */}
          </ul>
        </AnimatedList>
      </div>
    </Layout>
  );
}
