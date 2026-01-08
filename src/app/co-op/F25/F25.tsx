import miniTitle from "@/app/components/miniTitle";
import bodyText from "@/app/components/bodyText";
import ImgCaption from "@/app/components/imgCaption";

export default function F25() {
  return (
    <>
      {miniTitle("F25 Co-op Work Term")}
      {bodyText(
        "For my co-op work term I had the opportunity to work as a Student Developer with the Government of Ontario Public Service, under the MPBSDP (Ministry of Public Business Service Development and Procurement). Our ministry specializes in creating services for both Ontarians and internal stakeholders that are secure, efficient and accessible."
      )}
      <ImgCaption
        imgsrc={["../entrance.jpg", "../inside.jpg"]}
        caption="The view of the office, inside and out"
      />
      {bodyText(
        "I specifically worked on a team in the LRC (Land and Resources Cluster), so a lot of our services dealt with, surprisingly, land and resources. My team specialized in using and developing Salesforce, the leading CRM platform globally in terms of market share. Our work is effectively full-stack, as we think in terms of big picture projects and have to make considerations and take action on all development fronts. This means one day you could be dealing with a software bug messing with a database and another day trying to make the front-end align with accessibility standards."
      )}

      {bodyText(
        "My goals for this term were in both technical and soft skills. On the tech-side, I wanted to have hands-on experience with technology and tools that were commonly used within the industry. This includes CRMs like Salesforce, cloud-based solution environments such as Fabric, front-end report and analytics tools like PowerBI, and even developer environment tools within Azure DevOps. Being able to learn and grow comfortable using these tools day-to-day is a valuable asset that I felt should be a priority from this opportunity. As for soft skills, I wanted to grow my collaborative skills, as in being able to contribute in a dynamic environment where you’re expected to learn as you go. I also wanted to be able to communicate better in a hybrid environment, as it's a medium I’m not as familiar with and seems to be where the industry as a whole is headed. And finally I also wanted to understand the critical thinking processes that are used in a real-world environment. Aspects that need to be considered when making systems that will actually be used as opposed to in a class environment where you just need to check the box to get the grade. Ultimately it was about understanding how technical restraints, budget, policies and social considerations all come together into a cohesive decision within the context of the public sector."
      )}

      <ImgCaption
        imgsrc={["../chat.jpg", "../idiot.jpg"]}
        caption="Never a dull day..."
      />

      {bodyText(
        "My day-to-day involved helping on active projects and working on documentation. Early on, I was tasked with organizing and browsing documentation for a team repository. This armed me with the necessary skills and knowledge to later contribute meaningfully to other projects. This included Salesforce and DevOps basics and knowledge of development processes. Later I was able to add some key features to a PowerBI dashboard, which documented the functions of previous projects into a centralized catalogue, essentially showing what functionality is feasible. Through an internal hackathon, I was able to build my soft skills as well as become familiar with Microsoft Fabric and its ecosystem of tools and functions. Leading a team of 9 people, building an application that showed trends and anomalies in Trade Data, we won the People’s Choice Award with over 10% of the total vote."
      )}

      <ImgCaption
        imgsrc={["../ms_headquarters.jpg", "../hackathonwin.jpg"]}
        caption="A hackathon start almost as exciting as the end"
      />

      {bodyText(
        "All in all, my 4-month experience at the OPS gave me some really valuable experience and some great memories to go along with them. I’d like to thank the SF team for being so friendly and approachable. I’d like to thank Puskar and Daman, my fellow co-ops this semester, for sticking it through with me. As well as my hackathon team for being a pleasure to work with."
      )}

      <ImgCaption
        imgsrc={["../me_in_elevator.jpg", "../christmaseve.jpg"]}
        caption="Above all else, I never forgot to stay comfortable"
      />
    </>
  );
}
