import type { Schema, Struct } from '@strapi/strapi';

export interface CustomFieldCustomField extends Struct.ComponentSchema {
  collectionName: 'components_custom_field_custom_fields';
  info: {
    displayName: 'custom-field';
  };
  attributes: {
    Label: Schema.Attribute.String;
    Value: Schema.Attribute.String;
  };
}

export interface CustomResumeSection extends Struct.ComponentSchema {
  collectionName: 'components_custom_resume_sections';
  info: {
    displayName: 'resume-section';
  };
  attributes: {
    EDUCATION: Schema.Attribute.Enumeration<
      ["MASTER'S", "BACHELOR'S", 'INTERMEDIATE', 'HIGHSCHOOL']
    >;
    PROJECTS: Schema.Attribute.Enumeration<['Name', 'Details']>;
    Skills: Schema.Attribute.Enumeration<
      [
        'C',
        'JAVA',
        'PYTHON',
        'JAVASCRIPT',
        'HTML',
        'CSS',
        'NODE-JS',
        'REACT',
        'ANGULAR',
        'FIGMA',
        'AUTOCAD',
        'ELECTRICAL',
        'PHP',
        'MONGODB',
        'JAVA FULLSTACK',
        'SQL',
        'WEB DEVELOPMENT',
        'CYBERSECURITY',
      ]
    >;
    SUMMARY: Schema.Attribute.Blocks;
  };
}

export interface ResumeExperience extends Struct.ComponentSchema {
  collectionName: 'components_resume_experiences';
  info: {
    displayName: 'experience';
  };
  attributes: {
    company: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    endDate: Schema.Attribute.Date;
    jobTitle: Schema.Attribute.String & Schema.Attribute.Required;
    startDate: Schema.Attribute.Date;
    technologiesUsed: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'custom-field.custom-field': CustomFieldCustomField;
      'custom.resume-section': CustomResumeSection;
      'resume.experience': ResumeExperience;
    }
  }
}
