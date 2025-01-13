import type { Metadata } from "next";
import "../../globals.css";
import ToggleButton from "@/components/ui/ToggleButton";

export const metadata: Metadata = {
    title: "Your Portfolio",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (

        <div
            className={`antialiased text-black bg-white dark:text-white dark:bg-black font-sans`}
        >
            <nav className="flex sm:h-16 py-5 sticky top-0 justify-between sm:px-8 lg:px-32 bg-white dark:bg-black z-10">
                <p className=" nav-logo" >
                    Let's create your portfolio
                </p>
                <ToggleButton />
            </nav>
            {children}
        </div>
    );
}