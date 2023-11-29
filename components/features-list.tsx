'use client'

import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { JSXMapSerializer, PrismicRichText } from "@prismicio/react";

import {
  Card,
  CardHeader,
  CardDescription,
  CardFooter,
  CardContent,
  CardTitle
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heading } from "@/components/heading";

import { useCategoryStore } from "@/store/category-store";

type FeaturesListProps = {
  title: Content.FeaturesSlice['primary']['title'];
  features: Content.FeaturesSliceDefaultItem[]
};

export function FeaturesList({
  title,
  features
}: FeaturesListProps) {
  const category = useCategoryStore(state => state.category)

  const components: JSXMapSerializer = {
    heading2: ({ children }) => {
      return (
        <Heading>{children}</Heading>
      )
    },
    heading4: ({ children }) => (
      <CardTitle className="text-lg md:text-xl">
        {children}
      </CardTitle>
    ),
  }


  return (
    <>
      <PrismicRichText field={title} components={components} />
      <div className="grid grid-cols-1 gap-4 mt-8 md:gap-6 md:grid-cols-2">
        {features.map((item, index) => {
          const formatted = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(item.price!)

          return (
            <section id={`${item.category}`} key={index}>
              <Card key={index} className="flex items-start w-fit">
                <CardHeader className="flex flex-col h-full">
                  <PrismicRichText field={item.name} components={components} />
                  <CardDescription className="line-clamp-3 md:line-clamp-2">
                    {item.description}
                  </CardDescription>
                  <CardFooter className="flex flex-col items-start p-0">
                    <Badge>{item.category}</Badge>
                    <p className="mt-4">{formatted}</p>
                  </CardFooter>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="relative w-32 h-32 overflow-hidden drop-shadow-sm">
                    <PrismicNextImage
                      field={item.image}
                      className="object-cover rounded-lg"
                      fill
                    />
                  </div>
                </CardContent>
              </Card>
            </section>
          )
        })}
      </div>
    </>
  )
}
