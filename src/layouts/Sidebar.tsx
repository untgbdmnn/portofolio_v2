
import ButtonTheme from "@/components/ButtonTheme";
import { SelectLangMobile } from "@/components/SelectLang";
import SwitchDarkMode from "@/components/SwitchTheme";
import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { ThemeAnimationType } from "@/lib/theme";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { NavLink } from "react-router";

interface SidebarProps {
  onClose: () => void;
  isOpen: boolean
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {

  const { t } = useTranslation();
  const menuItem = [
    { name: 'home', link: '/' },
    { name: 'about', link: '/about' },
    { name: 'portofolio', link: '/portofolio' },
    { name: 'contact', link: '/contact' },
  ]

  const { theme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(theme === 'dark')

  const handleDarkModeChange = (isDark: boolean) => {
    setIsDarkMode(isDark)
  }

  return (
    <div className={`absolute z-[9999] inset-0 flex flex-col h-screen justify-between lg:hidden sm:hidden bg-background transition-transform duration-700 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-[30rem]"}`}>
      <div className='p-5'>

        <div className="flex items-center justify-end">
          <Button variant="ghost" size="icon" onClick={onClose}>
            <AiOutlineCloseCircle className="size-6" />
          </Button>
        </div>

        <div className="mt-20 flex flex-col gap-16">
          <div className="flex flex-col text-5xl gap-6">
            {menuItem.map((item, index) => {
              return (
                <NavLink onClick={onClose} key={index} to={item.link} className={({ isActive }) => isActive ? "nav-link italic font-black translate-x-4 pl-7 transition-transform duration-200 ease-in-out border-l-2 border-primary flex items-center" : "nav-link flex items-center transition-transform duration-200 ease-in-out"} >{t('menu.' + item.name)}</NavLink>
              )
            })}
          </div>

          <div className="pl-3 flex items-center gap-2">
            {/* <ButtonTheme className="size-16" styleIcon="size-10" /> */}
            <SwitchDarkMode className="size-16" styleIcon="size-10"
              animationType={ThemeAnimationType.CIRCLE}
              styleId="circle-animation"
              isDarkMode={isDarkMode}
              onDarkModeChange={handleDarkModeChange}
            />
            <SelectLangMobile />
          </div>

        </div>

      </div>
    </div>
  )
}
