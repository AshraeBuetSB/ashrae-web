// src/db/projectDetails.ts

const projectDetails = {
  'cooling-tower-plastic-fill': {
    title: 'Cross Flow Induced Draft Cooling Tower with Waste Plastic Fill',
    image: 'https://i.postimg.cc/fTbW9DCn/Assembly-b.jpg',
    overview:
      `This project demonstrates a promising eco-friendly innovation by repurposing recycled PET plastic bottles and 
      jute fiber as fill materials for cooling towers. By validating their thermal performance through experimental 
      testing, it offers a cost-effective and sustainable alternative to industrial-grade plastic fills. The initiative 
      not only helps reduce plastic waste and environmental impact but also lays the groundwork for scalable industrial 
      applications, particularly in regions with abundant plastic and jute resources. Its relevance lies in addressing 
      both engineering efficiency and environmental responsibility in modern thermal management systems.`,
    objectives: [
      'Design and construct a lab-scale cooling tower.',
      'Use waste plastic and jute as filler materials.',
      'Compare performance with conventional PVC fills.',
    ],
    awards: 'ASHRAE Equipment Grant ($1,110)',
    team: ['Taskin Mehereen', 'Afrina Ayrin', 'Asif Chowdhury', 'Arif Sadik Riddhie'],
    year: 2024,
  },

  'spiral-plate-heat-exchanger': {
    title: 'Spiral Plate Heat Exchanger for Food & Beverage',
    image: 'https://i.postimg.cc/SKfHdzQZ/Picture5.png',
    overview:
        `The project aims to develop a compact, efficient, and cost-effective spiral 
        plate heat exchanger (SPHX) suitable for space-constrained industrial applications. The SPHX 
        offers high thermal efficiency, easy maintenance, and versatility for handling viscous and fouling 
        fluids. It is particularly tailored for food processing industries like milk pasteurization. The design 
        uses stainless steel for durability and incorporates a counterflow configuration to enhance heat 
        transfer. The project seeks to make SPHX technology more accessible and scalable, especially 
        in resource-limited contexts. `,
    objectives: [
      'Design a compact SPHX suited for milk pasteurization.',
      'Ensure low maintenance and high hygiene standards.',
      'Evaluate thermal performance and ease of cleaning.',
    ],
    awards: 'ASHRAE Mini Equipment Grant ($260)',
    team: ['Arafath Rahman Nishat', 'Anurag Dev', 'Aion Aich', 'Aniruddha Biswas'],
    year: 2024,
  },

  'cinquefoil-baffle-heat-exchanger': {
    title: 'Shell-and-Tube Heat Exchanger with Cinquefoil Baffles',
    image: 'https://i.postimg.cc/8kfgQcZC/Picture1.png',
    overview:
      `This project introduces an innovative shell-and-tube heat exchanger featuring cinquefoil baffles and orifice 
      plates to enhance fluid dynamics and heat transfer efficiency. The design ensures improved turbulence, uniform 
      temperature distribution, and reliable thermal performance. The prototype demonstrates effective cooling, making 
      it ideal for industrial processes requiring precise heat control. Applications include power generation, chemical 
      processing, food and beverage industries, and water treatment systems. With its scalable and energy-efficient 
      configuration, the design offers a modern solution for advanced industrial thermal management.`,
    objectives: [
      'Improve thermal performance through novel baffle geometry.',
      'Fabricate and test exchanger under controlled lab conditions.',
      'Investigate applicability in power and water treatment industries.',
    ],
    awards: 'None',
    team: ['Md. Luban Mehda'],
    year: 2025,
  },

  'pcm-thermal-bifurated-fins': {
    title: 'Optimization of a PCM based Thermal Energy Storage System Enhanced with Bifurcated Fins',
    image: 'https://i.postimg.cc/fTbW9DCn/Assembly-b.jpg',
    overview:
      `This project introduces a cost-effective thermal energy storage system designed for residential water heating in 
      Bangladesh. By utilizing Paraffin wax—a locally accessible and affordable Phase Change Material (PCM)—the 
      system captures renewable waste heat to provide a sustainable energy solution. Through rigorous simulation 
      and prototyping, the design optimizes heat transfer via a unique triangular shell geometry and bifurcated fins, 
      ensuring high thermal efficiency and practical integration for domestic use.`,
    objectives: [
      'Design a thermal energy storage system using PCM.',
      'Incorporate bifurcated fins for enhanced heat transfer.',
      'Optimize geometry for maximum efficiency.',
    ],
    awards: 'None',
    team: ['John Doe', 'Jane Smith'],
    year: 2025,
  },

  'double-pipe-oscillating-inserts': {
    title: 'Self-Optimizing Double Pipe Heat Exchanger with Oscillating Inserts',
    image: 'https://i.postimg.cc/fTbW9DCn/Assembly-b.jpg',
    overview:
      `This project introduces a novel method for controlling turbulent flow in a double pipe heat exchanger by 
      utilizing alternating magnetic fields to oscillate metal inserts. This innovative approach aims to enhance heat 
      transfer efficiency while minimizing pressure drop and energy consumption. By dynamically adjusting the flow 
      characteristics, the system optimizes thermal performance in real-time, making it suitable for various industrial 
      applications. The design emphasizes energy efficiency, adaptability, and scalability, offering a cutting-edge 
      solution for modern heat exchange systems.`,
    objectives: [
      'Develop a double pipe heat exchanger with magnetic inserts.',
      'Use alternating magnetic fields to induce oscillation.',
      'Evaluate heat transfer enhancement and energy savings.',
    ],
    awards: 'None',
    team: ['Alice Johnson', 'Bob Lee'],
    year: 2025,
  },

  'honeycomb-based-thermal-energy-storage': {
    title: 'Modified Honeycomb-Based Latent Heat Thermal Energy Storage (LHTES) Unit using Paraffin PCM for Solar-Assisted Domestic Hot Water',
    image: 'https://i.postimg.cc/fTbW9DCn/Assembly-b.jpg',
    overview:
      `This project proposes a sustainable, solar-assisted hot water system for Bangladesh using a honeycomb-structured 
      thermal storage unit that utilizes Paraffin wax and aluminum mesh to bridge the gap between intermittent solar energy 
      and residential demand. The design focuses on maximizing thermal efficiency through enhanced heat transfer and 
      compact storage, making it suitable for urban households with limited space. By leveraging locally available 
      materials and renewable energy, the system aims to provide an affordable and eco-friendly solution for domestic hot water needs.`,
    objectives: [
      'Design a honeycomb-based LHTES unit using Paraffin PCM.',
      'Incorporate aluminum mesh for improved heat transfer.',
      'Integrate with solar water heating systems for residential use.',
    ],
    awards: 'None',
    team: ['Emily Davis', 'Michael Brown'],
    year: 2025,
  },

  'aerodynamic-optimized-hybrid-draft-cooling-tower': {
    title: 'Aerodynamic Optimization of a Hybrid Draft Cooling Tower Using Waste Plastic Components and Photovoltaic Energy',
    image: 'https://i.postimg.cc/fTbW9DCn/Assembly-b.jpg',
    overview:
      `This project introduces a high-efficiency Hybrid Draft Cooling Tower that utilizes a tapered cylindrical design, 
      recycled PET bottle nozzles, and solar-powered fans to maximize cooling performance while reducing environmental waste. By integrating aerodynamic principles and renewable energy sources, the design aims to enhance airflow, 
      minimize energy consumption, and promote sustainability. The cooling tower is particularly suited for industrial 
      applications in regions with abundant solar resources and plastic waste, offering a cost-effective and eco-friendly 
      solution for thermal management.`,
    objectives: [
      'Design a hybrid draft cooling tower with aerodynamic optimization.',
      'Incorporate recycled PET bottle nozzles for water distribution.',
      'Utilize photovoltaic energy to power cooling fans.',
    ],
    awards: 'None',
    team: ['Sophia Wilson', 'David Martinez'],
    year: 2025,
  },

  'integrated-thermal-management-system': {
    title: 'Integrated Thermal Management System for Lithium-Ion Battery Modules: Mini-Channel Liquid Heat Transfer Combined with Forced Air Thermal Control',
    image: 'https://i.postimg.cc/fTbW9DCn/Assembly-b.jpg',
    overview:
      `This project proposes a hybrid liquid-and-air thermal management system for electric vehicles that utilizes a dual-mode 
      approach to ensure battery safety and performance in extreme hot and cold climates. By combining mini-channel liquid 
      cooling with forced air thermal control, the system effectively regulates battery temperature, enhancing longevity 
      and efficiency. The design emphasizes adaptability, energy efficiency, and scalability, making it suitable for a wide 
      range of electric vehicle applications. Through rigorous testing and optimization, the project aims to deliver a 
      cutting-edge solution for advanced battery thermal management.`,
    objectives: [
      'Develop a hybrid thermal management system for lithium-ion batteries.',
      'Combine mini-channel liquid cooling with forced air control.',
      'Evaluate performance under extreme temperature conditions.',
    ],
    awards: 'None',
    team: ['Olivia Garcia', 'James Anderson'],
    year: 2025,
  },

  'dimple-tube-heat-exchanger': {
    title: 'Design and Fabrication of a Compact Dimple‑Tube Heat Exchanger for Food and Beverage Applications',
    image: 'https://i.postimg.cc/fTbW9DCn/Assembly-b.jpg',
    overview:
      `This project focuses on the design and fabrication of a compact dimple-tube heat exchanger specifically tailored for food 
      and beverage applications. The dimple-tube design enhances turbulence and heat transfer efficiency while minimizing 
      fouling, making it ideal for processing viscous and particulate-laden fluids common in the food industry. The 
      compact configuration allows for space-saving installations in facilities with limited room. Through experimental 
      testing and performance evaluation, the project aims to deliver a reliable and efficient heat exchanger that meets 
      the stringent hygiene and operational standards of the food and beverage sector.`,
    objectives: [
      'Design a compact dimple-tube heat exchanger for food applications.',
      'Enhance heat transfer through boundary layer disruption.',
      'Test performance with viscous and fouling fluids.',
    ],
    awards: 'None',
    team: ['Isabella Thomas', 'William Taylor'],
    year: 2025,
  },

};

export default projectDetails;
