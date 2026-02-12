import { BrowserRouter, Route, Routes } from "react-router-dom"
import { GenerationPage } from "@/pages/generation"
import { Header } from "@/widgets/header"
import { WardrobePage } from "@/pages/wardrobe"
import { OutfitsPage } from "@/pages/outfits"
import { AboutPage } from "@/pages/about"
import { RegistrationPage } from "@/pages/registration/ui/registration"
import { AuthorizationPage } from "@/pages/authorization"
import { AuthProvider } from "@/shared/lib/auth-context"
import { ProtectedRoute } from "@/shared/lib/protected-route"

function App() {

    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/reg" element={<RegistrationPage />} />
                    <Route path="/auth" element={<AuthorizationPage />} />
                </Routes>

                <Header />
                <Routes>
                    <Route path="/generation" element={<ProtectedRoute><GenerationPage /></ProtectedRoute>} />
                    <Route path="/wardrobe" element={<ProtectedRoute><WardrobePage /></ProtectedRoute>} />
                    <Route path="/outfits" element={<ProtectedRoute><OutfitsPage /></ProtectedRoute>} />
                    <Route path="/about" element={<ProtectedRoute><AboutPage /></ProtectedRoute>} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    )
}

export default App