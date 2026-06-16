import { Link } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <Layout>
      <SEO
        title="Page Not Found"
        description="The page you were looking for couldn't be found."
        path="/404"
        noindex
      />
      <section className="container mx-auto px-4 py-24 md:py-32 flex items-center justify-center">
        <div className="max-w-lg text-center bg-card border border-primary/25 rounded-2xl p-10">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/15 border border-primary/40 text-primary mb-5">
            <AlertCircle className="w-7 h-7" />
          </div>
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-white tracking-tight mb-3">
            Page Not Found
          </h1>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            We couldn&rsquo;t find the page you were looking for. It may have been
            moved, renamed, or never existed at this address.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading tracking-widest"
            >
              <Link href="/">RETURN HOME</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-heading tracking-widest"
            >
              <Link href="/contact">CONTACT IEN</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
