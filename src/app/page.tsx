"use client";

import { GraduationCap, Brain, CreditCard, BookOpen, Briefcase } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const timelineData = [
  {
    id: 1,
    title: "Engineering",
    date: "2022",
    content:
      "Bachelor of Engineering at Fr Agnel College of Engineering, Mumbai. GPA 7.1. Built a strong foundation in software systems and engineering principles.",
    category: "Education",
    icon: GraduationCap,
    relatedIds: [2],
    status: "completed" as const,
    energy: 70,
  },
  {
    id: 2,
    title: "AI & ML",
    date: "2023",
    content:
      "Post-grad certification in Artificial Intelligence & Machine Learning at Aptech, Mumbai. GPA 8.1. Focused on neural networks, NLP, and model training.",
    category: "Education",
    icon: Brain,
    relatedIds: [1, 3],
    status: "completed" as const,
    energy: 80,
  },
  {
    id: 3,
    title: "Alpha Payments",
    date: "Aug 2023",
    content:
      "Software Engineer building Python automation for SOAP & REST API testing. Created testing frameworks using SoapUI, Groovy, and JSON. Implemented AES encryption for secure request simulation.",
    category: "Experience",
    icon: CreditCard,
    relatedIds: [2, 4],
    status: "completed" as const,
    energy: 75,
  },
  {
    id: 4,
    title: "Prep Study",
    date: "Aug 2024",
    content:
      "Software Developer applying NLP and ML to resume parsing. Used Flair & spaCy for named entity recognition, improving extraction accuracy by 25%. Built automated experience extraction engines.",
    category: "Experience",
    icon: BookOpen,
    relatedIds: [3, 5],
    status: "completed" as const,
    energy: 65,
  },
  {
    id: 5,
    title: "BUSINESSNEXT",
    date: "May 2025",
    content:
      "Software Developer / Integration Engineer at Acidaes Solutions. Built a SOAP Packet Automation Engine cutting manual effort by 80%. Designed EDS integrations with C#, XSLT, SQL Server, and AES-128-CBC encryption.",
    category: "Experience",
    icon: Briefcase,
    relatedIds: [4],
    status: "in-progress" as const,
    energy: 95,
  },
];

export default function Home() {
  return <RadialOrbitalTimeline timelineData={timelineData} />;
}
