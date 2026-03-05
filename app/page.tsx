import Typewriter from "@/components/Typewriter"
import Reveal from "@/components/Reveal"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>
      <main className="min-h-screen flex justify-center px-6 py-24 bg-background text-foreground">
        <div className="w-full max-w-2xl space-y-28">

          {/* INTRO */}
          <Reveal>
            <section className="space-y-5">
              <div>
                <h1 className="text-lg font-semibold tracking-tight">
                  William Law II
                </h1>

                <p className="text-sm text-foreground/70 mt-1">
                  <Typewriter
                    prefix="21, "
                    words={[
                      "design engineer.",
                      "gamer.",
                      "tech nerd.",
                    ]}
                  />
                </p>
              </div>

              <div className="space-y-5 text-[14px] leading-7 text-foreground/90">
                <p>I like being the person who turns ideas into outcomes.</p>

                <p>Yes I'm Aman Law.</p>

                <p>
                  Started my career as a visual designer by chance, but I was
                  always geeked out into playing with software and stripping it
                  down to understand how it works.
                </p>

                <p>
                  I also did graphics design, video editing, motion graphics
                  and animations. Now I do a mix of everything — building
                  products, designing interfaces, and teaching design engineering.
                </p>

                <p>
                  You'll find me shitposting on{" "}
                  <a
                    href="https://x.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative text-foreground after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-foreground after:transition-all after:duration-300 hover:after:w-full"
                  >
                    X
                  </a>
                  , check out my{" "}
                  <a
                    href="#"
                    className="relative text-foreground after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-foreground after:transition-all after:duration-300 hover:after:w-full"
                  >
                    digital store
                  </a>
                  , or reach me at{" "}
                  <a
                    href="mailto:williambenjaminlaw007@gmail.com"
                    className="relative text-foreground after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-foreground after:transition-all after:duration-300 hover:after:w-full"
                  >
                    williambenjaminlaw007@gmail.com
                  </a>.
                </p>
              </div>
            </section>
          </Reveal>


          {/* SKILLS */}
          <Reveal>
            <section className="space-y-5">
              <div>
                <h2 className="text-lg font-semibold tracking-tight">
                  Skills
                </h2>

                <p className="text-sm text-foreground/60 mt-1">
                  Technologies and tools I work with
                </p>
              </div>

              <div className="grid grid-cols-3 gap-y-6 text-[15px] text-foreground/80">
                <p>React</p>
                <p>Next.js</p>
                <p>React Native</p>
                <p>TypeScript</p>
                <p>Tailwind CSS</p>
                <p>UI / UX Design</p>
                <p>Motion Design</p>
                <p>Figma</p>
                <p>C++ Programming</p>
                <p>Angular</p>
                <p>Data Structures & Algorithms</p>
                <p>Shitposting</p>
              </div>
            </section>
          </Reveal>


          {/* EXPERIENCE */}
          <Reveal>
            <section className="space-y-6">

              <div>
                <h2 className="text-lg font-semibold tracking-tight">
                  Experience
                </h2>

                <p className="text-sm text-foreground/60 mt-1">
                  Events, hackathons and leadership roles
                </p>
              </div>

              <div className="relative space-y-8 border-l border-white/80 pl-7">

                <Experience
                  title="Hack Tour IND Cohort"
                  date="2025"
                  desc="Actively participated in high-profile web3 events including Polkadot, Ethereum and Solana Cyberpunk."
                />

                <Experience
                  title="Student Coordinator — PU Hackathon"
                  date="2025"
                  desc="Facilitated workshops and interactive sessions for students."
                />

                <Experience
                  title="Smart India Hackathon"
                  date="2025"
                  link="https://github.com/yourusername/sih-project"
                  desc="Selected for the second round and shortlisted for the final round among top teams."
                />

                <Experience
                  title="Oodo Hackathon"
                  date="2025"
                  link="https://github.com/yourusername/oodo-project"
                  desc="Reached the semi-finals and built a functional prototype under strict time constraints."
                />

              </div>
            </section>
          </Reveal>


          {/* CERTIFICATIONS */}
          <Reveal>
            <section className="space-y-6">

              <div>
                <h2 className="text-lg font-semibold">
                  Certifications & Professional Development
                </h2>

                <p className="text-sm text-foreground/60 mt-1">
                  Courses and professional learning
                </p>

                <a
                  href="https://www.credly.com/users/will.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-foreground/60 hover:text-foreground transition flex items-center gap-1 mt-2"
                >
                  Credly Profile ↗
                </a>
              </div>

              <div className="relative space-y-8 border-l border-white/80 pl-7">

                <Certification
                  title="Hashgraph Developer Course"
                  org="Hashgraph"
                  date="Dec 2025"
                  desc="Built decentralized applications on the Hashgraph distributed ledger."
                />

                <Certification
                  title="Data Science Essentials with Python"
                  org="Cisco Networking Academy"
                  date="Oct 2025"
                  desc="Used Pandas for data manipulation and Matplotlib for visualization."
                />

                <Certification
                  title="Artificial Intelligence Fundamentals"
                  org="IBM SkillsBuild"
                  date="Sep 2025"
                  desc="Studied machine learning, NLP and neural networks."
                />

                <Certification
                  title="AWS Academy Cloud Foundations"
                  org="AWS Academy"
                  date="Aug 2025"
                  desc="Learned EC2, S3, IAM and cloud architecture fundamentals."
                />

              </div>

            </section>
          </Reveal>


          {/* INTERESTS */}
          <Reveal>
            <section className="space-y-10 border-t border-white/10 pt-10">

              <div>
                <h2 className="text-lg font-semibold tracking-tight">
                  Interests & Activities
                </h2>

                <p className="text-sm text-foreground/60 mt-1">
                  Things I enjoy outside development
                </p>
              </div>

              <div className="space-y-8 text-[15px] text-foreground/80">

                <div className="border-b border-white/10 pb-4">
                  <p className="font-semibold mb-2">Sports</p>

                  <div className="flex flex-wrap gap-x-6">
                    <span>Rugby</span>
                    <span>Badminton</span>
                    <span>Football</span>
                    <span>Pool</span>
                  </div>
                </div>

                <div className="border-b border-white/10 pb-4">
                  <p className="font-semibold mb-2">Music</p>

                  <div className="flex flex-wrap gap-x-6">
                    <span>Drums</span>
                    <span>Guitar</span>
                    <span>Ukulele</span>
                  </div>
                </div>

                <div>
                  <p className="font-semibold mb-2">Personal Interests</p>

                  <div className="flex flex-wrap gap-x-6">
                    <span>Gardening</span>
                    <span>Reading Contemporary English Literature</span>
                  </div>
                </div>

              </div>

            </section>
          </Reveal>


          {/* SOCIAL LINKS BAR */}
          {/* SOCIALS */}
          <Reveal>
            <section className="space-y-5 border-t border-white/10 pt-10 mt-10">

              <div>
                <h2 className="text-lg font-semibold tracking-tight text-foreground">
                  Socials
                </h2>

                <p className="text-sm text-foreground/60 mt-1">
                  Where you can find me online
                </p>
              </div>

              <div className="flex justify-between w-full text-sm text-foreground/70 tracking-wide pt-4">

                <a
                  href="https://github.com/sheerwill007"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition"
                >
                  GitHub
                </a>

                <a
                  href="https://leetcode.com/u/SheerWill007"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition"
                >
                  LeetCode
                </a>

                <a
                  href="https://www.credly.com/users/will.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition"
                >
                  Certificates
                </a>

                <a
                  href="mailto:williambenjaminlaw007@gmail.com"
                  className="hover:text-foreground transition"
                >
                  Gmail
                </a>

                <a
                  href="mailto:WilliamTecumsehSherman007@proton.me"
                  className="hover:text-foreground transition"
                >
                  Proton
                </a>

              </div>

            </section>
          </Reveal>

        </div>
      </main>

      <Footer />
    </>
  )
}




