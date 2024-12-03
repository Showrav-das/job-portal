import { Card } from "@/components/ui/card";
import { ReactNode } from "react";
import Video from "../assets/blur.mp4";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <video
        className="absolute top-0 left-0 w-full min-h-screen object-cover z-[-1] filter blur-[200px]"
        src={Video}
      />
      <div className="max-w-4xl mx-4 py-28 sm:mx-auto">
        <Card className="bg-white shadow-none rounded-lg px-8 py-20">
          {children}
        </Card>
      </div>
    </div>
  );
}
