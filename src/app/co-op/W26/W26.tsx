import miniTitle from "@/app/components/miniTitle";
import bodyText from "@/app/components/bodyText";
import ImgCaption from "@/app/components/imgCaption";

export default function W26() {
  return (
    <>
      {miniTitle("W26 Co-op Work Term")}
      {bodyText(
        "For my W26 co-op work term, I had the opportunity to continue working as a Student Developer with the Government of Ontario Public Service under the MPBSDP (Ministry of Public and Business Service Delivery and Procurement). Within the OPS, I worked on the Salesforce CRM team, where we manage and maintain a variety of Salesforce-based solutions used across different areas of the organization.",
      )}
      <ImgCaption
        imgsrc={["../W26_1.jpg"]}
        caption="The view from the office in Toronto"
      />
      {bodyText(
        "Returning to the same position for another term gave me the opportunity to take on a more active role within the team and become more confident contributing to ongoing projects. My primary goals for this term were to take ownership over more changes and tickets, deepen my development skills, and become more involved in both the technical and collaborative sides of the team's workflow.",
      )}
      <ImgCaption imgsrc={["../W26_2.jpg"]} caption="The daily grind" />
      {bodyText(
        "One of the projects I worked on involved creating a fully developed Figma prototype as a practice project. While it was not intended for production use, it gave me valuable experience designing interfaces and thinking more carefully about user experience, layout, and accessibility considerations before development begins. It also helped strengthen my understanding of how planning and design fit into the overall development process.",
      )}
      <ImgCaption
        imgsrc={["../W26_3.jpg"]}
        caption="Tons of informative events too!"
      />
      {bodyText(
        "In addition to design work, I became more involved in active project support and testing. I took charge of QA testing on two ongoing projects, which involved validating system functionality, identifying issues, and coordinating with developers and team members to ensure changes behaved as expected before deployment. This gave me a stronger appreciation for the importance of testing and quality assurance within large systems, especially in environments where reliability and accuracy are critical. I also worked on creating dashboards to help organize and present information more effectively for internal use.",
      )}
      <ImgCaption
        imgsrc={["../W26_4.jpg"]}
        caption="Here's to another 4 months."
      />
      {bodyText(
        "Overall, this term allowed me to become more comfortable contributing as part of an active development team and gave me a better understanding of the responsibilities involved in maintaining and improving large-scale enterprise systems. I'm grateful to the Salesforce team for continuing to provide such a supportive and collaborative environment, and for giving me opportunities to take on greater responsibility throughout the term. It was a valuable experience that helped me grow both technically and professionally.",
      )}
    </>
  );
}
