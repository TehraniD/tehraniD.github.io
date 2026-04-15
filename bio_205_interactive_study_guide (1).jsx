import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Brain, CheckCircle2, ChevronRight, Eye, EyeOff, Shield, Syringe, Bug, Stethoscope } from "lucide-react";

const sections = [
  {
    id: "ch1",
    title: "Chapter 1",
    subtitle: "Innate and adaptive immunity",
    icon: Shield,
    color: "from-emerald-500/20 to-teal-500/20",
    objectives: [
      "Differentiate innate defenses from adaptive defenses",
      "Identify first, second, and third lines of defense",
      "Recognize the roles of phagocytes, B cells, and immunoglobulins",
      "Explain active versus passive immunity and natural versus artificial immunity",
      "Connect fever, inflammation, chemotaxis, and normal flora to host defense"
    ],
    mustKnow: [
      {
        label: "Innate versus adaptive",
        text: "Innate defenses respond quickly and broadly. Adaptive defenses are specific, improve with exposure, and create memory."
      },
      {
        label: "Lines of defense",
        text: "First line includes barriers and protective secretions. Second line includes inflammation, fever, and phagocytic responses. Third line includes lymphocytes, antibodies, and immune memory."
      },
      {
        label: "Humoral immunity",
        text: "B cells support humoral immunity by producing antibodies. Memory B cells help create faster responses after later exposures."
      },
      {
        label: "Key immunoglobulins",
        text: "IgG crosses the placenta. IgA is common in secretions such as tears, saliva, and breast milk. IgE is linked to allergic responses."
      },
      {
        label: "Active versus passive immunity",
        text: "Active immunity develops when the body makes its own response. Passive immunity is received from another source and is immediate but temporary."
      }
    ],
    pitfalls: [
      "Do not confuse a barrier defense with an inflammatory response",
      "Do not mix up antigen with antibody",
      "Do not reverse natural and artificial sources of immunity",
      "Do not assign antibody production to innate cells"
    ],
    quickChecks: [
      "Explain why a vaccine creates protection without counting as passive immunity.",
      "Describe what makes inflammation a second line defense rather than a first line defense.",
      "State why normal resident flora can protect the host.",
      "Name the cell type most closely tied to antibody mediated immunity."
    ]
  },
  {
    id: "ch4",
    title: "Chapter 4",
    subtitle: "Control of microbial growth and antimicrobial drugs",
    icon: Syringe,
    color: "from-sky-500/20 to-cyan-500/20",
    objectives: [
      "Compare sterilization, disinfection, antisepsis, and pasteurization",
      "Relate physical methods such as moist heat, dry heat, filtration, radiation, and gas sterilization to real uses",
      "Classify drugs as bacteriostatic, bactericidal, fungicidal, and broad or narrow spectrum",
      "Match antimicrobial targets to microbial structures or processes",
      "Explain how resistance develops and why stewardship matters"
    ],
    mustKnow: [
      {
        label: "Levels of microbial control",
        text: "Sterilization destroys all microbial life including resistant forms. Disinfection reduces pathogens on nonliving surfaces. Antisepsis reduces microbes on living tissue. Pasteurization lowers microbial load in products without full sterilization."
      },
      {
        label: "Heat methods",
        text: "Moist heat is generally more efficient than dry heat. Autoclaving combines heat, pressure, and steam to achieve sterilization."
      },
      {
        label: "Chemical control",
        text: "Alcohols are common disinfectants and antiseptics. Glutaraldehydes are high level agents. Chlorine compounds are common oxidizing disinfectants. Some chemicals require longer exposure for higher effectiveness."
      },
      {
        label: "Drug targets",
        text: "Major targets include cell wall synthesis, protein synthesis, nucleic acid synthesis, metabolic pathways, and cell membranes."
      },
      {
        label: "Resistance logic",
        text: "Resistance can emerge through reduced uptake, drug inactivation, target changes, or increased removal of the drug. Inappropriate prescribing and broad use accelerate selection."
      }
    ],
    pitfalls: [
      "Do not call pasteurization sterilization",
      "Do not confuse static with cidal actions",
      "Do not forget that drug spectrum refers to range of organisms affected",
      "Do not treat viral illness with antibiotics in concept questions about stewardship"
    ],
    quickChecks: [
      "Describe when an antiseptic is more appropriate than a disinfectant.",
      "Explain why beta lactam drugs are especially useful against growing bacterial cells.",
      "State the difference between narrow spectrum and broad spectrum choices.",
      "Give two ways bacterial resistance can reduce drug effectiveness."
    ]
  },
  {
    id: "ch5",
    title: "Chapter 5",
    subtitle: "Transmission, portals of entry, signs and symptoms, and epidemiology",
    icon: Bug,
    color: "from-amber-500/20 to-orange-500/20",
    objectives: [
      "Identify common routes of transmission and portals of entry",
      "Distinguish vehicles, vectors, direct contact, and fomites",
      "Interpret sign, symptom, syndrome, etiology, remission, and related disease terms",
      "Separate endemic, epidemic, and pandemic patterns",
      "Connect transmission scenarios to prevention strategies"
    ],
    mustKnow: [
      {
        label: "Transmission categories",
        text: "Direct contact involves person to person spread. Vehicles include contaminated food, water, or objects. Vectors are living transmitters such as arthropods. Fomites are contaminated inanimate objects."
      },
      {
        label: "Mechanical versus biological vectors",
        text: "A mechanical vector carries a pathogen passively. A biological vector is part of the pathogen life cycle or supports pathogen development."
      },
      {
        label: "Portals of entry",
        text: "Important portals include respiratory, gastrointestinal, genitourinary, and breaks in the skin or mucosa. Link the exposure to the body system entered."
      },
      {
        label: "Clinical language",
        text: "A sign is objective and measurable. A symptom is subjective and reported by the patient. A syndrome is a recognizable group of signs and symptoms. Etiology means cause. Remission means reduced severity or fewer symptoms."
      },
      {
        label: "Population patterns",
        text: "Endemic means a constant expected presence in a region. Epidemic means a rise above expected levels in a population. Pandemic means wide international spread."
      }
    ],
    pitfalls: [
      "Do not label every contaminated object as a vector",
      "Do not confuse portal of entry with reservoir or vehicle",
      "Do not reverse sign and symptom",
      "Do not use epidemic when the pattern is stable in a region"
    ],
    quickChecks: [
      "Describe the difference between a fomite and a vehicle.",
      "Explain why a mosquito can represent more than one transmission concept depending on the organism.",
      "Classify a disease that stays at a steady regional level.",
      "State whether fever is a sign or a symptom and explain why."
    ]
  },
  {
    id: "ch8",
    title: "Chapter 8",
    subtitle: "Body system infections and clinical associations",
    icon: Stethoscope,
    color: "from-fuchsia-500/20 to-pink-500/20",
    objectives: [
      "Associate common pathogens with body system infections",
      "Recognize hallmark clinical patterns of respiratory, digestive, eye, skin, nervous, circulatory, and immune related infections",
      "Match likely specimens to the infection site",
      "Identify common risk factors for invasive infections",
      "Connect anatomical terms to disease names"
    ],
    mustKnow: [
      {
        label: "Respiratory and ear related patterns",
        text: "Some organisms cause overlapping respiratory, middle ear, and eye infections. Focus on common clinical clusters rather than memorizing isolated facts."
      },
      {
        label: "Digestive infection patterns",
        text: "Hospital associated colitis, biliary infections, and appendiceal or bowel related pain patterns are often tied to specific anatomical sites and microbial sources."
      },
      {
        label: "Circulatory and bone spread",
        text: "Catheters, injection drug use, trauma, and bloodstream spread raise the risk of deeper infections such as endocardial, joint, or bone involvement."
      },
      {
        label: "Eye and nervous system anatomy",
        text: "Conjunctiva, cornea, meninges, and brain tissue each map to different disease names. Matching structure to condition is often more important than memorizing one isolated organism."
      },
      {
        label: "Best specimen logic",
        text: "The most useful diagnostic sample usually comes from the infected site or the fluid that directly reflects that site."
      }
    ],
    pitfalls: [
      "Do not confuse tissue inflammation terms tied to similar sounding anatomy",
      "Do not choose a sample based only on convenience when site specific material is better",
      "Do not ignore healthcare associated risk factors such as catheters and recent procedures",
      "Do not mix superficial skin infections with deeper tissue or bone infections"
    ],
    quickChecks: [
      "A patient has a central line and new bloodstream symptoms. Explain the infection risk concept involved.",
      "Describe why joint fluid can be more informative than sputum for a suspected joint infection.",
      "Differentiate corneal disease from conjunctival disease by anatomy.",
      "Explain why trauma and surgery can increase the risk of bone infection."
    ]
  }
];

