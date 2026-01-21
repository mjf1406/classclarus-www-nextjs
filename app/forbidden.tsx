import { FooterSection } from "@/components/layout/sections/footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Home, Shield } from "lucide-react";

export default function Forbidden() {
  return (
    <>
      <section className="container py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-8 flex justify-center">
            <Image
              src="/brand/logo-403.webp"
              alt="ClassClarus - Access Forbidden"
              width={300}
              height={300}
              className="mx-auto"
            />
          </div>
          
          <div className="mb-6 flex justify-center">
            <Shield className="size-16 text-destructive" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            403
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Access Forbidden
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-lg mx-auto">
            You don&apos;t have permission to access this resource. If you believe this is an error, please contact support.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="font-semibold">
              <Link href="/">
                <Home className="size-5 mr-2" />
                Go Home
              </Link>
            </Button>
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="font-semibold"
            >
              <Link href="/contact">
                Contact Support
              </Link>
            </Button>
            <Button
              variant="outline"
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
