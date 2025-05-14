// Inside CandidateTable component
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { candidates } from "@/mock/candidates"; // Assuming the candidates data is in this file
import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";

export default function CandidateTable() {
  return (
    <>
      <h1 className="px-6 mt-10 max-w-5xl mx-auto text-2xl font-bold">Matching Candidates</h1>
      <Card className="p-6 mt-5 max-w-5xl mx-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b">
              <th className="p-2">Name</th>
              <th className="p-2">Matched Score</th>
              <th className="p-2">Key Skills Matched</th>
              <th className="p-2">Recommendation</th>
            </tr>
          </thead>
          <tbody>
            {candidates.map((c) => (
              <tr key={c.email} className="border-b hover:bg-gray-50">
                <td className="p-2">{c.name}</td>
                <td className="p-2"><Progress value={c.score} /></td>
                <td className="p-2">{c.summary}</td>
                <td className="p-2">
                  <Link href={`/candidate/${c.id}`}>
                    <Button>View Profile</Button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </>
  );
}
