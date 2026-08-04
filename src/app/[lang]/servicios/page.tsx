"use client";

import React from "react";
import ServicesCards from "@/components/ServicesCards";
import PlansTable from "@/components/PlansTable";
import FaqSection from "@/components/FaqSection";

export default function ServicesPage() {
  return (
    <main className="relative flex flex-col items-center justify-start min-h-screen bg-[#090c1f] text-white pt-24 md:pt-28">
      <div id="planes" className="w-full">
        <ServicesCards />
        <PlansTable />
      </div>

      {/* FAQ Section */}
      <FaqSection />
    </main>
  );
}
