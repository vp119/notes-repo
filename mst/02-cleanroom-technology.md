# Topic B: Cleanroom Technology
**Course**: Microsystems Technologies and Processes (University of Freiburg)  
**Sources**: *Lecture Slides: MST Technologies and Processes, Cleanroom Technology.pdf*; *Rapp (2017)*

---

## Part 1: Cleanroom Standards & ISO Classifications

### Question 1.1: Standards & Quality Comparison
* **Question**: *Which norms are used to classify cleanroom quality? Which cleanroom quality level is higher: ISO 1 or ISO 6?*
* **Exam Appearances**: *WS 2021/2022 (Q2.1)*

#### Solution:
1. **Applicable Norms & Standards**: Cleanrooms are classified under international norm **ISO 14644-1**. Other historic or national standards include US Federal Standard **FS 209E** and German norm **VDI 2083**.
2. **ISO Level Comparison**: **ISO 1 is the higher (cleaner) quality level**. The ISO classification scale runs from ISO 1 (lowest particle concentration) to ISO 9 (uncontrolled ambient air).

---

### Question 1.2: ISO Class Requirements by Application
* **Question**: *What are common ISO classes used for white areas in a cleanroom for MEMS/Micromechanics versus Microelectronics?*
* **Exam Appearances**: *WS 2018/2019 (Q2.2), SS 2020 (Q2.2), SS 2024 (Q2.2), WS 2024/2025 (Q2.3)*

#### Solution:
* **MEMS / Micromechanics**:
  * **White Area**: **ISO 3 to ISO 6**.
  * **Grey Area**: **ISO 6 to ISO 7**.
* **Microelectronics**:
  * **White Area**: **ISO 1 to ISO 2**.
  * **Grey Area**: **ISO 2 to ISO 3**.

---

## Part 2: Environmental Parameters Controlled in a Cleanroom

### Question 2.1: Controlled Environmental Parameters
* **Question**: *Name four to five typical environmental parameters that are tightly controlled in a cleanroom.*
* **Exam Appearances**: *WS 2021/2022 (Q2.2)*

#### Solution:
The five primary environmental parameters controlled in a cleanroom include:
1. **Particle Load / Concentration**: Regulated by continuous air filtration through High-Efficiency / Ultra-Low Particulate Air (HEPA/ULPA) filters.
2. **Room Temperature**: Maintained at **22 °C** ($\\pm 0.5\text{ °C}$, ideally $\\pm 0.1\text{ °C}$), as temperature fluctuations significantly alter photoresist viscosity and spin-coating/curing dynamics.
3. **Relative Humidity**: Maintained at **45% relative humidity**, which prevents static charge accumulation while ensuring stable photoresist adhesion.
4. **Air Pressure**: Kept at positive overpressure in the white area relative to grey areas/chases to ensure outwards-directed airflow and prevent particle ingress.
5. **Air Flow Speed / Exchange Rate**: Average air speed is controlled at **0.4 m/s** to maintain stable laminar flow.
6. **Spectral Light Composition**: Blue/UV light is filtered out (using yellow lighting) in photolithography areas to prevent accidental resist exposure.

---

## Part 3: Cleanroom Etiquette & Behavioral Rules

### Question 3.1: Recommendations for Working in a Cleanroom
* **Question**: *Name four to six general recommendations/rules for working in a cleanroom (cleanroom etiquette).*
* **Exam Appearances**: *WS 2018/2019 (Q2.1), SS 2019 (Q2.1), SS 2020 (Q2.1), SS 2021 (Q5.1), WS 2021/2022 (Q2.4), SS 2023 (Q2.1), SS 2024 (Q2.1), SS 2025 (Q5.1)*

#### Solution:
*(Any 4 to 6 of the following points state correct cleanroom etiquette):*
1. **No food, beverages, or chewing gum** inside the cleanroom.
2. **Talk as little as possible** ("a cleanroom is like a library"), never exhale toward substrates, and turn sideways when speaking ("we talk to people, not to substrates").
3. **Do not bring paper protocols or standard pens/pencils** into the cleanroom, as paper fibers and graphite generate high particle counts (use cleanroom-compatible paper and pens).
4. **All physical movements must be slow and deliberate**; avoid running or forming crowds, as motion increases particle shedding dramatically (e.g., walking sheds $5 \times 10^6$ particles/min vs. sitting at $10^5$ particles/min).
5. **Cleanroom days are non-smoking days**, as smokers exhale elevated particle concentrations long after smoking.
6. **Suit up in protective garments bottom-to-top**: first cleanroom boots, then trousers, coat, face mask, and hood. Always wear safety goggles and nitrile gloves.
7. **Protect substrates during transport**: Carry wafers high and in front of the body in closed cassettes/fluoroware boxes; if open transport is unavoidable, carry wafers "sunny-side down" (sensitive surface facing downward).

