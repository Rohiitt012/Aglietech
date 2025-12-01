import Breadcrumb from "@/components/Breadcrumb";
import FooterOne from "@/components/FooterOne";
import NavBar from "@/components/NavBar";
import GraphicLogoDesignArea from "@/components/GraphicLogoDesignArea";

export const metadata = {
  title: "Graphic/Logo Design || AglieTech - IT Solutions & Technology NEXT JS Template",
  description:
    "Agiletech provide you to build the best agency, app, business, digital, it services, it solutions, network solution, startup, technology, technology company, technology service template.",
};

const page = () => {
  return (
    <>
      <NavBar />
      <Breadcrumb title={"Graphic/Logo Design"} />
      <GraphicLogoDesignArea />
      <FooterOne />
    </>
  );
};

export default page;