/* TYPES */

interface CertificationProps {
  title: string
  org: string
  date: string
  desc: string
}

interface ExperienceProps {
  title: string
  date: string
  desc: string
  link?: string
}


/* COMPONENTS */

function Certification({ title, org, date, desc }: CertificationProps) {
  return (
    <div className="relative">
      <div className="absolute -left-[33.2px] top-[8px] w-2 h-2 rounded-full bg-white" />

      <p className="text-base font-semibold">{title}</p>

      <p className="text-sm text-foreground/60 mb-2">
        {org} | {date}
      </p>

      <p className="text-sm text-foreground/70 leading-relaxed">
        {desc}
      </p>
    </div>
  )
}


function Experience({ title, date, desc, link }: ExperienceProps) {
  return (
    <div className="relative">

      <div className="absolute -left-[33.2px] top-[8px] w-2 h-2 rounded-full bg-white" />

      <p className="text-base font-semibold">{title}</p>

      <p className="text-sm text-foreground/60 mb-2 flex items-center gap-2">
        {date}

        {link && (
          <>
            <span>•</span>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs border border-white/20 px-2 py-0.5 rounded hover:border-white transition"
            >
              Project ↗
            </a>
          </>
        )}
      </p>

      <p className="text-sm text-foreground/70 leading-relaxed">
        {desc}
      </p>

    </div>
  )
}
