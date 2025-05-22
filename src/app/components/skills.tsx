import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"

import { Icon } from "./icon";

interface Item {
    title: string;
    icon: string;
};

const programmingLanguages = [
    { title: 'HTML', icon: 'html' },
    { title: 'CSS', icon: 'css' },
    { title: 'Typescript', icon: 'typescript' },
    { title: 'Python', icon: 'python' }
];

export default function Skills() {
    return(
        <section className="col-start-3 col-span-5">
            <h2 className="text-2xl font-bold tracking-light text-primary-foreground">Skills</h2>
            <Separator className="my-4 w-full" />
            <h3 className="text-xl font-semibold tracking-light text-primary-foreground">Programming Languages</h3>
            <Iterator items={programmingLanguages} />
        </section>
    )
};

type IteratorProps = {
    items: Item[];
};

function Iterator({ items }: IteratorProps) {
    return(
        <ul className="pt-4 flex flex-wrap gap-2">
            {items.map((item, index) => (
                <Button asChild variant={'outline'} className="bg-primary text-secondary-foreground" key={index}>
                    <li>
                        <Icon name={item.icon} />
                        {item.title}
                    </li>
                </Button>
            ))}
        </ul>
    )
};