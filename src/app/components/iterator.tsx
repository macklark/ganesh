import { Button } from "@/components/ui/button";
import Icon from "./iconos";

interface Item {
    title: string;
    icon: string;
};

type IteratorProps = {
    items: Item[];
};

export default function Iterator({items}: IteratorProps) {
    return(
        <ul className="pt-4 flex flex-wrap gap-2">
            {items.map((item, index) => (
                <Button asChild variant={'outline'} className="bg-primary text-secondary-foreground" key={index}>
                    <li>
                        <Icon name={item.icon} className="w-5 h-5" />
                        {item.title}
                    </li>
                </Button>
            ))}
        </ul>
    )
};