const flashcards = [
  {
    front: "What should you compare first when a defense mechanism question appears?",
    back: "Decide whether the response is barrier based, inflammatory or innate, or antigen specific and adaptive. That first split usually narrows the concept fast."
  },
  {
    front: "What is the safest way to think about vaccine related immunity?",
    back: "Vaccination presents antigenic material so the host builds its own adaptive response and memory."
  },
  {
    front: "How do you separate sterilization from disinfection?",
    back: "Ask whether every form of microbial life must be destroyed. If yes, think sterilization. If the goal is reducing pathogens on nonliving surfaces, think disinfection."
  },
  {
    front: "What is the quickest clue for bacteriostatic versus bactericidal?",
    back: "Static means growth is halted. Cidal means organisms are killed."
  },
  {
    front: "How do you avoid mixing up vectors, vehicles, and fomites?",
    back: "Living carrier means vector. Contaminated material such as food or water means vehicle. Nonliving object touched in the environment means fomite."
  },
  {
    front: "What should you ask when classifying a portal of entry?",
    back: "Ask which body system the organism entered through rather than where symptoms later appeared."
  },
  {
    front: "What is the simplest sign versus symptom test?",
    back: "If it can be observed or measured by someone else, it is a sign. If it must be reported by the patient, it is a symptom."
  },
  {
    front: "What helps with specimen selection questions?",
    back: "Choose the sample that most directly represents the infected tissue or fluid compartment."
  }
];