---

## Part 4: Cleanroom Architecture & Layout Concepts

### Question 4.1: Cleanroom Setup Concepts
* **Question**: *Name the three common cleanroom setup concepts. State one advantage and one disadvantage for each.*
* **Exam Appearances**: *WS 2018/2019 (Q2.3), SS 2020 (Q2.3), SS 2022 (Q2.2), WS 2022/2023 (Q3.2), WS 2023/2024 (Q2.2), SS 2024 (Q2.3)*

#### Solution:

| Cleanroom Setup Concept | Description | Advantage | Disadvantage | Source Citation |
| :--- | :--- | :--- | :--- | :--- |
| **1. Ballroom Concept** | One single, large room with a uniform cleanroom ISO classification throughout. | **High flexibility** in equipment placement, tool layout, and spatial re-arrangement. | **High operating costs**, as the entire large room volume must be maintained at maximum cleanliness. | *Cleanroom Technology.pdf (slide "Cleanroom setup concepts: Ballroom")* |
| **2. Bay-Chase (Bay-Service Alley) Concept** | Space is divided into ultra-clean working corridors ("bays") and separated service aisles ("chases") housing machinery and utility lines. | **Energy-efficient and modular**; individual bays can be controlled and set to different ISO classes independently. | **Reduced spatial flexibility** for long or wide equipment setups across bays due to fixed partition walls. | *Cleanroom Technology.pdf (slide "Cleanroom setup concepts: Bay-chase")* |
| **3. Mini-Cleanroom / Local Isolation Concept** | Enclosed tabletop units or micro-environments (e.g., laminar flow boxes / SMIF) operating within a lower-grade background room. | **Significantly lower capital and operational costs**. | **Localized protection only**; lower cleanroom quality outside the enclosed mini-units and restricted sample handling area. | *Cleanroom Technology.pdf (slide "Mini cleanrooms")* |

---

### Question 4.2: Cleanroom Structural Cross-Section
* **Question**: *Draw a cross-section of a typical cleanroom. Label the relevant components, including: grey area, white area, plenum, bypacks, and media supply.*
* **Exam Appearances**: *WS 2022/2023 (Q3.1), WS 2023/2024 (Q2.1)*

#### Solution & Component Descriptions:
* **White Area**: The primary, ultra-clean processing room where operators work under filtered laminar downflow air.
* **Grey Area**: Adjacent service/maintenance corridors with lower ISO cleanliness requirements.
* **Plenum**: Upper ceiling compartment that mixes recycled and fresh air, conditions room temperature and humidity, and distributes air to Filter-Fan Units (FFUs).
* **Bypacks / Machine Room**: Lower utility level situated directly beneath the elevated cleanroom floor; mirrors the cleanroom layout to house vacuum pumps, gas lines, electrical supplies, and neutralization drains.
* **Media Supply**: Centralized supply lines feeding ultrapure water (UPW), compressed oil-free air, process gases ($\text{N}_2$, $\text{SF}_6$, $\text{O}_2$), and chemical disposal drains.
* **Diagram Reference**:
  > **Source Diagram Location**: *Lecture Slides: MST Technologies and Processes, Cleanroom Technology.pdf*, slide titled **"Setup of a cleanroom"** (illustrating the structural cross-section showing plenum, pressurized ceiling, FFUs, white area, elevated perforated floor, grey area, bypack level, and media lines).

---

## Part 5: Filter-Fan Units (FFUs) & Filtering Mechanisms

### Question 5.1: FFU Setup & Components
* **Question**: *Sketch and explain the setup of a Filter-Fan Unit (FFU). Label each component in your sketch.*
* **Exam Appearances**: *SS 2021 (Q5.2), SS 2025 (Q5.2)*

