/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project, SkillCategory, Certification, Stat } from './types';

export const PERSONAL_INFO = {
  name: "Alisha Khan",
  titlePrimary: "Data Analyst",
  titles: ["Data Analyst", "ML Enthusiast", "BI Dashboard Developer"],
  tagline: "Turning raw data into meaningful insights — through analysis, visualization, and machine learning.",
  bio: "Data Analyst with a Bachelor's degree in Computer Science and hands-on experience in Python, SQL, and machine learning. Skilled in data cleaning, exploratory data analysis (EDA), predictive modeling, and data visualization using Tableau and Power BI. Completed the Google Advanced Data Analytics Professional Certificate, delivering end-to-end analytics projects involving statistical analysis and model evaluation. Demonstrates strong ability to translate complex datasets into actionable insights to support data-driven decision-making.",
  education: {
    degree: "Bachelor of Computer Science",
    institution: "The University of Faisalabad",
    year: "2021-2025",
    coursework: ["Data Structures & Algorithms", "Database Management Systems", "Software Engineering", "Discrete Mathematics"]
  },
  location: "Faisalabad, Pakistan",
  email: "alisharaufkhan@gmail.com",
  github: "https://github.com/alisha-22",
  linkedin: "https://www.linkedin.com/in/alisha-khan09",
};

export const STATS: Stat[] = [
  { label: "Projects completed", value: "10" },
  { label: "Tools & Technologies", value: "15+" },
  { label: "Certifications", value: "2+" },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming & Analysis",
    skills: [
      { name: "Python", level: 90, iconName: "python" },
      { name: "SQL", level: 85, iconName: "database" },
      { name: "Pandas/NumPy", level: 88, iconName: "bar-chart" },
      { name: "Jupyter", level: 80, iconName: "book" },
    ]
  },
  {
    title: "Data Visualization & BI",
    skills: [
      { name: "Tableau", level: 80, iconName: "layout" },
      { name: "Power BI", level: 80, iconName: "pie-chart" },
      { name: "Excel", level: 85, iconName: "table" },
      { name: "Matplotlib", level: 75, iconName: "activity" },
    ]
  },
  {
    title: "Machine Learning & Statistics",
    skills: [
      { name: "Regression", level: 82, iconName: "trending-up" },
      { name: "Classification", level: 80, iconName: "layers" },
      { name: "A/B Testing", level: 78, iconName: "git-branch" },
      { name: "Scikit-learn", level: 75, iconName: "cpu" },
    ]
  },
  {
    title: "Tools & Practices",
    skills: [
      { name: "Git/GitHub", level: 85, iconName: "github" },
      { name: "Data Wrangling", level: 88, iconName: "search" },
      { name: "Storytelling", level: 82, iconName: "message-square" },
      { name: "StatsModels", level: 70, iconName: "calculator" },
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "attrition",
    title: "Employee Attrition Prediction (Salifort Motors)",
    tags: ["Python", "Pandas", "Scikit-learn"],
    description: "Analyzed employee dataset to identify key attrition drivers via EDA; built classification models to predict turnover; generated HR insights to improve retention strategies.",
    githubUrl: "https://github.com/alisha-22/Salifort-Motors-Employee-Attrition-Prediction",
    category: "advanced"
  },
  {
    id: "tip-prediction",
    title: "NYC Taxi Tip Prediction Model",
    tags: ["Python", "Scikit-learn", "XGBoost"],
    description: "Random Forest & XGBoost models predicting high-value tipping (≥20%); evaluated with F1-score & feature importance; surfaced key predictors driving tipping behavior.",
    githubUrl: "https://github.com/alisha-22/NYC-Taxi-Tip-Prediction-Machine-Learning-Model-Analysis",
    category: "advanced"
  },
  {
    id: "fare-prediction",
    title: "NYC Taxi Fare Prediction — Multiple Linear Regression",
    tags: ["Python", "Pandas", "StatsModels"],
    description: "Built multiple linear regression model to predict taxi fares; applied regression diagnostics; identified ride duration as primary driver. Evaluated with R², MAE, MSE, RMSE.",
    githubUrl: "https://github.com/alisha-22/NYC-Taxi-Fare-Prediction-Multiple-Linear-Regression-Model",
    category: "advanced"
  },
  {
    id: "fare-ab",
    title: "NYC Taxi Fare Analysis — A/B Testing",
    tags: ["Python", "Pandas", "SciPy"],
    description: "Hypothesis testing comparing fares across payment methods; applied t-test to identify statistically significant differences; insights revealed higher fares with credit card payments.",
    githubUrl: "https://github.com/alisha-22/NYC-Taxi-Fare-Analysis-Statistical-Review-and-A-B-Testing",
    category: "advanced"
  },
  {
    id: "fare-eda",
    title: "NYC Taxi Fare — Exploratory Data Analysis",
    tags: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    description: "Comprehensive EDA uncovering patterns, outliers, and key variables driving NYC taxi fares — foundation for all downstream modelling work.",
    githubUrl: "https://github.com/alisha-22/NYC-Taxi-Fare-Prediction-Exploratory-Data-Analysis-EDA",
    category: "advanced"
  },
  {
    id: "mobile-sales",
    title: "Mobile Sales Dashboard",
    tags: ["Power BI", "Excel"],
    description: "Interactive dashboard visualizing mobile product performance across regions and time periods with drill-down filters.",
    githubUrl: "https://github.com/alisha-22/Mobile-Sales-Dashboard",
    category: "beginner"
  },
  {
    id: "sales-customer",
    title: "Sales & Customer Dashboard (Tableau)",
    tags: ["Tableau"],
    description: "Tableau dashboard delivering actionable insights on sales trends and customer segmentation for business stakeholders.",
    githubUrl: "https://github.com/alisha-22/Sales-Customer-Dashboard-Tableau-",
    category: "beginner"
  },
  {
    id: "er-dashboard",
    title: "Hospital Emergency Room Dashboard",
    tags: ["Power BI"],
    description: "ER performance metrics dashboard tracking patient wait times, volume trends, and department KPIs to support clinical decisions.",
    githubUrl: "https://github.com/alisha-22/Hospital-Emergency-Room-Dashboard",
    category: "beginner"
  },
  {
    id: "bookstore",
    title: "Online Book Store Analysis (SQL)",
    tags: ["SQL", "PostgreSQL"],
    description: "SQL-driven analysis of an online bookstore database exploring sales patterns, inventory turnover, and customer purchasing behaviour.",
    githubUrl: "https://github.com/alisha-22/Online-Book-Store-Analysis-SQL",
    category: "beginner"
  },
  {
    id: "sales-2024",
    title: "Online Sales Dashboard 2024",
    tags: ["Power BI", "Excel"],
    description: "Full-year 2024 online sales dashboard with category, region, and channel filters for executive-level reporting.",
    githubUrl: "https://github.com/alisha-22/Online-Sales-Dasboard-2024",
    category: "beginner"
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: "Google Advanced Data Analytics",
    issuer: "Coursera",
    year: "2026",
    verifyUrl: "https://www.coursera.org/account/accomplishments/specialization/WV5X7O6F57W3",
    status: "completed"
  },
  {
    title: "Google AI Essentials",
    issuer: "Coursera",
    year: "2026",
    verifyUrl: "https://www.coursera.org/account/accomplishments/specialization/U2TSP1TINR5E",
    status: "completed"
  },
  {
    title: "Google AI",
    issuer: "Coursera",
    year: "2026",
    status: "in-progress"
  }
];
