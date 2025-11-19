import {
  Document,
  Page,
  Text,
  View,
  Font,
  Link,
  StyleSheet
} from "@react-pdf/renderer";
import { cvData } from "@/lib/cv-data";

Font.register({
  family: "Inter",
  fonts: [
    {
      src: "https://fonts.gstatic.com/s/inter/v13/UcCO3FwrHPh00P5BOetp3MItTe0.ttf"
    },
    {
      src: "https://fonts.gstatic.com/s/inter/v13/UcCM3FwrHPh00P5BOeo.ttf",
      fontWeight: 600
    },
    {
      src: "https://fonts.gstatic.com/s/inter/v13/UcCN3FwrHPh00P5c.woff",
      fontStyle: "italic"
    }
  ]
});

Font.register({
  family: "Playfair",
  src: "https://fonts.gstatic.com/s/playfairdisplay/v30/nuFiD-vYSZviVYUb_rj3ij__anPXPTs.woff"
});

const styles = StyleSheet.create({
  page: {
    padding: 48,
    backgroundColor: "#f6f7fb",
    color: "#1f2937",
    fontSize: 11,
    fontFamily: "Inter",
    lineHeight: 1.4
  },
  header: {
    borderRadius: 18,
    backgroundColor: "#ffffff",
    padding: 24,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: "#e6e8f0"
  },
  name: {
    fontFamily: "Playfair",
    fontSize: 24,
    marginBottom: 8
  },
  subtitle: {
    textTransform: "uppercase",
    letterSpacing: 3,
    fontSize: 10,
    color: "#3b82f6",
    marginBottom: 16
  },
  summary: {
    fontSize: 11,
    color: "#4b5563"
  },
  contactGrid: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 18
  },
  contactChip: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 999,
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: "#e6e8f0"
  },
  contactLabel: {
    textTransform: "uppercase",
    letterSpacing: 2,
    fontSize: 8,
    color: "#6b7280",
    marginRight: 6
  },
  contactValue: {
    fontSize: 10,
    color: "#1f2937",
    fontWeight: 600
  },
  section: {
    marginBottom: 18
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "#e5e7eb"
  },
  sectionLabel: {
    textTransform: "uppercase",
    letterSpacing: 3,
    fontSize: 9,
    color: "#6b7280",
    marginHorizontal: 12
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#e6e8f0",
    padding: 16,
    marginBottom: 12
  },
  cardHeading: {
    fontSize: 12,
    fontWeight: 600,
    color: "#1f2937"
  },
  cardSubHeading: {
    textTransform: "uppercase",
    letterSpacing: 2,
    fontSize: 8,
    color: "#6b7280",
    marginTop: 2
  },
  cardPeriod: {
    fontSize: 9,
    fontWeight: 700,
    color: "#3b82f6",
    marginTop: 4
  },
  bullet: {
    marginLeft: 12,
    fontSize: 10,
    color: "#4b5563",
    marginTop: 4
  },
  tagList: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
    marginTop: 10
  },
  tag: {
    fontSize: 9,
    color: "#1f2937",
    backgroundColor: "#f3f4f6",
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "#e5e7eb"
  },
  certificateRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  certificateBadge: {
    fontSize: 9,
    fontWeight: 700,
    color: "#ffffff",
    backgroundColor: "#1f2937",
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 999
  },
  projectLink: {
    fontSize: 9,
    color: "#2563eb",
    textDecoration: "none"
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: "#e6e8f0",
    paddingTop: 12,
    textAlign: "center",
    fontSize: 8,
    color: "#9ca3af",
    letterSpacing: 3,
    textTransform: "uppercase"
  }
});

