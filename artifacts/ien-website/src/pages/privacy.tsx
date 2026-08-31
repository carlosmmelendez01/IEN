import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";
import { Shield, Mail } from "lucide-react";

const EFFECTIVE_DATE = "June 2026";

export default function Privacy() {
  return (
    <Layout>
      <SEO
        title="Privacy Policy"
        description="Privacy policy for indianaesportsnetwork.org — the Indiana Esports Network."
        path="/privacy"
      />

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
              <Shield className="w-3.5 h-3.5" /> Privacy Policy
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-3 tracking-tight">
              Your Privacy at IEN
            </h1>
            <p className="text-muted-foreground">
              Effective {EFFECTIVE_DATE} · Indiana Esports Network · EIN 86-3901103
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-14 container mx-auto px-4">
        <article className="max-w-3xl mx-auto prose prose-invert prose-headings:font-heading prose-headings:tracking-tight prose-h2:text-white prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-3 prose-p:text-muted-foreground prose-p:leading-relaxed prose-a:text-primary prose-strong:text-white prose-li:text-muted-foreground">
          <p>
            The Indiana Esports Network (&ldquo;IEN,&rdquo; &ldquo;we,&rdquo; &ldquo;our&rdquo;) is an Indiana nonprofit
            organization (EIN 86-3901103). This Privacy Policy explains what information we collect
            on indianaesportsnetwork.org (the &ldquo;Site&rdquo;), how we use it, and the choices you have.
            We aim to collect as little as possible — and to be specific about what we do collect.
          </p>

          <h2>INFORMATION WE COLLECT</h2>
          <p>We only collect information you actively give us. Specifically:</p>
          <ul>
            <li>
              <strong>Newsletter signup.</strong> If you fill out the newsletter form on the Contact
              page, we collect your first name, email address, and whether you are signing up as a
              coach or community member so we can send IEN newsletters, league updates, event
              announcements, and other opted-in communications. The form is provided by
              EmailOctopus, which processes newsletter signups for us.
            </li>
            <li>
              <strong>Direct email contact.</strong> If you email us at{" "}
              <a href="mailto:ienboard@indianaesportsnetwork.org">ienboard@indianaesportsnetwork.org</a>{" "}
              or any address linked from the Site, we receive whatever you send and keep that message
              for as long as needed to respond and maintain records.
            </li>
            <li>
              <strong>Server access logs.</strong> Our web host records standard access information
              (IP address, browser type, time of request, page requested) when you visit the Site. We
              do not maintain a separate access database, and we do not use this information to track
              individuals.
            </li>
          </ul>

          <h2>INFORMATION WE DON&rsquo;T COLLECT</h2>
          <ul>
            <li>
              <strong>No advertising trackers.</strong> The Site does not load Google Analytics,
              Facebook Pixel, Hotjar, or advertising trackers. We use Vercel Analytics and Speed
              Insights for aggregate site usage and performance information.
            </li>
            <li>
              <strong>No cookies are set by IEN.</strong> The Site itself does not write cookies to
              your browser. Some third-party services we load may use their own client-side storage
              as part of normal functionality.
            </li>
            <li>
              <strong>We do not sell or rent your data</strong> to anyone, ever.
            </li>
          </ul>

          <h2>HOW WE USE YOUR INFORMATION</h2>
          <p>Information you provide is used only to:</p>
          <ul>
            <li>Respond to your message or inquiry.</li>
            <li>Send the IEN newsletter and league announcements you opted in to receive.</li>
            <li>Operate, secure, and improve the Site.</li>
            <li>Comply with applicable law.</li>
          </ul>

          <h2>THIRD-PARTY SERVICES</h2>
          <p>
            Loading a normal page on the Site causes your browser to contact a small number of
            third-party services. You should review their privacy practices directly:
          </p>
          <ul>
            <li>
              <strong>Google Fonts</strong> serves the typefaces used across the Site.{" "}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                Google Privacy Policy
              </a>
            </li>
            <li>
              <strong>OpenStreetMap</strong> provides the map tiles on the Schools and Colleges
              pages.{" "}
              <a href="https://wiki.osmfoundation.org/wiki/Privacy_Policy" target="_blank" rel="noopener noreferrer">
                OpenStreetMap Privacy Policy
              </a>
            </li>
            <li>
              <strong>Vercel</strong> hosts the Site, serves its files, and provides aggregate
              analytics and performance insights.{" "}
              <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
                Vercel Privacy Policy
              </a>
            </li>
            <li>
              <strong>EmailOctopus</strong> provides the newsletter signup form and manages email
              subscription records.{" "}
              <a href="https://emailoctopus.com/legal/privacy" target="_blank" rel="noopener noreferrer">
                EmailOctopus Privacy Policy
              </a>
            </li>
            <li>
              <strong>External destinations</strong> linked from the Site are governed by their own
              privacy policies.
            </li>
          </ul>

          <h2>CHILDREN&rsquo;S PRIVACY</h2>
          <p>
            IEN serves Indiana scholastic esports programs in grades 6&ndash;12. The Site itself is an
            informational resource intended primarily for school staff, parents, and adult supporters.
            We do not knowingly collect personal information from children under 13 through the Site.
            If you believe a child under 13 has submitted personal information to us, please email{" "}
            <a href="mailto:ienboard@indianaesportsnetwork.org">ienboard@indianaesportsnetwork.org</a>{" "}
            and we will promptly delete it.
          </p>
          <p>
            Information about students who compete in IEN leagues is collected by their schools and
            coaches, not through this Site, and is governed by each school&rsquo;s policies and applicable
            student-privacy law (including FERPA).
          </p>

          <h2>YOUR CHOICES &amp; RIGHTS</h2>
          <ul>
            <li>
              <strong>Unsubscribe.</strong> Every newsletter we send includes an unsubscribe link.
              You may also email us to be removed from any list at any time.
            </li>
            <li>
              <strong>Access, correction, or deletion.</strong> Email{" "}
              <a href="mailto:ienboard@indianaesportsnetwork.org">ienboard@indianaesportsnetwork.org</a>{" "}
              to request a copy of the information we hold about you, correct inaccurate information,
              or have your information deleted. We will respond within 30 days.
            </li>
            <li>
              <strong>Browser controls.</strong> You can block third-party requests, set Do Not Track,
              or restrict cookies from your browser settings. The Site is designed to function without
              cookies.
            </li>
          </ul>

          <h2>DATA SECURITY</h2>
          <p>
            We use reasonable administrative and technical safeguards to protect the information we
            hold. No internet transmission or electronic storage is ever 100% secure, so we cannot
            guarantee absolute security.
          </p>

          <h2>CHANGES TO THIS POLICY</h2>
          <p>
            We may update this Privacy Policy as the Site evolves. The &ldquo;Effective&rdquo; date at the top
            will change whenever we do.
          </p>

          <h2>CONTACT</h2>
          <p>
            For any privacy question or request, email{" "}
            <a href="mailto:ienboard@indianaesportsnetwork.org" className="inline-flex items-center gap-1.5">
              <Mail className="w-4 h-4" /> ienboard@indianaesportsnetwork.org
            </a>
            .
          </p>
        </article>
      </section>
    </Layout>
  );
}
