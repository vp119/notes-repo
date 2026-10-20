# Topic A: Process Classification & Fabrication Workflows
**Course**: Microsystems Technologies and Processes (University of Freiburg)  
**Sources**: *Lecture Slides: Introduction, Lithography, Etching, Oxidation*; *Rapp (2017)*; *Shaw et al. (1994)*; *Zhang & MacDonald (1992)*; *Bosch Patent WO1994014187A1*

---

## Part 1: Process Classification

### Question:
*Name the three categories of processes used in Microsystems Technology (MST) and sort the following processes into their corresponding category: Metallization, Development during lithography, Thermal oxidation.*  
*(Exam Appearances: WS 2018/2019 Q1.1, SS 2021 Q1.2, WS 2022/2023 Q1.2, WS 2023/2024 Q1.2, SS 2025 Q1.2)*

### Exam Solution:

1. **The Three Process Categories in MST**:
   * **Transformation Processing (Transformative)**: Processes that alter the chemical, physical, or material properties of a substrate/surface without adding or subtracting bulk material.
   * **Subtractive Processing**: Processes that remove material in a controlled pattern or overall manner from the substrate.
   * **Additive Processing**: Processes that deposit or grow new thin-film layers onto the substrate surface.

2. **Categorization Table**:

| Process | Process Category | Physical/Chemical Explanation | Source Citation |
| :--- | :--- | :--- | :--- |
| **Metallization** | **Additive** | Deposition of a new metallic thin film (e.g., Al, Au, Pt) onto the substrate via PVD (sputtering/evaporation) or electroplating. | *Lecture Slides: Introduction* |
| **Development during lithography** | **Subtractive** | Selective chemical dissolution and removal of exposed (positive resist) or unexposed (negative resist) material from the wafer surface. | *Lecture Slides: Introduction & Lithography* |
| **Thermal oxidation** | **Transformative** | High-temperature chemical conversion of elemental Silicon ($\text{Si}$) into Silicon Dioxide ($\text{SiO}_2$) via reaction with $\text{O}_2$ or $\text{H}_2\text{O}$ vapor. | *Lecture Slides: Introduction & Oxidation* |

---

## Part 2: Step-by-Step Fabrication Workflow Solutions

### 1. Anemometric Flow Sensor with Suspended Micro-Bridges
* **Exam Appearances**: **WS 2018/2019 (Q1.2–1.4)**, **SS 2020 (Q1)**, **WS 2022/2023 (Q1.1)**
* **Structure**: Silicon substrate with a V-groove microchannel spanned by suspended metal micro-bridges (Pt or Au).

#### Required Wafer Type & Orientation:
* **Wafer Type**: **(100) Silicon Wafer**.
* **Explanation**: Anisotropic wet chemical etching (using $\text{KOH}$ or $\text{TMAH}$) etches {100} silicon crystal planes rapidly while stopping at {111} planes. This anisotropic etch ratio produces a V-shaped channel bounded by precise $54.74^\circ$ sidewalls.

#### Step-by-Step Process Sequence:

```
Step 1: Thermal Oxidation        Step 2: Lift-Off Photolithography
  +-----------------------+        +---+  [Resist]  +---+
  |======== SiO2 ========|        |===|             |===|
  +-----------------------+        +-----------------------+
  |     (100) Silicon     |        |     (100) Silicon     |
  +-----------------------+        +-----------------------+

Step 3: Metal Deposition & Lift-Off    Step 4: Channel Oxide Masking & Anisotropic KOH Release
      [Metal Bridge]                       [Suspended Metal Bridge]
  +-------+  +-------+                  +-------+  \_____/  +-------+
  |=======|  |=======|                  |=======|   \   /   |=======|
  +-------------------+                  +---------\     /----------+
  |   (100) Silicon   |                  |   (100)  \___/   Silicon |
  +-------------------+                  +--------------------------+
```

