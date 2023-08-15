import { IconType } from "react-icons";

export interface ExperienceItem {
  logoLink: string;
  LogoName: string;
  companyName: string;
  experienceDetails: string[];
  location: string;
  status: string;
  role: string;
  position: string;
  startDate: string;
  endDate: string;
  techStack: string[];
}

export interface EducationItem {
  name: string;
  degree: string;
  grade: string;
  websiteLink: string;
  major: string;
  skills: string[];
  educationDetails: string[];
  activities: string[];
  startDate: string;
  endDate: string;
}

export interface AchievementItem {
  detail: string;
  link: string;
}

export interface ProjectItem {
  name: string;
  bannerLink: string;
  repoLink: string;
  liveLink: string;
  techStack: string[];
  detail: string[];
}

export interface MessageItem {
  firstName: string;
  lastName: string;
  subject: string;
  email: string;
  message: string;
  createdAt: string;
  updatedAt: string;
}

export interface CertificateItem {
  name: string;
  imageLink: string;
  company: string;
  certificateLink: string;
}
export interface VolunteerItem {
  name: string;
  logoLink: string;
  websiteLink: string;
  twitterLink: string;
  linkedinLink: string;
  detail: string[];
  startDate: string;
  endDate: string;
}
export interface OpenSourceItem {
  name: string;
  logoLink: string;
  startDate: string;
  endDate: string;
  detail: [
    {
      individualName: string;
      individualStartDate: string;
      description: string[];
      techStack: string[];
      links: [
        {
          repoLink: string;
          contributionLink: string;
          certificateLink: string;
        }
      ];
    }
  ];
}
export interface SocialLinkItem {
  links: [
    { github: string },
    { linkedin: string },
    { twitter: string },
    { instagram: string },
    { dev: string },
    { medium: string },
    { linktree?: string | null },
    { facebook: string }
  ];
}

export interface MobileIconComponentsItem {
  [iconName: string]: IconType;
}

export interface ParallaxItem {
  title: string;
  wallpaper: string;
}

interface SectionTitleItemSubItem {
  mainTitle: string;
  summary: string;
}

export interface SectionTitleItem {
  aboutMe: SectionTitleItemSubItem;
  education: SectionTitleItemSubItem;
  achievements: SectionTitleItemSubItem;
  projects: SectionTitleItemSubItem;
  nextProject: SectionTitleItemSubItem;
  internships: SectionTitleItemSubItem;
  openSource: SectionTitleItemSubItem;
  volunteering: SectionTitleItemSubItem;
  certification: SectionTitleItemSubItem;
  blog: SectionTitleItemSubItem;
}
