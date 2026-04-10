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
    name: "Ann Li",
    role: "Mobile Developer",
    image: "https://i.pravatar.cc/300?img=25",
  },
  {
    id: 4,
    name: "Emily Carter",
    role: "UI Designer",
    image: "https://i.pravatar.cc/300?img=5",
  },
  {
    id: 5,
    name: "Daniel Smith",
    role: "Frontend Developer",
    image: "https://i.pravatar.cc/300?img=12",
  },
  {
    id: 6,
    name: "Sophia Brown",
    role: "Backend Developer",
    image: "https://i.pravatar.cc/300?img=32",
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