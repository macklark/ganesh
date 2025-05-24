import { Card, CardContent } from "@/components/ui/card";

import { work } from "@/lib/data";

export default function Work() {
    return(
        <section>
            <h2 className="text-2xl font-bold tracking-light text-primary-foreground">Work & Experience</h2>
            <Card className="bg-primary text-primary-foreground gap-2 mt-4">
                <CardContent className="divide-y-1">
                    {work.map((indiWork, index) => (
                        <div key={index} className="py-4">
                            <IndividualWork title={indiWork.title} description={indiWork.description} date={indiWork.date} />
                        </div>
                    ))}
                </CardContent>
            </Card>
        </section>
    )
};

type WorkProps = {
    title: string;
    date: string;
    description: string;
};

function IndividualWork({ title, description, date }: WorkProps) {
    return(
        <>
            <div className="flex flex-col">
                <h3 className="text-md font-semibold tracking-light text-primary-foreground">{title}</h3>
                <p className="text-xs font-semibold tracking-light text-secondary-foreground">{date}</p>
            </div>
            <p className="text-secondary-foreground pt-4 text-sm">{description}</p>
        </>
    )
};