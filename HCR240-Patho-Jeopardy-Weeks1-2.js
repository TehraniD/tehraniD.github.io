// GAME DATA
const round1 = {
  categories: ["Cells Gone Wild","Ouch! That's Inflamed","It's in Your DNA","Bug Club","Heal or No Heal","Vocab Party"],
  clues: [
    [
      {v:200,q:"Your grandma hasn't walked in 3 months and her leg muscles look like deflated pool noodles. What cellular adaptation is happening?",a:["Hypertrophy","Metaplasia","Atrophy","Hyperplasia"],c:2},
      {v:400,q:"A bodybuilder's heart gets bigger from all that heavy lifting. Is this heart doing push-ups or having a crisis? What's the cellular process?",a:["Atrophy","Apoptosis","Hyperplasia","Hypertrophy"],c:3},
      {v:600,q:"A smoker's airway cells got tired of being bullied by cigarette smoke, so they changed their outfit from columnar to squamous. What's this dramatic makeover called?",a:["Dysplasia","Necrosis","Metaplasia","Anaplasia"],c:2},
      {v:800,q:"GERD has been splashing stomach acid on the esophagus for years, and now the esophageal cells have redecorated. The squamous cells have been replaced by columnar cells. What's this condition called?",a:["Crohn's disease","Barrett's esophagus","Esophageal varices","Hiatal hernia"],c:1},
      {v:1000,q:"When cells forget how to die on schedule and just keep partying, they can become a tumor. What is the normal programmed cell death process that FAILED here?",a:["Necrosis","Lysis","Apoptosis","Autolysis"],c:2,dd:true}
    ],
    [
      {v:200,q:"You stub your toe and it turns red, hot, swollen, and painful. How many classic signs of inflammation are you experiencing?",a:["3","4","5 (if you can't wiggle it)","2"],c:2},
      {v:400,q:"These cells are basically the drama queens of inflammation — they release histamine the moment anything goes wrong. Name them.",a:["Neutrophils","Mast cells","Eosinophils","Red blood cells"],c:1},
      {v:600,q:"White blood cells get a GPS signal telling them exactly where the injury is so they can show up and start cleaning. What's this navigational process called?",a:["Osmosis","Phagocytosis","Chemotaxis","Diapedesis"],c:2},
      {v:800,q:"Your body wants to crank up the thermostat to fight off an infection. What fever-inducing substances make this happen?",a:["Antigens","Histamines","Pyrogens","Interferons"],c:2},
      {v:1000,q:"After your immune cells release histamine, blood vessels widen and become leakier. What is the PURPOSE of this seemingly messy response?",a:["To cause pain","To promote blood flow and let immune cells reach the site","To kill bacteria directly","To form scar tissue"],c:1}
    ],
    [
      {v:200,q:"A baby is born with an extra copy of chromosome 21 and the cutest single palmar crease. What diagnostic test confirms the chromosomal party crasher?",a:["MRI","Blood culture","Karyotyping","Urinalysis"],c:2},
      {v:400,q:"At 6 months old, a baby starts declining mentally and physically. Vision fades, swallowing becomes difficult, and the prognosis is devastating. What genetic disease is this?",a:["Down Syndrome","Cystic Fibrosis","Huntington's","Tay-Sachs Disease"],c:3},
      {v:600,q:"This genetic disease turns your lungs into a mucus factory. Chest physiotherapy, bronchodilators, and corticosteroid inhalers are the treatment squad. Name the disease.",a:["Asthma","Pneumonia","Cystic Fibrosis","Bronchiectasis"],c:2},
      {v:800,q:"Jerky dance-like movements called 'chorea' start appearing, followed by mood swings and cognitive decline. This genetic disorder doesn't show up until adulthood. What is it?",a:["Parkinson's","Huntington's Disease","Multiple Sclerosis","ALS"],c:1},
      {v:1000,q:"A child is born with Trisomy 21. The extra chromosome came from which chromosome number showing up three times instead of the usual two?",a:["Chromosome 18","Chromosome 13","Chromosome 22","Chromosome 21"],c:3}
    ],
    [
      {v:200,q:"This bacterium is the parent strain of the antibiotic-resistant nightmare bugs MRSA and VRSA. What is the original troublemaker?",a:["E. coli","Streptococcus","Staphylococcus aureus","Pseudomonas"],c:2},
      {v:400,q:"You step on a rusty nail and now your jaw is locking up, your muscles are spasming, and you look like a human pretzel. What bacterium caused this?",a:["C. botulinum","C. difficile","C. perfringens","C. tetani"],c:3},
      {v:600,q:"This sneaky toxin-producer does the OPPOSITE of tetanus — instead of making muscles spasm, it prevents them from contracting at all, causing paralysis.",a:["Clostridium tetani","Clostridium botulinum","Staphylococcus aureus","Streptococcus pyogenes"],c:1},
      {v:800,q:"A college student comes in exhausted with a sore throat, swollen lymph nodes, and a spleen that's ready to pop. What virus gave them the 'kissing disease'?",a:["CMV","Varicella Zoster","HIV","Epstein-Barr Virus"],c:3},
      {v:1000,q:"Neck stiffness, altered mental status, severe headache, and positive Kernig's and Brudzinski's signs. What is the first-line treatment for this brain-covering infection?",a:["Antivirals","Antifungals","Antibiotics","Corticosteroids"],c:2}
    ],
    [
      {v:200,q:"Put these wound healing stages in order: clotting, cleanup, rebuilding, and remodeling. What comes FIRST?",a:["Inflammation","Proliferation","Hemostasis","Remodeling"],c:2},
      {v:400,q:"A patient's surgical incision splits open like a zipper. The wound layers separate but the organs stay inside. What's this scary complication called?",a:["Evisceration","Fistula","Dehiscence","Necrosis"],c:2},
      {v:600,q:"Now imagine the wound opens AND the intestines are peeking out saying hello. That's even worse. What's THIS called?",a:["Dehiscence","Fistula","Evisceration","Herniation"],c:2},
      {v:800,q:"A bedridden patient has a pressure ulcer covered in black, crusty dead tissue. What's this dead tissue called, and what must the nurse do about it?",a:["Granulation tissue — leave it alone","Eschar — debridement needed","Keloid — surgical removal","Fibrin — dissolve with heparin"],c:1,dd:true},
      {v:1000,q:"A wound that can't be stitched shut, so it fills in from the bottom up with granulation tissue and leaves a bigger scar. This is healing by what intention?",a:["Primary intention","Tertiary intention","Secondary intention","Quaternary intention"],c:2}
    ],
    [
      {v:200,q:"Your patient has a fever of 102°F. Is this a SIGN or a SYMPTOM? Remember — one is objective (measurable) and one is subjective (the patient tells you).",a:["Symptom","Diagnosis","Prognosis","Sign"],c:3},
      {v:400,q:"The study of what CAUSES a disease. Not what it does, not how to treat it, but WHY it happened in the first place. What's this fancy word?",a:["Prognosis","Pathogenesis","Etiology","Epidemiology"],c:2},
      {v:600,q:"The doctor tells the family: 'The expected outcome is full recovery within 6 weeks.' What term describes this prediction about the disease course?",a:["Diagnosis","Etiology","Sign","Prognosis"],c:3},
      {v:800,q:"These medications are like the hype crew for your lungs — they help loosen and expel mucus from the respiratory tract when you have bronchitis.",a:["Antitussives","Bronchodilators","Decongestants","Expectorants"],c:3},
      {v:1000,q:"Abnormal cell growth that's disorganized and could potentially become cancerous if left unchecked. A Pap smear might catch this in the cervix. What's the term?",a:["Metaplasia","Hyperplasia","Dysplasia","Neoplasia"],c:2}
    ]
  ]
};