export function CvPdfDocument() {
  return (
    <Document
      title="Alexandra Rivera — Product Designer & Frontend Developer"
      author="Alexandra Rivera"
      subject="Curriculum Vitae and Portfolio"
      keywords="Product Design, Frontend Development, Design Systems, UX, Portfolio"
    >
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.name}>{cvData.fullName}</Text>
          <Text style={styles.subtitle}>{cvData.title}</Text>
          <Text style={styles.summary}>{cvData.summary}</Text>
        </View>

        <View style={styles.contactGrid}>
          <Chip label="Phone" value={cvData.contact.phone} />
          <Chip label="Email" value={cvData.contact.email} />
          <Chip label="Location" value={cvData.contact.location} />
          <Chip
            label="Website"
            value={cvData.contact.website}
            href={cvData.contact.website}
          />
          <Chip
            label="LinkedIn"
            value={cvData.contact.linkedin}
            href={`https://${cvData.contact.linkedin}`}
          />
        </View>

        <Section label="Experience">
          {cvData.experiences.map((experience) => (
            <View key={experience.company} style={styles.card}>
              <Text style={styles.cardHeading}>{experience.role}</Text>
              <Text style={styles.cardSubHeading}>{experience.company}</Text>
              <Text style={styles.cardPeriod}>{experience.period}</Text>
              {experience.bullets.map((bullet) => (
                <Text key={bullet} style={styles.bullet}>
                  • {bullet}
                </Text>
              ))}
            </View>
          ))}
        </Section>

        <Section label="Education">
          {cvData.education.map((edu) => (
            <View key={edu.degree} style={styles.card}>
              <Text style={styles.cardHeading}>{edu.degree}</Text>
              <Text style={styles.cardSubHeading}>{edu.institution}</Text>
              <Text style={styles.cardPeriod}>{edu.period}</Text>
            </View>
          ))}
        </Section>

        <Section label="Skills">
          <View style={styles.card}>
            <Text style={styles.cardSubHeading}>Technical</Text>
            <TagRow items={cvData.skills.technical} />
            <Text style={[styles.cardSubHeading, { marginTop: 12 }]}>
              Methodologies
            </Text>
            <TagRow items={cvData.skills.methodologies} />
            <Text style={[styles.cardSubHeading, { marginTop: 12 }]}>
              Soft Skills
            </Text>
            <TagRow items={cvData.skills.soft} />
          </View>
        </Section>

        <Section label="Certificates & Training">
          {cvData.certificates.map((cert) => (
            <View key={cert.title} style={styles.card}>
              <View style={styles.certificateRow}>
                <View>
                  <Text style={styles.cardHeading}>{cert.title}</Text>
                  <Text style={styles.cardSubHeading}>{cert.issuer}</Text>
                </View>
                <Text style={styles.certificateBadge}>{cert.year}</Text>
              </View>
            </View>
          ))}
        </Section>

        <Section label="Portfolio">
          {cvData.projects.map((project) => (
            <View key={project.title} style={styles.card}>
              <Text style={styles.cardHeading}>{project.title}</Text>
              <Text style={[styles.cardSubHeading, { marginTop: 3 }]}>
                {project.role}
              </Text>
              <Text style={[styles.bullet, { marginLeft: 0, marginTop: 8 }]}>
                {project.description}
              </Text>
              <TagRow items={project.tools} />
              <View
                style={{
                  marginTop: 12,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
              >
                {project.link && (
                  <Link src={project.link} style={styles.projectLink}>
                    View project →
                  </Link>
                )}
                {project.outcome && (
                  <Text style={[styles.projectLink, { color: "#1f2937" }]}>
                    {project.outcome}
                  </Text>
                )}
              </View>
            </View>
          ))}
        </Section>

        <View style={styles.footer}>
          <Text>Meticulous · Human Centered · Measurable Impact</Text>
        </View>
      </Page>
    </Document>
  );
}

function Chip({
  label,
  value,
  href
}: {
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <View style={styles.contactChip}>
      <Text style={styles.contactLabel}>{label}</Text>
      {href ? (
        <Link src={href} style={styles.contactValue}>
          {value}
        </Link>
      ) : (
        <Text style={styles.contactValue}>{value}</Text>
      )}
    </View>
  );
}

function Section({
  label,
  children
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <View style={styles.divider} />
        <Text style={styles.sectionLabel}>{label}</Text>
        <View style={styles.divider} />
      </View>
      {children}
    </View>
  );
}

function TagRow({ items }: { items: string[] }) {
  return (
    <View style={styles.tagList}>
      {items.map((item) => (
        <Text key={item} style={styles.tag}>
          {item}
        </Text>
      ))}
    </View>
  );
}
