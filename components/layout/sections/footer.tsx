import { Separator } from "@/components/ui/separator";
import { GraduationCap } from "lucide-react";
import Link from "next/link";

export const FooterSection = () => {
  return (
    <footer id="footer" className="container py-24 sm:py-32">
      <div className="p-10 bg-card border border-secondary rounded-2xl">
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
          <div className="col-span-full xl:col-span-2">
            <Link href="/" className="flex font-bold items-center">
              <GraduationCap className="w-9 h-9 mr-2 bg-gradient-to-tr from-primary via-primary/70 to-primary rounded-lg border border-secondary p-1 text-white" />

              <h3 className="text-2xl">ClassClarus</h3>
            </Link>
            <p className="mt-4 text-muted-foreground text-sm max-w-xs">
              Gamify your classroom to motivate your students. Free classroom management platform for teachers.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Product</h3>
            <div>
              <Link href="/#features" className="opacity-60 hover:opacity-100">
                Features
              </Link>
            </div>

            <div>
              <Link href="/pricing" className="opacity-60 hover:opacity-100">
                Pricing
              </Link>
            </div>

            <div>
              <Link href="/faq" className="opacity-60 hover:opacity-100">
                FAQ
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Company</h3>
            <div>
              <Link href="/about" className="opacity-60 hover:opacity-100">
                About
              </Link>
            </div>

            <div>
              <Link href="/contact" className="opacity-60 hover:opacity-100">
                Contact
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Legal</h3>
            <div>
              <Link href="/privacy-policy" className="opacity-60 hover:opacity-100">
                Privacy Policy
              </Link>
            </div>

            <div>
              <Link href="/terms-of-use" className="opacity-60 hover:opacity-100">
                Terms of Use
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Resources</h3>
            <div>
              <Link href="https://classclarus.com" target="_blank" className="opacity-60 hover:opacity-100">
                Launch App
              </Link>
            </div>

            <div>
              <Link href="/contact" className="opacity-60 hover:opacity-100">
                Support
              </Link>
            </div>
          </div>
        </div>

        <Separator className="my-6" />
        <section className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <h3 className="">
            &copy; {new Date().getFullYear()} ClassClarus. All rights reserved.
          </h3>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <Link href="/privacy-policy" className="hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link href="/terms-of-use" className="hover:text-foreground transition-colors">
              Terms
            </Link>
          </div>
        </section>
      </div>
    </footer>
  );
};
