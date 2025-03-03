'use client'

import { useModeAnimation, ReactThemeSwitchAnimationProps } from '@/lib/theme'
import React from 'react'
import { Button } from './ui/button'
import { useTheme } from './theme-provider'
import { cn } from '@/lib/utils'
import { MoonStar, Sun } from 'lucide-react'

export interface SwitchDarkModeProps extends ReactThemeSwitchAnimationProps {
    className?: string
    isDarkMode: boolean
    onDarkModeChange: (isDark: boolean) => void
    styleIcon?: string
}

const SwitchDarkMode: React.FC<SwitchDarkModeProps> = ({
    className = '',
    styleIcon = '',
    isDarkMode: externalDarkMode,
    onDarkModeChange,
    ...props
}) => {
    const { ref, toggleSwitchTheme, isDarkMode } = useModeAnimation({
        ...props,
        isDarkMode: externalDarkMode,
        onDarkModeChange,
        duration: 1000,
        easing: 'ease-in-out',
    })

    const { theme } = useTheme();
    const isLight = theme === 'light';

    return (
        <Button ref={ref} type='button' size="icon" variant="outline" onClick={toggleSwitchTheme} className={cn(className)} aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}>
            {isLight ? <Sun className={cn('text-amber-500 size-5', styleIcon)} /> : <MoonStar className={cn('text-blue-500 size-5', styleIcon)} />}
        </Button>
    )
}

export default SwitchDarkMode