const readinessChecks = [
  "I can separate innate from adaptive immunity without guessing",
  "I can explain active and passive immunity clearly",
  "I can classify microbial control methods by level and purpose",
  "I can match drug targets to cell wall, ribosome, nucleic acid, membrane, or metabolism",
  "I can explain common resistance mechanisms",
  "I can classify transmission route, vector type, vehicle, and fomite",
  "I can distinguish sign, symptom, syndrome, etiology, and remission",
  "I can choose between endemic, epidemic, and pandemic",
  "I can match infection names to anatomical sites",
  "I can identify the best specimen for a suspected infection"
];

function Chip({ children }) {
  return (
    <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-slate-200">
      {children}
    </span>
  );
}

function SectionCard({ section, active, onClick }) {
  const Icon = section.icon;
  return (
    <button
      onClick={onClick}
      className={`w-full rounded-3xl border p-5 text-left transition ${
        active
          ? "border-slate-200/30 bg-white/10 shadow-2xl"
          : "border-white/10 bg-white/5 hover:bg-white/8"
      }`}
    >
      <div className={`mb-4 inline-flex rounded-2xl bg-gradient-to-br ${section.color} p-3`}>
        <Icon className="h-5 w-5 text-white" />
      </div>
      <div className="text-lg font-semibold text-white">{section.title}</div>
      <div className="mt-1 text-sm text-slate-300">{section.subtitle}</div>
    </button>
  );
}

