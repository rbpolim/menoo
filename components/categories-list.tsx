import { createClient } from "@/prismicio"

import { CategoryItem } from "@/components/category-item"
import { ScrollArea } from "@/components/ui/scroll-area"

export async function CategoriesList() {
  const client = createClient()
  const settings = await client.getSingle('settings')

  return (
    <ScrollArea>
      <ul className="flex items-center py-2 gap-x-6">
        {settings.data.food_categories.map((category, index) => (
          <CategoryItem
            key={index}
            item={category}
          />
        ))}
      </ul>
    </ScrollArea>
  )
}
