import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { FileText, Mail } from "lucide-react";

const EFFECTIVE_DATE = "June 2026";

/**
 * Terms of Use.
 *
 * Standard scholastic-nonprofit terms tailored to what the Site actually does:
 * publishes information about IEN leagues, lists schools and partners, accepts
 * a newsletter signup, and links out to LeagueOS and external partners. No
 * paid services, accounts, or user-generated content are hosted directly on
 * the Site, which keeps these terms simple.
 *
 * Working draft — should be reviewed by counsel before publication.
 */
export default function Terms() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 bg-card border-b border-primary/20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container relative mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-1 border border-primary/50 bg-primary/10 text-primary text-xs font-bold tracking-widest rounded-full uppercase">
              <FileText className="w-3.5 h-3.5" /> Terms of Use
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-3 tracking-tight">
              Terms of Use
            </h1>
            <p className="text-muted-foreground">
              Effective {EFFECTIVE_DATE} · Indiana Esports Network · EIN 86-3091103
            </p>
          </motion.div>
        </div>
      </section>

      {/* Body */}
      <section className="py-14 container mx-auto px-4">
        <article className="max-w-3xl mx-auto prose prose-invert prose-headings:font-heading prose-headings:tracking-tight prose-h2:text-white prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-3 prose-p:text-muted-foreground prose-p:leading-relaxed prose-a:text-primary prose-strong:text-white prose-li:text-muted-foreground">
          <p>
            Welcome to indianaesportsnetwork.org (the &ldquo;Site&rdquo;). The Site is operated by the
            Indiana Esports Network (&ldquo;IEN,&rdquo; &ldquo;we,&rdquo; &ldquo;our&rdquo;), an Indiana nonprofit
            organization. By accessing or using the Site you agree to these Terms of Use. If you do
            not agree, please do not use the Site.
          </p>

          <h2>1. About IEN</h2>
          <p>
            The Indiana Esports Network is Indiana&rsquo;s scholastic esports organization, operating the
            Indiana High School Esports Network (IHSEN), Indiana Middle School Esports Network
            (IMSEN), and Indiana Unified Esports Network (IUEN). The Site is an informational
            resource for schools, coaches, students, families, sponsors, and the public.
          </p>

          <h2>2. Use of the Site</h2>
          <p>You agree to use the Site only for lawful purposes. You agree not to:</p>
          <ul>
            <li>Use the Site in any way that violates federal, state, or local law.</li>
            <li>Attempt to gain unauthorized access to any portion of the Site, related systems, or networks.</li>
            <li>Interfere with or disrupt the Site or servers and networks connected to it.</li>
            <li>Use any automated means to access the Site for the purpose of scraping data or extracting content beyond what a normal browser visit would obtain.</li>
            <li>Use the IEN name, logos, or branding in any way that suggests endorsement or affiliation without our written permission.</li>
          </ul>

          <h2>3. Intellectual Property</h2>
          <p>
            The Site, including its design, text, graphics, the IEN, IHSEN, IMSEN, and IUEN names
            and logos, and the overall &ldquo;look and feel&rdquo;, is the property of the Indiana Esports
            Network and is protected by U.S. copyright and trademark law. School logos and
            partner/sponsor logos displayed on the Site are the property of their respective owners
            and are shown with permission. You may not reproduce, redistribute, or commercially
            exploit any portion of the Site without our prior written consent, except for personal,
            non-commercial use such as printing a page for reference or sharing a link.
          </p>

          <h2>4. Information You Submit</h2>
          <p>
            When you submit information through the Site (for example, the newsletter signup form or
            an email link), you confirm that the information is yours to submit and that we may
            process it as described in our{" "}
            <a href="/privacy">Privacy Policy</a>. Do not submit confidential information, student
            records, or any information you are not authorized to share.
          </p>

          <h2>5. External Links &amp; Third-Party Services</h2>
          <p>
            The Site links to external websites and tools, including LeagueOS, partner organizations,
            sponsors, member schools, and social media platforms. We do not control those sites and
            are not responsible for their content, practices, or availability. Following a link off
            the Site is at your own risk and is governed by the destination site&rsquo;s own terms and
            privacy policy.
          </p>

          <h2>6. Information Is Provided &ldquo;As Is&rdquo;</h2>
          <p>
            We work hard to keep the Site accurate and current, but the information here is provided
            for general informational purposes only and on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis.
            We make no warranties of any kind, express or implied, regarding the Site or the
            information it contains, including warranties of accuracy, completeness, merchantability,
            or fitness for a particular purpose. Schedules, divisional alignments, registration
            details, and program information are subject to change.
          </p>

          <h2>7. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, IEN, its directors, officers, volunteers, and
            affiliates shall not be liable for any indirect, incidental, special, consequential, or
            punitive damages arising out of or related to your use of, or inability to use, the Site,
            even if we have been advised of the possibility of such damages.
          </p>

          <h2>8. Changes to These Terms</h2>
          <p>
            We may update these Terms of Use from time to time. When we do, we will update the
            &ldquo;Effective&rdquo; date at the top of this page. Continued use of the Site after a change
            constitutes acceptance of the updated terms.
          </p>

          <h2>9. Governing Law</h2>
          <p>
            These Terms of Use are governed by the laws of the State of Indiana, without regard to
            its conflict-of-laws principles. Any dispute arising out of or relating to the Site or
            these Terms will be resolved in the state or federal courts located in Indiana, and you
            consent to the jurisdiction of those courts.
          </p>

          <h2>10. Contact</h2>
          <p>
            Questions about these Terms? Email{" "}
            <a href="mailto:board@indianaesportsnetwork.org" className="inline-flex items-center gap-1.5">
              <Mail className="w-4 h-4" /> board@indianaesportsnetwork.org
            </a>
            .
          </p>
        </article>
      </section>
    </Layout>
  );
}
