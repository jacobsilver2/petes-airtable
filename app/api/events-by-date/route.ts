import { NextRequest, NextResponse } from "next/server"
import Airtable from "airtable"

const getApiKey = (): string | undefined => {
  return process.env.NEXT_PUBLIC_AIRTABLE_API
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const date = searchParams.get("date")

  if (!date) {
    return NextResponse.json({ error: "Date parameter is required" }, { status: 400 })
  }

  const apiKey = getApiKey()
  if (!apiKey) {
    return NextResponse.json({ error: "Airtable API key not available" }, { status: 500 })
  }

  try {
    const base = new Airtable({ apiKey }).base("app4Eb0X39KtGToOS")

    // Convert date to match Airtable format (YYYY-MM-DD)
    const filterFormula = `AND(IS_SAME({Date}, '${date}', 'day'), {Status} = 'Confirmed')`

    const records = await base("Events")
      .select({
        filterByFormula: filterFormula,
        sort: [{ field: "Date", direction: "asc" }],
      })
      .all()

    const events = records.map((record) => {
      const fields = record.fields as any

      // Extract time from Date field or use a default
      let time = ""
      if (fields.Date) {
        const dateObj = new Date(fields.Date)
        time = dateObj.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        })
      }

      // Try different possible field names from Airtable
      const draw = fields.Draw || fields.draw || ""
      const notes = fields.Report || fields.report || fields.Notes || fields.notes || ""
      const bandMembers = fields["Band Members"] || fields["# of band members"] || fields.bandMembers || ""
      const engineer = fields.Engineer || fields.engineer || ""

      return {
        time: time || "--",
        band: fields.Name || "",
        draw,
        notes,
        bandMembers,
        engineer,
      }
    })

    return NextResponse.json({ events })
  } catch (error) {
    console.error("Error fetching events from Airtable:", error)
    return NextResponse.json(
      { error: "Failed to fetch events" },
      { status: 500 }
    )
  }
}
