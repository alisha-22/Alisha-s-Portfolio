/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  title: string;
  tags: string[];
  description: string;
  githubUrl: string;
  category: 'advanced' | 'beginner';
}

export interface Skill {
  name: string;
  level: number; // 0-100
  iconName: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
  verifyUrl?: string;
  status: 'completed' | 'in-progress';
}

export interface Stat {
  label: string;
  value: string;
}
