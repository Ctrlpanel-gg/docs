import { HomeLayout } from "fumadocs-ui/layouts/home";
import { baseOptions } from "@/lib/layout.shared";
import { LandingFooter } from "@/components/landing/landing-footer";
import { landingLayoutClass } from "@/components/landing/landing-styles";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <HomeLayout {...baseOptions()}>
      {children}
      <div className={landingLayoutClass}>
        <LandingFooter />
      </div>
    </HomeLayout>
  );
}
