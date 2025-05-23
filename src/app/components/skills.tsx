import { Separator } from "@/components/ui/separator"

import Section from "./section";
import Iterator from "./iterator";

import { programmingLanguages, webDevelopmentFrameworks, frontendDevelopment } from "@/lib/data";

export default function Skills() {
    return(
        <section className="col-start-3 col-span-5">
            <h2 className="text-2xl font-bold tracking-light text-primary-foreground">Skills</h2>
            <Separator className="mt-4 w-full" />
            <Section title="Programming languages" className="text-xl font-semibold tracking-light text-primary-foreground pt-4">
                <Iterator items={programmingLanguages} />
            </Section>
            <Section title="Web Development Frameworks" className="text-xl font-semibold tracking-light text-primary-foreground pt-4">
                <Iterator items={webDevelopmentFrameworks} />
            </Section>
            <Section title="Front-end Development" className="text-xl font-semibold tracking-light text-primary-foreground pt-4">
                <Iterator items={frontendDevelopment} />
            </Section>
        </section>
    )
};