1. **Substrate Preparation & Mask Oxide Growth**:
   * Clean a single-crystal (100) Silicon wafer.
   * Perform high-temperature thermal oxidation in a furnace to grow an insulating electrical passivation and etch-mask layer of Silicon Dioxide ($\text{SiO}_2$, ~200–500 nm).
2. **Micro-Bridge Electrode Patterning (Lift-Off Process)**:
   * Spin-coat a positive photoresist onto the $\text{SiO}_2$ surface.
   * Perform optical photolithography with **Mask 1** (micro-bridge geometry) and develop.
   * Sputter-deposit an adhesion layer (Titanium or Chromium, ~10–20 nm) followed by the micro-bridge metal layer (Platinum or Gold, ~100–200 nm).
   * Perform resist stripping in an organic solvent (acetone) for **lift-off**. Metal remains only where it directly contacts the $\text{SiO}_2$ substrate, defining the micro-bridge sensing lines.
3. **Flow Channel Window Lithography**:
   * Spin-coat a second photoresist layer over the structured wafer.
   * Align and expose **Mask 2** (channel opening, aligned perpendicular across the central segment of the metal micro-bridges) and develop.
4. **Oxide Mask Pattern Transfer**:
   * Etch the exposed $\text{SiO}_2$ layer using Buffered Hydrofluoric Acid (BHF wet etch) or $\text{CF}_4$ reactive ion etching (RIE).
   * This opens a window in the oxide layer exposing the underlying (100) Silicon substrate directly beneath the middle section of the metal bridges. Strip photoresist.
5. **Anisotropic Wet Silicon Etching & Bridge Release**:
   * Immerse the wafer in an anisotropic wet etch solution ($\text{KOH}$ or $\text{TMAH}$ at ~80°C).
   * The etchant etches downward into the exposed (100) Silicon crystal plane and halts laterally at the {111} sidewall planes, forming a V-groove microchannel.
   * As Silicon is removed from beneath the metal bridge lines, the micro-bridges are completely undercut and remain freely suspended across the flow channel.

---

### 2. SCREAM / Accelerometer Beam Structure
* **Exam Appearances**: **SS 2023 (Q1)**
* **Sources**: *Shaw et al., 1994 (SCREAM I)*, *Zhang & MacDonald, 1992*, *Lecture Slides: Etching*.
* **Structure**: High-aspect-ratio, single-crystal silicon beam structures with rounded undercut release cavities, protected by sidewall oxide ($\text{SiO}_2$).

#### Step-by-Step Process Sequence:

```
Step 1-3: Mask Oxide & 1st Deep RIE      Step 4-5: Sidewall Oxide & Floor Clear
      |---|       |---|                       |#||---|     |---||#|
      |   |       |   |                       |#||   |     |   ||#|
  +---|   |-------|   |---+               +---|#||   |-----|   ||#|---+
  |   |   |       |   |   |               |   |#||   |     |   ||#|   |
  |   |___|       |___|   |               |   |#||___|     |___||#|   |

Step 6-7: 2nd Deep RIE & Isotropic SF6 Release Etch
      |#||---|     |---||#|
      |#||   |     |   ||#|
  +---|#||   |-----|   ||#|---+
  |   |#||   |     |   ||#|   |
  |  (   )___(     )___(   )  |  <-- Undercut release cavity
  +---------------------------+
```

1. **Mask Oxide Preparation**: Deposit a 1–2 $\mu\text{m}$ thick Silicon Dioxide ($\text{SiO}_2$) mask layer onto a Single-Crystal Silicon (SCS) substrate using PECVD.
2. **Photolithography & Pattern Transfer**:
   * Spin-coat photoresist, expose beam pattern with **Mask 1**, and develop.
   * Transfer the beam pattern into the $\text{SiO}_2$ mask layer using anisotropic Magnetron Ion Etching (MIE) or RIE in $\text{CHF}_3$ plasma. Strip photoresist in $\text{O}_2$ plasma.
