import SectionReveal from "@/components/ui/SectionReveal";
import About from "./About";
import Accommodation from "./Accommodation";
import Dining from "./Dining";
import Munnar from "./Munnar";
import Wellness from "./Wellness";
import Experiences from "./Experiences";
import { Benefits, Contact, Invitation } from "./StayDetails";

export default function ForestStory() {
  return (
    <>
      <SectionReveal><About /></SectionReveal>
      <SectionReveal><Accommodation /></SectionReveal>
      <SectionReveal><Dining /></SectionReveal>
      <SectionReveal><Munnar /></SectionReveal>
      <SectionReveal><Wellness /></SectionReveal>
      <SectionReveal><Experiences /></SectionReveal>
      <SectionReveal><Benefits /></SectionReveal>
      <SectionReveal><Contact /></SectionReveal>
      <Invitation />
    </>
  );
}