function ToggleBlock({ title, items }) {
  const [open, setOpen] = useState(true);
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
      <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between text-left">
        <h3 className="text-base font-semibold text-white">{title}</h3>
        <ChevronRight className={`h-5 w-5 text-slate-300 transition ${open ? "rotate-90" : "rotate-0"}`} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="mt-4 space-y-3">
              {items.map((item, idx) => (
                <div key={idx} className="rounded-2xl border border-white/10 bg-slate-950/30 p-4 text-sm text-slate-200">
                  {typeof item === "string" ? (
                    item
                  ) : (
                    <>
                      <div className="mb-1 font-medium text-white">{item.label}</div>
                      <div>{item.text}</div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Flashcard({ front, back }) {
  const [showBack, setShowBack] = useState(false);
  return (
    <button
      onClick={() => setShowBack(!showBack)}
      className="group min-h-[170px] rounded-3xl border border-white/10 bg-white/5 p-5 text-left transition hover:bg-white/8"
    >
      <div className="mb-4 flex items-center justify-between">
        <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Flashcard</div>
        {showBack ? <EyeOff className="h-4 w-4 text-slate-300" /> : <Eye className="h-4 w-4 text-slate-300" />}
      </div>
      <div className="text-sm font-medium text-white">{showBack ? back : front}</div>
      <div className="mt-4 text-xs text-slate-400">Tap to {showBack ? "hide explanation" : "reveal explanation"}</div>
    </button>
  );
}

export default function Bio205InteractiveStudyGuide() {
  const [active, setActive] = useState("ch1");
  const [checked, setChecked] = useState([]);
  const [showChecklist, setShowChecklist] = useState(true);

  const current = useMemo(() => sections.find((s) => s.id === active), [active]);
  const progress = Math.round((checked.length / readinessChecks.length) * 100);

  const toggleCheck = (item) => {
    setChecked((prev) => (prev.includes(item) ? prev.filter((x) => x !== item) : [...prev, item]));
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
            <BookOpen className="h-4 w-4" />
            BIO 205 study guide built from exam concepts only
          </div>
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-white">
            Interactive final exam study guide
          </h1>
          <p className="mt-3 max-w-3xl text-base text-slate-300">
            This guide is designed to help you master the concepts, learning targets, and clinical reasoning patterns behind the exam without revealing the original questions.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <Chip>Immunity</Chip>
            <Chip>Antimicrobials</Chip>
            <Chip>Transmission</Chip>
            <Chip>Epidemiology</Chip>
            <Chip>Clinical infections</Chip>
          </div>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[320px_minmax(0,1fr)]">
          <div className="space-y-4">
            {sections.map((section) => (
              <SectionCard key={section.id} section={section} active={active === section.id} onClick={() => setActive(section.id)} />
            ))}

            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold text-white">Readiness tracker</div>
                  <div className="mt-1 text-sm text-slate-300">Mark concepts you can explain out loud.</div>
                </div>
                <button onClick={() => setShowChecklist(!showChecklist)} className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">
                  {showChecklist ? "Hide" : "Show"}
                </button>
              </div>
              <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-900">
                <div className="h-full rounded-full bg-white transition-all" style={{ width: `${progress}%` }} />
              </div>
              <div className="mt-2 text-sm text-slate-300">{progress}% ready</div>
              <AnimatePresence initial={false}>
                {showChecklist && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden">
                    <div className="mt-4 space-y-2">
                      {readinessChecks.map((item) => (
                        <button
                          key={item}
                          onClick={() => toggleCheck(item)}
                          className={`flex w-full items-start gap-3 rounded-2xl border p-3 text-left text-sm transition ${
                            checked.includes(item)
                              ? "border-emerald-400/30 bg-emerald-500/10 text-emerald-100"
                              : "border-white/10 bg-slate-950/30 text-slate-200"
                          }`}
                        >
                          <CheckCircle2 className={`mt-0.5 h-4 w-4 shrink-0 ${checked.includes(item) ? "text-emerald-300" : "text-slate-500"}`} />
                          <span>{item}</span>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="space-y-6">
            <motion.div key={current.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="rounded-[28px] border border-white/10 bg-white/5 p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className={`rounded-2xl bg-gradient-to-br ${current.color} p-3`}>
                  <current.icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-xl font-semibold text-white">{current.title}</div>
                  <div className="text-sm text-slate-300">{current.subtitle}</div>
                </div>
              </div>

              <div className="grid gap-4 xl:grid-cols-2">
                <ToggleBlock title="Learning objectives" items={current.objectives} />
                <ToggleBlock title="High yield concepts" items={current.mustKnow} />
                <ToggleBlock title="Common mix ups" items={current.pitfalls} />
                <ToggleBlock title="Check yourself prompts" items={current.quickChecks} />
              </div>
            </motion.div>

            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
              <div className="mb-5 flex items-center gap-3">
                <div className="rounded-2xl bg-white/10 p-3">
                  <Brain className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-xl font-semibold text-white">Flip cards for active recall</div>
                  <div className="text-sm text-slate-300">Use these to practice explanations instead of memorizing wording.</div>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {flashcards.map((card, idx) => (
                  <Flashcard key={idx} front={card.front} back={card.back} />
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
              <div className="text-xl font-semibold text-white">Best way to use this guide</div>
              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {[
                  "Study one chapter at a time and say each objective in your own words.",
                  "Use the common mix ups section to catch reversals before the exam.",
                  "Answer the check yourself prompts aloud without looking at notes.",
                  "Mark the readiness tracker only when you can explain the concept clearly.",
                  "Revisit flashcards you miss and connect them to the larger chapter theme.",
                  "Focus on why a concept is correct rather than memorizing one isolated fact."
                ].map((tip, idx) => (
                  <div key={idx} className="rounded-2xl border border-white/10 bg-slate-950/30 p-4 text-sm text-slate-200">
                    {tip}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
