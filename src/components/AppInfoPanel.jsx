import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function AppInfoPanel() {
  return (
    <Card className="max-w-xl mx-auto mt-12 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl">
          <span role="img" aria-label="assignment">📝</span>
          Assignment Generator
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-muted-foreground">
          A simple tool to create, preview, and export assignment sheets and coding solutions to PDF. Built for students, teachers, and anyone who wants to organize and print code-based assignments with ease.
        </div>
        <div>
          <div className="font-semibold">Created by:</div>
          <div className="flex items-center gap-2 mt-1">
            <Button asChild variant="ghost" size="sm" className="p-0 h-auto">
              <a
                href="https://github.com/fab-c14"
                rel="noopener noreferrer"
                target="_blank"
                className="flex items-center gap-1 underline"
              >
                <Github className="w-4 h-4" />
                fab-c14
              </a>
            </Button>
            <Button asChild variant="ghost" size="sm" className="p-0 h-auto">
              <a 
                href="https://github.com/HazimBhatt"
                rel="noopener noreferrer"
                target="_blank"
                className="flex items-center gap-1 underline"
              >
                <Github className="w-4 h-4" /> Hazim Bhat
              </a>
            </Button>
          </div>
        </div>
        <div>
          <div className="font-semibold">Contributor:</div>
          <div className="text-sm text-muted-foreground">
            (To be added)
          </div>
        </div>
        <div>
          <div className="font-semibold">Who is this tool for?</div>
          <ul className="list-disc ml-6 text-muted-foreground text-sm mt-1">
            <li>Students preparing coding/homework assignments</li>
            <li>Teachers creating programming tasks for class</li>
            <li>Anyone who needs to format and print code with questions & answers</li>
            <li>Open-source contributors & learners</li>
          </ul>
        </div>
        <div className="flex justify-center pt-4">
          <Button
            asChild
            size="lg"
            className="gap-2 text-base"
          >
            <Link
              to="/editor"
              className="flex items-center"
            >
              Go to Assignment Tool <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </Button>
        </div>
        <div className="pt-4 text-xs text-muted-foreground text-center">
          Made with <span className="text-red-500">♥</span> using React, jsPDF, shadcn/ui, Radix UI, and Tailwind CSS.
          <div>
            <a
              href="https://github.com/fab-c14/Coassignment"
              rel="noopener noreferrer"
              target="_blank"
              className="underline mt-1 inline-flex items-center gap-1"
            >
              <Github className="w-3 h-3" /> View on GitHub
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}