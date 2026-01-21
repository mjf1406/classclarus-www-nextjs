import { FooterSection } from "@/components/layout/sections/footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <>
      <section className="container py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-8 flex justify-center">
            <Image
              src="/brand/logo-404.webp"
              alt="ClassClarus - Page Not Found"
              width={300}
              height={300}
              className="mx-auto"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            404
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Page Not Found
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-lg mx-auto">
            Oops! The page you&apos;re looking for doesn&apos;t exist. It might have been moved, deleted, or you entered the wrong URL.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="font-semibold">
              <Link href="/">
                <Home className="size-5 mr-2" />
                Go Home
              </Link>
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="font-semibold"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="size-5 mr-2" />
              Go Back
            </Button>
          </div>
        </div>
      </section>
      <FooterSection />
    </>
  );
}
