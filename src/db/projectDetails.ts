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
};

export default projectDetails;
