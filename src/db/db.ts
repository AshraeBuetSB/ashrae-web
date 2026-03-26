export interface Member {
    name: string;
    designation: string;
    image: string;
    color: string;
}

export interface Panel {
    id: string;
    year: string;
    members: Member[];
}

const db: Panel[] = [
    {
        id: "second",
        year: "2025-2026",
        members: [
            {
                name: "Dr. Md. Ashiqur Rahman, Professor, Department of Mechanical Engineering",
                designation: "Advisor",
                image: "https://res.cloudinary.com/dll7cjob6/image/upload/f_auto,q_auto/v1774542375/Dr_Md_Ashiqur_Rahman_Advisor.png",
                color: "from-green-500 to-emerald-500",
            },
            {
                name: "Md. Luban Mehda",
                designation: "President",
                image: "https://res.cloudinary.com/dll7cjob6/image/upload/f_auto,q_auto/v1774542292/Md_Luban_Mehda_President.webp",
                color: "from-green-500 to-emerald-500",
            },
            {
                name: "Arafath Rahman Nishat",
                designation: "Vice President",
                image: "https://res.cloudinary.com/dll7cjob6/image/upload/f_auto,q_auto/v1774542308/Arafath_Rahman_Nishat_Vice_President.webp",
                color: "from-green-500 to-emerald-500",
            },
            {
                name: "Safwan Sakib",
                designation: "Treasurer",
                image: "https://res.cloudinary.com/dll7cjob6/image/upload/f_auto,q_auto/v1774542336/Safwan_Sakib_Treasurer.webp",
                color: "from-green-500 to-emerald-500",
            },
            {
                name: "Nahian Prapon Jaman",
                designation: "Secretary",
                image: "https://res.cloudinary.com/dll7cjob6/image/upload/f_auto,q_auto/v1774542295/Nahian_Prapon_Jaman_Secretary.png",
                color: "from-green-500 to-emerald-500",
            },
            {
                name: "Lamia Tasnim Suhi",
                designation: "Chair, Competitions, Scholarships & Research",
                image: "https://res.cloudinary.com/dll7cjob6/image/upload/f_auto,q_auto/v1774542350/Lamia_Tasnim_Suhi_Chair_Competitions_Scholarships_Research.png",
                color: "from-green-500 to-emerald-500",
            },
            {
                name: "Nafisa Ferdous Orin",
                designation: "Co-chair, Competitions, Scholarships & Research",
                image: "https://res.cloudinary.com/dll7cjob6/image/upload/f_auto,q_auto/v1774542354/Nafisa_Ferdous_Orin_Co_chair_Competitions_Scholarships_Research.png",
                color: "from-green-500 to-emerald-500",
            },
            {
                name: "Shakib Arafat Tapu",
                designation: "Co-chair, Competitions, Scholarships & Research",
                image: "https://res.cloudinary.com/dll7cjob6/image/upload/f_auto,q_auto/v1774542328/Shakib_Arafat_Tapu_Co_chair_Competitions_Scholarships_Research.png",
                color: "from-green-500 to-emerald-500",
            },
            {
                name: "Assfee Mosharraf Bhuiyan",
                designation: "Co-chair, Competitions, Scholarships & Research",
                image: "https://res.cloudinary.com/dll7cjob6/image/upload/f_auto,q_auto/v1774542321/Assfee_Mosharraf_Bhuiyan_Co_chair_Competitions_Scholarships_Research.png",
                color: "from-green-500 to-emerald-500",
            },
            {
                name: "S.M. Hasibur Rahman",
                designation: "Chair, Trip & Conference Travel",
                image: "https://res.cloudinary.com/dll7cjob6/image/upload/f_auto,q_auto/v1774542368/S_M_Hasibur_Rahman_Chair_Trip_Conference_Travel.png",
                color: "from-green-500 to-emerald-500",
            },
            {
                name: "Md. Solaiman Hossain",
                designation: "Co-chair, Trip & Conference Travel",
                image: "https://res.cloudinary.com/dll7cjob6/image/upload/f_auto,q_auto/v1774542364/Md_Solaiman_Hossain_Co_chair_Trip_Conference_Travel.png",
                color: "from-green-500 to-emerald-500",
            },
            {
                name: "Arman Hassan",
                designation: "Co-chair, Trip & Conference Travel",
                image: "https://res.cloudinary.com/dll7cjob6/image/upload/f_auto,q_auto/v1774542376/Arman_Hassan_Co_chair_Trip_Conference_Travel.png",
                color: "from-green-500 to-emerald-500",
            },
            {
                name: "Md. Naimul Hasan Nashid",
                designation: "Co-chair, Trip & Conference Travel",
                image: "https://res.cloudinary.com/dll7cjob6/image/upload/f_auto,q_auto/v1774542360/Md_Naimul_Hasan_Nashid_Co_chair_Trip_Conference_Travel.png",
                color: "from-green-500 to-emerald-500",
            },
            {
                name: "Samayala Rahman Oyshie",
                designation: "Co-chair, Trip & Conference Travel",
                image: "https://res.cloudinary.com/dll7cjob6/image/upload/f_auto,q_auto/v1774542287/Samayala_Rahman_Oyshie_Co_chair_Trip_Conference_Travel.png",
                color: "from-green-500 to-emerald-500",
            },
            {
                name: "Farzana Yeasmin Shoily",
                designation: "Manager, Sponsorship Team",
                image: "https://res.cloudinary.com/dll7cjob6/image/upload/f_auto,q_auto/v1774542274/Farzana_Yesamin_Sholly_Manager_Sponsorship_Team.png",
                color: "from-green-500 to-emerald-500",
            },
            {
                name: "Md. Ali Al Aftab",
                designation: "Manager, Sponsorship Team",
                image: "https://res.cloudinary.com/dll7cjob6/image/upload/f_auto,q_auto/v1774542298/Md_Ali_Al_Aftab_Manager_Sponsorship_Team.png",
                color: "from-green-500 to-emerald-500",
            },
            {
                name: "Md. Mahfuzur Rahman",
                designation: "Manager, Public Communications Team",
                image: "https://res.cloudinary.com/dll7cjob6/image/upload/f_auto,q_auto/v1774542324/Md_Mahfuzur_Rahman_Manager_Public_Communications_Team.png",
                color: "from-green-500 to-emerald-500",
            },
            {
                name: "Progga Parmita Rahman",
                designation: "Manager, Public Communications Team",
                image: "https://res.cloudinary.com/dll7cjob6/image/upload/f_auto,q_auto/v1774542356/Progga_Parmita_Rahman_Manager_Public_Communications_Team.png",
                color: "from-green-500 to-emerald-500",
            },
            {
                name: "Md. Yeamin Hossain",
                designation: "Manager, Logistics Team",
                image: "https://res.cloudinary.com/dll7cjob6/image/upload/f_auto,q_auto/v1774542317/Md_Yeamin_Hossain_Manager_Logistics_Team.png",
                color: "from-green-500 to-emerald-500",
            },
            {
                name: "Usman Gani Pranto",
                designation: "Manager, Logistics Team",
                image: "https://res.cloudinary.com/dll7cjob6/image/upload/f_auto,q_auto/v1774542315/Usman_Gani_Pranto_Manager_Logistics_Team.png",
                color: "from-green-500 to-emerald-500",
            },
            {
                name: "Nabila Mustary",
                designation: "Assistant Manager, Sponsorship Team",
                image: "https://res.cloudinary.com/dll7cjob6/image/upload/f_auto,q_auto/v1774542363/Nabila_Mustary_Assistant_Manager_Sponsorship_Team.png",
                color: "from-green-500 to-emerald-500",
            },
            {
                name: "Md. Shahajal Islam Pial",
                designation: "Assistant Manager, Sponsorship Team",
                image: "https://res.cloudinary.com/dll7cjob6/image/upload/f_auto,q_auto/v1774542303/Md_Shahajal_Islam_Pial_Assistant_Manager_Sponsorship_Team.png",
                color: "from-green-500 to-emerald-500",
            },
            {
                name: "Tanzila Mozumder Shally",
                designation: "Assistant Manager, Sponsorship Team",
                image: "https://res.cloudinary.com/dll7cjob6/image/upload/f_auto,q_auto/v1774542366/Tanzila_Mozumder_Shally_Assistant_Manager_Sponsorship_Team.png",
                color: "from-green-500 to-emerald-500",
            },
            {
                name: "Jarin Tasnim Mahnur",
                designation: "Assistant Manager, Sponsorship Team",
                image: "https://res.cloudinary.com/dll7cjob6/image/upload/f_auto,q_auto/v1774542276/Jarin_Tasnim_Mahnur_Assistant_Manager_Sponsorship_Team.png",
                color: "from-green-500 to-emerald-500",
            },
            {
                name: "Ahmed Reza Junaid",
                designation: "Assistant Manager, Public Communications Team",
                image: "https://res.cloudinary.com/dll7cjob6/image/upload/f_auto,q_auto/v1774542330/Ahmed_Reza_Junaid_Assistant_Manager_Public_Communications_Team.png",
                color: "from-green-500 to-emerald-500",
            },
            {
                name: "Md. Sakib Hasan Kafi",
                designation: "Assistant Manager, Public Communications Team",
                image: "https://res.cloudinary.com/dll7cjob6/image/upload/f_auto,q_auto/v1774542265/Md_Sakib_Hasan_Kafi_Assistant_Manager_Public_Communications_Team.png",
                color: "from-green-500 to-emerald-500",
            },
            {
                name: "Salman Rakib Sunny",
                designation: "Assistant Manager, Public Communications Team",
                image: "https://res.cloudinary.com/dll7cjob6/image/upload/f_auto,q_auto/v1774542268/Salman_Rakib_Sunny_Assistant_Manager_Public_Communications_Team.png",
                color: "from-green-500 to-emerald-500",
            },
            {
                name: "Rifa Rafia",
                designation: "Assistant Manager, Public Communications Team",
                image: "https://res.cloudinary.com/dll7cjob6/image/upload/f_auto,q_auto/v1774542338/Rifa_Rafia_Assistant_Manager_Public_Communications_Team.png",
                color: "from-green-500 to-emerald-500",
            },
            {
                name: "Md. Nasim Khan",
                designation: "Assistant Manager, Logistics Team",
                image: "https://res.cloudinary.com/dll7cjob6/image/upload/f_auto,q_auto/v1774542350/Md_Nasim_Khan_Assistant_Manager_Logistics_Team.png",
                color: "from-green-500 to-emerald-500",
            },
            {
                name: "Fahim Faisal",
                designation: "Assistant Manager, Logistics Team",
                image: "https://res.cloudinary.com/dll7cjob6/image/upload/f_auto,q_auto/v1774542312/Fahim_Faisal_Assistant_Manager_Logistics_Team.png",
                color: "from-green-500 to-emerald-500",
            },
            {
                name: "Md. Ariful Islam Raju",
                designation: "Assistant Manager, Logistics Team",
                image: "https://res.cloudinary.com/dll7cjob6/image/upload/f_auto,q_auto/v1774542355/Md_Ariful_Islam_Raju_Assistant_Manager_Logistics_Team.png",
                color: "from-green-500 to-emerald-500",
            },
            {
                name: "Ahmed Shofi Ratul",
                designation: "Assistant Manager, Logistics Team",
                image: "https://res.cloudinary.com/dll7cjob6/image/upload/f_auto,q_auto/v1774542305/Ahmed_Shofi_Ratul_Assistant_Manager_Logistics_Team.png",
                color: "from-green-500 to-emerald-500",
            },
            {
                name: "Shahriar Adnan Adib",
                designation: "Coordinator",
                image: "https://res.cloudinary.com/dll7cjob6/image/upload/f_auto,q_auto/v1774542346/Shahriar_Adnan_Adib_Coordinator.png",
                color: "from-green-500 to-emerald-500",
            },
            {
                name: "Md. Mobin Al Nahian",
                designation: "Coordinator",
                image: "https://res.cloudinary.com/dll7cjob6/image/upload/f_auto,q_auto/v1774542322/Md_Mobin_Al_Nahlan_Coordinator.png",
                color: "from-green-500 to-emerald-500",
            },
            {
                name: "Mahadi Ahmed",
                designation: "Associate Coordinator",
                image: "https://res.cloudinary.com/dll7cjob6/image/upload/f_auto,q_auto/v1774542300/Mahadi_Ahmed_Associate_Coordinator.png",
                color: "from-green-500 to-emerald-500",
            },
            {
                name: "Al Jawad",
                designation: "Associate Coordinator",
                image: "https://res.cloudinary.com/dll7cjob6/image/upload/f_auto,q_auto/v1774542310/Al_Jawad_Associate_Coordinator.png",
                color: "from-green-500 to-emerald-500",
            },
            {
                name: "Abdullah Ibne Nasiruddin (Sheehan)",
                designation: "Associate Coordinator",
                image: "https://res.cloudinary.com/dll7cjob6/image/upload/f_auto,q_auto/v1774542356/Abdullah_Ibne_Nasiruddin_Sheehan__Associate_Coordinator.png",
                color: "from-green-500 to-emerald-500",
            },
            {
                name: "Aditya Das",
                designation: "Associate Coordinator",
                image: "https://res.cloudinary.com/dll7cjob6/image/upload/f_auto,q_auto/v1774542263/Aditya_Das_Associate_Coordinator.png",
                color: "from-green-500 to-emerald-500",
            },
            {
                name: "Aryan Nafis",
                designation: "Associate Coordinator",
                image: "https://res.cloudinary.com/dll7cjob6/image/upload/f_auto,q_auto/v1774542283/Aryan_Nafis_Associate_Coordinator.png",
                color: "from-green-500 to-emerald-500",
            },
            {
                name: "Arnob Das",
                designation: "Assistant Coordinator",
                image: "https://res.cloudinary.com/dll7cjob6/image/upload/f_auto,q_auto/v1774542290/Arnob_Das_Assistant_Coordinator.png",
                color: "from-green-500 to-emerald-500",
            },
            {
                name: "Jubayer Ahmed Udoy",
                designation: "Assistant Coordinator",
                image: "https://res.cloudinary.com/dll7cjob6/image/upload/f_auto,q_auto/v1774542261/Jubayer_Ahmed_Udoy_Assistant_Coordinator.png",
                color: "from-green-500 to-emerald-500",
            },
            {
                name: "Md Istiaq Ahmed Khan",
                designation: "Assistant Coordinator",
                image: "https://res.cloudinary.com/dll7cjob6/image/upload/f_auto,q_auto/v1774542342/Md_Istiaq_Ahmed_Khan_Assistant_Coordinator.png",
                color: "from-green-500 to-emerald-500",
            },
            {
                name: "Muhammad Farbeen Ferdous (Twaseen)",
                designation: "Assistant Coordinator",
                image: "https://res.cloudinary.com/dll7cjob6/image/upload/f_auto,q_auto/v1774542271/Muhammad_Farbeen_Ferdous_Twaseen__Assistant_Coordinator.png",
                color: "from-green-500 to-emerald-500",
            },
            {
                name: "Maxudur Rahman Chowdhury (Samee)",
                designation: "Assistant Coordinator",
                image: "https://res.cloudinary.com/dll7cjob6/image/upload/f_auto,q_auto/v1774542281/Maxudur_Rahman_Chowdhury_Samee__Assistant_Coordinator.png",
                color: "from-green-500 to-emerald-500",
            },
            {
                name: "Abid Ahsan",
                designation: "Assistant Coordinator",
                image: "https://res.cloudinary.com/dll7cjob6/image/upload/f_auto,q_auto/v1774542335/Abid_Ahsan_Assistant_Coordinator.png",
                color: "from-green-500 to-emerald-500",
            },
            {
                name: "Asfi Raihan",
                designation: "Assistant Coordinator",
                image: "https://res.cloudinary.com/dll7cjob6/image/upload/f_auto,q_auto/v1774542374/Asfi_Raihan_Assistant_Coordinator.png",
                color: "from-green-500 to-emerald-500",
            }
        ]
    },
    {
        id: "first",
        year: "2024-2025",
        members: [
            {
                name: "Dr. Md. Ashiqur Rahman, Professor, Department of Mechanical Engineering",
                designation: "Advisor",
                image: "https://res.cloudinary.com/dll7cjob6/image/upload/f_auto,q_auto/v1774542375/Dr_Md_Ashiqur_Rahman_Advisor.png",
                color: "from-blue-500 to-cyan-500",
            },
            {
                name: "Taskin Mehereen",
                designation: "President",
                image: "https://res.cloudinary.com/dll7cjob6/image/upload/f_auto,q_auto/v1774541212/Taskin_Mehereen_President.png",
                color: "from-blue-500 to-cyan-500",
            },
            {
                name: "Jubaer Jami",
                designation: "Vice President",
                image: "https://res.cloudinary.com/dll7cjob6/image/upload/f_auto,q_auto/v1774541215/Jubaer_Jami_Vice_President.png",
                color: "from-blue-500 to-cyan-500",
            },
            {
                name: "Sahib Ur Rauf",
                designation: "Treasurer",
                image: "https://res.cloudinary.com/dll7cjob6/image/upload/f_auto,q_auto/v1774541210/Sahib_Ur_Rauf_Treasurer.png",
                color: "from-blue-500 to-cyan-500",
            },
            {
                name: "Nahid Shahriare",
                designation: "Secretary",
                image: "https://res.cloudinary.com/dll7cjob6/image/upload/f_auto,q_auto/v1774541211/Nahid_Shahriare_Secretary.png",
                color: "from-blue-500 to-cyan-500",
            },
            {
                name: "Afia Zaman",
                designation: "Joint Secretary, Competitions Scholarships & Research",
                image: "https://res.cloudinary.com/dll7cjob6/image/upload/f_auto,q_auto/v1774541215/Afia_Zaman_Joint_Secretary_Competitions_Scholarships_Research.png",
                color: "from-blue-500 to-cyan-500",
            },
            {
                name: "Iltimas Wasek",
                designation: "Joint Secretary, Trips & Conference",
                image: "https://res.cloudinary.com/dll7cjob6/image/upload/f_auto,q_auto/v1774541209/Iltimas_Wasek_Joint_Secretary_Trips_Conference.png",
                color: "from-blue-500 to-cyan-500",
            },
            {
                name: "Atia Ashrafy",
                designation: "Assistant Joint Secretary, Trips & Conferences",
                image: "https://res.cloudinary.com/dll7cjob6/image/upload/f_auto,q_auto/v1774541209/Atia_Ashrafy_Assistant_Joint_Secretary_Trips_Conferences.png",
                color: "from-blue-500 to-cyan-500",
            },
            {
                name: "Kaifa Samsad",
                designation: "Assistant Joint Secretary, Trips & Conferences",
                image: "https://res.cloudinary.com/dll7cjob6/image/upload/f_auto,q_auto/v1774541217/Kaifa_Samsad_Assistant_Joint_Secretary_Trips_Conferences.png",
                color: "from-blue-500 to-cyan-500",
            },
            {
                name: "Arnab Roy",
                designation: "Assistant Joint Secretary, Competitions Scholarships & Research",
                image: "https://res.cloudinary.com/dll7cjob6/image/upload/f_auto,q_auto/v1774541214/Arnab_Roy_Assistant_Joint_Secretary_Competitions_Scholarships_Research.png",
                color: "from-blue-500 to-cyan-500",
            },
            {
                name: "Afrina Ayrin",
                designation: "Assistant Joint Secretary, Competitions Scholarships & Research",
                image: "https://res.cloudinary.com/dll7cjob6/image/upload/f_auto,q_auto/v1774541210/Afrina_Ayrin_Assistant_Joint_Secretary_Competitions_Scholarships_Research.png",
                color: "from-blue-500 to-cyan-500",
            },
            {
                name: "Md Luban Mehda",
                designation: "Coordinator, Logistics",
                image: "https://res.cloudinary.com/dll7cjob6/image/upload/f_auto,q_auto/v1774541216/Md_Luban_Mehda_Coordinator_Logistics.png",
                color: "from-blue-500 to-cyan-500",
            },
            {
                name: "Arafath Rahman",
                designation: "Coordinator, Logistics",
                image: "https://res.cloudinary.com/dll7cjob6/image/upload/f_auto,q_auto/v1774541214/Arafath_Rahman_Coordinator_Logistics.png",
                color: "from-blue-500 to-cyan-500",
            },
            {
                name: "Nafisa Ferdous",
                designation: "Coordinator, Public Communications",
                image: "https://res.cloudinary.com/dll7cjob6/image/upload/f_auto,q_auto/v1774541208/Nafisa_Ferdous_Coordinator_Public_Communications.png",
                color: "from-blue-500 to-cyan-500",
            },
            {
                name: "Prapon Jaman",
                designation: "Coordinator, Sponsorship",
                image: "https://res.cloudinary.com/dll7cjob6/image/upload/f_auto,q_auto/v1774541208/Prapon_Jaman_Coordinator_Sponsorship.png",
                color: "from-blue-500 to-cyan-500",
            },
            {
                name: "Safwan Sakib",
                designation: "Coordinator, Sponsorship",
                image: "https://res.cloudinary.com/dll7cjob6/image/upload/f_auto,q_auto/v1774541218/Safwan_Sakib_Coordinator_Sponsorship.png",
                color: "from-blue-500 to-cyan-500",
            }
        ]
    }
];

export default db;
