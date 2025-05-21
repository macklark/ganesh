import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Intro() {
    return(
        <Card className="col-span-2 bg-primary text-primary-foreground gap-2 py-6">
            <CardHeader>
                <CardTitle>Ganesh Kolavennu</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-xs text-left tracking-light text-secondary-foreground">
                    Hi I'm Ganesh, I'm a front-end and web developer with industry experience in e-commerce grocery platforms. Passionate about clean, user-focused design and always exploring new tech.
                </p>
            </CardContent>
        </Card>
    )
};