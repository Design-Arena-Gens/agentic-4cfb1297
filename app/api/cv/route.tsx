import { NextResponse } from "next/server";
import { renderToBuffer } from "@react-pdf/renderer";
import { CvPdfDocument } from "@/components/CvPdfDocument";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const buffer = await renderToBuffer(<CvPdfDocument />);
    return new NextResponse(buffer as unknown as BodyInit, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition":
          'attachment; filename="Alexandra-Rivera-CV-Portfolio.pdf"',
        "Cache-Control": "public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400"
      }
    });
  } catch (error) {
    console.error("PDF generation failed", error);
    return NextResponse.json(
      { message: "Unable to generate CV at this time." },
      { status: 500 }
    );
  }
}
