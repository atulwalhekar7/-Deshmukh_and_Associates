import { PracticeArea } from '../types';
import { useTranslation } from '../hooks/useTranslation';
   

export function usePracticeAreas(): PracticeArea[] {
  const { t } = useTranslation();

  return [
  {
    id: 'civil-law',
    title: t('civilLaw'),
    description: 'Comprehensive civil litigation services including contract disputes and tort claims.',
    icon: 'Scale',
    fullDescription: t("fullDescriptionCivil"),
    services: [
      'Contract Disputes',
      'Property Litigation',
      'Personal Injury Claims',
      'Tort Claims',
      'Civil Appeals',
      'Injunction Proceedings'
    ],
    experience: t("experienceCivil"),
    successRate: t('succesR1')
  },
  {
    id: 'criminal-law',
    title: t('criminalLaw'),
    description: 'Expert criminal defense representation for all types of criminal charges.',
    icon: 'Gavel',
    fullDescription: t('fullDescriptionCrim'),
    services: [
      'White Collar Crimes',
      'Drug Offenses',
      'Assault & Battery',
      'Theft & Fraud',
      'DUI Defense',
      'Appeals & Post-Conviction'
    ],
    experience: t("experienceCivil"),
    successRate: t('succesR2')
  },
  {
    id: 'corporate-law',
    title: t('corporateLaw'),
    description: 'Strategic legal counsel for businesses, mergers, acquisitions, and compliance.',
    icon: 'Building',
    fullDescription: t('fullDescriptionCorp'),
    services: [
      'Corporate Formation',
      'Mergers & Acquisitions',
      'Contract Negotiation',
      'Compliance Advisory',
      'Employment Law',
      'Intellectual Property'
    ],
    experience: t("experienceCivil"),
    successRate: t('succesR3')
  },
  {
    id: 'property-law',
    title: t('propertyLaw'),
    description: 'Specialized expertise in property law, real estate transactions, and disputes.',
    icon: 'Home',
    fullDescription: t('fullDescriptionProp'),
    services: [
      'Property Transactions',
      'Title Disputes',
      'Landlord-Tenant Issues',
      'Zoning & Land Use',
      'Construction Law',
      'Property Development'
    ],
    experience: t("experienceCivil"),
    successRate: t('succesR4')
  },
  {
    id: 'consumer-law',
    title: t('consumerLaw'),
    description: 'its is low created for consumer sequrity',
    icon: 'Gavel',
    fullDescription: t('fullDescriptionCons'),
    services: [
      'Right to Safety',
      'Right to Choose',
      'Product Liability',
      'Theft & Fraud',
      'Protection from Unfair Practices',
      'Consumer Education'
    ],
    experience: t("experienceCivil"),
    successRate: t('succesR1')
  },
    {
    id: 'corporateandcommercial-Law',
    title: t('corporateandcommercialLaw'),
    description: 'its is low created for consumer sequrity',
    icon: 'Gavel',
    fullDescription: t('fullDescriptionCanaC'),
    services: [
      'Contract Drafting & Review',
      'usiness Formation & Corporate Structuring',
      'Mergers & Acquisitions (M&A)',
      'Regulatory Compliance & Corporate Governance',
      'Intellectual Property Protection',
      'Dispute Resolution & Litigation'
    ],
    experience: t("experienceCivil"),
    successRate: t('succesR2')
  },
  {
    id: 'environment-Law',
    title: t('environmentLaw'),
    description: 'its is low created for consumer sequrity',
    icon: 'Gavel',
    fullDescription: t('fullDescriptionCrim'),
    services: [
      'Pollution Control and Regulation',
      'Environmental Permits and Clearances',
      'Waste Management and Recycling Laws',
      'Wildlife and Forest Conservation',
      'Climate Change and Sustainability Regulations',
      'Legal Action and Public Interest Litigation (PIL)'
    ],
    experience: t("experienceCivil"),
    successRate: t('succesR3')
  },
  {
    id: 'insurance-Law',
    title: t('insuranceLaw'),
    description: 'its is low created for consumer sequrity',
    icon: 'Gavel',
    fullDescription: t('fullDescriptionInsur'),
    services: [
      'Policy Drafting and Review',
      'Claims Handling and Settlement',
      'Regulatory Compliance',
      'Fraud Detection and Prevention',
      'Dispute Resolution and Litigation',
      'Reinsurance and Risk Management'
    ],
    experience: t("experienceCivil"),
    successRate: t('succesR4')
  },
];
}
