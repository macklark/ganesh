import { SquareArrowOutUpRight } from "lucide-react";

import { Card, CardContent, CardTitle } from "@/components/ui/card"

type ProjectProps = {
    title: string;
    description: string;
};

export default function Project({title, description}: ProjectProps) {
    return(
        <Card className="bg-primary text-primary-foreground gap-2 mt-4 hover:bg-accent-foreground">
            <div className="flex items-center px-6 gap-x-2">
                <CardTitle>{title}</CardTitle>
                <SquareArrowOutUpRight className="w-4 h-4" />
            </div>
            <CardContent>
                <p className="text-secondary-foreground">{description}</p>
            </CardContent>
        </Card>
    )
};