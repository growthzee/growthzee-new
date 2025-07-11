"use client";

import type React from "react";

// import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Info, Phone } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

export default function PricingCheatSheet() {
  // const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div id="packages" className="bg-[#030712]">
      <main className="container  mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center mb-8">
          <div className="w-full max-w-4xl">
            <h1 className="text-3xl font-bold text-white text-center mb-2">
              Pricing Sheet
            </h1>
            <p className="text-center text-gray-400 mb-8">
              One Stop Solution For Your Business
            </p>
            <div className="space-y-8">
              <div className="flex justify-center mb-6">
                <div className="text-3xl text-white font-bold">
                  ALL MYBUSINESS <span className="text-purple-600">IDEA.</span>
                </div>
              </div>

              <Tabs defaultValue="development" className="w-full">
                <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-4 bg-gray-900">
                  <TabsTrigger
                    value="development"
                    className="data-[state=active]:bg-purple-600">
                    Development
                  </TabsTrigger>
                  <TabsTrigger
                    value="lead-gen"
                    className="data-[state=active]:bg-purple-600">
                    Lead Generation
                  </TabsTrigger>
                  <TabsTrigger
                    value="consulting"
                    className="data-[state=active]:bg-purple-600">
                    Consulting
                  </TabsTrigger>
                  <TabsTrigger
                    value="social-media"
                    className="data-[state=active]:bg-purple-600">
                    Social Media
                  </TabsTrigger>
                </TabsList>

                {/* Development Tab */}
                <TabsContent value="development" className="space-y-4">
                  <h2 className="text-2xl lg:pt-1 md:pt-[10px] sm:pt-[25px] pt-[25px] text-white font-bold">
                    Mobile App & Website Development
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <PricingCard
                      title="Standard"
                      price="$149"
                      period="month"
                      description="Basic mobile app and website development package"
                      features={[
                        "Mobile-responsive website",
                        "Basic app functionality",
                        "Monthly maintenance",
                        "Email support",
                      ]}
                      highlight={
                        <Badge className="bg-purple-600 py-0 text-[8px] font-family-mono">
                          Free Trial Available
                        </Badge>
                      }
                    />
                    <PricingCard
                      title="Premium"
                      price="$499"
                      period="month"
                      description="Enhanced development with additional features"
                      features={[
                        "Advanced app functionality",
                        "Custom design elements",
                        "Priority support",
                        "Performance optimization",
                        "Regular updates",
                      ]}
                    />
                    <PricingCard
                      title="Enterprise"
                      price="$999"
                      period="month"
                      description="Comprehensive solution for large businesses"
                      features={[
                        "Full-scale app development",
                        "Custom integrations",
                        "Dedicated support team",
                        "Advanced analytics",
                        "White-label options",
                        "24/7 technical assistance",
                      ]}
                    />
                  </div>
                </TabsContent>

                {/* Lead Generation Tab */}
                <TabsContent value="lead-gen" className="space-y-4">
                  <h2 className="text-2xl lg:pt-1 md:pt-[10px] sm:pt-[25px] pt-[25px] text-white font-bold">
                    Lead Generation Services
                  </h2>
                  <Card className="mb-4 border-gray-800 bg-gray-900 text-white">
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span className="font-bold text-white">
                          Available Platforms
                        </span>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <Info size={18} className="text-gray-400" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="max-w-xs text-white">
                                Clients pay for the actual marketing campaigns
                                separately
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                        {[
                          "Google Ads",
                          "Google Local Service Ads",
                          "Instagram Ads",
                          "Facebook Ads",
                          "Microsoft Ads",
                          "X Ads",
                          "LinkedIn Ads",
                          "YouTube Ads",
                          "TikTok Ads",
                          "Pinterest Ads",
                        ].map((platform) => (
                          <Badge
                            key={platform}
                            variant="outline"
                            className="justify-center py-2 border-gray-700 bg-gray-800">
                            {platform}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <PricingCard
                      title="Basic Lead Generation"
                      price="$500"
                      period="month"
                      description="Lead generation across 5 major platforms"
                      features={[
                        "5 platforms of your choice",
                        "Campaign management",
                        "Monthly reporting",
                        "Audience targeting",
                        "Performance optimization",
                      ]}
                    />
                    <PricingCard
                      title="Premium Lead Generation"
                      price="$1,000"
                      period="month"
                      description="Comprehensive lead generation across 10 major platforms"
                      features={[
                        "All 10 major platforms",
                        "Advanced campaign management",
                        "Bi-weekly reporting",
                        "Custom audience creation",
                        "A/B testing",
                        "Conversion tracking",
                      ]}
                    />
                  </div>
                </TabsContent>

                {/* Consulting Tab */}
                <TabsContent value="consulting" className="space-y-4">
                  <h2 className="text-2xl lg:pt-1 md:pt-[10px] sm:pt-[25px] pt-[25px] text-white font-bold">
                    Business Consulting
                  </h2>
                  <Card className="border-gray-800 bg-gray-900 text-white">
                    <CardHeader>
                      <CardTitle>Consulting Services</CardTitle>
                      <CardDescription className="text-gray-400">
                        Professional business consulting with flexible options
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="border border-gray-800 rounded-lg p-4 bg-gray-800">
                            <h3 className="text-xl text-white font-semibold mb-2">
                              Remote Consulting
                            </h3>
                            <p className="text-3xl text-white font-bold">
                              $600
                              <span className="text-lg font-normal text-gray-400">
                                /hour
                              </span>
                            </p>
                            <ul className="mt-4 space-y-2">
                              <li className="flex items-center">
                                <Check
                                  size={18}
                                  className="mr-2 text-purple-500"
                                />
                                <span className="text-white">
                                  Virtual meetings
                                </span>
                              </li>
                              <li className="flex items-center">
                                <Check
                                  size={18}
                                  className="mr-2 text-purple-500"
                                />
                                <span className="text-white">
                                  Screen sharing
                                </span>
                              </li>
                              <li className="flex items-center">
                                <Check
                                  size={18}
                                  className="mr-2 text-purple-500"
                                />
                                <span className="text-white">
                                  Digital documentation
                                </span>
                              </li>
                            </ul>
                          </div>
                          <div className="border border-gray-800 rounded-lg p-4 bg-gray-800">
                            <h3 className="text-xl text-white font-semibold mb-2">
                              In-Person Consulting
                            </h3>
                            <p className="text-3xl text-white font-bold">
                              $1,000
                              <span className="text-lg font-normal text-gray-400">
                                /hour
                              </span>
                            </p>
                            <ul className="mt-4 space-y-2">
                              <li className="flex items-center">
                                <Check
                                  size={18}
                                  className="mr-2 text-purple-500"
                                />
                                <span className="text-white">
                                  On-site meetings
                                </span>
                              </li>
                              <li className="flex items-center">
                                <Check
                                  size={18}
                                  className="mr-2 text-purple-500"
                                />
                                <span className="text-white">
                                  Hands-on assistance
                                </span>
                              </li>
                              <li className="flex items-center">
                                <Check
                                  size={18}
                                  className="mr-2 text-purple-500"
                                />
                                <span className="text-white">
                                  Team workshops
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="bg-gray-800 p-4 rounded-lg mt-4">
                          <p className="font-semibold">Important Note:</p>
                          <p className="text-gray-300">
                            3-hour minimum retainer required for all consulting
                            services
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Social Media Tab */}
                <TabsContent value="social-media" className="space-y-4">
                  <h2 className="text-2xl lg:pt-1 md:pt-[10px] sm:pt-[25px] pt-[25px] text-white font-bold">
                    Social Media Marketing
                  </h2>
                  <Card className="mb-4 border-gray-800 bg-gray-900 text-white">
                    <CardHeader>
                      <CardTitle>Available Platforms</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 md:grid-cols-7 gap-2">
                        {[
                          "Snapchat",
                          "Pinterest",
                          "Instagram",
                          "YouTube",
                          "X",
                          "TikTok",
                          "Facebook",
                        ].map((platform) => (
                          <Badge
                            key={platform}
                            variant="outline"
                            className="justify-center py-2 border-gray-700 bg-gray-800">
                            {platform}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <PricingCard
                      title="Basic Social Media"
                      price="$500"
                      period="month"
                      description="Social media management for 3 platforms"
                      features={[
                        "3 platforms of your choice",
                        "Content creation",
                        "Content for 31 days",
                        "Weekly posting schedule",
                        "Community management",
                        "Monthly performance reports",
                      ]}
                    />
                    <PricingCard
                      title="Premium Social Media"
                      price="$1,000"
                      period="month"
                      description="Comprehensive social media management for 7 platforms"
                      features={[
                        "All 7 social platforms",
                        "Advanced content strategy",
                        "Content for 31 days",
                        "Daily posting schedule",
                        "Community engagement",
                        "Influencer outreach",
                        "Bi-weekly performance reports",
                      ]}
                    />
                  </div>
                </TabsContent>
              </Tabs>

              <Card className="border-gray-800 bg-gray-900 text-white">
                <CardHeader>
                  <CardTitle>Special Offers</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-purple-900/30 border border-purple-800 rounded-lg p-4">
                    <h3 className="text-xl font-semibold text-purple-300 mb-2">
                      New Client Discount
                    </h3>
                    <p className="text-purple-200">
                      50% off any service for the first month
                    </p>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 text-white">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                  <div className="flex items-center">
                    <Phone className="h-6 w-6 mr-2 text-purple-500" />
                    <span className="text-lg">
                      CALL/WHATSAPP: +1 (424)323-8570
                    </span>
                  </div>
                  <Button className="bg-purple-600 hover:bg-purple-700" asChild>
                    <a
                      href="https://calendly.com/peter-allmybusinessideas"
                      target="_blank"
                      rel="noopener noreferrer">
                      SCHEDULE A MEETING
                    </a>
                  </Button>
                </div>
              </div>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-gray-800">
                  <AccordionTrigger className="text-white">
                    Frequently Asked Questions
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-white">
                          What&apos;s included in the Standard package?
                        </h3>
                        <p className="text-gray-400">
                          The Standard package includes a mobile-responsive
                          website, basic app functionality, monthly maintenance,
                          and email support.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">
                          Do clients pay for marketing campaigns?
                        </h3>
                        <p className="text-gray-400">
                          Yes, clients pay for the actual marketing campaigns
                          separately. Our fees cover management and
                          optimization.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">
                          Is there a minimum commitment period?
                        </h3>
                        <p className="text-gray-400">
                          Development packages are billed monthly with no
                          long-term commitment. Consulting requires a 3-hour
                          minimum retainer.
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

interface PricingCardProps {
  title: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlight?: React.ReactNode;
}

function PricingCard({
  title,
  price,
  period,
  description,
  features,
  highlight,
}: PricingCardProps) {
  return (
    <Card className="flex flex-col border-gray-800 bg-gray-900 text-white">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle>{title}</CardTitle>
          {highlight && <div>{highlight}</div>}
        </div>
        <CardDescription className="text-gray-400">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col">
        <div className="mb-4">
          <span className="text-3xl font-bold">{price}</span>
          <span className="text-gray-400">/{period}</span>
        </div>
        <ul className="space-y-2 flex-grow">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check size={18} className="mr-2 text-purple-500 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
