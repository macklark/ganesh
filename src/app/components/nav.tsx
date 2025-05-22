import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

import { File } from "lucide-react"

export default function Nav() {
    return(
        <nav className="flex text-primary-foreground items-center justify-between">
            <div className="flex gap-2 items-center">
                <Avatar className="h-8 w-8 cursor-pointer">
                    <AvatarImage alt="macklark github profile photo" src='https://avatars.githubusercontent.com/u/50847468?s=400&u=1289c9f91aa91e468ce74375b5263caa0661560f&v=4' />
                    <AvatarFallback>GK</AvatarFallback>
                </Avatar>
                <span className="cursor-pointer hover:underline">@macklark</span>
            </div>
            <Button asChild variant={'outline'} className="bg-primary cursor-pointer">
                <a href='https://drive.proton.me/urls/S2Y15DEFX4#rMNPVvm4eVSU' target="_blank">
                <File /> resume
                </a>
            </Button>
        </nav>
    )
};