'use client'

import { cn } from "@/lib/utils";
import { SettingsDocumentDataFoodCategoriesItem } from "@/prismicio-types";
import {
  CakeSlice,
  CupSoda,
  MenuSquare,
  Pizza,
  Popcorn,
  Salad,
  LucideProps,
} from 'lucide-react';

import { useCategoryStore } from "@/store/category-store";

{/* @ts-ignore TODO fix */ }
const iconMap: Record<SettingsDocumentDataFoodCategoriesItem["label"], LucideProps> = {
  "all": <MenuSquare />,
  "drink": <CupSoda />,
  "appetizer": <CupSoda />,
  "dessert": <CakeSlice />,
  "pizza": <Pizza />,
  "snack": <Popcorn />,
  "salad": <Salad />,
}

type CategoryItemProps = {
  item: SettingsDocumentDataFoodCategoriesItem
};

export function CategoryItem({
  item
}: CategoryItemProps) {
  const [category, setCategory, removeCategory] = useCategoryStore((state) => [
    state.category,
    state.setCategory,
    state.removeCategory,
  ]);

  const isSelected = category === item.label;

  const onClick = () => {
    if (isSelected) {
      return removeCategory();
    }

    setCategory(item.label!);
  }

  return (
    <button
      type="button"
      key={item.label}
      onClick={onClick}
      className={cn(
        'flex items-center gap-x-2 px-3 py-2 border rounded-lg capitalize font-medium hover:bg-gray-50 shadow',
        isSelected ? 'border-primary ring ring-neutral-200' : 'border-gray-300'
      )}
    >
      {/* @ts-ignore TODO fix */}
      {iconMap[item.label]}
      {item.label}
    </button>
  )
}
