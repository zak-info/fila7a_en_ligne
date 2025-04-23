
import Header from "@components/Accuille/Header";
import Section1 from "@components/Accuille/Section1";
import Section2 from "@components/Accuille/Section2";
import Section3 from "@components/Accuille/Section3";
import Section6 from "@components/Accuille/Section6";
import Sections4 from "@components/Accuille/Sections4";
import Testimonials from "@components/Accuille/Testimonials";





export default async function Home({params}) {

  return (
    <div className="w-screen h-screen  overflow-x-hidden overflow-y-scroll hide-scrollbar">
      <div className="relative w-full">
        <Header />
        <Section1 locale={params?.locale} />
        <Section2 />
        <Section3 />
        <Sections4 />
        <Testimonials locale={params?.locale} />
        <Section6 />
      </div>
    </div>

  );
}
