'use client';

import { useParams } from 'next/navigation';
import { CandidateProfile } from '@/components/CandidateProfile';
import Navbar from '@/components/Navbar';

const CandidatePage = () => {
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;

  if (!id) {
    return <div className="text-center mt-10">Loading...</div>;
  }
  
  return (
    <>
    <Navbar ></Navbar>
    <CandidateProfile id={id} />;
    </>

  );
};

export default CandidatePage;
