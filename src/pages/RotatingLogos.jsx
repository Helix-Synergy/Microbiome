import React, { useEffect, useState } from "react";
import { Sparkle } from "lucide-react";
import { Link } from "react-router-dom";
// Images for agri
import img1 from "../assets/tracks/img1.jpg";
import img2 from "../assets/tracks/img2.webp"
import img3  from "../assets/tracks/img3.webp";
import img4 from "../assets/tracks/img4.webp";
import img5 from "../assets/tracks/img5.jpeg";
import img6 from "../assets/tracks/img6.webp"
import img7 from "../assets/tracks/img7.webp";
import img8 from "../assets/tracks/img8.webp"
import img9 from "../assets/tracks/img9.webp";
import img10 from "../assets/tracks/img10.webp"
import img11 from "../assets/tracks/img11.png";
import img12 from "../assets/tracks/img12.webp"
import img13 from "../assets/tracks/img13.jpg";
import img14 from "../assets/tracks/img14.jpg"
import img15 from "../assets/tracks/img15.png";
import img16 from "../assets/tracks/img16.jpg"
import img17 from "../assets/tracks/img17.jpg"
import img18 from "../assets/tracks/img18.webp";
import img19 from "../assets/tracks/img19.png"
import img20 from "../assets/tracks/img20.webp"

