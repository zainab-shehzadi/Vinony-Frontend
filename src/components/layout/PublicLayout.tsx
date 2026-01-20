import { Outlet } from "react-router-dom";
import Footer from "@/components/layout/Footer";
import Header from "./Header";

export default function PublicLayout() {
    return (
        <div className="h-screen flex flex-col">
            <Header />
            <main className="flex-1 overflow-y-auto">
                <Outlet />
                <Footer />
            </main>

        </div>
    );
}
