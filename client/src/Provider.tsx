
import { Toaster } from "@/components/ui/sonner"
import { ThemeProvider } from "./components/theme-provider"
import ErrorBoundary from "./components/ErrorBoundary"
import { Provider as ReduxProvider } from 'react-redux'
import { store } from "./store/index"

export default function Provider({
    children

}: Readonly<{ children: React.ReactNode }>) {
    return (
        <ReduxProvider store={store}>
            <ErrorBoundary>
                <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                    {children}
                    <Toaster position="top-right" />
                </ThemeProvider>
            </ErrorBoundary>
        </ReduxProvider>

    )
}