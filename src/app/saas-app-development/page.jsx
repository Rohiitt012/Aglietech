import Breadcrumb from "@/components/Breadcrumb";
import FooterOne from "@/components/FooterOne";
import NavBar from "@/components/NavBar";
import SaaSAppDevelopmentArea from "@/components/SaaSAppDevelopmentArea";

export const metadata = {
  title: "SaaS App development || AglieTech - IT Solutions & Technology NEXT JS Template",
  description:
    "Agiletech provide you to build the best agency, app, business, digital, it services, it solutions, network solution, startup, technology, technology company, technology service template.",
};

const page = () => {
  return (
    <>
      <NavBar />
      <Breadcrumb title={"SaaS App development"} />
      <SaaSAppDevelopmentArea />
      <FooterOne />
    </>
  );
};

export default page;