3. **First Deep Silicon Trench Etch**:
   * Etch vertical trenches into the silicon substrate (depth ~10–20 $\mu\text{m}$) using anisotropic RIE with $\text{Cl}_2 / \text{BCl}_3$ chemistry.
4. **Sidewall Oxide Passivation**:
   * Deposit a conformal thin layer (~0.3 $\mu\text{m}$) of PECVD $\text{SiO}_2$ across top mesas, vertical trench sidewalls, and trench floors.
5. **Anisotropic Floor Oxide Clear**:
   * Perform directional anisotropic RIE in $\text{CF}_4 / \text{O}_2$ plasma. Vertical ion bombardment removes the oxide from horizontal surfaces (top mesa and trench bottom) while leaving the vertical sidewall oxide intact.
6. **Second Deep Silicon Trench Etch**:
   * Perform a second anisotropic deep RIE ($\text{Cl}_2$) to etch 3–5 $\mu\text{m}$ deeper into the silicon floor, exposing raw silicon below the sidewall oxide layer.
7. **Isotropic Silicon Release Etch**:
   * Perform an isotropic dry etch using $\text{SF}_6$ RIE.
   * High chemical selectivity of $\text{SF}_6$ toward Silicon over $\text{SiO}_2$ laterally undercuts the unpassivated silicon beneath the narrow beams until adjacent undercut fronts meet, releasing the SCS beam structures.

---

### 3. Polymeric Actuator / Elastic Sandwich Structure
* **Exam Appearances**: **WS 2021/2022 (Q1)**
* **Structure**: Silicon substrate with a through-wafer cavity, suspending an elastic polymer (photoresist) membrane sandwiched between top and bottom Gold (Au) electrodes.

#### Step-by-Step Process Sequence:
1. **Bottom Gold Electrode Deposition & Patterning**:
   * Sputter a thin Cr/Ti adhesion layer followed by a Gold (Au) film onto the frontside of a silicon wafer.
   * Pattern the bottom electrode using **Mask 1** via photolithography and wet Au etching (or lift-off).
2. **Elastic Polymer Membrane Application**:
   * Spin-coat an elastic polymer / photoresist layer (e.g., SU-8 or flexible polyimide) over the patterned bottom electrode.
   * Photolithographically pattern and thermal cure the polymer layer using **Mask 2**.
3. **Top Gold Electrode Deposition & Patterning**:
   * Sputter deposit a top Gold (Au) layer directly over the patterned polymer membrane.
   * Pattern top electrode geometry using **Mask 3** via lithography and wet metal etching.
4. **Backside Lithography & Etch Masking**:
   * Spin-coat photoresist on the backside of the silicon wafer.
   * Align backside **Mask 4** with frontside features using a double-sided mask aligner and develop to open a central etch window.
5. **Through-Wafer Bulk Silicon Release Etch**:
   * Perform anisotropic Deep Reactive Ion Etching (DRIE / Bosch process) or KOH wet etching from the wafer backside through the full thickness of the silicon substrate.
   * Silicon etching stops selectively at the bottom Au / polymer layer interface, yielding a freely suspended elastic polymer membrane sandwiched between the two gold actuation electrodes.

---

### 4. Microfluidic Cell Capture Device on Biocompatible $\text{SiO}_2$
* **Exam Appearances**: **WS 2023/2024 (Q1.1)**
* **Structure**: Silicon substrate with a backside cavity forming a thin, biocompatible $\text{SiO}_2$ membrane, carrying Gold measurement electrodes and structured photoresist cell capture channels on the frontside.

#### Step-by-Step Process Sequence:
1. **Double-Sided Thermal Oxidation**:
   * Perform high-temperature thermal oxidation to grow a thick, stress-compensated Silicon Dioxide ($\text{SiO}_2$) layer on both frontside and backside of the Si wafer. The frontside $\text{SiO}_2$ serves as a biocompatible substrate for cell contact.
