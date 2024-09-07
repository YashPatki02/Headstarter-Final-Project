"use client";
import {
    createContext,
    useContext,
    useState,
    useEffect,
    ReactNode,
} from "react";

interface SidebarContextProps {
    isSidebarExpanded: boolean;
    toggleSidebar: () => void;
}

const SidebarContext = createContext<SidebarContextProps | null>(null);

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
    const [isSidebarExpanded, setIsSidebarExpanded] = useState<boolean>(false);
    const [hasMounted, setHasMounted] = useState<boolean>(false);

    useEffect(() => {
        setHasMounted(true); // This ensures that rendering happens after mounting

        // Retrieve localStorage value only on client-side
        if (typeof window !== "undefined") {
            const storedValue = window.localStorage.getItem("sidebarExpanded");
            setIsSidebarExpanded(storedValue === "true");
        }
    }, []);

    useEffect(() => {
        if (hasMounted) {
            window.localStorage.setItem(
                "sidebarExpanded",
                isSidebarExpanded.toString()
            );
        }
    }, [isSidebarExpanded, hasMounted]);

    const toggleSidebar = () => {
        setIsSidebarExpanded((prevState) => !prevState);
    };

    if (!hasMounted) {
        return null; // Prevents rendering until mounting is complete
    }

    return (
        <SidebarContext.Provider value={{ isSidebarExpanded, toggleSidebar }}>
            {children}
        </SidebarContext.Provider>
    );
};

export const useSidebar = () => {
    const context = useContext(SidebarContext);
    if (context === null) {
        throw new Error("useSidebar must be used within a SidebarProvider");
    }
    return context;
};
