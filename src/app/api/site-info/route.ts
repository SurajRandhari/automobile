import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import type { NextRequest } from "next/server";
import type { SiteInfo } from "@/types/site";

const FILE_PATH = path.join(process.cwd(), "data", "site-info.json");

function readFile(): SiteInfo {
  try {
    const raw = fs.readFileSync(FILE_PATH, "utf-8");
    return JSON.parse(raw) as SiteInfo;
  } catch (err) {
    // If file missing or invalid, return default shape
    return { phones: [], email: "" };
  }
}

function writeFile(data: SiteInfo) {
  fs.writeFileSync(FILE_PATH, JSON.stringify(data, null, 2), "utf-8");
}

export async function GET() {
  const data = readFile();
  return NextResponse.json(data);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    // Basic validation: phones should be array of {label, number}
    const phones = Array.isArray(body.phones) ? body.phones : [];
    const email = typeof body.email === "string" ? body.email : "";

    const validPhones = phones
      .map((p) => ({
        label: typeof p.label === "string" ? p.label : "",
        number: typeof p.number === "string" ? p.number : "",
      }))
      .filter((p) => p.number.trim() !== ""); // drop empty numbers

    const newData: SiteInfo = {
      phones: validPhones,
      email,
    };

    writeFile(newData);
    return NextResponse.json({ success: true, data: newData });
  } catch (err) {
    console.error("Failed to update site-info:", err);
    return NextResponse.json({ success: false, error: "Invalid payload" }, { status: 400 });
  }
}
