import Threads from "@/components/magicui/Threads";
import { useTranslation } from "react-i18next"

export default function HomeAbout() {
  const { t } = useTranslation();
  return (
    <div className="py-28 relative">
      <div>
        <div className="absolute grid lg:grid-cols-3 grid-cols-1 lg:gap-9 gap-4">
          <p className="text-center lg:text-start col-span-2 text-sm flex items-center justify-center">{t('home.about-desc')}</p>
          <p className="text-center lg:text-start text-sm flex items-center justify-center">{t('home.about-subdesc')}</p>
        </div>
        <div className="lg:h-[300px] h-[290px] w-full">
          <Threads
            amplitude={1}
            distance={0}
            enableMouseInteraction={true}
          />
        </div>
      </div>
    </div>
  )
}
