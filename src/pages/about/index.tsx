import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useTranslation } from "react-i18next"
import { FaEarthAsia } from "react-icons/fa6";
import { AboutMe, Educate, Experience } from "./content";
import PixelCard from "@/components/magicui/PixelCard";


export default function AboutPage() {
  const { t } = useTranslation();
  const [active, setActive] = useState(0);

  const data = [
    {
      title: t('aboutMe'),
      icon: <FaEarthAsia />,
      content: <AboutMe />
    },
    {
      title: t('educationex'),
      icon: <FaEarthAsia />,
      content: <Educate />
    },
    {
      title: t('experienceex'),
      icon: <FaEarthAsia />,
      content: <Experience />
    }
  ]

  return (
    <div className="lg:px-10 px-5 lg:py-20 py-5">
      <div>
        <div className="lg:px-20 px-0 flex flex-col justify-center">
          <h1 className="lg:text-7xl text-6xl font-black font-mono text-fourth">{t('slogan')}</h1>
          <div className="flex items-center justify-end mt-5 lg:mt-0 relative">
            <div className="absolute h-[2px] w-full bg-black/70 dark:bg-white" />
            <div className="flex lg:p-7 p-5 items-center justify-center bg-primary rounded-full z-10">
              <FaEarthAsia className="lg:size-12 size-9 text-white" />
            </div>
          </div>
        </div>

        <div className="lg:py-3 py-5 mt-3 lg:mt-0 lg:px-5 px-1">
          <div className="flex items-center lg:justify-start gap-2 mb-4">
            {data.map((item, index) => {
              return (
                <Button key={index} onClick={() => setActive(index)} variant={active !== index ? "outline" : "default"} className={`${active === index ? "text-white bg-secondary" : ""} transition-all duration-200 ease-in-out`}>{item.title}</Button>
              )
            })}
          </div>
          <div>
            {data[active].content}
          </div>
        </div>

        <div className="lg:px-5">
          <div className="text-2xl font-bold text-fourth">{t('saya-dapat-membantu-anda')}</div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-4 py-5">

            <PixelCard className="rounded-sm h-[100px] w-full" variant="pink">
              <div className="absolute flex flex-col items-center justify-center text-xl font-black font-sans">
                {t('pengembanganweb')}
              </div>
            </PixelCard>
            <PixelCard className="rounded-sm h-[100px] w-full" variant="yellow">
              <div className="absolute flex flex-col items-center justify-center text-xl font-black font-sans">
                {t('pengembanganbackend')}
              </div>
            </PixelCard>
            <PixelCard className="rounded-sm h-[100px] w-full" variant="blue">
              <div className="absolute flex flex-col items-center justify-center text-xl font-black font-sans">
                {t('pemeliharanweb')}
              </div>
            </PixelCard>

          </div>
        </div>

      </div>
    </div>
  )
}