export const tracks = [
  {
    image: img1,
    title: "AI in Microbiome Research",
    description: (
      <>
Explore how {" "}
        <Link
          to="/"
          className="
             hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
 artificial intelligence and machine learning accelerate microbiome research
        </Link>  by analyzing complex microbial data, predicting host-microbiome interactions, and identifying novel therapeutic targets. AI-driven approaches optimize experimental design, enhance precision in diagnostics, and facilitate personalized microbiome interventions, enabling breakthroughs in healthcare, disease treatment, and microbiome-based therapeutic discovery.
   
      </>
    ),
  },

  {
    image: img2,
    title: "Microbiome Engineering",
    description: (
      <>
{" "}
        <Link
          to="/about-microbiome"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
   Microbiome engineering
        </Link>{" "} focuses on designing and modulating microbial communities to improve health outcomes. This track covers synthetic microbial consortia, probiotics, engineered gut bacteria, and microbial therapeutics. Participants will explore strategies for manipulating microbiomes to treat diseases, restore balance, and create next-generation therapies across gastrointestinal, immune, metabolic, and systemic conditions.
       
      </>
    ),
  },

  {
    image: img3,
    title: "Gastrointestinal Disease",
    description: (
      <>
This track explores microbiome-based interventions for {" "}
        <Link
          to="/microbiome-event-schedule"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
  gastrointestinal disorders
        </Link>  including inflammatory bowel disease, irritable bowel syndrome, and colorectal cancer. Topics include microbiome-targeted therapies, gut microbial modulation, probiotics, fecal microbiota transplantation, and precision medicine approaches. Attendees gain insights into translating microbiome research into effective gastrointestinal disease treatments and preventive strategies.
      </>
    ),
  },

  {
    image: img4,
    title: "Nutrition & Metabolism",
    description: (
      <>
       {" "}
        <Link
          to="/venue"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
Nutrition and metabolism
        </Link>{" "} intersect with the microbiome to influence health and disease. This track examines microbial contributions to nutrient absorption, energy balance, metabolic disorders, and diet-microbiome interactions. Participants explore microbiome-targeted dietary interventions, metabolic engineering, and personalized nutrition strategies that optimize health outcomes and prevent obesity, diabetes, and related metabolic diseases.

      </>
    ),
  },

  {
    image: img5 ,
    title: "Cell Therapy",
    description: (
      <>
Cell therapy leverages engineered or microbiome-modulated cells to treat diseases. This track covers stem cell-based interventions, immune cell modulation, engineered microbial cells, and synthetic biology approaches to enhance therapeutic efficacy. Attendees learn strategies for integrating microbiome insights with cell therapy for regenerative medicine, immunotherapy, and{" "}
        <Link
          to="/contact"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
    precision biomedical
        </Link>{" "} applications.
   
      </>
    ),
  },

  {
    image: img6,
    title: " Reproductive Health",
    description: (
      <>

        <Link
          to= "/event_partners"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
     Reproductive health 
        </Link>{" "} focuses on the role of microbiomes in fertility, pregnancy, and neonatal outcomes. Topics include vaginal microbiome modulation, maternal-fetal interactions, microbial influence on reproductive disorders, and therapeutic interventions. Participants gain insights into microbiome-driven approaches to improve reproductive health, optimize pregnancy outcomes, and develop innovative fertility treatments.
     
      </>
    ),
  },

  {
    image: img7,
    title: " Cancer Therapy",
    description: (
      <>
{" "}
        <Link
          to="/event_partners"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
   Cancer therapy 
        </Link>{" "}explores microbiome contributions to tumor progression, drug response, and immunotherapy efficacy. This track covers microbiome-modulating strategies, therapeutic microbiota, checkpoint inhibitors, and combination treatments. Attendees will explore translational approaches that harness the microbiome to enhance anti-cancer therapies, improve patient outcomes, and advance precision oncology interventions.
      </>
    ),
  },

  {
    image:  img8,
    title: "Gene Therapy",
    description: (
      <>
       {" "}
        <Link
          to="/"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
 Gene therapy
        </Link>{" "}  integrates microbiome knowledge to develop targeted therapeutic interventions. Topics include gene editing, CRISPR-based microbiome modulation, microbial delivery systems, and engineered probiotics. Participants explore strategies for leveraging microbial-host interactions to enhance gene therapy efficacy, safety, and precision in treating genetic, metabolic, and immune-mediated diseases.
      
      </>
    ),
  },

  {
    image: img9,
    title: "Autoimmune & Immunology",
    description: (
      <>
This track explores the role of the{" "}
        <Link
          to="https://helixconferences.com/buy-a-ticket"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
microbiome in autoimmune diseases and immune system regulation. 
        </Link>{" "}  Topics include microbial modulation of immunity, immunotherapies, probiotics, and microbiome-based diagnostics. Attendees learn how microbiome-targeted interventions can prevent or treat autoimmune disorders, optimize immune responses, and improve patient outcomes across diverse clinical contexts.
      </>
    ),
  },

  {
    image: img10,
    title: "Microbiome Therapeutics",
    description: (
      <>
 {" "}
        <Link
          to="/about-microbiome" 
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
Microbiome therapeutics
        </Link>{" "}  focuses on developing interventions to restore or enhance beneficial microbial communities. Topics include live biotherapeutics, engineered probiotics, microbial metabolites, and personalized microbiome therapies. Participants gain insights into translational research, clinical development, regulatory frameworks, and innovative strategies for harnessing the microbiome to treat diverse human diseases.

      </>
    ),
  },

  {
    image: img11,
    title: "Precision Oncology",
    description: (
      <>
     {" "}
        <Link
          to="/microbiome-orators" 
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
Precision oncology
        </Link>  integrates microbiome insights to tailor cancer therapies for individual patients. This track explores microbiome-driven biomarkers, therapeutic response prediction, microbiota modulation, and combination treatments. Participants learn strategies for leveraging microbial profiles to optimize cancer treatment, improve immunotherapy outcomes, and advance personalized, microbiome-informed oncology approaches.
      </>

    ),
  },

  {
    image: img12,
    title: "Protein Degradation",
    description: (
      <>
Protein degradation focuses on microbiome and bioengineering approaches to regulate protein turnover in disease contexts. This track covers targeted {" "}
        <Link
          to="/contact" 
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
  protein degradation, 
        </Link>{" "}    microbial enzymes, and synthetic biology strategies. Attendees explore how microbiome-mediated protein modulation can influence disease pathways, enhance therapeutic interventions, and provide novel strategies for drug discovery and treatment.
      </>
    ),
  },

  {
    image: img13,
    title: "Gut Microbiome",
    description: (
      <>
 The{" "}
        <Link
          to="/"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
    gut microbiome
        </Link>  is central to human health, impacting digestion, immunity, metabolism, and disease. This track covers microbial composition, functional profiling, host interactions, and therapeutic modulation. Participants will explore strategies to harness the gut microbiome for precision therapies, disease prevention, and development of next-generation microbiome-based interventions.

        
      </>
    ),
  },

  {
    image:img14,
    title: " Cancer & Tumor Microbiome",
    description: (
      <>
 This track examines the unique microbial ecosystems within tumors and their impact on cancer progression, therapy response, and immunomodulation. Topics include microbiome-driven biomarkers, therapeutic microbiota, and engineered microbial interventions. Attendees explore translational approaches to target the{" "}
        <Link
          to="https://helixconferences.com/buy-a-ticket"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
     tumor microbiome,
        </Link> enhancing oncology treatments and advancing precision cancer care.
        
      </>
    ),
  },

  {
    image: img15,
    title: "Neurological Diseases",
    description: (
      <>
      {" "}
        <Link
          to="/about-microbiome"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
     Neurological diseases 
        </Link>  explore microbiome influence on brain function, neuroinflammation, and neurodegenerative disorders. This track covers gut-brain axis, microbial metabolites, microbial therapy for neurological conditions, and cognitive health interventions. Participants learn strategies to develop microbiome-targeted therapies for diseases such as Parkinson’s, Alzheimer’s, and multiple sclerosis.
     
      </>
    ),
  },

  {
    image: img16,
    title: "Cardiovascular Health",
    description: (
      <>
The microbiome’s role in {" "}
        <Link
          to=  "/microbiome-orators" 
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
        cardiovascular health
        </Link>includes influencing blood pressure, lipid metabolism, and heart disease risk. This track explores microbial metabolites, therapeutic interventions, and precision medicine approaches. Participants gain insights into microbiome-targeted strategies to prevent or treat cardiovascular disorders and promote systemic metabolic and vascular health.
</>
    ),
  },

  {
    image:img17,
    title: "Skin Microbiome",
    description: (
      <>
 The {" "}
        <Link
          to="/venue"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
     skin microbiome
        </Link>  regulates immune responses, barrier function, and dermatological health. This track covers microbial therapies for acne, eczema, wound healing, and skin aging. Participants will explore innovative approaches to manipulate the skin microbiome for therapeutic interventions, cosmetic applications, and regenerative dermatology using microbiome-based solutions.
      </>
    ),
  },
// Ethical

  {
    image: img18,
    title: " Urogenital Microbiome",
    description: (
      <>
   The{" "}
        <Link
          to="/contact"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
          urogenital microbiome
        </Link>  influences reproductive health, infection susceptibility, and chronic conditions. This track covers vaginal and urinary microbiota, microbial therapeutics, probiotics, and precision interventions. Attendees will explore microbiome-targeted strategies to prevent infections, improve reproductive outcomes, and develop innovative therapies for urogenital health.

      </>
    ),
  },
  // Microbiome Engineering
  
  {
    image: img19,
    title: " Lung Microbiome",
    description: (
      <>
  The{" "}
        <Link
          to="https://helixconferences.com/buy-a-ticket"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
lung microbiome
        </Link>  affects respiratory health, immune responses, and disease progression. This track includes microbial profiling, respiratory infections, asthma, COPD, and microbiome-targeted therapeutics. Participants explore translational approaches to harness the lung microbiome for prevention, treatment, and precision management of respiratory and systemic diseases.
      </>
    ),
  },
  {
    image:img20,
    title: "Pathobionts",
    description: (
      <>
   Pathobionts are microbial species that can shift from commensal to pathogenic under certain conditions. This track focuses on understanding host-microbiome dynamics, pathogenic triggers, and therapeutic interventions. Attendees explore strategies to control    {" "}
        <Link
          to= "/venue"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
    pathobionts, 
        </Link>{" "}  prevent disease, and develop targeted microbiome therapies to maintain microbial balance and host health.
      </>
    ),
  },
];

