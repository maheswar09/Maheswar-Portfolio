export interface Achievement {
  id: number;
  title: string;
  organization: string;
  type: string; // "Certification", "Competition", "Badge", "Hackathon"
  date: string;
  description?: string;
  credentialUrl?: string;
  image?: string; // ✅ Add this
}

  
  export const achievementsData: Achievement[] = [
    // Certifications
    {
      id: 1,
      title: "Microsoft Certified: Power BI Data Analyst Associate",
      organization: "Microsoft",
      type: "Certification",
      date: "Jan 2025 - Jan 2026",
      credentialUrl: "https://learn.microsoft.com/en-us/users/SreeVenkatChintakula-9956/credentials/5CE5A38DF4BE437D",
    },
    {
      id: 2,
      title: "Deep Learning Specialization",
      organization: "DeepLearning.AI",
      type: "Certification",
      date: "Nov 2024",
      credentialUrl: "https://www.coursera.org/account/accomplishments/specialization/7YZWIFUTLI92",
    },
    {
      id: 3,
      title: "Biomedical Researcher",
      organization: "CITI Program",
      type: "Certification",
      date: "Oct 2024 - Oct 2029",
    },
    {
      id: 4,
      title: "Biomedical Responsible Conduct of Research",
      organization: "CITI Program",
      type: "Certification",
      date: "Oct 2024",
    },
    {
      id: 5,
      title: "Good Clinical Practice (GCP)",
      organization: "CITI Program",
      type: "Certification",
      date: "Oct 2024 - Oct 2027",
    },
    {
      id: 6,
      title: "HIPAA Privacy and Security",
      organization: "Indiana University Bloomington",
      type: "Certification",
      date: "Sep 2024 - Sep 2025",
    },
    {
      id: 7,
      title: "Tableau Business Intelligence Analyst",
      organization: "Tableau Learning Partner",
      type: "Certification",
      date: "Issued (no expiry)",
      credentialUrl: "https://www.coursera.org/account/accomplishments/professional-cert/certificate/BO288DLO0NDL",
    },
    {
      id: 8,
      title: "Advanced NLP with spaCy",
      organization: "Independent",
      type: "Certification",
      date: "2024",
    },
  
    // Competitions
    {
      id: 9,
      title: "Runner-Up, GT-IDEA Case Competition - Optimizing Volunteer Management using AI and Analytics",
      organization: "Indiana University",
      type: "Competition",
      date: "2024",
      credentialUrl: "https://www.linkedin.com/posts/gt-idea_casecompetition-dataanalytics-ai-activity-7305262010735214593-hv2K",
    },
  
    // Hackathons
    {
      id: 10,
      title: "Participant, Luddy AI Hackathon",
      organization: "Indiana University Luddy School of Informatics",
      type: "Hackathon",
      date: "2023",
    },
    {
      id: 11,
      title: "Participant, Luddy AI Hackathon",
      organization: "Indiana University Luddy School of Informatics",
      type: "Hackathon",
      date: "2024",
    },
  
    // Leetcode Badges
    {
      id: 12,
      title: "SQL 50 Badge",
      organization: "Leetcode",
      type: "Badge",
      date: "Mar 2025",
      image: "https://assets.leetcode.com/static_assets/others/Top_SQL_50.gif" // ✅ Add this
    },
    {
      id: 13,
      title: "Advanced SQL 50",
      organization: "Leetcode",
      type: "Badge",
      date: "Active",
      image: "https://assets.leetcode.com/static_assets/others/Premium_SQL_50.gif" // ✅ Add this
    }

  ];
  