const round2 = {
  categories: ["Overreact Much?","Self-Destruct Mode","Blood Drama","The Cancer Chronicles","Clot or Not?","Pipe Problems"],
  clues: [
    [
      {v:400,q:"Your patient ate a shrimp and now their lips are swelling, they're wheezing, and they need an EpiPen STAT. What type of hypersensitivity is this IgE-mediated nightmare?",a:["Type II","Type III","Type IV","Type I"],c:3},
      {v:800,q:"A patient gets the wrong blood type during a transfusion. Antibodies attack the foreign red blood cells, complement activates, and cells start popping. What type of hypersensitivity?",a:["Type I","Type IV","Type II","Type III"],c:2},
      {v:1200,q:"Poison ivy rash shows up 48 hours after your weekend hike. No antibodies are involved — just angry T-cells doing their thing. What type of hypersensitivity is fashionably late?",a:["Type I","Type II","Type III","Type IV"],c:3},
      {v:1600,q:"Which immunoglobulin class sits on mast cells like a loaded weapon, ready to trigger degranulation and histamine release the moment an allergen shows up?",a:["IgA","IgG","IgM","IgE"],c:3},
      {v:2000,q:"Lupus is an example of THIS type of hypersensitivity where immune complexes deposit in tissues like tiny trash piles, clogging up joints, kidneys, and blood vessels.",a:["Type I — Immediate","Type II — Cytotoxic","Type III — Immune Complex","Type IV — Delayed"],c:2,dd:true}
    ],
    [
      {v:400,q:"This autoimmune condition targets the synovial joints, causing them to swell, hurt, and eventually deform. DMARDs like methotrexate are the treatment heavy-hitters.",a:["Osteoarthritis","Gout","Rheumatoid Arthritis","Lupus"],c:2},
      {v:800,q:"A toddler keeps getting respiratory infections because they're missing IgA antibodies. Their mucosal surfaces are basically unguarded. What's the most common immunodeficiency?",a:["DiGeorge Syndrome","SCID","HIV","Selective IgA Deficiency"],c:3},
      {v:1200,q:"Born without a thymus? Can't make T-cells? Often have heart defects and missing parathyroid glands too? What syndrome is this developmental disaster?",a:["Down Syndrome","DiGeorge Syndrome","Turner Syndrome","Klinefelter Syndrome"],c:1},
      {v:1600,q:"This virus specifically targets CD4+ T helper cells — the generals of your immune army. Without treatment, the immune system eventually collapses. Name the virus.",a:["Hepatitis C","Epstein-Barr","HIV","HPV"],c:2},
      {v:2000,q:"A patient's CD4+ count drops below 200 cells per microliter and they develop Pneumocystis pneumonia. Their HIV has now progressed to what stage?",a:["Stage 1 HIV","Acute retroviral syndrome","Chronic HIV","AIDS"],c:3}
    ],
    [
      {v:400,q:"Your patient is craving ice chips like it's a gourmet snack, they're pale and exhausted, and their ferritin is in the basement. What type of anemia has this weird craving symptom called pica?",a:["Sickle cell anemia","Pernicious anemia","Iron-deficiency anemia","Aplastic anemia"],c:2},
      {v:800,q:"An Rh-negative mother's antibodies cross the placenta and attack her Rh-positive baby's red blood cells. The newborn is jaundiced and anemic. What's this called?",a:["ITP","Hemolytic Uremic Syndrome","Erythroblastosis Fetalis","G6PD Deficiency"],c:2},
      {v:1200,q:"A patient can't absorb vitamin B12 because their stomach stopped making intrinsic factor. Now they have giant red blood cells AND tingling in their fingers. What anemia is this?",a:["Iron-deficiency anemia","Folate deficiency","Sickle cell anemia","Pernicious anemia"],c:3},
      {v:1600,q:"Both parents carry the gene, the RBCs look like crescent moons under the microscope, and the patient is having a vaso-occlusive pain crisis. What medication reduces sickling frequency?",a:["Warfarin","Epoetin alfa","Hydroxyurea","Iron supplements"],c:2,dd:true},
      {v:2000,q:"A trauma patient lost 30% of their blood volume. Their heart rate is 130, BP is dropping, but surprisingly their hematocrit is still normal. Why hasn't the hematocrit dropped yet?",a:["The lab made an error","Hematocrit only drops after fluid replacement dilutes the remaining blood","The patient has polycythemia","Adrenaline is artificially raising it"],c:1}
    ],
    [
      {v:400,q:"A lymph node biopsy reveals giant cells with 'owl eye' nuclei — the pathologist does a happy dance because the diagnosis is clear and the prognosis is good. What are these cells called?",a:["Auer rods","Philadelphia chromosome","Reed-Sternberg cells","Blast cells"],c:2},
      {v:800,q:"This leukemia is the most common cancer in children, involves immature lymphoblasts taking over the bone marrow, but the good news is the cure rate is over 85%.",a:["CLL","AML","CML","Acute Lymphoblastic Leukemia (ALL)"],c:3},
      {v:1200,q:"An elderly patient's CBC shows sky-high lymphocyte counts, but they feel fine. Their B cells forgot how to grow up. This slow-burning leukemia is most common in older adults.",a:["ALL","AML","Chronic Lymphocytic Leukemia (CLL)","Hodgkin's Lymphoma"],c:2},
      {v:1600,q:"A teenager had mono (Epstein-Barr virus) last year. Now they have painless swollen lymph nodes, night sweats, and weight loss. What cancer is associated with prior EBV infection?",a:["Non-Hodgkin's Lymphoma","Burkitt's Lymphoma","Hodgkin's Lymphoma","ALL"],c:2},
      {v:2000,q:"When the WBC count is elevated above 11,000 cells per microliter, usually due to infection or inflammation, what is this general finding called?",a:["Leukopenia","Thrombocytosis","Leukocytosis","Pancytopenia"],c:2}
    ],
    [
      {v:400,q:"After a viral infection like chickenpox, a child starts developing tiny purple spots (petechiae) and bruising easily. The immune system is destroying their platelets. What disorder is this?",a:["Hemophilia","DIC","Von Willebrand disease","Immune Thrombocytopenic Purpura (ITP)"],c:3},
      {v:800,q:"A patient has prolonged bleeding from a paper cut, spontaneous joint bleeds, and their factor VIII level is nearly zero. What genetic bleeding disorder do they have?",a:["ITP","Von Willebrand disease","Hemophilia A","DIC"],c:2},
      {v:1200,q:"The body's three-step process for stopping bleeding: first vessels narrow, then platelets plug the hole, then the coagulation cascade builds a fibrin net. What's this whole process called?",a:["Fibrinolysis","Hemostasis","Thrombosis","Coagulopathy"],c:1},
      {v:1600,q:"A patient with hemophilia wants to join the football team. As the nurse, what activity guidance do you give?",a:["Go for it, just wear extra pads","Avoid contact sports to prevent internal bleeding","Only play if factor levels are above 50%","Football is fine but no heading the ball"],c:1},
      {v:2000,q:"Normal platelet count range is 150,000 to 450,000 per microliter. Below 150,000 is called what?",a:["Thrombocytosis","Leukopenia","Pancytopenia","Thrombocytopenia"],c:3}
    ],
    [
      {v:400,q:"This 'silent killer' usually has NO symptoms but is quietly destroying your arteries, heart, kidneys, and brain at a blood pressure above 140/90 mmHg. What is it?",a:["Hyperlipidemia","Atherosclerosis","Hypertension","Peripheral artery disease"],c:2},
      {v:800,q:"Cholesterol plaques build up inside arterial walls over decades, narrowing the pipes. If one ruptures, you could have a heart attack or stroke. Name this chronic condition.",a:["Varicosity","Aneurysm","Atherosclerosis","Peripheral neuropathy"],c:2},
      {v:1200,q:"A post-surgical patient who's been lying in bed for days develops a swollen, warm, red left calf. Name THREE things from Virchow's Triad that put them at risk.",a:["Fever, tachycardia, hypertension","Anemia, dehydration, hypothermia","Stasis, endothelial injury, hypercoagulability","Bradycardia, hypotension, thrombocytopenia"],c:2},
      {v:1600,q:"Visible, enlarged, tortuous veins on someone's legs caused by incompetent valves letting blood pool. What's the medical term for these gnarly veins?",a:["Deep vein thrombosis","Phlebitis","Varicosity","Arterial stenosis"],c:2},
      {v:2000,q:"A 60-year-old obese patient had hip surgery 3 days ago and hasn't been moving much. Which class of medication is given prophylactically to prevent a deadly clot from forming?",a:["Antibiotics","Thrombolytics","Anticoagulants (heparin)","Vasopressors"],c:2}
    ]
  ]
};

