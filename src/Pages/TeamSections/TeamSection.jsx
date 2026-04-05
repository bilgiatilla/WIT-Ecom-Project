import TeamCard from "./TeamCard";
import PM from "../../assets/Team/yalcin-hoca.jpg"
import atilla from "../../assets/Team/atilla.jpg"

const teamMembers = [
  {
    id: 1,
    name: "Yalçın",
    role: "Project Manager",
    image: PM,
  },
  {
    id: 2,
    name: "Atilla Bilgi",
    role: "Full Stack Developer",
    image: atilla,
  },
  {
    id: 3,
    name: "Atilla Bilgi",
    role: "Sr. Full Stack Developer",
    image: atilla,
  },
  {
    id: 4,
    name: "Atilla Bilgi",
    role: "Jr. Full Stack Developer",
    image: atilla,
  },
  {
    id: 5,
    name: "Atilla Bilgi",
    role: "Jr. Full Stack Developer",
    image: atilla,
  },
  {
    id: 6,
    name: "Atilla Bilgi",
    role: "Jr. Full Stack Developer",
    image: atilla,
  },
];

export default function TeamSection() {
  return (
    <section className="flex flex-col lg:flex-row lg:flex-wrap items-center gap-16 px-10">
      {teamMembers.map((member) => (
        <TeamCard
          key={member.id}
          image={member.image}
          name={member.name}
          role={member.role}
        />
      ))}
    </section>
  );
}