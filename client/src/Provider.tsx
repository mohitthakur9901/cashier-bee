
import { Toaster } from "@/components/ui/sonner"
import { ThemeProvider } from "./components/theme-provider"

export default function Provider({
    children

}: Readonly<{ children: React.ReactNode }>) {
    return (
        <div>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                {children}
                <Toaster />
            </ThemeProvider>
        </div>
    )
}