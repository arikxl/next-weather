'use client'
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { github } from "../utils/Icons";
import { ThemeDropdown } from "./ThemeDropdown/ThemeDropdown";
import SearchDialog from "./SearchDialog/SearchDialog";
import { useGlobalContext } from "../context/globalContext";

const Navbar = () => {

    const router = useRouter();
    const { forecast } = useGlobalContext();
    // console.log(forecast)

    return (
        <nav className="w-full py-4 flex items-center justify-between">
            <div className="left"></div>
            <div className="search-container flex shrink-0 w-full gap-2 sm:w-fit">
                <SearchDialog />

                <div className="btn-group flex items-center gap-2">
                    <ThemeDropdown />
                    <Button className="source-code flex items-center gap-2"
                        onClick={() => router.push('https://github.com/arikxl/next-weather')}>
                        {github} Source Code
                    </Button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar