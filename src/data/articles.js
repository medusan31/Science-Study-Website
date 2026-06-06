export const articles = {
  ohm: {
    title: "Ohm's Law",
    subtitle: "The Relationship Between Voltage, Current, and Resistance",
    body: `## What Is Ohm's Law?

Every time you flip a light switch or charge your phone, three quantities are working together behind the scenes: **voltage**, **current**, and **resistance**. **Ohm's Law** is the simple equation that connects all three. It was published in 1827 by German physicist Georg Ohm and remains one of the most important formulas in all of electrical science.

The law states:

> **V = I × R**

where **V** is voltage (measured in **volts**, V), **I** is current (measured in **amperes** or amps, A), and **R** is resistance (measured in **ohms**, Ω).

---

## Understanding the Three Quantities

**Voltage (V)** is the *electric potential difference* between two points — think of it as the "pressure" that pushes electric charges through a circuit. A 9-volt battery pushes charges with nine volts of pressure.

**Current (I)** is the *rate of flow* of electric charge through a conductor. A higher current means more charges passing a point per second. Current is measured in amperes (amps).

**Resistance (R)** is the *opposition* a material offers to current flow. Every wire, resistor, and light bulb has some resistance that limits how much current can flow.

---

## Rearranging the Formula

Ohm's Law can be rearranged to solve for any of the three quantities depending on what you know:

| Solve for | Formula |
|-----------|---------|
| Voltage | V = I × R |
| Current | I = V ÷ R |
| Resistance | R = V ÷ I |

A helpful way to remember this is the **V-I-R triangle**: write V on top and I × R on the bottom. Cover up the quantity you want to find, and the triangle shows the operation for the other two.

---

## Direct and Inverse Relationships

Ohm's Law reveals two important relationships:

- **Voltage and current are directly proportional.** If you double the voltage across a fixed resistance, the current doubles as well.
- **Resistance and current are inversely proportional.** If you double the resistance while keeping voltage constant, the current is cut in half.

These relationships explain everyday observations. A higher-voltage battery drives more current through a circuit; a thicker wire (lower resistance) allows more current to flow.

---

[[examples]]

---

## Key Takeaways

- Ohm's Law: **V = I × R**
- Voltage (V) is measured in **volts**; current (I) in **amperes**; resistance (R) in **ohms (Ω)**
- Doubling voltage doubles current (resistance constant)
- Doubling resistance halves current (voltage constant)
- The formula can be rearranged to find whichever quantity is unknown`,
    examples: [
      {
        question: "A resistor has 20 Ω of resistance and 40 V is applied across it. What is the current through it?",
        explanation: "Using I = V ÷ R: I = 40 ÷ 20 = 2 A. Voltage and current are directly proportional — more voltage means more current through the same resistance.",
        options: [
          { id: 'a', text: '800 A', correct: false },
          { id: 'b', text: '0.5 A', correct: false },
          { id: 'c', text: '2 A', correct: true },
          { id: 'd', text: '60 A', correct: false },
        ],
      },
      {
        question: "A current of 0.5 A flows through a resistor when 6 V is applied across it. What is the resistance?",
        explanation: "Using R = V ÷ I: R = 6 ÷ 0.5 = 12 Ω. Dividing voltage by current gives resistance — note that 6 × 0.5 = 3 gives power (watts), not resistance.",
        options: [
          { id: 'a', text: '0.083 Ω', correct: false },
          { id: 'b', text: '3 Ω', correct: false },
          { id: 'c', text: '6.5 Ω', correct: false },
          { id: 'd', text: '12 Ω', correct: true },
        ],
      },
      {
        question: "A current of 3 A flows through a 7 Ω resistor. What is the voltage across it?",
        explanation: "Using V = I × R: V = 3 × 7 = 21 V. Multiply current by resistance to get voltage — this is the most direct application of Ohm's Law.",
        options: [
          { id: 'a', text: '2.33 V', correct: false },
          { id: 'b', text: '10 V', correct: false },
          { id: 'c', text: '21 V', correct: true },
          { id: 'd', text: '0.43 V', correct: false },
        ],
      },
    ],
  },

  power: {
    title: "Electrical Power and Energy",
    subtitle: "How Fast Energy Is Used — and How Much",
    body: `## Power vs. Energy: What's the Difference?

When you look at the back of a microwave, you might see "1200 W." That number tells you how fast the microwave uses electrical energy. **Power** is the *rate* at which energy is transferred or used, while **energy** is the total amount transferred over time.

- **Power** is measured in **watts (W)**, named after Scottish engineer James Watt.
- **Energy** is measured in **joules (J)** — or, for larger amounts, **kilowatt-hours (kWh)** on your electric bill.

One watt equals one joule of energy used per second.

---

## The Power Formula

The fundamental formula for electrical power is:

> **P = I × V**

where **P** is power in watts, **I** is current in amperes, and **V** is voltage in volts.

This makes intuitive sense: a device that draws more current *or* operates at higher voltage uses more power.

---

## Two More Power Formulas

Using Ohm's Law (V = IR), we can substitute to get two additional power formulas that are useful when you don't know both current and voltage:

**When you know current and resistance:**

> **P = I² × R**

**When you know voltage and resistance:**

> **P = V² ÷ R**

These three formulas — P = IV, P = I²R, and P = V²/R — all calculate the same quantity. You choose whichever one matches the values you already know.

---

## Heat as a Consequence of Power

When current flows through a resistor, electrical energy is converted into **thermal energy (heat)**. This is exactly what happens in a toaster, an electric stove burner, or the filament of an incandescent light bulb. The formula P = I²R shows that power dissipated as heat grows with the *square* of the current — doubling the current quadruples the heat produced. This is why overloaded wires overheat dangerously.

---

## Calculating Electrical Energy

Since power is the *rate* of energy use:

> **Energy (J) = Power (W) × Time (s)**

For larger amounts, energy companies use kilowatt-hours:

> **Energy (kWh) = Power (kW) × Time (hours)**

One kilowatt-hour = 3,600,000 joules.

---

[[examples]]

---

## Key Takeaways

- Power (watts) = rate of energy use; Energy (joules) = total energy transferred
- **P = IV** — the fundamental power formula
- **P = I²R** — use when you know current and resistance
- **P = V²/R** — use when you know voltage and resistance
- Heat produced in a resistor grows with the *square* of the current
- 1 kWh = 3,600,000 J`,
    examples: [
      {
        question: "A lamp draws 2 A from a 120 V source. What is its power consumption?",
        explanation: "P = I × V = 2 × 120 = 240 W. Power is the product of current and voltage — a lamp that draws more current or runs on higher voltage uses more power.",
        options: [
          { id: 'a', text: '60 W', correct: false },
          { id: 'b', text: '122 W', correct: false },
          { id: 'c', text: '240 W', correct: true },
          { id: 'd', text: '24 W', correct: false },
        ],
      },
      {
        question: "A 10 Ω resistor carries 3 A of current. How much power does it dissipate?",
        explanation: "P = I² × R = 3² × 10 = 9 × 10 = 90 W. The current must be squared first — a common mistake is forgetting to square it and writing 3 × 10 = 30 W instead.",
        options: [
          { id: 'a', text: '30 W', correct: false },
          { id: 'b', text: '90 W', correct: true },
          { id: 'c', text: '0.9 W', correct: false },
          { id: 'd', text: '900 W', correct: false },
        ],
      },
      {
        question: "A 100 W bulb operates on 120 V. What current does it draw?",
        explanation: "Rearranging P = IV gives I = P ÷ V = 100 ÷ 120 ≈ 0.83 A. This shows how power and current relate at a given voltage.",
        options: [
          { id: 'a', text: '0.83 A', correct: true },
          { id: 'b', text: '1.2 A', correct: false },
          { id: 'c', text: '12,000 A', correct: false },
          { id: 'd', text: '20 A', correct: false },
        ],
      },
      {
        question: "A heating element with 60 Ω of resistance is connected to a 240 V source. What is the power?",
        explanation: "P = V² ÷ R = 240² ÷ 60 = 57,600 ÷ 60 = 960 W. Use this formula when resistance and voltage are known but current is not. Squaring 240 first is the critical step.",
        options: [
          { id: 'a', text: '4 W', correct: false },
          { id: 'b', text: '14,400 W', correct: false },
          { id: 'c', text: '960 W', correct: true },
          { id: 'd', text: '57,600 W', correct: false },
        ],
      },
    ],
  },

  series: {
    title: "Series Circuits",
    subtitle: "One Path, Shared Current",
    body: `## What Is a Series Circuit?

A **series circuit** is a circuit in which all components are connected end-to-end along a single path. There is only one route for current to travel from the negative terminal of the power source, through every component, and back to the positive terminal. No branches, no shortcuts — just one continuous loop.

The classic real-world example: older-style holiday string lights wired in series. If one bulb burns out and breaks the loop, *every* light on the string goes dark.

---

## Rule 1: Current Is the Same Everywhere

Because there is only one path, the same current flows through every component in a series circuit. Whether you measure current at the battery, the first resistor, or the last — the reading is identical.

> **I_total = I₁ = I₂ = I₃ = ...**

---

## Rule 2: Voltage Is Divided Among Components

The power source provides a total voltage, and that voltage is *shared* — or divided — across the components in proportion to their resistance. The sum of all individual voltage drops equals the source voltage.

> **V_total = V₁ + V₂ + V₃ + ...**

For example, two identical resistors in series with a 12 V battery each receive 6 V. A resistor with twice the resistance receives twice as much voltage.

---

## Rule 3: Resistances Add Together

Total resistance in a series circuit is simply the sum of all individual resistances:

> **R_total = R₁ + R₂ + R₃ + ...**

Adding more resistors in series always *increases* total resistance, which in turn *decreases* current.

---

## Batteries in Series

When batteries are connected in series (positive terminal of one to the negative terminal of the next), their voltages add together. Two 1.5 V batteries in series produce 3 V; three produce 4.5 V. This is how multi-cell flashlights and battery packs work.

---

## What Happens When a Component Fails?

If any component in a series circuit burns out or is disconnected, it creates an **open circuit** — a complete break in the only path. Current immediately drops to zero throughout the entire circuit. This is both the defining weakness of series wiring and the reason homes are *not* wired this way.

---

[[examples]]

---

## Key Takeaways

- One path → **same current** through every component
- Total voltage = **sum of voltage drops** across each component
- Total resistance = **sum of all resistances** (R₁ + R₂ + ...)
- One failed component **breaks the entire circuit**
- Batteries in series: **voltages add** together`,
    examples: [
      {
        question: "Resistors of 3 Ω, 7 Ω, and 10 Ω are connected in series. What is the total resistance?",
        explanation: "R_total = 3 + 7 + 10 = 20 Ω. In a series circuit resistances simply add — every resistor in the single path contributes its full resistance to the total.",
        options: [
          { id: 'a', text: '10 Ω', correct: false },
          { id: 'b', text: '20 Ω', correct: true },
          { id: 'c', text: '210 Ω', correct: false },
          { id: 'd', text: '2 Ω', correct: false },
        ],
      },
      {
        question: "That same series circuit (total resistance 20 Ω) is connected to a 40 V battery. What is the current?",
        explanation: "I = V ÷ R_total = 40 ÷ 20 = 2 A. Always use the total series resistance when calculating current, not just one resistor's value.",
        options: [
          { id: 'a', text: '4 A', correct: false },
          { id: 'b', text: '0.5 A', correct: false },
          { id: 'c', text: '40 A', correct: false },
          { id: 'd', text: '2 A', correct: true },
        ],
      },
      {
        question: "Three 1.5 V batteries are connected in series, positive-to-negative. What is the total voltage?",
        explanation: "1.5 + 1.5 + 1.5 = 4.5 V. Series batteries stack their voltages — each one adds its potential to the chain, just like the AA batteries in a flashlight.",
        options: [
          { id: 'a', text: '1.5 V', correct: false },
          { id: 'b', text: '0.5 V', correct: false },
          { id: 'c', text: '4.5 V', correct: true },
          { id: 'd', text: '3.375 V', correct: false },
        ],
      },
    ],
  },

  parallel: {
    title: "Parallel Circuits",
    subtitle: "Multiple Paths, Shared Voltage",
    body: `## What Is a Parallel Circuit?

A **parallel circuit** connects components side by side so that each component has its own separate, independent path between the same two points. Instead of one shared route, current has multiple roads to travel. This arrangement is how virtually every electrical system in your home, school, or car is wired — and for good reason.

---

## Rule 1: Voltage Is the Same Across Every Branch

Every branch in a parallel circuit connects directly across the same two nodes (the same positive and negative points). Therefore, every branch sees the exact same voltage — the full supply voltage.

> **V_total = V₁ = V₂ = V₃ = ...**

This is why every appliance in your home receives 120 V (in the US), regardless of how many other devices are plugged in at the same time.

---

## Rule 2: Current Divides Among the Branches

The total current from the source splits at each junction, with each branch receiving a current that depends on its own resistance (more resistance = less current in that branch). The total current is the sum of all branch currents.

> **I_total = I₁ + I₂ + I₃ + ...**

A branch with lower resistance draws more current; a branch with higher resistance draws less.

---

## Rule 3: Total Resistance Decreases with Each Branch Added

For parallel resistors, total resistance is found using the **reciprocal formula**:

> **1/R_total = 1/R₁ + 1/R₂ + 1/R₃ + ...**

Each new branch provides another path for current, so total resistance is always *less* than the smallest individual resistor. Adding more parallel branches lowers total resistance and increases total current drawn from the source.

**Shortcut for two resistors:**

> R_total = (R₁ × R₂) ÷ (R₁ + R₂)

---

## What Happens When One Branch Fails?

Unlike a series circuit, a break in one parallel branch affects only that branch. The other branches have their own complete paths and continue operating normally. This is the critical safety and convenience advantage of parallel wiring — one burned-out bulb does not shut down the rest of the circuit.

---

## Why Homes Are Wired in Parallel

Household wiring is parallel because:

- Every outlet delivers the **full voltage** (120 V) to every device.
- Devices operate **independently** — turning one off or unplugging it has no effect on others.
- Each circuit can be protected individually with its own fuse or breaker.

---

[[examples]]

---

## Key Takeaways

- Multiple paths → **same voltage** across every branch
- Current divides: **I_total = I₁ + I₂ + ...**
- Total resistance **decreases** with each branch added; always less than the smallest resistor
- One failed branch **does not affect the others**
- Home wiring is parallel so every outlet gets full voltage and works independently`,
    examples: [
      {
        question: "Resistors of 6 Ω and 12 Ω are connected in parallel. What is the total resistance?",
        explanation: "Product-over-sum: R = (6 × 12) ÷ (6 + 12) = 72 ÷ 18 = 4 Ω. Notice the result (4 Ω) is less than the smallest resistor (6 Ω) — this is always true for parallel resistors.",
        options: [
          { id: 'a', text: '18 Ω', correct: false },
          { id: 'b', text: '9 Ω', correct: false },
          { id: 'c', text: '72 Ω', correct: false },
          { id: 'd', text: '4 Ω', correct: true },
        ],
      },
      {
        question: "Resistors of 4 Ω, 6 Ω, and 12 Ω are connected in parallel. What is the total resistance?",
        explanation: "1/R_total = 1/4 + 1/6 + 1/12 = 3/12 + 2/12 + 1/12 = 6/12 = 1/2, so R_total = 2 Ω. Don't forget to flip the result — 1/R = 0.5 means R = 2 Ω, not 0.5 Ω.",
        options: [
          { id: 'a', text: '22 Ω', correct: false },
          { id: 'b', text: '7.33 Ω', correct: false },
          { id: 'c', text: '0.5 Ω', correct: false },
          { id: 'd', text: '2 Ω', correct: true },
        ],
      },
    ],
  },

  history: {
    title: "Pioneers of Electrical Science",
    subtitle: "The Scientists Who Shaped Our Understanding of Electricity",
    body: `## Why History Matters in Science

The electrical devices you use every day — from LED lights to smartphones — exist because of a series of discoveries made over roughly 200 years. Each scientist below contributed a piece of the puzzle. Many of them also have electrical units named in their honor, which is one reason learning their names matters.

---

## Alessandro Volta (1745–1827) — The First Battery

Italian physicist Alessandro Volta invented the **voltaic pile** in 1800, the world's first true battery. He stacked alternating discs of zinc and copper separated by brine-soaked cloth, producing a steady electric current for the first time in history. Before Volta, scientists could only study brief sparks of static electricity.

**Named in his honor:** The **volt (V)**, the unit of electric potential (voltage).

---

## Hans Christian Ørsted (1777–1851) — Electricity Meets Magnetism

In 1820, Danish physicist Hans Christian Ørsted made a landmark observation: a compass needle deflected when placed near a current-carrying wire. This proved, for the first time, that **electric current creates a magnetic field** — founding the field of *electromagnetism*. Before Ørsted, electricity and magnetism were thought to be completely separate forces.

---

## André-Marie Ampère (1775–1836) — Quantifying Current

French physicist André-Marie Ampère built on Ørsted's discovery, developing the mathematical framework for how electric currents interact with magnetic fields. He also studied the relationship between current strength and the forces it produces.

**Named in his honor:** The **ampere (A)**, the unit of electric current.

---

## Georg Ohm (1789–1854) — The Law of Resistance

German physicist Georg Ohm published his findings in 1827: the current through a conductor is directly proportional to the voltage applied and inversely proportional to the resistance. This relationship — **V = IR** — is called *Ohm's Law* and is the cornerstone of circuit analysis.

**Named in his honor:** The **ohm (Ω)**, the unit of electrical resistance.

---

## Michael Faraday (1791–1867) — Generating Electricity from Magnetism

English scientist Michael Faraday discovered **electromagnetic induction** in 1831: moving a magnet through a coil of wire generates an electric current. This was the inverse of Ørsted's discovery. Faraday's principle is the operating basis of every electrical generator and transformer on Earth today.

**Named in his honor:** The **farad (F)**, the unit of electrical capacitance.

---

## Benjamin Franklin (1706–1790) — Lightning Is Electricity

American statesman and scientist Benjamin Franklin conducted his famous **kite experiment** in the 1750s, proving that lightning is an electrical phenomenon. He also invented the **lightning rod**, which protects buildings by providing a low-resistance path for lightning to reach the ground safely. Franklin also established the convention of positive and negative charge.

---

## James Watt (1736–1819) — Power and the Steam Age

Scottish engineer James Watt dramatically improved the steam engine in the 18th century. While not an electrical scientist, the SI unit of power was named after him because of his foundational work on energy and mechanical output.

**Named in his honor:** The **watt (W)**, the unit of power (1 W = 1 joule per second).

---

## Thomas Edison (1847–1931) — Practical Electricity for Everyone

American inventor Thomas Edison developed a practical, long-lasting incandescent **light bulb** in 1879 and built the world's first commercial electrical power distribution system in New York City in 1882. His system used **direct current (DC)**.

---

## Nikola Tesla (1856–1943) — The AC Revolution

Serbian-American inventor Nikola Tesla championed **alternating current (AC)** systems, including the AC induction motor and multi-phase power transmission. Backed by George Westinghouse, Tesla's AC system won the famous "War of Currents" against Edison's DC system and became the global standard for power distribution.

---

## Gustav Kirchhoff (1824–1887) — Laws for Every Circuit

German physicist Gustav Kirchhoff published two circuit laws in 1845:

- **KCL (Kirchhoff's Current Law):** The total current entering a junction equals the total current leaving it.
- **KVL (Kirchhoff's Voltage Law):** The sum of all voltages around any closed loop equals zero.

These laws, combined with Ohm's Law, allow engineers to analyze circuits of any complexity.

---

[[examples]]

---

## Quick Reference: Scientists and Their Units

| Scientist | Discovery / Contribution | Unit Named After Them |
|---|---|---|
| Volta | First battery (1800) | Volt (V) — voltage |
| Ampère | Quantified electric current | Ampere (A) — current |
| Ohm | V = IR (Ohm's Law, 1827) | Ohm (Ω) — resistance |
| Watt | Steam engine / power | Watt (W) — power |
| Faraday | Electromagnetic induction (1831) | Farad (F) — capacitance |`,
    examples: [
      {
        question: "In 1820, which scientist first proved that electric current creates a magnetic field by observing a compass needle deflect near a wire?",
        explanation: "Hans Christian Ørsted made this discovery in 1820, founding the field of electromagnetism. His observation that a compass needle moves near a live wire showed that electricity and magnetism are linked.",
        options: [
          { id: 'a', text: 'Alessandro Volta', correct: false },
          { id: 'b', text: 'Georg Ohm', correct: false },
          { id: 'c', text: 'Hans Christian Ørsted', correct: true },
          { id: 'd', text: 'Michael Faraday', correct: false },
        ],
      },
      {
        question: "The unit of electrical resistance (Ω) is named after which scientist?",
        explanation: "Georg Ohm formulated V = IR in 1827, showing the mathematical relationship between voltage, current, and resistance. The unit of resistance was named the ohm (Ω) in his honor.",
        options: [
          { id: 'a', text: 'André-Marie Ampère', correct: false },
          { id: 'b', text: 'Alessandro Volta', correct: false },
          { id: 'c', text: 'Georg Ohm', correct: true },
          { id: 'd', text: 'Gustav Kirchhoff', correct: false },
        ],
      },
      {
        question: "Which scientist discovered that moving a magnet through a coil of wire generates electricity — the principle behind every modern generator?",
        explanation: "Michael Faraday discovered electromagnetic induction in 1831. This reverse of Ørsted's finding — using magnetism to create electricity — is how all generators, power plants, and transformers work.",
        options: [
          { id: 'a', text: 'Nikola Tesla', correct: false },
          { id: 'b', text: 'Thomas Edison', correct: false },
          { id: 'c', text: 'Benjamin Franklin', correct: false },
          { id: 'd', text: 'Michael Faraday', correct: true },
        ],
      },
    ],
  },

  conductors: {
    title: "Conductors, Insulators, and Semiconductors",
    subtitle: "Why Some Materials Carry Electricity and Others Don't",
    body: `## The Core Question: What Happens to Electrons?

Every material is made of atoms, and every atom has electrons orbiting its nucleus. Whether a material conducts electricity depends on one thing: **how freely those electrons can move**. This determines whether a substance is a conductor, an insulator, or something in between.

---

## Conductors

A **conductor** is a material through which electric current flows easily. In conductors — almost always metals — the outermost electrons are only loosely attached to their atoms. These **free electrons** can drift from atom to atom throughout the material. When a voltage is applied, they move in a coordinated direction, creating electric current.

**Common conductors (best to least):** Silver, copper, gold, aluminum, iron.

Copper is by far the most widely used conductor in wiring because it has an excellent balance of high conductivity and low cost. Silver is actually the best conductor of any element, but its expense limits its use to specialized electronics. Gold resists corrosion and is used on high-quality electronic connectors. Aluminum is lighter and cheaper than copper and is used in high-voltage power transmission lines.

*Dry wood, glass, rubber, and plastic are poor conductors — they act as insulators.*

---

## Insulators

An **insulator** is a material that strongly resists the flow of electric current. In insulators, electrons are tightly bound to their atoms and cannot move freely. Without free electrons, no current can flow.

**Common insulators:** Rubber, plastic, glass, dry wood, ceramic, air.

Insulators are essential for safety. The rubber or plastic coating on an electrical wire keeps the current inside the copper conductor, preventing electric shock and stopping wires from accidentally touching each other (a **short circuit**).

**Note on water:** Pure water is actually a poor conductor. However, **salt water** conducts well because dissolved salt (NaCl) releases positive sodium ions (Na⁺) and negative chloride ions (Cl⁻) that carry charge through the liquid. This is why water and electricity are a dangerous combination in everyday life — tap water contains dissolved minerals that make it conductive.

---

## What Causes Electrical Resistance?

Even in conductors, electrons do not travel in a perfectly straight line. They constantly **collide with vibrating atoms** in the material. Each collision slows them down, impeding current flow. This is the physical cause of **electrical resistance**.

Three properties of a wire affect its resistance:

- **Length** — a longer wire has more atom-electron collisions, so resistance increases.
- **Thickness (cross-sectional area)** — a thicker wire has more space for electrons, lowering resistance.
- **Material** — different materials have different densities of free electrons and atomic structures (copper resists far less than nichrome wire).

One thing that does *not* affect resistance: **the color of the wire's insulation**. Color coding (black, white, green) is purely a labeling system for safety identification.

---

## Semiconductors

A **semiconductor** is a material whose conductivity falls between a conductor and an insulator — and, crucially, can be **controlled and adjusted**. The most important semiconductor is **silicon**, which is the foundation of virtually all modern electronics.

By adding tiny, precise amounts of other elements — a process called **doping** — engineers can tune a semiconductor's conductivity for specific tasks. This gives us:

- **Transistors** — the switches inside every computer chip
- **Diodes** — components that allow current to flow in only one direction
- **LEDs (Light Emitting Diodes)** — diodes that emit light when current flows through them in the forward direction

**Germanium** is another semiconductor used in some early electronics and specialized modern devices.

---

## Diodes and LEDs

A **diode** acts like a one-way valve for electricity: current flows freely from the anode to the cathode (forward direction) but is blocked in the reverse direction. This property is used to convert AC to DC (rectification) and to protect circuits from reverse current.

An **LED (Light Emitting Diode)** is a diode made of special semiconductor materials. When forward current passes through the junction, electrons release energy in the form of **light** rather than just heat. LEDs are far more energy-efficient than incandescent bulbs.

---

[[examples]]

---

## Key Takeaways

- Conductors have **free electrons**; insulators have **tightly bound electrons**
- Best conductors: silver, copper, gold, aluminum
- Best insulators: rubber, glass, plastic, dry wood
- Resistance is caused by **electron-atom collisions** inside the material
- Wire resistance depends on **length, thickness, and material** — not insulation color
- Salt water conducts because dissolved salt releases mobile **ions**
- Semiconductors (silicon, germanium) have **controllable conductivity**
- A **diode** allows current in one direction only; an **LED** emits light as current passes through it`,
    examples: [
      {
        question: "Which of the following materials is an electrical insulator?",
        explanation: "Rubber has tightly bound electrons that cannot move freely, making it an excellent insulator. This is why rubber coats electrical wires and why electricians wear rubber gloves. Aluminum, iron, and salt water all conduct electricity.",
        options: [
          { id: 'a', text: 'Aluminum', correct: false },
          { id: 'b', text: 'Salt water', correct: false },
          { id: 'c', text: 'Iron', correct: false },
          { id: 'd', text: 'Rubber', correct: true },
        ],
      },
      {
        question: "What is the physical cause of electrical resistance in a metal wire?",
        explanation: "As electrons drift through the wire under voltage, they collide with vibrating atoms. These collisions impede their movement, converting some electrical energy to heat. More collisions per unit length = higher resistance.",
        options: [
          { id: 'a', text: 'The color of the insulation coating', correct: false },
          { id: 'b', text: 'The weight of the metal atoms', correct: false },
          { id: 'c', text: 'Collisions between moving electrons and atoms in the material', correct: true },
          { id: 'd', text: 'The amount of voltage applied across the wire', correct: false },
        ],
      },
      {
        question: "Which statement correctly describes a semiconductor like silicon?",
        explanation: "Semiconductors have conductivity between conductors and insulators, and it can be precisely controlled through doping (adding impurity atoms). This adjustable conductivity is what makes transistors, diodes, and computer chips possible.",
        options: [
          { id: 'a', text: 'It conducts electricity better than any metal', correct: false },
          { id: 'b', text: 'It is an insulator that melts to become a conductor when heated', correct: false },
          { id: 'c', text: 'Its conductivity falls between conductors and insulators and can be controlled', correct: true },
          { id: 'd', text: 'It has more free electrons per atom than copper', correct: false },
        ],
      },
    ],
  },

  magnets: {
    title: "Electromagnets, Induction, and Electrical Machines",
    subtitle: "How Electricity and Magnetism Create Each Other",
    body: `## Electricity and Magnetism: Two Sides of the Same Coin

In 1820, Hans Christian Ørsted discovered that a current-carrying wire deflects a compass needle. This was the first proof that **electricity produces magnetism**. Just eleven years later, Michael Faraday showed the reverse: **a changing magnetic field produces electricity**. These two discoveries are the foundation of everything covered in this article — electromagnets, generators, motors, and transformers.

---

## What Is an Electromagnet?

An **electromagnet** is a magnet created by running electric current through a **coil of wire** (also called a solenoid). The moving charges in the wire generate a magnetic field around each loop; the coiled shape stacks all those fields in the same direction, producing a strong, concentrated magnet.

The critical difference from a permanent magnet: **an electromagnet can be switched on and off** by controlling the current. When current flows, the magnetic field exists. When current stops, the field disappears.

---

## Making an Electromagnet Stronger

Three factors increase the strength of an electromagnet:

- **More current** — higher current produces a stronger magnetic field.
- **More coils (turns of wire)** — each additional loop adds to the total field strength.
- **An iron core** — inserting a soft iron rod inside the coil dramatically amplifies the field. Iron is a **ferromagnetic** material, meaning its own internal magnetic domains align with the applied field, multiplying the total strength by hundreds of times.

*Soft iron* is used (not hard steel) because soft iron does not retain significant magnetism after the current is removed — the magnet turns off cleanly.

---

## Real-World Applications of Electromagnets

- **Scrap metal cranes** — switch on to pick up steel, switch off to drop it
- **Electric doorbells** — an electromagnet rapidly attracts and releases a metal striker
- **MRI machines** — extremely powerful electromagnets create detailed medical images
- **Speakers and headphones** — a voice coil (electromagnet) vibrates near a permanent magnet to produce sound
- **Maglev trains** — powerful electromagnets lift and propel the train without physical contact

---

## The Right-Hand Rule

Point your **right thumb** in the direction of conventional current flow (positive to negative). Your **curled fingers** show the direction the magnetic field circles around the wire. This right-hand rule lets you visualize the three-dimensional relationship between current direction and field direction without any calculation.

---

## Electromagnetic Induction

**Electromagnetic induction** is the generation of a voltage by a **changing magnetic field**. Faraday discovered that moving a magnet through a coil of wire — or changing the current in a nearby coil — induces a voltage in the wire. The key word is *changing*: a stationary magnet near a stationary coil produces nothing.

The faster the magnetic field changes (faster movement, stronger magnet, more coils), the greater the induced voltage.

---

## Electric Generators

A **generator** converts mechanical energy into electrical energy using electromagnetic induction. A coil of wire spins inside a magnetic field (or a magnet spins inside a coil). The constantly changing orientation of the coil relative to the field continuously induces a voltage, producing current.

Most generators produce **alternating current (AC)** because the direction of the induced voltage reverses each half-turn of the coil. Power plants — whether coal, gas, nuclear, wind, or hydro — all use this same basic principle: some energy source spins a turbine, and the turbine spins a generator coil.

---

## Electric Motors

An **electric motor** does the reverse of a generator: it converts electrical energy into mechanical (rotational) energy. Current flowing through a coil inside a magnetic field experiences a force (the **Lorentz force**) that causes the coil to rotate. This spinning motion can drive fans, pumps, wheels, and countless other machines.

> Generator: mechanical energy → electrical energy

> Motor: electrical energy → mechanical energy

---

## Transformers

A **transformer** uses electromagnetic induction to **increase or decrease AC voltage**. It consists of two coils — a *primary* and a *secondary* — wound around a shared iron core. Alternating current in the primary coil creates a changing magnetic field in the core, which induces a voltage in the secondary coil.

The voltage ratio equals the **turns ratio**:

> V_secondary / V_primary = N_secondary / N_primary

- More turns on the secondary → **step-up transformer** (higher output voltage)
- Fewer turns on the secondary → **step-down transformer** (lower output voltage)

Transformers only work with AC. They are what make long-distance power transmission practical: power companies step voltage up to hundreds of thousands of volts for transmission (lower current = less energy lost to heat), then step it back down to safe levels (120 V or 240 V) before it enters your home.

---

[[examples]]

---

## Key Takeaways

- An electromagnet needs **current through a coil** to create a magnetic field; it turns off when current stops
- Strength increases with **more current, more coils, or an iron core**
- **Electromagnetic induction:** a changing magnetic field induces a voltage in a conductor
- A **generator** converts mechanical → electrical energy (induction)
- A **motor** converts electrical → mechanical energy (Lorentz force)
- A **transformer** steps AC voltage up or down using the **turns ratio**; it does not work with DC`,
    examples: [
      {
        question: "Which action would increase the strength of an electromagnet?",
        explanation: "Adding more wire turns stacks each loop's magnetic field contribution, producing a stronger total field. More current also strengthens it, as does adding an iron core — but removing the core or reducing coils both weaken the magnet.",
        options: [
          { id: 'a', text: 'Decreasing the current through the coil', correct: false },
          { id: 'b', text: 'Removing the iron core from the coil', correct: false },
          { id: 'c', text: 'Reducing the number of wire turns', correct: false },
          { id: 'd', text: 'Adding more turns of wire to the coil', correct: true },
        ],
      },
      {
        question: "A transformer has 100 turns on the primary coil and 500 turns on the secondary. The input voltage is 120 V. What is the output voltage?",
        explanation: "V_out = V_in × (N_secondary ÷ N_primary) = 120 × (500 ÷ 100) = 120 × 5 = 600 V. More turns on the secondary means a higher output — this is a step-up transformer.",
        options: [
          { id: 'a', text: '24 V', correct: false },
          { id: 'b', text: '120 V', correct: false },
          { id: 'c', text: '600 V', correct: true },
          { id: 'd', text: '60,000 V', correct: false },
        ],
      },
      {
        question: "What energy conversion does an electric motor perform?",
        explanation: "A motor converts electrical energy into mechanical (rotational) energy using the force on a current-carrying coil in a magnetic field. A generator does the reverse — converting mechanical energy into electrical energy.",
        options: [
          { id: 'a', text: 'Mechanical energy into electrical energy', correct: false },
          { id: 'b', text: 'Chemical energy into electrical energy', correct: false },
          { id: 'c', text: 'Electrical energy into mechanical energy', correct: true },
          { id: 'd', text: 'Light energy into electrical energy', correct: false },
        ],
      },
    ],
  },

  diagrams: {
    title: "Reading Circuit Diagrams",
    subtitle: "The Universal Language of Electrical Schematics",
    body: `## Why Circuit Diagrams Exist

A real circuit involves physical wires, components, and connectors spread across a board or a wall. Drawing it realistically would be cluttered and hard to read. **Circuit diagrams** (also called *schematics*) solve this by replacing every component with a standardized symbol, and every wire with a straight line. Once you know the symbols, you can read and draw any circuit in the world using the same visual language.

---

## Basic Wiring Rules

Before learning the symbols, understand how wires are drawn:

- **Straight lines** represent wires — ideal conductors with no resistance.
- **A filled dot (•) at a junction** means two or more wires are **electrically connected** at that point. Current can flow between them.
- **Crossing lines without a dot** mean the wires pass over each other **without connecting** — like two highways on different levels. No current flows between them.

This dot convention is critical. Missing or adding a dot changes the entire circuit.

---

## The Essential Symbols

### Resistor

- **US symbol:** A zigzag (sawtooth) line
- **IEC/European symbol:** A plain rectangle

The zigzag visually suggests "opposition" or turbulence in current flow.

### Battery (or DC Voltage Source)

- **Symbol:** Alternating long and short vertical parallel lines
- The **long line** = positive terminal (+)
- The **short line** = negative terminal (−)

A multi-cell battery repeats this long-short pattern. Current flows from the negative terminal, through the external circuit, and back to the positive terminal.

### Light Bulb (Lamp)

- **Symbol:** A circle with a filament shape or an **X** inside

The circle represents the glass envelope; the inner shape represents the filament or element that produces light.

### Switch

- **Open switch:** A line that connects to a pivot point and then angles upward, leaving a visible **gap** in the circuit. No current flows.
- **Closed switch:** The line is straight and unbroken. Current flows freely.

### Capacitor

- **Symbol:** Two parallel lines of **equal length** separated by a gap

Do not confuse this with the battery symbol — both use parallel lines, but a capacitor's lines are equal in length, while a battery uses alternating long and short lines.

---

## Measuring Instruments

### Voltmeter

- **Symbol:** A circle with the letter **V** inside
- **Measures:** Voltage (potential difference) in volts
- **Connection:** Always connected **in parallel** with the component being measured — the voltmeter is placed across the component so it can sense the voltage on either side. Voltmeters have very high resistance so they draw almost no current from the circuit.

### Ammeter

- **Symbol:** A circle with the letter **A** inside
- **Measures:** Current in amperes
- **Connection:** Always connected **in series** — the ammeter is placed directly in the current path so all the current flows through it. Ammeters have very low resistance to avoid affecting the circuit.

*Memory tip: A **V**oltmeter goes in a **V**-shape (across, in parallel). An **A**mmeter goes **A**long the path (in series).*

---

## Putting It Together: Reading a Simple Circuit

Consider a circuit described as: "A 9 V battery connected to a 100 Ω resistor and a lamp in series, with a switch controlling the whole circuit."

In a schematic: draw the battery (long-short lines), wire to the switch (angled gap symbol), wire to the zigzag resistor, wire to the circle-with-X lamp, then return wire to the battery. The result is a closed rectangle of symbols — a complete loop. Every point where wires branch off needs a dot to show connection.

---

## Common Mistakes to Avoid

| Mistake | Correct Approach |
|---|---|
| Forgetting the dot at a junction | Any T-intersection where wires truly connect needs a filled dot |
| Using a battery symbol for a capacitor | Battery = alternating long/short lines; capacitor = two equal lines |
| Connecting a voltmeter in series | Voltmeters must be in parallel — in series, the high resistance blocks most current |
| Connecting an ammeter in parallel | Ammeters must be in series — in parallel, the low resistance causes a short circuit |

---

[[examples]]

---

## Key Takeaways

- **Dot at junction** = wires are connected; **no dot at crossing** = wires are not connected
- **Resistor:** zigzag (US) or rectangle (IEC)
- **Battery:** alternating long (+) and short (−) lines
- **Bulb:** circle with filament or X
- **Switch:** line with angled gap (open) or straight line (closed)
- **Voltmeter (V):** connected **in parallel** to measure voltage
- **Ammeter (A):** connected **in series** to measure current`,
    examples: [
      {
        question: "You need to measure the voltage across a resistor in a circuit. How should you connect the voltmeter?",
        explanation: "A voltmeter must be connected in parallel — touching both sides of the component it's measuring. Its very high internal resistance means it draws almost no current, so it doesn't disturb the circuit.",
        options: [
          { id: 'a', text: 'In series with the resistor', correct: false },
          { id: 'b', text: 'In parallel with the resistor', correct: true },
          { id: 'c', text: 'Connected to the battery terminal only', correct: false },
          { id: 'd', text: 'Between the resistor and the switch only', correct: false },
        ],
      },
      {
        question: "In a US-standard circuit diagram, which symbol represents a resistor?",
        explanation: "The zigzag (sawtooth) line is the US/ANSI standard for a resistor. European/IEC diagrams use a plain rectangle. The jagged shape is meant to visually suggest friction or opposition in the current path.",
        options: [
          { id: 'a', text: 'Alternating long and short parallel lines', correct: false },
          { id: 'b', text: 'A circle with an X inside', correct: false },
          { id: 'c', text: 'A line with an angled gap', correct: false },
          { id: 'd', text: 'A zigzag (sawtooth) line', correct: true },
        ],
      },
      {
        question: "Two wires cross in a circuit schematic without a dot at the intersection. What does this mean?",
        explanation: "The dot convention is critical: a filled dot at a junction means the wires connect electrically. No dot means they simply cross on paper — like two roads at different highway levels — with no electrical connection between them.",
        options: [
          { id: 'a', text: 'The wires are electrically connected at that point', correct: false },
          { id: 'b', text: 'There is a short circuit at that crossing', correct: false },
          { id: 'c', text: 'The wires cross without making an electrical connection', correct: true },
          { id: 'd', text: 'A component is located at the crossing point', correct: false },
        ],
      },
    ],
  },

  safety: {
    title: "Electrical Safety",
    subtitle: "Understanding Hazards and the Devices That Prevent Them",
    body: `## Why Electrical Safety Matters

Electricity is one of the most useful tools in modern life — and one of the most dangerous when misused. The hazards are invisible: you cannot see current flowing or feel voltage until it passes through you. Understanding what makes electricity dangerous, and how safety devices work, is essential knowledge both in the lab and in everyday life.

---

## The Real Danger: Current Through the Body

Voltage drives current, but it is the **current** flowing through the body that causes injury. Even a small current passing through the chest can be lethal:

- **1 mA (0.001 A):** Barely perceptible tingle
- **10–20 mA:** Muscle contractions; may be unable to release grip
- **50–100 mA:** Ventricular fibrillation (heart stops beating regularly) — potentially fatal
- **Above 100 mA:** Severe burns, cardiac arrest

This is why **you should never touch a live wire with both hands simultaneously**. If one hand contacts a live wire and the other contacts a grounded object, current travels a direct path across your chest — straight through your heart. Keeping one hand behind your back or in your pocket when working near live circuits ensures any accidental current takes a path that avoids the heart.

---

## Short Circuits

A **short circuit** occurs when current finds an unintended path of very low resistance that bypasses the normal load. For example, if a wire's insulation wears through and the bare copper touches another wire or a metal surface, current can flow through that contact rather than through the intended resistor or appliance.

Because resistance is near zero, Ohm's Law (I = V/R) means current becomes extremely large. This massive current generates enormous heat in the wires (P = I²R), can melt wire insulation, and can start fires. Short circuits are one of the leading causes of electrical fires.

---

## Overloaded Circuits

An **overloaded circuit** occurs when too many devices draw current through the same wiring. Each device adds its branch current; the total current through the supply wires grows with each device added. When the total current exceeds what the wiring is designed to carry, the wires overheat.

The danger formula is P = I²R: power dissipated as heat in the wire increases with the *square* of current. Doubling the current quadruples the heat produced in the wiring.

---

## Fuses: Sacrificial Protection

A **fuse** is a short piece of thin wire inside a protective casing, placed in series with the circuit. Its resistance is very low under normal conditions. If current exceeds the fuse's **rated value**, the thin wire heats up, melts, and creates an open circuit — stopping all current flow.

Key properties of fuses:

- They are **single-use**: once blown, they must be replaced.
- They are rated in amperes (e.g., a 15 A fuse blows when current exceeds 15 A).
- They protect wiring and devices from damage, not people from shock.

---

## Circuit Breakers: Resettable Protection

A **circuit breaker** performs the same protective function as a fuse — interrupting current when it exceeds a safe level — but it is **resettable**. Inside the breaker, a bimetallic strip or electromagnetic mechanism trips a switch when overcurrent is detected, creating an open circuit.

After fixing the problem that caused the overload or short circuit, the breaker can simply be reset to restore power. This is why homes use circuit breaker panels rather than individual fuses for their branch circuits.

---

## The Ground Wire

Standard electrical outlets in the US have three connections:

- **Hot (black wire):** carries current to the appliance at full line voltage
- **Neutral (white wire):** returns current back to the panel at near-zero voltage
- **Ground (green or bare wire):** a safety wire connected to the metal chassis of appliances and physically connected to the earth

Under normal operation, **no current flows through the ground wire**. It sits at zero volts, waiting. If a fault occurs — for example, the hot wire inside an appliance breaks and touches the metal case — the ground wire gives that fault current a low-resistance path to earth. This causes a large current spike that instantly trips the circuit breaker, cutting power before anyone can touch the now-electrified appliance.

---

## Safety Rules Summary

| Situation | Hazard | Protection |
|---|---|---|
| Wire insulation wears through | Short circuit → fire | Insulation inspection; fuse/breaker |
| Too many devices on one circuit | Overload → overheating | Circuit breaker; load balancing |
| Appliance wiring fault | Electrified chassis | Ground wire + breaker |
| Working near live wires | Current through chest/heart | One-hand rule; lockout procedures |

---

[[examples]]

---

## Key Takeaways

- **Current through the body** causes injury; as little as 50 mA through the chest can be fatal
- Never contact a live circuit with **both hands** — keeps current path away from the heart
- **Short circuit:** near-zero resistance bypass path → extreme current → fire risk
- **Overloaded circuit:** too much current in shared wiring → heat → fire risk
- **Fuse:** melts and breaks the circuit at excess current; must be replaced after use
- **Circuit breaker:** trips and breaks the circuit at excess current; can be reset
- **Ground wire:** provides a safe fault-current path to earth, triggering the breaker if an appliance chassis becomes live`,
    examples: [
      {
        question: "A fuse rated at 15 A is in a circuit that suddenly carries 20 A. What happens to the fuse?",
        explanation: "The thin wire inside the fuse heats up rapidly when current exceeds its rating and melts, creating an open circuit that stops all current flow. Unlike a circuit breaker, a blown fuse must be replaced — it cannot be reset.",
        options: [
          { id: 'a', text: 'The fuse allows the 20 A through but adds resistance to slow it down', correct: false },
          { id: 'b', text: 'The fuse melts and creates an open circuit, stopping all current', correct: true },
          { id: 'c', text: 'The fuse steps the current down to a safe 15 A level', correct: false },
          { id: 'd', text: 'The fuse stores the extra 5 A until conditions normalize', correct: false },
        ],
      },
      {
        question: "Why is a short circuit especially dangerous compared to a normal overload?",
        explanation: "A short circuit provides a near-zero resistance path. From Ohm's Law (I = V/R), when R ≈ 0, current becomes enormous. That extreme current generates intense heat (P = I²R), which can instantly melt insulation and ignite fires — far faster than a gradual overload.",
        options: [
          { id: 'a', text: 'It reduces the voltage in the circuit to zero', correct: false },
          { id: 'b', text: 'It causes resistors to store too much charge', correct: false },
          { id: 'c', text: 'It provides a near-zero resistance path, causing extreme current and dangerous heat', correct: true },
          { id: 'd', text: 'It reverses the direction of current flow through all components', correct: false },
        ],
      },
      {
        question: "Why should you never touch a live electrical wire with both hands at the same time?",
        explanation: "With one hand on a live wire and the other grounded, current flows directly across your chest — through your heart. As little as 50–100 mA through the heart can cause ventricular fibrillation. Using one hand keeps any accidental current on a safer path that avoids the heart.",
        options: [
          { id: 'a', text: 'Two-handed contact doubles the body\'s resistance and creates dangerous heat', correct: false },
          { id: 'b', text: 'Current would travel across your chest through your heart, risking cardiac arrest', correct: true },
          { id: 'c', text: 'The static charge in both hands would cancel the current unpredictably', correct: false },
          { id: 'd', text: 'It creates a short circuit in the wire itself', correct: false },
        ],
      },
    ],
  },

  concepts: {
    title: "Fundamental Electrical Concepts",
    subtitle: "Voltage, Current, Charge, and the Laws That Govern Every Circuit",
    body: `## Building the Foundation

Before studying specific circuits, it helps to have a clear, precise understanding of the core quantities that describe electricity. Many students mix up voltage, current, and resistance because all three are related by Ohm's Law — but each one describes something physically distinct. This article establishes those definitions and introduces a few broader concepts that apply to all circuits.

---

## Electric Charge

**Electric charge** is a fundamental property of matter. Electrons carry **negative** charge; protons carry **positive** charge. When charge moves, it creates electricity.

- **Unit:** coulomb (C), named after Charles-Augustin de Coulomb
- One coulomb is an enormous amount of charge — approximately 6.24 × 10¹⁸ electrons

Charge is **conserved**: it cannot be created or destroyed, only moved from one place to another. This principle underlies both Kirchhoff's laws.

---

## Electric Current

**Electric current** is the rate at which electric charge flows past a point in a circuit. When you say "3 amperes of current," you mean 3 coulombs of charge passing a given point every second.

- **Unit:** ampere (A), named after André-Marie Ampère
- **Formula:** I = Q / t (current = charge ÷ time)

In a metal conductor, current is carried by **electrons** moving through the wire. By historical convention, current direction is defined as flowing from **positive to negative** (the direction positive charges would move) — the opposite of actual electron flow.

---

## Voltage (Electric Potential Difference)

**Voltage** is the *electric potential difference* between two points — the "pressure" that drives current through a circuit. A higher voltage pushes more current through a given resistance.

- **Unit:** volt (V), named after Alessandro Volta
- **Analogy:** Voltage is like water pressure; current is like the flow rate; resistance is like the narrowness of the pipe

A standard AA battery provides approximately **1.5 V** of potential difference between its terminals. A standard US wall outlet provides **120 V AC**.

---

## Resistance

**Resistance** is the opposition a material offers to the flow of current. It results from electrons colliding with atoms inside the conductor. Every resistor, wire, and component has some resistance.

- **Unit:** ohm (Ω), named after Georg Ohm
- Higher resistance → less current for the same voltage (from I = V/R)

---

## Open and Closed Circuits

These terms describe whether a circuit is complete:

- **Closed circuit:** A continuous, unbroken conducting loop. Current *can* flow. When you flip a light switch on, you **close** the circuit.
- **Open circuit:** A gap or break somewhere in the loop. Current *cannot* flow — no matter how high the voltage, charge has nowhere to go. A disconnected switch or a burned-out fuse creates an open circuit.

*Note:* In everyday language, "open" means available or active. In circuit terminology, "open" means broken and inactive — the opposite. This is a common source of confusion.

---

## Direct Current (DC) vs. Alternating Current (AC)

**Direct current (DC)** flows steadily in one direction only. This is what batteries, solar cells, and USB chargers produce. Most portable electronic devices run on DC internally.

**Alternating current (AC)** periodically reverses direction — in the US at 60 Hz, meaning the current completes 60 full back-and-forth cycles every second. Wall outlets supply AC. AC is used for long-distance power transmission because transformers can easily step its voltage up (for efficient transmission) and back down (for safe home use).

| Property | DC | AC |
|---|---|---|
| Direction | One way only | Reverses periodically |
| Source | Batteries, solar cells | Power stations, wall outlets |
| Frequency | Not applicable | 60 Hz (US), 50 Hz (most of world) |

---

## Kirchhoff's Current Law (KCL)

**KCL** states: *the total current entering a junction equals the total current leaving that junction.*

This is a direct consequence of charge conservation — charge does not pile up at a node or disappear from it.

> I_in = I_out (at every junction)

This is exactly why current splits in a parallel circuit: if 6 A enters a junction that splits into two branches, those branches must together carry exactly 6 A.

---

## Kirchhoff's Voltage Law (KVL)

**KVL** states: *the sum of all voltages around any closed loop in a circuit equals zero.*

This is a consequence of energy conservation — as you travel around a complete loop, every volt gained from a source is eventually dropped across a load. No energy is created or lost.

> ΣV = 0 (around any closed loop)

In practice: add up all the voltage rises (batteries, sources) and all the voltage drops (resistors, components) around any loop — they must balance to zero.

---

[[examples]]

---

## Key Takeaways

- **Charge (coulombs):** the fundamental quantity; conservation of charge drives both Kirchhoff's laws
- **Current (amperes):** rate of charge flow; I = Q/t
- **Voltage (volts):** potential difference — the "pressure" that drives current
- **Open circuit:** broken path, no current; **closed circuit:** complete loop, current flows
- **DC:** one direction (batteries); **AC:** reverses periodically (wall outlets, 60 Hz in US)
- **KCL:** current into a junction = current out (charge conservation)
- **KVL:** voltages around any closed loop sum to zero (energy conservation)`,
    examples: [
      {
        question: "A standard AA battery produces approximately how much voltage?",
        explanation: "A standard AA (and AAA) battery produces approximately 1.5 V from the electrochemical reaction inside it. Two AA batteries in series give 3 V — the common setup in a flashlight. A 9 V battery is a separate, rectangular form factor.",
        options: [
          { id: 'a', text: '9 V', correct: false },
          { id: 'b', text: '12 V', correct: false },
          { id: 'c', text: '120 V', correct: false },
          { id: 'd', text: '1.5 V', correct: true },
        ],
      },
      {
        question: "Which statement correctly describes the difference between DC and AC electricity?",
        explanation: "DC (Direct Current) flows in a constant single direction — produced by batteries and solar cells. AC (Alternating Current) periodically reverses direction at 60 Hz in the US. The terms are commonly reversed by students — remember: Direct = one Direction.",
        options: [
          { id: 'a', text: 'AC flows in one direction; DC reverses direction many times per second', correct: false },
          { id: 'b', text: 'DC flows in one direction; AC reverses direction periodically', correct: true },
          { id: 'c', text: 'Both AC and DC always flow in one direction, just at different speeds', correct: false },
          { id: 'd', text: 'AC is produced by batteries; DC comes from wall outlets', correct: false },
        ],
      },
      {
        question: "A series circuit has a 12 V battery, a 2 Ω resistor, and a 4 Ω resistor. According to KVL, what is the voltage drop across the 4 Ω resistor?",
        explanation: "R_total = 2 + 4 = 6 Ω. I = 12 ÷ 6 = 2 A. Voltage across 4 Ω = 2 × 4 = 8 V. KVL check: 2×2 + 2×4 = 4 + 8 = 12 V ✓. The drops across all components must equal the source voltage.",
        options: [
          { id: 'a', text: '4 V', correct: false },
          { id: 'b', text: '3 V', correct: false },
          { id: 'c', text: '12 V', correct: false },
          { id: 'd', text: '8 V', correct: true },
        ],
      },
    ],
  },
}
