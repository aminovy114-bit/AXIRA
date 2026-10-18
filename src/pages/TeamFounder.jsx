import {
  ArrowUpRight,
  Compass,
  HeartHandshake,
  Lightbulb,
  Target,
  Users,
  Code2,
  Languages,
  TrendingUp,
  BriefcaseBusiness,
} from "lucide-react";

import yusuf from "../Images/yusuf.jpg";

const values = [
  {
    icon: Lightbulb,
    title: "Curiosity first",
    text: "Questions are not distractions from learning. They are where meaningful learning begins.",
  },
  {
    icon: Target,
    title: "Depth over noise",
    text: "We value thoughtful explanations, useful structure, and ideas that stand up to scrutiny.",
  },
  {
    icon: HeartHandshake,
    title: "Learning for everyone",
    text: "Knowledge grows when people can explore, reflect, and share what they discover.",
  },
];

const team = [
  {
    name: "Aminov Yusuf",
    initials: "AY",
    role: "SEO & IT Engineer",
    experience: "2 Years Experience",
    image: yusuf,
    icon: Code2,
    description:
      "Focused on web development, search engine optimization, and building modern digital experiences.",
    skills: [
      "React.js",
      "JavaScript",
      "Next.js",
      "Tailwind CSS",
      "Python",
      "SEO",
      "AI Engineering",
    ],
  },
  {
    name: "Abdugafforov Muhammad",
    initials: "AM",
    role: "Founder & SEO Specialist",
    experience: "1 Year Experience",
    image: "/images/muhammad.jpg",
    icon: TrendingUp,
    description:
      "Focused on SEO, English communication, and influencer activities to grow digital projects and connect with audiences.",
    skills: [
      "SEO",
      "English",
      "Influencer Marketing",
      "Content Creation",
      "Communication",
    ],
  },
];

export default function TeamFounder() {
  return (
    <div className="space-y-12">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl border border-cyan-300/10 bg-[#0c1525] p-7 sm:p-10">
        <div className="absolute -right-10 -top-16 h-72 w-72 rounded-full border border-cyan-300/[0.08]">
          <div className="absolute inset-8 rounded-full border border-cyan-300/[0.08]" />
          <div className="absolute inset-16 rounded-full border border-cyan-300/[0.08]" />
      </div>

        <div className="relative max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/[0.07] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan-200">
            <Users size={13} />
            Meet the team
          </span>

          <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
            Two minds. One vision.
            <span className="block text-cyan-300">
              Building for the future.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            We combine technology, search engine optimization, communication,
            and creativity to build meaningful digital experiences and help
            ideas reach a wider audience.
          </p>
        </div>
      </section>

      {/* Team members */}
      <section>
        <div className="mb-6">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-300">
            The people behind AXIRA
          </p>

          <h3 className="text-xl font-semibold text-white sm:text-2xl">
            Meet our team
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            Different strengths, shared ambition, and a passion for growth.
          </p>
        </div>

        <div className="grid gap-6 xl:grid-cols-2">
          {team.map((person) => {
            const RoleIcon = person.icon;

            return (
              <article
                key={person.name}
                className="group overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0c1321] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:shadow-[0_20px_60px_rgba(34,211,238,0.08)]"
              >
                {/* Large profile photo */}
                <div className="relative h-80 overflow-hidden bg-gradient-to-br from-cyan-400/10 via-blue-500/10 to-violet-500/10 sm:h-96">
                  {person.image ? (
                    <img
                      src={person.image}
                      alt={`${person.name} profile`}
                      className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      onError={(event) => {
                        event.currentTarget.style.display = "none";
                      }}
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-7xl font-black text-cyan-200">
                      {person.initials}
                    </div>
                  )}

                  {/* Image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c1321] via-[#0c1321]/10 to-transparent" />

                  {/* Experience badge */}
                  <span className="absolute right-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#07111d]/80 px-4 py-2 text-xs font-semibold text-emerald-300 backdrop-blur-md">
                    <BriefcaseBusiness size={14} />
                    {person.experience}
                  </span>

                  {/* Name over photo */}
                  <div className="absolute bottom-5 left-6 right-6">
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-cyan-300">
                      AXIRA Team
                    </p>

                    <h4 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                      {person.name}
                    </h4>
                  </div>
                </div>

                {/* Card content */}
                <div className="p-6 sm:p-8">
                  {/* Role */}
                  <div className="flex items-center gap-3">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-cyan-300/15 bg-cyan-300/[0.07] text-cyan-300">
                      <RoleIcon size={21} />
                    </span>

                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500">
                        Position
                      </p>

                      <p className="mt-1 text-sm font-semibold text-cyan-200 sm:text-base">
                        {person.role}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-6 text-sm leading-7 text-slate-400">
                    {person.description}
                  </p>

                  {/* Skills */}
                  <div className="mt-7 border-t border-white/[0.07] pt-6">
                    <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
                      Skills & expertise
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {person.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-2 text-xs font-medium text-slate-300 transition hover:border-cyan-300/30 hover:bg-cyan-300/[0.06] hover:text-cyan-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="mt-7 flex items-center justify-between border-t border-white/[0.07] pt-5">
                    <span className="text-xs text-slate-500">
                      Part of the AXIRA team
                    </span>

                    <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/[0.08] text-slate-400 transition group-hover:border-cyan-300/30 group-hover:bg-cyan-300/[0.06] group-hover:text-cyan-300">
                      <ArrowUpRight size={18} />
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Our values */}
      <section>
        <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-300">
          What guides us
        </p>

        <h3 className="text-xl font-semibold text-white">Our principles</h3>

        <div className="mt-5 grid gap-3 md:grid-cols-3">
          {values.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-2xl border border-white/[0.07] bg-[#0c1321] p-5 transition hover:border-cyan-300/20 sm:p-6"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-cyan-300/10 text-cyan-200">
                <Icon size={20} />
              </span>

              <h4 className="mt-5 font-semibold text-white">{title}</h4>

              <p className="mt-2 text-sm leading-6 text-slate-500">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AXIRA mission */}
      <section className="rounded-2xl border border-white/[0.07] bg-[#0c1321] p-6 sm:p-8">
        <div className="max-w-2xl">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-300">
            Our mission
          </p>

          <h3 className="mt-3 text-2xl font-semibold text-white">
            Technology meets curiosity.
          </h3>

          <p className="mt-3 text-sm leading-7 text-slate-400">
            AXIRA brings academic subjects, interactive lessons, research
            tools, and writing resources together in one learning space. Our
            goal is to make exploring ideas more accessible and meaningful.
          </p>
        </div>

        <div className="mt-7 grid gap-3 sm:grid-cols-3">
          {[
            {
              icon: Compass,
              title: "Explore",
              desc: "Discover new subjects and perspectives.",
            },
            {
              icon: Target,
              title: "Practice",
              desc: "Build knowledge through focused learning.",
            },
            {
              icon: Lightbulb,
              title: "Create",
              desc: "Turn questions into ideas and projects.",
            },
          ].map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4"
            >
              <Icon size={19} className="text-cyan-300" />

              <h4 className="mt-3 text-sm font-semibold text-slate-200">
                {title}
              </h4>

              <p className="mt-1 text-xs leading-5 text-slate-500">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-2 border-t border-white/[0.06] pt-5 text-sm font-semibold text-cyan-200">
          <Languages size={17} />
          Think deeper. See further.
        </div>
      </section>
    </div>
  );
}
