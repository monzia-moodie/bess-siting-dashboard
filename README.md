# BESS Siting Dashboard
### Next-Generation Battery Energy Storage Siting Tool
 
**MassDOER × TPS Fellowship  ·  April 2026**
 
| | |
|---|---|
| **Monzia Moodie** | Regulatory & Policy Systems Analyst |
| **Kadir Farah** | Storage Systems & Development Specialist |
| Advisor | Marcus Anum |
| Sponsor | Ledum Nordee |
| Coach | Tyler Holloway |
 
---
 
## What This Is
 
An interactive, browser-based siting tool that evaluates Battery Energy Storage
System (BESS) project sites across five evidence-based dimensions for 13 municipalities
in Suffolk and Middlesex Counties, Massachusetts.
 
Built to support Massachusetts’ statutory 5,000 MW storage mandate by 2030
(Chapter 239, Acts of 2024) — the most aggressive state storage target in the U.S.
 
## 📊 Live Dashboard
 
[**→ View the Interactive Dashboard**]([YOUR GITHUB PAGES URL HERE — see Section 9])
 
## The Five Evaluation Layers
 
| # | Layer | Max Score | Key Data Source |
|---|-------|-----------|-----------------|
| 1 | Environmental Justice & CIA Compliance | 25 pts | MassGIS OEJE 2020 |
| 2 | Grid Feasibility & Hosting Capacity | 25 pts | Eversource / National Grid |
| 3 | Zoning, Permitting & Legal Framework | 25 pts | DOER Model Bylaw |
| 4 | Physical Site Characteristics | 25 pts | Financial models (site-confirmed) |
| 5 | Revenue Modeling & Market Economics | 25 pts | ISO-NE LMP + FCM + CPS + ITC |
| | **COMPOSITE MAXIMUM** | **125 pts** | |
 
## Top Sites — Model-Validated
 
| Rank | Site | Score | MW / MWh | Gross CAPEX | Net CAPEX (40% ITC) | NPV @ 8% WACC |
|------|------|-------|----------|-------------|---------------------|---------------|
| 1 | 231 Beacham St, Everett | 119/125 | 15 MW / 60 MWh | $25.1M | $15.1M | −$2.2M¹ |
| 2 | 283 Eastern Ave, Chelsea | 113/125 | 100 MW / 400 MWh | $144M | $86.4M | +$5.4M |
 
¹ Everett requires Section 83E contracted revenue (>$150/kW–yr) for positive NPV.
 
## Dashboard Tabs
 
| Tab | Contents |
|-----|----------|
| 📊 Dashboard | MA storage goal tracker, top-5 ranking, regulatory milestones |
| 🏙 City Explorer | Filter and sort all 13 municipalities; detailed scorecard per city |
| ⚖️ EJ & Community | CIA 33-indicator framework, energy burden data, community rights |
| ⚡ Grid & Revenue | FCM clearing prices (FCA 14–18), ISO-NE revenue stack |
| 🏗 Zoning & Law | DOER Model Bylaw tiers, permitting paths, legal precedents |
| 🔋 Project Pipeline | Active 83E projects, brownfield inventory, 83E procurement schedule |
 
## Run Locally
 
```bash
# Requires Node.js 18+
git clone https://github.com/[YOUR-USERNAME]/bess-siting-dashboard.git
cd bess-siting-dashboard
npm install
npm run dev
# Open http://localhost:5173
```
 
## Project Deliverables
 
| Document | Location |
|----------|----------|
| 19-Slide Summit Presentation | `docs/presentation/` |
| 10-Minute Speaker Transcript (All 19 Slides) | `docs/transcript/` |
| Developer & Stakeholder Action Guide | `docs/reports/` |
| Executive One-Pager | `docs/reports/` |
| CAPEX Methodology Note | `docs/reports/` |
| Full Cited Data File (JSON) | `docs/data/` |
| Data Workbook (Excel, 9 sheets) | `docs/data/` |
 
## Key Data Sources
 
- ISO-NE 2024 Annual Markets Report
- Eversource Hosting Capacity Map (envelio Navigator)
- National Grid MA System Data Portal
- MassGIS OEJE 2020 EJ Population Layer
- NREL Annual Technology Baseline 2024
- DOER Model BESS Bylaw (October 2025)
- Site-specific BESS financial screening models — Everett & Chelsea (April 2026)
 
## Technical Stack
 
| Tool | Role |
|------|------|
| React 18 | UI framework |
| Vite 5 | Build tool and dev server |
| JavaScript (JSX) | Language |
| Inline CSS only | Styling — zero external UI dependencies |
 
## License
 
Developed as part of the TPS Fellowship Program in partnership with the
Massachusetts Department of Energy Resources (MassDOER).
All data sources are publicly available. Code released under the MIT License.
 
---
*Built April 2026 · Suffolk & Middlesex Counties, MA · ISO-NE NEMA/SENE Zone*
