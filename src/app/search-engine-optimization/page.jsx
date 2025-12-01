import Breadcrumb from "@/components/Breadcrumb";
import FooterOne from "@/components/FooterOne";
import NavBar from "@/components/NavBar";
import SearchEngineOptimizationArea from "@/components/SearchEngineOptimizationArea";

export const metadata = {
  title: "Search Engine Optimization || AglieTech - IT Solutions & Technology NEXT JS Template",
  description:
    "Agiletech provide you to build the best agency, app, business, digital, it services, it solutions, network solution, startup, technology, technology company, technology service template.",
};

const page = () => {
  return (
    <>
      <NavBar />
      <Breadcrumb title={"Search Engine Optimization"} />
      <SearchEngineOptimizationArea />
      <FooterOne />
    </>
  );
};

export default page;

