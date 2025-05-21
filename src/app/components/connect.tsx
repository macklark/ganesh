import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { Mail, Github, Linkedin, Twitter } from "lucide-react";

export default function Connect() {
    return(
        <Card className="col-start-1 col-span-2 bg-primary text-primary-foreground gap-2 py-6">
            <CardHeader>
                <CardTitle>Connect</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-2">
                <Button asChild variant='outline' className="bg-primary w-full cursor-pointer justify-start">
                    <a href='mailto:ganesh.kolavennu@proton.me'>
                        <Mail /> Mail
                    </a>
                </Button>
                <Button asChild variant='outline' className="bg-primary w-full cursor-pointer justify-start">
                    <a href='https://github.com/macklark' target="_blank">
                        <Github /> Github
                    </a>
                </Button>
                <Button asChild variant='outline' className="bg-primary w-full cursor-pointer justify-start">
                    <a href="https://www.linkedin.com/in/ganesh-kolavennu-65a809179/" target="_blank">
                        <Linkedin /> Linkedin
                    </a>
                </Button>
                <Button asChild variant='outline' className="bg-primary w-full cursor-pointer justify-start">
                    <a href="https://x.com/GKolavennu" target="_blank">
                        <Twitter /> X
                    </a>
                </Button>
            </CardContent>
        </Card>
    )
};