import { motion } from "framer-motion";
import { Link } from "react-router";
import { Brain, FileText, ClipboardCheck, MessageSquare, Pencil } from "lucide-react";

const SERVICES = [
  { title: "AI Flashcards", icon: <Brain />, path: "/flashcards", color: "bg-purple-100" },
  { title: "AI PDF Summarizer", icon: <FileText />, path: "/summarizer", color: "bg-blue-100" },
  { title: "AI Exam Maker", icon: <ClipboardCheck />, path: "/exams", color: "bg-emerald-100" },
  { title: "AI Study Agent", icon: <MessageSquare />, path: "/chat", color: "bg-orange-100" }
];

export default function Home() {
  return (
    <div className="space-y-16">
      <section className="text-center relative">
        <div className="inline-block relative">
          <h1 className="text-6xl font-black mb-4">Study Smarter, Not Harder</h1>
          <Pencil className="absolute -right-12 top-0 text-zinc-300 -rotate-12 size-12 hidden md:block" />
        </div>
        <p className="text-xl text-zinc-600 font-medium max-w-xl mx-auto">
          Your AI-powered sketchbook for mastering any subject. Click a tool to begin!
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {SERVICES.map((s, i) => (
          <motion.div
            key={s.path}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Link to={s.path} className="group block">
              <div className={`p-8 h-full doodle-border doodle-shadow ${s.color} flex flex-col items-center text-center`}>
                <div className="p-4 bg-white doodle-border mb-4 group-hover:rotate-6 transition-transform">
                  {s.icon}
                </div>
                <h2 className="text-xl font-bold mb-2">{s.title}</h2>
                <div className="mt-auto pt-4 font-black text-sm uppercase tracking-widest group-hover:underline">
                  Open Tool →
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}