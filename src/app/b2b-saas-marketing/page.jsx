import Breadcrumb from "@/components/Breadcrumb";
import FooterOne from "@/components/FooterOne";
import NavBar from "@/components/NavBar";
import B2BSaaSMarketingArea from "@/components/B2BSaaSMarketingArea";

export const metadata = {
  title: "B2B marketing / SaaS Marketing || AglieTech - IT Solutions & Technology NEXT JS Template",
  description:
    "Agiletech provide you to build the best agency, app, business, digital, it services, it solutions, network solution, startup, technology, technology company, technology service template.",
};

const page = () => {
  return (
    <>
      <NavBar />
      <Breadcrumb title={"B2B marketing / SaaS Marketing"} />
      <B2BSaaSMarketingArea />
      <FooterOne />
    </>
  );
};

export default page;