const StaticTracks = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* <style>{`
        @keyframes pulseShadow {
          0%, 100% {
            box-shadow: 0 0 0px rgba(44, 211, 35, 0.2);
          }
          50% {
            box-shadow: 0 0 18px 6px rgb(122,179,38);
          }
        }

        .animate-pulseShadow {
          animation: pulseShadow 3s ease-in-out infinite;
        }

        .transition-custom {
          transition: all 0.8s ease-in-out;
        }
      `}</style> */}

      <div className="relative mt-14">
        {/* Fixed Top-Right Button */}
        <div className="fixed top-[22%] right-[1%] z-50 transition-custom">
          <a
            href="/abstract-submission"
            aria-label="Submit abstract"
            className="bg-one rounded-full text-white text-sm font-medium px-3 py-3 select-none transition-transform hover:scale-110 animate-pulseShadow"
          >
            Submit Abstract
          </a>
        </div>

        {/* Track Content */}
        <div className="container mx-auto px-4 py-10 space-y-20 flex flex-col items-center">
          {tracks.map((track, index) => (
            <div
              key={index}
              className="relative w-[80%] flex flex-col md:flex-row items-stretch md:space-x-6"
            >
              <div className="flex-shrink-0 bg-white border shadow-xl rounded-2xl p-2 w-full md:w-1/3">
                <img
                  src={track.image}
                  alt={track.title}
                  className="w-full h-full object-cover rounded-xl"
                  loading="lazy"
                />
              </div>
              <div className="bg-white border shadow-xl rounded-2xl p-6 w-full md:w-2/3 mt-12 md:mt-0 flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-1 text-one flex items-center gap-2">
                  <Sparkle className="fill-one" />
                  {track.title}
                </h2>
                <h3 className="text-xl text-gray-600 font-semibold mb-3">
                  {track.subtitle}
                </h3>
                <p className="text-md text-gray-800 leading-relaxed text-justify">
                  {track.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default StaticTracks;
