import Navbar from "@/components/Navbar";
import JobUploader from "@/components/JobUploader";
import CandidateTable from "@/components/CandidateTable";
export default function Dashboard(){
  return(
  <>
  <Navbar></Navbar>
  <JobUploader></JobUploader>
  <CandidateTable></CandidateTable>
  </>
  );
}