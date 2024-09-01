
import { Toaster } from "@/components/ui/sonner"
import { ThemeProvider } from "./components/theme-provider"
import ErrorBoundary from "./components/ErrorBoundary"

export default function Provider({
    children

}: Readonly<{ children: React.ReactNode }>) {
    return (
        <div>
            <ErrorBoundary>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                {children}
                <Toaster />
            </ThemeProvider>
            </ErrorBoundary>
        </div>
    )
}