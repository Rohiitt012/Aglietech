import Breadcrumb from "@/components/Breadcrumb";
import FooterOne from "@/components/FooterOne";
import NavBar from "@/components/NavBar";
import AIAgentDevelopmentArea from "@/components/AIAgentDevelopmentArea";

export const metadata = {
  title: "AI Agent Development || AglieTech - IT Solutions & Technology NEXT JS Template",
  description:
    "Agiletech provide you to build the best agency, app, business, digital, it services, it solutions, network solution, startup, technology, technology company, technology service template.",
};

const page = () => {
  return (
    <>
      <NavBar />
      <Breadcrumb title={"AI Agent Development"} />
      <AIAgentDevelopmentArea />
      <FooterOne />
    </>
  );
};

export default page;

