import SwitchDarkMode from "@/components/SwitchTheme";
import { ThemeAnimationType } from "@/lib/theme";
import { useState } from "react";


export default function AboutPage() {
  const [isDarkMode, setIsDarkMode] = useState(
    typeof window !== 'undefined' ? localStorage.getItem('theme') === 'dark' : false
  )

  const handleDarkModeChange = (isDark: boolean) => {
    setIsDarkMode(isDark)
  }
  return (
    <div>
      <SwitchDarkMode
        animationType={ThemeAnimationType.CIRCLE}
        styleId="circle-animation"
        isDarkMode={isDarkMode}
        onDarkModeChange={handleDarkModeChange}
      />
    </div>
  )
}
