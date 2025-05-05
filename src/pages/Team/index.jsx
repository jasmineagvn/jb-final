import Footer from "@/components/Footer";
import Hero from "../../components/Hero";

function Team() {
    return (
      <>
        <Hero
          image="/icons/bg-teamkami.png"
          title="Team Hebat Janji Baik "
          showLearnMoreButton={false}
          showContactUsButton={false}
          description="Beragam, penuh semangat, dan siap beraksi! Kami bekerja bersama, mewujudkan perubahan positif melalui kebaikan yang nyata. Setiap kontribusi dari setiap anggota memperkuat komitmen kami untuk menciptakan dampak yang lebih baik, lebih besar, dan lebih berarti bagi sesama. "
        />
        <Footer/>
      </>
    );
  }
  
  export default Team;