#### Solution:
An FFU consists of three functional components:
1. **Fan Unit**: Positioned at the top to draw air from the pressurized plenum ceiling into the housing.
2. **Filter Mat**: A fibrous mat (made of glass or synthetic microfibers) set below the fan that acts as the physical particle trap.
3. **Metal Fins / Laminarizer Grid**: Located at the bottom air outlet to support the filter mat and align air streams into a uniform **laminar flow**.
* **Diagram Reference**:
  > **Source Diagram Location**: *Lecture Slides: MST Technologies and Processes, Cleanroom Technology.pdf*, slide titled **"Filter-fan units (FFU)"** (showing fan blades, corrugated filter mat, metal fins, and vertical laminar airflow arrows).

---

### Question 5.2: The Four Filtering Mechanisms
* **Question**: *Filter-fan units (FFUs) make use of four distinct filtering effects. Name and briefly explain how each effect functions.*
* **Exam Appearances**: *SS 2020 (Q2.4), SS 2022 (Q2.5), WS 2022/2023 (Q3.3), WS 2023/2024 (Q2.3), SS 2024 (Q2.4), WS 2024/2025 (Q2.2)*

#### Solution:

```
Streamlines around a Filter Fiber:
     Straining       Impingement       Interception        Diffusion
   (Particle > Gap)  (Inertial Impact) (Attracts Fiber) (Brownian Motion)
     o---|  |--o       o-----\           o--------\          o  s  s
         |  |                 X (Hit)              o (Touch)   \  / \ X (Hit)
     +----------+     +----------+      +----------+       +----------+
     |  Fiber   |     |  Fiber   |      |  Fiber   |       |  Fiber   |
     +----------+     +----------+      +----------+       +----------+
```

1. **Straining (Sieving)**:
   * **Mechanism**: Mechanical trapping that occurs when a particle's physical diameter is **larger than the open pore gap** between two adjacent filter fibers.
   * **Target Particle Size**: Dominant for large particles ($\\ge 1\,\mu\text{m}$).
2. **Impingement (Inertial Impact)**:
   * **Mechanism**: Larger particles possess high momentum/inertia and cannot follow the bending fluid streamlines around a fiber. They deviate from the flow path and collide directly with the fiber surface.
   * **Target Particle Size**: Medium-to-large particles ($\\sim 0.1 - 1\,\mu\text{m}$).
3. **Interception**:
   * **Mechanism**: Particles follow the fluid streamlines around the fiber, but their finite physical radius causes their edge to touch the fiber surface, where van der Waals or electrostatic forces capture them.
   * **Target Particle Size**: Medium particles ($\\sim 0.1\,\mu\text{m}$).
4. **Diffusion (Brownian Motion)**:
   * **Mechanism**: Very small particles undergo erratic Brownian motion caused by collisions with surrounding gas molecules. This random movement causes particles to cross streamlines and bump into filter fibers.
   * **Target Particle Size**: Smallest particle fraction (down to $\\sim 0.01\,\mu\text{m} / 10\text{ nm}$).
* **Diagram Reference**:
  > **Source Diagram Location**: *Lecture Slides: MST Technologies and Processes, Cleanroom Technology.pdf*, slide titled **"Four filtering effects"**.

---

## Part 6: Cleanroom Utilities (Ultrapure Water & Neutralization)

### Question 6.1: Ultrapure Water (UPW) & Neutra System
* **Question**: *Briefly outline the processing steps for producing Ultrapure Water (UPW) and explain the purpose of the "Neutra" system.*
* **Exam Appearances**: *Conceptual coverage in cleanroom facility topics*

#### Solution:
1. **Ultrapure Water (UPW) Generation**:
   * Urban tap water is pre-filtered ($40\,\mu\text{m} / 20\,\mu\text{m}$ particle filters), softened, and desalinated via **reverse osmosis**.
   * $\text{CO}_2$ is removed using membrane exchangers, followed by **UV sterilization**.
   * Electrodeionization increases electrical resistivity to **$> 18.2\text{ M}\Omega\cdot\text{cm}$**, ensuring TOC levels in the low ppb range with zero particles $> 0.2\,\mu\text{m}$.
2. **Neutra Waste Water System**:
   * Process water discharged from wet benches is collected and monitored for pH.
   * The Neutra system automatically injects $\text{HCl}$ (if too alkaline) or $\text{NaOH}$ (if too acidic) to achieve a **neutral pH** before releasing water into the public municipal sewer.
