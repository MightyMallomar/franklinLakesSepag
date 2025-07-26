import { Resource } from '../utils/api';

export const mockResources: Resource[] = [
  {
    id: '1',
    title: 'Understanding Your Child\'s IEP',
    description: 'A comprehensive guide to understanding Individualized Education Programs, including how to read IEP documents, what to expect at meetings, and how to advocate effectively.',
    category: 'education',
    type: 'document',
    url: '/resources/understanding-iep-guide.pdf',
    fileSize: '2.3 MB',
    tags: ['IEP', 'Education', 'Advocacy', 'Guide'],
    createdAt: '2024-01-15'
  },
  {
    id: '2',
    title: 'Special Education Rights in New Jersey',
    description: 'Complete overview of special education rights and laws in New Jersey, including IDEA, Section 504, and state-specific regulations.',
    category: 'legal',
    type: 'document',
    url: '/resources/nj-special-ed-rights.pdf',
    fileSize: '1.8 MB',
    tags: ['Legal', 'Rights', 'New Jersey', 'IDEA', 'Section 504'],
    createdAt: '2024-01-20'
  },
  {
    id: '3',
    title: 'Effective Communication with School Staff',
    description: 'Strategies for building positive relationships with teachers, administrators, and support staff to ensure your child receives the best possible education.',
    category: 'advocacy',
    type: 'document',
    url: '/resources/communication-strategies.pdf',
    fileSize: '1.5 MB',
    tags: ['Communication', 'Advocacy', 'School Relations', 'Partnership'],
    createdAt: '2024-01-25'
  },
  {
    id: '4',
    title: 'ADHD Support Strategies',
    description: 'Practical strategies for supporting children with ADHD at home and in school, including behavioral interventions and academic accommodations.',
    category: 'education',
    type: 'document',
    url: '/resources/adhd-strategies.pdf',
    fileSize: '2.1 MB',
    tags: ['ADHD', 'Strategies', 'Behavior', 'Academic Support'],
    createdAt: '2024-02-01'
  },
  {
    id: '5',
    title: 'Autism Resource Directory',
    description: 'Comprehensive directory of autism resources in the Franklin Lakes area, including therapists, support groups, and community programs.',
    category: 'community',
    type: 'document',
    url: '/resources/autism-directory.pdf',
    fileSize: '3.2 MB',
    tags: ['Autism', 'Directory', 'Community', 'Resources'],
    createdAt: '2024-02-05'
  },
  {
    id: '6',
    title: 'Transition Planning Timeline',
    description: 'Step-by-step timeline for planning your child\'s transition from high school to post-secondary education, employment, or independent living.',
    category: 'education',
    type: 'document',
    url: '/resources/transition-timeline.pdf',
    fileSize: '1.9 MB',
    tags: ['Transition', 'Planning', 'Post-Secondary', 'Timeline'],
    createdAt: '2024-02-10'
  },
  {
    id: '7',
    title: 'Assistive Technology Guide',
    description: 'Guide to assistive technology tools and resources that can support learning and daily living for children with disabilities.',
    category: 'education',
    type: 'document',
    url: '/resources/assistive-tech-guide.pdf',
    fileSize: '2.7 MB',
    tags: ['Assistive Technology', 'Tools', 'Learning', 'Support'],
    createdAt: '2024-02-15'
  },
  {
    id: '8',
    title: 'Parent Support Group Directory',
    description: 'Directory of parent support groups in the Franklin Lakes area, including meeting times, locations, and contact information.',
    category: 'support',
    type: 'document',
    url: '/resources/support-groups.pdf',
    fileSize: '1.2 MB',
    tags: ['Support Groups', 'Community', 'Directory', 'Meetings'],
    createdAt: '2024-02-20'
  },
  {
    id: '9',
    title: 'Understanding Learning Disabilities',
    description: 'Educational resource explaining different types of learning disabilities, their signs and symptoms, and effective intervention strategies.',
    category: 'education',
    type: 'document',
    url: '/resources/learning-disabilities.pdf',
    fileSize: '2.4 MB',
    tags: ['Learning Disabilities', 'Education', 'Intervention', 'Understanding'],
    createdAt: '2024-02-25'
  },
  {
    id: '10',
    title: 'Mental Health Resources for Families',
    description: 'Comprehensive guide to mental health resources and support services available to families of children with special needs.',
    category: 'support',
    type: 'document',
    url: '/resources/mental-health-resources.pdf',
    fileSize: '1.6 MB',
    tags: ['Mental Health', 'Support', 'Resources', 'Wellness'],
    createdAt: '2024-03-01'
  },
  {
    id: '11',
    title: 'Franklin Lakes SEPAG YouTube Channel',
    description: 'Our YouTube channel featuring educational videos, workshop recordings, and informational content about special education topics.',
    category: 'education',
    type: 'video',
    url: 'https://www.youtube.com/channel/franklinlakessepag',
    tags: ['Video', 'Education', 'Workshops', 'YouTube'],
    createdAt: '2024-01-10'
  },
  {
    id: '12',
    title: 'New Jersey Department of Education',
    description: 'Official website of the New Jersey Department of Education with information about special education policies, procedures, and resources.',
    category: 'legal',
    type: 'link',
    url: 'https://www.nj.gov/education/specialed/',
    tags: ['Government', 'Policy', 'New Jersey', 'Education'],
    createdAt: '2024-01-05'
  },
  {
    id: '13',
    title: 'Wrightslaw Special Education Law',
    description: 'Comprehensive resource for special education law, advocacy, and information about IDEA and other special education regulations.',
    category: 'legal',
    type: 'link',
    url: 'https://www.wrightslaw.com/',
    tags: ['Legal', 'Law', 'IDEA', 'Advocacy'],
    createdAt: '2024-01-08'
  },
  {
    id: '14',
    title: 'Understood.org Learning Resources',
    description: 'Online resource providing information and support for parents of children with learning and thinking differences.',
    category: 'education',
    type: 'link',
    url: 'https://www.understood.org/',
    tags: ['Learning', 'Support', 'Online', 'Resources'],
    createdAt: '2024-01-12'
  },
  {
    id: '15',
    title: 'Autism Speaks Resource Guide',
    description: 'Comprehensive resource guide for families affected by autism, including information about diagnosis, treatment, and support services.',
    category: 'community',
    type: 'link',
    url: 'https://www.autismspeaks.org/resource-guide',
    tags: ['Autism', 'Resources', 'Support', 'Guide'],
    createdAt: '2024-01-15'
  },
  {
    id: '16',
    title: 'CHADD - ADHD Support',
    description: 'National organization providing education, advocacy, and support for individuals with ADHD and their families.',
    category: 'support',
    type: 'link',
    url: 'https://chadd.org/',
    tags: ['ADHD', 'Support', 'National', 'Organization'],
    createdAt: '2024-01-18'
  },
  {
    id: '17',
    title: 'Workshop: IEP Meeting Preparation',
    description: 'Video recording of our popular workshop on how to prepare for and participate effectively in IEP meetings.',
    category: 'education',
    type: 'video',
    url: '/resources/iep-workshop-recording.mp4',
    fileSize: '45.2 MB',
    tags: ['IEP', 'Workshop', 'Video', 'Preparation'],
    createdAt: '2024-02-28'
  },
  {
    id: '18',
    title: 'Understanding Section 504 Plans',
    description: 'Detailed guide explaining Section 504 plans, how they differ from IEPs, and when they might be appropriate for your child.',
    category: 'legal',
    type: 'document',
    url: '/resources/section-504-guide.pdf',
    fileSize: '1.7 MB',
    tags: ['Section 504', 'Legal', 'Accommodations', 'Guide'],
    createdAt: '2024-03-05'
  },
  {
    id: '19',
    title: 'Social Skills Development Resources',
    description: 'Collection of resources and activities to help develop social skills in children with special needs.',
    category: 'education',
    type: 'document',
    url: '/resources/social-skills-resources.pdf',
    fileSize: '2.8 MB',
    tags: ['Social Skills', 'Development', 'Activities', 'Resources'],
    createdAt: '2024-03-10'
  },
  {
    id: '20',
    title: 'Financial Planning for Special Needs',
    description: 'Guide to financial planning considerations for families of children with special needs, including trusts, benefits, and long-term planning.',
    category: 'support',
    type: 'document',
    url: '/resources/financial-planning.pdf',
    fileSize: '2.2 MB',
    tags: ['Financial', 'Planning', 'Trusts', 'Benefits'],
    createdAt: '2024-03-15'
  }
]; 