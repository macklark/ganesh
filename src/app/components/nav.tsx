import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function Nav() {
    return(
        <nav className="flex text-primary-foreground items-center gap-2">
            <Avatar className="h-8 w-8 cursor-pointer">
                <AvatarImage src='https://avatars.githubusercontent.com/u/50847468?s=400&u=1289c9f91aa91e468ce74375b5263caa0661560f&v=4' />
                <AvatarFallback>GK</AvatarFallback>
            </Avatar>
            <span className="cursor-pointer hover:underline">@macklark</span>
        </nav>
    )
};