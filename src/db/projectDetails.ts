// src/db/projectDetails.ts

const projectDetails = {
  'cooling-tower-plastic-fill': {
    title:
        'A Prototype of a Cross Flow Induced Draft Cooling Tower with Waste Plastic Fill Material',
    image: 'https://i.postimg.cc/fTbW9DCn/Assembly-b.jpg',
    overview:
        `This project introduces a sustainable alternative to industrial cooling towers by repurposing recycled PET plastic bottles and jute fiber as fill material. By validating the thermal performance of these waste materials against standard PVC fills, the team created a cost-effective, eco-friendly solution that addresses both engineering efficiency and the global plastic waste crisis.`,
    technicalInnovations: [
      'Eco-Friendly Fill Material: Replaced expensive industrial-grade plastic with recycled PET bottles and locally sourced jute fiber.',
      'Cost Efficiency: Achieved significant reduction in fabrication costs while maintaining competitive thermal performance.',
      'Scalable Design: The prototype lays the groundwork for industrial applications in developing regions where plastic waste and jute are abundant.',
    ],
    awards: 'Awarded ASHRAE Undergraduate Equipment Grant ($1,110)',
    team: [
      'Taskin Mehereen', 'Afrina Ayrin', 'Asif Chowdhury', 'Arif Sadik Riddhie'
    ],
    year: 2024,
  },

  'spiral-plate-heat-exchanger': {
    title:
        'Spiral Plate Heat Exchanger for Food and Beverage Processing Industries',
    image: 'https://i.postimg.cc/SKfHdzQZ/Picture5.png',
    overview:
        `This project developed a compact, efficient, and cost-effective Spiral Plate Heat Exchanger (SPHX) tailored for space-constrained industrial applications. 
        The design is specifically optimized for the food and beverage industry, such as milk pasteurization processes, where maintaining hygiene and handling viscous 
        fluids are critical challenges. By focusing on scalability, the project aims to make advanced SPHX technology more accessible for resource-limited contexts.`,
    technicalInnovations: [
      'Counterflow Configuration: The design incorporates a counterflow arrangement to significantly enhance heat transfer efficiency compared to standard parallel flow designs.',
      'Viscous Fluid Handling: The spiral geometry effectively manages fouling and viscous fluids, reducing maintenance downtime.',
      'Stainless Steel Construction: Built with durable stainless steel to ensure longevity and meet strict hygiene standards required for food processing.',
    ],
    awards: 'ASHRAE Mini Equipment Grant ($260)',
    team: [
      'Arafath Rahman Nishat', 'Anurag Dev', 'Aion Aich', 'Aniruddha Biswas'
    ],
    year: 2024,
  },

  'cinquefoil-baffle-heat-exchanger': {
    title:
        'A Shell-and-Tube Heat Exchanger Incorporating Cinquefoil Baffles for Enhanced Heat Transfer and Reduced Fouling.',
    image: 'https://i.postimg.cc/8kfgQcZC/Picture1.png',
    overview:
        `This project introduces an innovative shell-and-tube heat exchanger featuring "cinquefoil" (five-lobed) baffles and orifice plates to enhance fluid 
        dynamics and heat transfer efficiency. Traditional baffles often create uneven flow distribution and dead zones; this design guides fluid through multiple 
        curved paths to ensure improved turbulence and uniform temperature distribution. With applications ranging from power generation to chemical processing, this 
        scalable configuration offers a modern solution for advanced industrial thermal management.`,
    technicalInnovations: [
      'Cinquefoil Baffles: The unique five-lobed baffle shape creates advanced turbulence patterns to eliminate dead zones and minimize pressure drops compared to complex baffle designs.',
      'Reduced Fouling: Continuous turbulence minimizes sediment deposition, reducing maintenance needs and chemical cleaning cycles.',
      'Uniform Temperature Distribution: Simulations demonstrate superior thermal consistency compared to conventional designs, ensuring precise heat control.',
    ],
    awards: 'None',
    team: [
      'Md. Luban Mehda', 'Aasfee Mosharraf Bhuiyan', 'Jubayer Amin Pritom',
      'Md Thawhid Hasan Puspo'
    ],
    year: 2026,
  },

  'pcm-thermal-bifurated-fins': {
    title:
        'PCM Based Thermal Energy Storage System Using Multiple Tubes with Bifurcated Fins in a Triangular Shell',
    image: 'https://i.postimg.cc/fTbW9DCn/Assembly-b.jpg',
    overview:
        `Addressing the need for affordable renewable energy storage, this project presents a Latent Heat Thermal Energy Storage (LHTES) system designed for 
        medium-temperature industrial waste-heat recovery. The system utilizes Paraffin wax as a Phase Change Material (PCM) housed within a novel triangular shell. 
        By validating this geometry against conventional circular shells, the team proved that the triangular configuration offers superior heat-dissipation capacity, 
        making it a highly efficient solution for thermal energy storage.`,
    technicalInnovations: [
      'Bifurcated Fins: The design features unique Y-shaped (bifurcated) fins extending from the tubes. These fins break up the thermal boundary layer to significantly accelerate the melting and solidification cycles of the PCM.',
      'Triangular Shell Geometry: Comparative assessments demonstrated that a triangular shell significantly outperforms traditional circular shells of equal cross-section, minimizing "dead zones" where wax often remains unmelted.',
      'Material Efficiency: The system uses affordable Paraffin wax and copper heat-transfer tubes, offering a cost-effective alternative to expensive commercial storage units.',
    ],
    awards: 'None',
    team: [
      'Tasnim Tarannum Hride', 'Devosree Dey Charu', 'Arafat Hossan',
      'Sanjit Kumar Bakshi', 'Md Mozammal Hossain Ashik'
    ],
    year: 2026,
  },

  'double-pipe-oscillating-inserts': {
    title:
        'Dynamically Optimizing Double Pipe Heat Exchanger with Magnetically Controlled Oscillating Inserts ',
    image: 'https://i.postimg.cc/fTbW9DCn/Assembly-b.jpg',
    overview:
        `This project upgrades the conventional double-pipe heat exchanger by introducing active turbulence control. The study harnesses the higher efficiency of 
        turbulent flow by using electromagnetically actuated oscillating metallic inserts inside the inner pipe. This allows the operator to dynamically adjust 
        the oscillation frequency and amplitude to match real-time cooling loads, creating secondary flow structures that disrupt the thermal boundary layer - 
        a massive leap over static designs.`,
    technicalInnovations: [
      'Magnetic Actuation: External electromagnets control the internal inserts, eliminating the need for complex mechanical seals or internal motors.',
      'Dynamic Optimization: The system can actively tune its heat transfer coefficient based on energy demand, verified through transient CFD analysis.',
      'Variable Turbulence: Unlike passive static inserts, this design allows for real-time modification of mixing behavior to maximize the Nusselt number.',
    ],
    awards: 'None',
    team: [
      'Shakib Arafat Tapu', 'Abrar Jahin', 'Md Shah Wali Ullah',
      'Sadman Hasan Sadaf'
    ],
    year: 2026,
  },

  'honeycomb-based-thermal-energy-storage': {
    title:
        'Design and Development of a modified Honeycomb-Based Latent Heat Thermal Energy Storage (LHTES) Unit using Paraffin PCM ',
    image: 'https://i.postimg.cc/fTbW9DCn/Assembly-b.jpg',
    overview:
        `Designed to bridge the "energy-hygiene gap" in Bangladesh, this unit stores solar heat in Paraffin wax for use at night. The system utilizes a 
                copper-based honeycomb matrix inclined at 30-45° to house the PCM, ensuring structural stability and heat spread. Encased in a transparent acrylic 
                shell, the unit serves as both a functional water heater and an educational tool, allowing students to visually track the phase change process in real-time.`,
    technicalInnovations: [
      'Honeycomb Matrix: A conductive metal honeycomb structure houses the Paraffin wax to overcome the material\'s low thermal conductivity.',
      'Transparent Shell: The acrylic casing allows for visual observation of the melting and solidification fronts (Stefan problem).',
      'Porous Aluminum Mesh: Embedded within the wax chambers to promote turbulent heat exchange and faster charging cycles.',
    ],
    awards: 'None',
    team: [
      'Usman Gani Pranto', 'Md Sakib Hasan Kafi',
      'Sheikh Md Shahriar Ahmed Sohan', 'Md Fahim Faisal',
      'Khan Mohammad Ar-Rafi'
    ],
    year: 2026,
  },

  'aerodynamic-optimized-hybrid-draft-cooling-tower': {
    title:
        'Aerodynamic Optimization of a Hybrid Draft Cooling Tower Using Waste Plastic Components and Photovoltaic Energy ',
    image: 'https://i.postimg.cc/fTbW9DCn/Assembly-b.jpg',
    overview:
        `This project transforms waste into engineering resources by developing a Hybrid Draft Cooling Tower (combining natural and forced draft). 
        The design features a tapered cylindrical shape for smooth airflow and uniquely utilizes recycled PET bottles as converging nozzles to accelerate 
        air velocity at the inlet. Powered entirely by a photovoltaic (PV) cell, this system offers a net-zero cooling solution for commercial buildings 
        while reducing plastic pollution.`,
    technicalInnovations: [
      'PET Bottle Nozzles: Waste bottles are repurposed as converging nozzles to enhance air velocity and facilitate suction for the induced draft fan.',
      'Corrugated Plastic Fill: Vertical sine-wave shaped fill material made from plastic waste ensures even water distribution and maximum heat transfer time.',
      'PV Powered: The induced draft fan operates independently on solar energy, eliminating grid power costs and carbon footprint.',
    ],
    awards: 'None',
    team: [
      'Progga Parmita Rahman',
      'Jarin Tasnim Mahnur',
      'Afrin Jahan Rifah',
      'Sabikun Nahar Maisha',
    ],
    year: 2026,
  },

  'integrated-thermal-management-system': {
    title:
        'Integrated Thermal Management System for Lithium-Ion Battery Modules: Mini-Channel Liquid Heat Transfer Combined with Forced Air Thermal Control',
    image: 'https://i.postimg.cc/fTbW9DCn/Assembly-b.jpg',
    overview:
        `Targeted at the Electric Vehicle (EV) market, this project proposes a hybrid Battery Thermal Management System (BTMS) designed for extreme climates. 
        The system integrates active liquid cooling via aluminum blocks for high heat loads (like fast charging) and secondary forced-air cooling for energy efficiency 
        during normal driving. Uniquely, it includes a heating modality to precondition battery packs in sub-zero temperatures, preventing lithium plating and capacity fade.`,
    technicalInnovations: [
      'Dual-Mode Cooling: Seamlessly switches between liquid cooling for peak loads and air cooling for energy conservation.',
      'Winter Pre-conditioning: Reverses the liquid loop to heat the battery pack in freezing conditions (-30°C to 0°C), extending battery lifespan.',
      'Mini-Channel Blocks: Aluminum blocks with copper mini-channels maximize the heat extraction surface area within a compact footprint.',
    ],
    awards: 'None',
    team: [
      'Abdullah Sad Tahmid', 'Ahmed Reza Junaid', 'Sadat Tanzim',
      'Tahomid Ahomed Tonoy'
    ],
    year: 2026,
  },

  'dimple-tube-heat-exchanger': {
    title:
        'Design and Fabrication of a Compact Dimple-Tube Heat Exchanger for Food and Beverage Applications ',
    image: 'https://i.postimg.cc/fTbW9DCn/Assembly-b.jpg',
    overview:
        `Targeting the food and beverage industry, this project develops a compact concentric dimple-tube heat exchanger. The core innovation is the dimpled inner tube, 
        which disrupts the thermal boundary layer to create continuous turbulence. This not only boosts the heat transfer coefficient by approximately 55% but also 
        creates a "self-cleaning" effect that prevents fouling - critical for processing fluids like milk.`,
    technicalInnovations: [
      'Dimpled Surface: Strategically placed dimples induce turbulence to significantly enhance the heat transfer coefficient compared to plain tubes',
      'Anti-Fouling Mechanism: The local turbulence prevents sediment and grime from depositing on tube walls, reducing cleaning downtime.',
      'Thermal Pollution Control: Designed to use high mass-flow river water to ensure discharge temperatures remain eco-friendly (below 37°C).',
    ],
    awards: 'None',
    team:
        ['Rifa Rafia', 'Authoe Dey', 'Abrar Jarif Utsab', 'Md. Arafat Hoshen'],
    year: 2026,
  },

};

export default projectDetails;
