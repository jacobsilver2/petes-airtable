import PageLayout from "../../src/components/PageLayout"
import MenuRenderer from "../../src/components/MenuRenderer"
import { getMenuData } from "../../lib/airtable"
import { AirtableRecord } from "../../types"


export default async function MenuPage() {
  const menuData = await getMenuData()

  // Sort by order field if it exists
  const sortedData = menuData.sort((a: AirtableRecord, b: AirtableRecord) => {
    const orderA = a.data.order || 0
    const orderB = b.data.order || 0
    return orderA - orderB
  })

  return (
    <PageLayout>
      <div>
        <MenuRenderer data={sortedData} />
      </div>
    </PageLayout>
  )
}