2. **Frontside Gold Measurement Electrodes**:
   * Spin positive photoresist on frontside $\text{SiO}_2$, expose **Mask 1** (electrode pair layout), and develop.
   * Sputter Ti/Au metal film and perform lift-off to form two electronic cell-measuring electrodes.
3. **Microfluidic Cell Trap Definition**:
   * Spin-coat a thick photoresist layer over the electrodes and $\text{SiO}_2$ surface.
   * Expose **Mask 2** (cell trap geometry) and develop to construct photoresist sidewalls forming microfluidic channels above the electrodes.
4. **Backside Window Definition**:
   * Spin photoresist on the wafer backside, expose **Mask 3** (aligned to frontside capture zone), and develop.
   * Etch the exposed backside $\text{SiO}_2$ window using Buffered Hydrofluoric Acid (BHF).
5. **Backside Substrate Silicon Etch**:
   * Etch the bulk silicon substrate from the backside up to the frontside $\text{SiO}_2$ layer using anisotropic KOH wet etch or DRIE.
   * Etching stops selectively on the frontside $\text{SiO}_2$ layer, yielding a suspended, biocompatible $\text{SiO}_2$ membrane for cell capture.

---

### 5. Deep Microchannel Flow Sensor Sealed with Photoresist
* **Exam Appearances**: **SS 2024 (Q1)**
* **Structure**: Deep vertical silicon channel with scalloped sidewalls (Bosch process DRIE) sealed on top by a photoresist film carrying two Gold anemometric sensing electrodes.

#### Step-by-Step Process Sequence:
1. **Bosch Deep DRIE Microchannel Etch**:
   * Spin photoresist on a silicon wafer, pattern channel layout with **Mask 1**, and develop.
   * Etch deep vertical channels into silicon using the Bosch process (alternating cycles of isotropic $\text{SF}_6$ plasma etching and $\text{C}_4\text{F}_8$ fluorocarbon polymer passivation). This leaves characteristic scalloped sidewalls. Strip resist.
2. **Channel Lamination & Sealing**:
   * Apply a dry-film photoresist lamination across the wafer surface to bridge and seal the top opening of the deep microchannel.
   * Expose **Mask 2** and UV crosslink/cure the sealing photoresist layer.
3. **Gold Sensing Electrode Patterning**:
   * Sputter deposit a thin Gold (Au) film onto the sealing photoresist cover.
   * Pattern using **Mask 3** via photolithography and wet Au etch (or lift-off) to form two anemometric flow velocity sensing electrodes directly on top of the sealed channel.

---

### 6. Double Paddle Oscillator Structure
* **Exam Appearances**: **WS 2024/2025 (Q1)**
* **Structure**: Freely movable center paddle oscillator structure with fixed outer support beams, defined in Silicon with top and bottom Gold electrodes.

#### Step-by-Step Process Sequence:
1. **Frontside Electrode Metallization**:
   * Sputter Gold (Au) onto the wafer frontside, pattern using **Mask 1** via lithography and metal etch (or lift-off) to form frontside drive/sense electrodes.
2. **Backside Electrode Metallization**:
   * Sputter Gold (Au) onto the wafer backside, pattern using **Mask 2** via double-sided aligned lithography and metal etch.
3. **Frontside Paddle Deep Etch**:
   * Pattern photoresist on the frontside using **Mask 3** (paddle contour outline).
   * Perform anisotropic DRIE (Bosch process) into the silicon substrate to define vertical paddle edges.
4. **Backside Cavity Etch & Paddle Release**:
   * Pattern photoresist on the backside using **Mask 4**.
   * Perform anisotropic DRIE / isotropic release etch from the backside to remove silicon surrounding the central paddle.
   * The center double-paddle structure is undercut and released while remaining suspended by its anchor beams.
