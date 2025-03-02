import SplashCursor from "@/components/ui/SplashCursor";
import HeroText from "./element/hero-text";
import { useTranslation } from "react-i18next";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { useTheme } from "@/components/theme-provider";
import { useNavigate } from "react-router";
import HomeAbout from "./about";

export default function HomePage() {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const navigate = useNavigate();
  return (
    <div className="lg:px-9 px-5">
      <div className="flex items-center justify-center flex-col text-center py-28 mt-5">
        <HeroText />
        <h1>{t('hero-desc')}</h1>
        <div className="mt-4">
          <InteractiveHoverButton className="hover:text-white" onClick={() => navigate('/contact')}>Contact Me!</InteractiveHoverButton>
        </div>
      </div>

      <HomeAbout />

      {theme === "dark" && <SplashCursor />}
    </div>
  )
}
