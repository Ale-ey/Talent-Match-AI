'use client';

import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { candidates } from "@/mock/candidates";

interface CandidateProfileProps {
  id: string;
}

export function CandidateProfile({ id }: CandidateProfileProps) {
  const candidate = candidates.find((c) => c.id === id);

  if (!candidate) {
    return <div className="text-center mt-10">Candidate not found</div>;
  }

  return (
    <Card className="w-full max-w-2xl mx-auto mt-20">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src={candidate.avatarUrl || ""} alt={candidate.name} />
              <AvatarFallback>{candidate.name?.charAt(0) || "?"}</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-2xl font-bold">{candidate.name}</h1>
              <p className="text-gray-600">{candidate.email}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-500">Match Score</p>
            <Badge variant="outline" className="text-lg font-bold">
              {candidate.score}<p>/100</p>
            </Badge>
          </div>
        </div>
      </CardHeader>

      <div className="border-t border-gray-200" />

      <CardContent className="mt-4">
        <h2 className="text-lg font-semibold mb-2">AI-Generated Recommendation</h2>
        <p className="text-gray-700">{candidate.summary}</p>

        {candidate.skills?.length > 0 && (
          <>
            <h3 className="text-lg font-semibold mt-6 mb-2">Key Skills</h3>
            <div className="flex flex-wrap gap-2">
              {candidate.skills.map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </>
        )}
      </CardContent>

      <div className="border-t border-gray-200" />

      <CardFooter className="py-4">
        <Button className="w-full" asChild>
          <a href={candidate.resumeUrl} download>
            Download Resume
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
