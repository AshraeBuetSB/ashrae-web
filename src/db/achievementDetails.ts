// src/db/activityDetails.ts

const activityDetails = {
  'society-scholarship-2026': {
    title: 'Secures Prestigious 2025-2026 Society Scholarships',
    overview:
        `The ASHRAE BUET Student Branch is celebrating a major milestone as two of its executive members, Usman Gani Pranto (Manager, Logistics) and Progga Parmita 
        Rahman (Manager, Public Communication), have been named recipients of the 2025-2026 ASHRAE Society Scholarship. This highly competitive global award provides 
        comprehensive financial backing for one full academic year, covering essential costs including university tuition, research project expenses, academic supplies, 
        and room and board. This achievement highlights the caliber of engineering talent at BUET and underscores the branch’s commitment to excellence in the HVAC&R industry.`,
    date: 'March 2026',
    recipients: ['Usman Gani Pranto', 'Progga Parmita Rahman'],
    gallery: [
      'https://res.cloudinary.com/dll7cjob6/image/upload/v1774292872/1_hoz5im.webp',
      'https://res.cloudinary.com/dll7cjob6/image/upload/v1774292870/2_egi4uc.webp'
    ],
    key_takeouts: [
      'The scholarship fully funds tuition, thesis research, and living expenses, allowing the recipients to focus entirely on their engineering innovation.',
      'This dual success serves as an inspiring precedent for the student branch, demonstrating the impact of dedication and active professional involvement.',
      'Securing this award places BUET students among an elite group of internationally recognized future leaders in the HVAC&R sector.',
    ]
  },
  'three-presentations-winter-conference': {
    title: 'Achieves 100% Acceptance Rate at 2026 Winter Conference',
    overview:
        `The ASHRAE BUET Student Branch has reached a significant academic milestone by virtually presenting three high-impact research papers at the 2026 ASHRAE Winter 
        Conference. Featured in Paper Session 001: (Virtual) High-Efficiency Heat Transfer and Energy Storage Technologies, these studies represent the cutting edge of 
        thermal engineering. Notably, every paper submitted by the branch was accepted and presented on the first attempt. It is a testament to the rigorous research standards 
        and technical proficiency of the student members involved. This success solidifies BUET’s growing presence within the global HVAC&R technical community.`,
    date: 'January 2026',
    recipients: [
      'Arafath Rahman Nishat, Anurag Dev, Aniruddho Biswas',
      'Md Luban Mehda, Aasfee Mosharraf Bhuiyan, Jubayer Amin, Tawhid Hasan',
      'Tasnim Hride, Sanjit Kumar Bakshi, Arafat Hossan, Devosree Dey Charu, Md Mozammal Hossain Ashik'
    ],
    gallery: [
      'https://res.cloudinary.com/dll7cjob6/image/upload/v1774293101/3_duoet2.webp',
      'https://res.cloudinary.com/dll7cjob6/image/upload/v1774293105/1_he2dr2.webp',
      'https://res.cloudinary.com/dll7cjob6/image/upload/v1774293107/2_szxwny.webp',
      'https://res.cloudinary.com/dll7cjob6/image/upload/v1774293103/4_gej2da.webp'
    ],
    key_takeouts: [
      'Contributions spanned critical areas of engineering, including scaling mitigation in spiral plate heat exchangers, performance optimization of cinquefoil baffles, and advanced PCM thermal storage systems.',
      'The branch successfully bridged the gap between local student research and international professional standards, contributing directly to the global ASHRAE knowledge base.',
      'Achieved a perfect 100% acceptance rate for all three submitted papers on the very first attempt, showcasing elite academic dedication.',
    ]
  },
  'dual-ug-equipment-grant': {
    title: 'Secures Dual Undergraduate Equipment Grants on First Attempt',
    overview:
        `In a landmark achievement for the ASHRAE BUET Student Branch, two separate research teams have successfully secured the prestigious ASHRAE Undergraduate Program 
        Equipment Grant. Marking an incredible milestone for the branch, both teams earned these competitive international grants on their very first try. The funding 
        will support the development of sustainable, hands-on engineering prototypes. One focusing on advanced cooling tower technology using recycled materials, and 
        the other on high-efficiency heat exchangers for industrial use. These victories highlight the branch’s rapid growth and its commitment to practical, sustainable 
        HVAC&R innovation.`,
    date: 'April 2025',

    awards: [
      {
        team:
            'Taskin Mehereen, Afrina Ayrin Nitu, Asif Shorforaj Chowdhury, and Arif Sadik Riddhie',
        amount: '$1,110'
      },
      {
        team:
            'Arafath Rahman Nishat, Anurag Dev, Aion Aich, and Aniruddho Biswas',
        amount: '$260'
      }
    ],
    gallery: [
      'https://res.cloudinary.com/dll7cjob6/image/upload/v1774292611/1_jcmf9h.webp',
      'https://res.cloudinary.com/dll7cjob6/image/upload/v1774292611/Spiral-Plate-Grant_Team_xcbtjy.webp'
    ],
    key_takeouts: [
      'The grants provide direct funding for physical equipment, bridging the gap between theoretical classroom learning and real-world prototype development.',
      'Both teams secured global funding on their inaugural application, proving the high technical standard of BUET’s undergraduate research.',
      'Both projects emphasize "Sustainable" engineering, aligning with global goals to reduce waste and improve energy efficiency.',
    ]
  }
};

export default activityDetails;
