import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/site/home-page";
import { SiteLayout } from "@/components/site/layout";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      {
        title:
          "John Burke Construction | San Diego Residential & Commercial GC",
      },
    ],
  }),
});

function Home() {
  return (
    <SiteLayout>
      <HomePage />
    </SiteLayout>
  );
}
