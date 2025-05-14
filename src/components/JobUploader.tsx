"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useRef, useState } from "react";

export default function JobUploader() {
  const [jobDescription, setJobDescription] = useState("");
  const [files, setFiles] = useState<FileList | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFiles(e.target.files);
  };

  const handleSubmit = () => {
    alert("Mock upload success: Job description and CVs received.");
  };

  return (
    <Card className="p-4 max-w-4xl mx-auto mt-20">
      <CardContent className="space-y-4 felx justify-center ">
        <div className="flex item-start gap-4 w-full items-center">
          <div className="flex-1"><Label htmlFor="job">Job Description</Label>
            <Textarea
              id="job"
              placeholder="Paste job description here..."
              value={jobDescription}
              className="mt-2"
              onChange={(e) => setJobDescription(e.target.value)}
            />
          </div>
          {/* button section */}
          <div className="flex felx-col justify-start gap-2 mt-3">
            {/* <Label>Upload CVs</Label> */}
            <input
              type="file"
              multiple
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
            />
            <Button variant="outline" onClick={handleButtonClick}>
              Upload CV
            </Button>
            {files && <p className="text-sm text-muted-foreground">{files.length} file(s) selected</p>}
          <Button onClick={handleSubmit}>Submit</Button>
          </div>

        </div>


      </CardContent>
    </Card>
  );
}
