import { useLoaderData } from "@remix-run/react";
import axios from "axios";
import { Dashboard } from "~/components/dashboard";
import { SubjectCard } from "~/components/subjectCard";

export default function home() {
  //
  const { subjects }: { subjects: Subject[] } = useLoaderData();
  // console.log(subjects);
  return (
    <div className="bg-main min-h-screen">
      <Dashboard>
        <div className="grid grid-cols-4">
          {subjects.map((subject) => (
            <div key={subject.subject} className="py-10">
              <SubjectCard
                subject={subject.subject}
                uuid={subject.subject_uuid}
              />
            </div>
          ))}
        </div>
      </Dashboard>
    </div>
  );
}
// todo: make an actual dashboard with useful info to replace subjects page and make subjects page its own thing
export async function loader() {
  const url = `${process.env.PUBLIC_DOMAIN}/api/v1/get-subjects`;
  const resp = await axios.get(url);
  // console.log(resp);
  return resp.data;
}
