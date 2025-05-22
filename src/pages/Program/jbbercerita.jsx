import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import RulesSection from "./rulesbercerita";

function jbbercerita() {
  return (
    <div>
      <Hero
        image="/icons/bg-jbbercerita.png"
        title="Janji Baik Bercerita"
        sub="(Terbuka Untuk Umum)"
        description="Janji Baik Bercerita adalah ruang aman untuk berbagi cerita bersama konselor sebaya, tanpa rasa takut atau khawatir karena semuanya akan dijaga dengan penuh kerahasiaan—kalau belakangan ini kamu merasa perlu didengar, yuk bercerita bersama kami! "
      />
      <RulesSection />
      <Footer />
    </div>
  );
}

export default jbbercerita;