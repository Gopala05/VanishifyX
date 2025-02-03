// Library Imports
import React from "react";

// Custom Imports
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import PricingFeature from "./PricingFeature";

const Pricing = () => {
  return (
    <DialogContent className="max-w-4xl">
      <DialogHeader>
        <DialogTitle>Upgrade Plan</DialogTitle>
        <DialogDescription>
          <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-center md:gap-8">
              <div className="rounded-2xl border border-indigo-600 p-6 shadow-sm ring-1 ring-indigo-600 sm:order-last sm:px-8 lg:p-12">
                <div className="text-center">
                  <h2 className="text-xl font-semibold text-gray-900">
                    Pro
                    <span className="sr-only">Plan</span>
                  </h2>

                  <p className="mt-2 sm:mt-4">
                    <strong className="text-4xl mr-1 font-bold text-gray-900 sm:text-5xl">
                      4.99$
                    </strong>

                    <span className="text-base font-medium text-gray-700">
                      /month
                    </span>
                  </p>
                </div>

                <ul className="mt-6 text-lg space-y-2">
                  <PricingFeature title="Unlimited Teams" />
                  <PricingFeature title="Unlimited Files per Team" />
                  <PricingFeature title="Exclusive support" />
                  <PricingFeature title="More Document Featurest" />
                  <PricingFeature title="Help center access" />
                </ul>

                <a
                  href="#"
                  className="mt-8 block rounded-full border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-indigo-700 hover:ring-1 hover:ring-indigo-700 focus:outline-none focus:ring active:text-indigo-500"
                >
                  Get Started
                </a>
              </div>

              <div className="rounded-2xl border border-gray-200 p-6 shadow-sm sm:px-8 lg:p-12">
                <div className="text-center">
                  <h2 className="text-base font-semibold text-gray-900">
                    Starter
                    <span className="sr-only">Plan</span>
                  </h2>

                  <p className="mt-2 sm:mt-4">
                    <strong className="text-3xl mr-1 font-bold text-gray-900">
                      Free
                    </strong>

                    <span className="text-sm font-medium text-gray-700">
                      /month
                    </span>
                  </p>
                </div>

                <ul className="mt-6 text-base space-y-2">
                  <PricingFeature title="3 Teams" />
                  <PricingFeature title="5 Files per Team" />
                  <PricingFeature title="Limited support" />
                  <PricingFeature title="Less Document Features" />
                  <PricingFeature title="Help center access" />
                </ul>

                <a
                  href="#"
                  className="mt-8 block rounded-full border border-indigo-600 bg-white px-12 py-3 text-center text-sm font-medium text-indigo-600 hover:ring-1 hover:ring-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </DialogDescription>
      </DialogHeader>

      <DialogFooter>
        <DialogClose asChild></DialogClose>
      </DialogFooter>
    </DialogContent>
  );
};

export default Pricing;
