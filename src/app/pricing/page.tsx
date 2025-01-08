import React from "react";
import Footer from "@/components/global/footer";
import Navbar from "@/components/global/NavbarWrapper";
import { CardBody, CardContainer, CardItem } from "@/components/global/3d-card";
import { LampComponent } from "@/components/global/lamp";
import { CheckIcon } from "lucide-react";
import Link from "next/link";

const PricingPage = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="h-full w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <section className="py-12 sm:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10">
              <div className="space-y-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Simple, transparent pricing
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Get started with our free plan. No credit card required.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="flex flex-col items-center justify-center py-20 space-y-10">
        <div className="grid grid-cols-1 gap-8">
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-[#E2CBFF] border-purple-500 w-[300px] md:!w-[350px] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                Free Plan
                <h2 className="text-6xl">$0</h2>
              </CardItem>
              <CardItem
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Experience all features of our software with no limitations!
                <ul className="my-4 flex flex-col gap-2">
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    Unlimited automations
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    Unlimited tasks per month
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    All integrations included
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    Priority support
                  </li>
                </ul>
              </CardItem>
              <Link href="/dashboard">
                <div className="flex justify-between items-center mt-8">
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                  >
                    Try now →
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
                    Get Started Now
                  </CardItem>
                </div>
              </Link>
            </CardBody>
          </CardContainer>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default PricingPage;