let score = 0, correct = 0, wrong = 0;
function updateScore() {
  document.getElementById('scoreDisplay').textContent = (score >= 0 ? '$' : '-$') + Math.abs(score).toLocaleString();
  document.getElementById('correctDisplay').textContent = correct;
  document.getElementById('wrongDisplay').textContent = wrong;
}
function buildBoard(data, boardId, multiplier) {
  const board = document.getElementById(boardId);
  board.innerHTML = '';
  data.categories.forEach(cat => {
    const h = document.createElement('div');
    h.className = 'cat-header';
    h.textContent = cat;
    board.appendChild(h);
  });
  for (let row = 0; row < 5; row++) {
    for (let col = 0; col < 6; col++) {
      const clue = data.clues[col][row];
      const cell = document.createElement('div');
      cell.className = 'cell';
      cell.textContent = '$' + clue.v;
      cell.dataset.col = col;
      cell.dataset.row = row;
      cell.dataset.round = boardId === 'board1' ? '1' : '2';
      cell.addEventListener('click', () => openClue(cell, data, col, row));
      board.appendChild(cell);
    }
  }
}
function openClue(cell, data, col, row) {
  if (cell.classList.contains('used')) return;
  cell.classList.add('used');
  const clue = data.clues[col][row];
  if (clue.dd) {
    const flash = document.getElementById('ddFlash');
    flash.classList.add('visible');
    setTimeout(() => {
      flash.classList.remove('visible');
      showClueModal(clue, data.categories[col]);
    }, 2000);
  } else {
    showClueModal(clue, data.categories[col]);
  }
}
function showClueModal(clue, category) {
  const modal = document.getElementById('clueModal');
  document.getElementById('modalValue').textContent = category + ' — $' + clue.v;
  document.getElementById('modalClue').textContent = clue.q;
  document.getElementById('modalResult').textContent = '';
  document.getElementById('modalResult').className = 'modal-result';
  const choicesDiv = document.getElementById('modalChoices');
  choicesDiv.innerHTML = '';
  clue.a.forEach((ans, i) => {
    const btn = document.createElement('button');
    btn.className = 'choice-btn';
    btn.textContent = ans;
    btn.addEventListener('click', () => handleAnswer(btn, clue, i));
    choicesDiv.appendChild(btn);
  });
  modal.classList.add('visible');
}
function handleAnswer(btn, clue, idx) {
  const allBtns = btn.parentElement.querySelectorAll('.choice-btn');
  allBtns.forEach((b, i) => {
    b.classList.add('locked');
    if (i === clue.c) b.classList.add('show-correct');
  });
  const result = document.getElementById('modalResult');
  if (idx === clue.c) {
    btn.classList.add('correct-pick');
    score += clue.v;
    correct++;
    const cheers = ["Correct!", "Nailed it!", "You're on fire!", "That's right!", "Brilliant!", "Boom! Correct!", "Look at you go!"];
    result.textContent = cheers[Math.floor(Math.random() * cheers.length)] + ' +$' + clue.v;
    result.className = 'modal-result correct';
  } else {
    btn.classList.add('wrong-pick');
    score -= clue.v;
    wrong++;
    const boos = ["Ooh, not quite!", "So close!", "The board says no!", "Tough break!", "Better luck next time!"];
    result.textContent = boos[Math.floor(Math.random() * boos.length)] + ' -$' + clue.v;
    result.className = 'modal-result wrong';
  }
  updateScore();
}
function closeModal() {
  document.getElementById('clueModal').classList.remove('visible');
}
function showRound(r) {
  document.querySelectorAll('.round-tab').forEach((t, i) => t.classList.toggle('active', i === r - 1));
  document.getElementById('board1').style.display = r === 1 ? 'grid' : 'none';
  document.getElementById('board2').style.display = r === 2 ? 'grid' : 'none';
  document.getElementById('finalSection').classList.remove('visible');
}
function showFinal() {
  document.querySelectorAll('.round-tab').forEach((t, i) => t.classList.toggle('active', i === 2));
  document.getElementById('board1').style.display = 'none';
  document.getElementById('board2').style.display = 'none';
  document.getElementById('finalSection').classList.add('visible');
}
function answerFinal(btn, isCorrect) {
  const allBtns = document.querySelectorAll('#finalChoices .choice-btn');
  allBtns.forEach(b => {
    b.classList.add('locked');
    if (b.textContent.includes('Systemic Lupus')) b.classList.add('show-correct');
  });
  const result = document.getElementById('finalResult');
  if (isCorrect) {
    btn.classList.add('correct-pick');
    score += 5000;
    correct++;
    result.textContent = "CORRECT! You're a Pathophysiology Champion! +$5,000";
    result.className = 'modal-result correct';
  } else {
    btn.classList.add('wrong-pick');
    score -= 5000;
    wrong++;
    result.textContent = "Not quite! The answer was SLE — the Great Imitator! -$5,000";
    result.className = 'modal-result wrong';
  }
  updateScore();
}
function toggleCard(header) {
  header.classList.toggle('open');
  header.nextElementSibling.classList.toggle('open');
}
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});
buildBoard(round1, 'board1');
buildBoard(round2, 'board2');
