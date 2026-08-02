from __future__ import annotations

import shutil
from pathlib import Path
from xml.sax.saxutils import escape

from reportlab.lib.colors import HexColor, white
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.utils import ImageReader
from reportlab.pdfgen import canvas
from reportlab.platypus import Paragraph


ROOT = Path(__file__).resolve().parents[2]
PUBLIC_DIR = ROOT / "artifacts" / "ien-website" / "public"
BRAND_DIR = PUBLIC_DIR / "brand-kit"
DOCS_DIR = PUBLIC_DIR / "documents"
OUTPUT_DIR = ROOT / "output" / "pdf"
PDF_NAME = "ien-brand-kit-guidelines.pdf"

WIDTH, HEIGHT = letter
MARGIN = 42

NAVY = HexColor("#0D1623")
MIDNIGHT = HexColor("#091120")
PANEL = HexColor("#0E182A")
BORDER = HexColor("#D8DEE8")
GOLD = HexColor("#ECBF1A")
WEB_GOLD = HexColor("#EAC453")
TEXT = HexColor("#172033")
MUTED = HexColor("#5C6878")
LIGHT = HexColor("#F6F8FB")
RED = HexColor("#EF4343")
STEEL = HexColor("#B1BDCD")

UPDATED = "August 2, 2026"
CONTACT = "ienboard@indianaesportsnetwork.org"
SITE_URL = "indianaesportsnetwork.org/brand-kit"

LOGO_HORIZONTAL_NAVY = BRAND_DIR / "ien-horizontal-logo-navy.png"
LOGO_HORIZONTAL_TRANSPARENT = BRAND_DIR / "ien-horizontal-logo-transparent.png"
LOGO_MAIN_NAVY = BRAND_DIR / "ien-main-logo-navy.png"
LOGO_ICON_TRANSPARENT = BRAND_DIR / "ien-icon-transparent.png"
LOGO_ICON_NAVY = BRAND_DIR / "ien-icon-navy.png"

def style(name: str, size: int, leading: int, color=TEXT, font="Helvetica", align=TA_LEFT) -> ParagraphStyle:
    return ParagraphStyle(
        name,
        fontName=font,
        fontSize=size,
        leading=leading,
        textColor=color,
        alignment=align,
        spaceAfter=0,
        spaceBefore=0,
    )


BODY = style("Body", 9, 13)
SMALL = style("Small", 7, 10, MUTED)
WHITE_BODY = style("WhiteBody", 10, 15, HexColor("#E9EEF6"))
MUTED_BODY = style("MutedBody", 8, 12, MUTED)


def draw_paragraph(c: canvas.Canvas, text: str, x: float, top: float, width: float, para_style: ParagraphStyle = BODY) -> float:
    safe = escape(text).replace("\n", "<br/>")
    p = Paragraph(safe, para_style)
    _, height = p.wrap(width, 1000)
    p.drawOn(c, x, top - height)
    return top - height


def draw_image_fit(c: canvas.Canvas, path: Path, x: float, y: float, width: float, height: float) -> None:
    image = ImageReader(str(path))
    image_width, image_height = image.getSize()
    scale = min(width / image_width, height / image_height)
    draw_width = image_width * scale
    draw_height = image_height * scale
    dx = x + (width - draw_width) / 2
    dy = y + (height - draw_height) / 2
    c.drawImage(str(path), dx, dy, draw_width, draw_height, mask="auto")


def rounded_rect(c: canvas.Canvas, x: float, top: float, width: float, height: float, fill, stroke=BORDER, radius=7) -> None:
    c.setFillColor(fill)
    c.setStrokeColor(stroke)
    c.setLineWidth(0.8)
    c.roundRect(x, top - height, width, height, radius, stroke=1, fill=1)


def label(c: canvas.Canvas, text: str, x: float, y: float, color=GOLD) -> None:
    c.setFillColor(color)
    c.setFont("Helvetica-Bold", 7)
    c.drawString(x, y, text.upper())


def heading(c: canvas.Canvas, text: str, x: float, top: float, size=24, color=TEXT) -> float:
    c.setFillColor(color)
    c.setFont("Helvetica-Bold", size)
    c.drawString(x, top - size, text.upper())
    return top - size - 10


def page_background(c: canvas.Canvas, title: str, page_number: int) -> None:
    c.setFillColor(LIGHT)
    c.rect(0, 0, WIDTH, HEIGHT, stroke=0, fill=1)
    c.setFillColor(white)
    c.rect(0, HEIGHT - 76, WIDTH, 76, stroke=0, fill=1)
    draw_image_fit(c, LOGO_ICON_NAVY, MARGIN, HEIGHT - 60, 34, 34)
    c.setFillColor(TEXT)
    c.setFont("Helvetica-Bold", 8)
    c.drawString(MARGIN + 45, HEIGHT - 43, "INDIANA ESPORTS NETWORK")
    c.setFillColor(MUTED)
    c.setFont("Helvetica", 7)
    c.drawString(MARGIN + 45, HEIGHT - 55, title)
    c.setFillColor(MUTED)
    c.setFont("Helvetica", 7)
    c.drawRightString(WIDTH - MARGIN, HEIGHT - 48, f"Brand Kit Guidelines / {page_number}")
    c.setStrokeColor(GOLD)
    c.setLineWidth(2)
    c.line(MARGIN, HEIGHT - 76, WIDTH - MARGIN, HEIGHT - 76)


def footer(c: canvas.Canvas) -> None:
    c.setFillColor(MUTED)
    c.setFont("Helvetica", 7)
    c.drawString(MARGIN, 24, f"Last updated {UPDATED}")
    c.drawRightString(WIDTH - MARGIN, 24, f"{SITE_URL} / {CONTACT}")


def card_text(c: canvas.Canvas, x: float, top: float, width: float, title: str, text: str, height: float = 94, icon_color=GOLD) -> None:
    rounded_rect(c, x, top, width, height, white)
    label(c, title, x + 14, top - 21, icon_color)
    draw_paragraph(c, text, x + 14, top - 34, width - 28, MUTED_BODY)


def draw_cover(c: canvas.Canvas) -> None:
    c.setFillColor(NAVY)
    c.rect(0, 0, WIDTH, HEIGHT, stroke=0, fill=1)
    c.setStrokeColor(HexColor("#1F2E47"))
    c.setLineWidth(0.5)
    for x in range(0, int(WIDTH), 54):
        c.line(x, 0, x, HEIGHT)
    for y in range(0, int(HEIGHT), 54):
        c.line(0, y, WIDTH, y)

    draw_image_fit(c, LOGO_HORIZONTAL_TRANSPARENT, 74, 574, 464, 120)

    c.setFillColor(GOLD)
    c.setFont("Helvetica-Bold", 42)
    c.drawString(74, 488, "BRAND KIT")
    c.drawString(74, 441, "GUIDELINES")

    draw_paragraph(
        c,
        "Official guidance for the Indiana Esports Network website, school graphics, coach communications, event materials, and public-facing brand use.",
        76,
        388,
        420,
        WHITE_BODY,
    )

    c.setStrokeColor(GOLD)
    c.setLineWidth(4)
    c.line(76, 331, 232, 331)

    c.setFillColor(white)
    c.setFont("Helvetica-Bold", 10)
    c.drawString(76, 292, "FOR COACHES, SCHOOLS, PARTNERS, AND IEN CONTRIBUTORS")
    c.setFillColor(STEEL)
    c.setFont("Helvetica", 9)
    c.drawString(76, 270, f"Last updated {UPDATED}")

    c.setFillColor(GOLD)
    c.roundRect(76, 195, 172, 34, 6, stroke=0, fill=1)
    c.setFillColor(NAVY)
    c.setFont("Helvetica-Bold", 9)
    c.drawCentredString(162, 207, "DOWNLOADS ON SITE")
    c.linkURL("https://indianaesportsnetwork.org/brand-kit", (76, 195, 248, 229), relative=0)

    c.setFillColor(STEEL)
    c.setFont("Helvetica", 8)
    c.drawString(76, 162, SITE_URL)
    c.drawString(76, 146, CONTACT)


def draw_foundation(c: canvas.Canvas, page_number: int) -> None:
    page_background(c, "Foundation", page_number)
    y = heading(c, "Brand Foundation", MARGIN, HEIGHT - 112)
    draw_paragraph(
        c,
        "IEN should feel credible, energetic, inclusive, and easy for coaches to use. The brand carries the seriousness of school athletics with the momentum of competitive gaming.",
        MARGIN,
        y,
        WIDTH - 2 * MARGIN,
        BODY,
    )

    y = 620
    col_w = (WIDTH - 2 * MARGIN - 18) / 2
    card_text(
        c,
        MARGIN,
        y,
        col_w,
        "Purpose",
        "Prepare students for the future through collaboration, communication, creativity, and critical thinking through video games and esports.",
        116,
    )
    card_text(
        c,
        MARGIN + col_w + 18,
        y,
        col_w,
        "Brand Promise",
        "IEN gives Indiana schools a trusted, educator-led place for students to compete, belong, and grow.",
        116,
    )

    y = 472
    rounded_rect(c, MARGIN, y, WIDTH - 2 * MARGIN, 152, white)
    label(c, "Approved Boilerplate", MARGIN + 16, y - 22)
    draw_paragraph(
        c,
        "Short: Indiana Esports Network is a nonprofit scholastic esports organization serving Indiana schools through competition, community, and career-connected learning.",
        MARGIN + 16,
        y - 42,
        WIDTH - 2 * MARGIN - 32,
        BODY,
    )
    draw_paragraph(
        c,
        "Standard: Indiana Esports Network (IEN) is a nonprofit organization founded and led by Indiana educators. IEN operates scholastic esports leagues and events that help students compete, belong, and build future-ready skills through gaming.",
        MARGIN + 16,
        y - 88,
        WIDTH - 2 * MARGIN - 32,
        BODY,
    )

    y = 282
    uses = [
        ("Website", "Use this guide for page colors, logo placement, headings, downloads, and public copy."),
        ("School Flyers", "Use approved logos, IEN Navy, Torch Gold, and simple coach-friendly language."),
        ("Streams", "Keep overlays legible. Use the icon only when space is tight and the IEN name appears elsewhere."),
        ("Press", "Lead with IEN's educator-led nonprofit role and student opportunity."),
    ]
    small_w = (WIDTH - 2 * MARGIN - 24) / 4
    for index, (title, body) in enumerate(uses):
        card_text(c, MARGIN + index * (small_w + 8), y, small_w, title, body, 124)

    footer(c)


def draw_logos(c: canvas.Canvas, page_number: int) -> None:
    page_background(c, "Logo System", page_number)
    y = heading(c, "Official Marks", MARGIN, HEIGHT - 112)
    draw_paragraph(
        c,
        "Use the provided logo files as-is. The logo mark, torch, stars, and wordmark should never be redrawn, rebuilt, stretched, or recolored.",
        MARGIN,
        y,
        WIDTH - 2 * MARGIN,
        BODY,
    )

    logos = [
        ("Primary Horizontal", LOGO_HORIZONTAL_NAVY, "Best for light pages, printed documents, coach packets, and sponsor decks.", False),
        ("Transparent Horizontal", LOGO_HORIZONTAL_TRANSPARENT, "Use on dark navy, black, or approved image backgrounds with enough contrast.", True),
        ("Stacked Main Mark", LOGO_MAIN_NAVY, "Use when a square or centered layout is stronger than the horizontal lockup.", False),
        ("Icon", LOGO_ICON_TRANSPARENT, "Use only when the audience already knows IEN or when space is very small.", True),
    ]
    card_w = (WIDTH - 2 * MARGIN - 18) / 2
    card_h = 168
    y_top = 620
    for index, (title, path, body, dark) in enumerate(logos):
        x = MARGIN + (index % 2) * (card_w + 18)
        top = y_top - (index // 2) * (card_h + 16)
        rounded_rect(c, x, top, card_w, card_h, white)
        image_fill = MIDNIGHT if dark else HexColor("#FDFDFD")
        c.setFillColor(image_fill)
        c.roundRect(x + 12, top - 96, card_w - 24, 72, 5, stroke=0, fill=1)
        draw_image_fit(c, path, x + 22, top - 91, card_w - 44, 62)
        label(c, title, x + 14, top - 114)
        draw_paragraph(c, body, x + 14, top - 128, card_w - 28, SMALL)

    y = 232
    rules = [
        ("Clear Space", "Keep open space equal to at least the height of the torch flame inside the mark."),
        ("Minimum Size", "Horizontal logo: 180 px digital or 1.5 in print. Icon: 40 px digital minimum."),
        ("Contrast", "Transparent white logo files belong on dark or image backgrounds only."),
        ("Co-branding", "Pair school and IEN logos with equal breathing room. Do not make a new combined logo."),
    ]
    rule_w = (WIDTH - 2 * MARGIN - 18) / 2
    for index, (title, body) in enumerate(rules):
        x = MARGIN + (index % 2) * (rule_w + 18)
        top = y - (index // 2) * 74
        card_text(c, x, top, rule_w, title, body, 62)

    footer(c)


def draw_swatch(c: canvas.Canvas, x: float, top: float, width: float, height: float, name: str, hex_value: str, rgb: str, use: str) -> None:
    rounded_rect(c, x, top, width, height, white)
    c.setFillColor(HexColor(hex_value))
    c.roundRect(x + 10, top - 58, width - 20, 42, 4, stroke=0, fill=1)
    dark_text = hex_value.upper() in {"#FFFFFF", "#EAC453", "#ECBF1A"}
    c.setFillColor(NAVY if dark_text else white)
    c.setFont("Helvetica-Bold", 8)
    c.drawString(x + 16, top - 41, hex_value)
    label(c, name, x + 10, top - 76)
    draw_paragraph(c, f"RGB {rgb}", x + 10, top - 90, width - 20, SMALL)
    draw_paragraph(c, use, x + 10, top - 106, width - 20, SMALL)


def draw_color_type(c: canvas.Canvas, page_number: int) -> None:
    page_background(c, "Color And Typography", page_number)
    y = heading(c, "Color Palette", MARGIN, HEIGHT - 112)
    draw_paragraph(
        c,
        "Core colors should drive official IEN materials. Website support colors can help with digital UI, alerts, labels, and secondary text.",
        MARGIN,
        y,
        WIDTH - 2 * MARGIN,
        BODY,
    )

    core = [
        ("IEN Navy", "#0D1623", "13, 22, 35", "Primary field for official marks and headers."),
        ("Torch Gold", "#ECBF1A", "236, 191, 26", "Primary accent for highlights and recognition."),
        ("White", "#FFFFFF", "255, 255, 255", "Logo text, contrast, and clean print space."),
    ]
    sw_w = (WIDTH - 2 * MARGIN - 20) / 3
    for index, item in enumerate(core):
        draw_swatch(c, MARGIN + index * (sw_w + 10), 620, sw_w, 142, *item)

    support = [
        ("Midnight", "#091120", "9, 17, 32", "Website background."),
        ("Panel Navy", "#0E182A", "14, 24, 42", "Cards and panels."),
        ("Web Gold", "#EAC453", "234, 196, 83", "Accessible web accents."),
        ("Steel", "#B1BDCD", "177, 189, 205", "Secondary text."),
        ("Signal Red", "#EF4343", "239, 67, 67", "Warnings only."),
    ]
    sup_w = (WIDTH - 2 * MARGIN - 24) / 5
    for index, item in enumerate(support):
        draw_swatch(c, MARGIN + index * (sup_w + 6), 444, sup_w, 130, *item)

    y = 270
    rounded_rect(c, MARGIN, y, WIDTH - 2 * MARGIN, 190, white)
    label(c, "Typography", MARGIN + 16, y - 23)
    c.setFillColor(TEXT)
    c.setFont("Helvetica-Bold", 34)
    c.drawString(MARGIN + 16, y - 72, "MATCH WEEK")
    c.setFont("Helvetica", 14)
    c.drawString(MARGIN + 18, y - 101, "Coach updates should use readable body copy and short headings.")
    type_rows = [
        ("Headings", "Oswald 600-700", "Uppercase section labels, event titles, and calls to action."),
        ("Body", "Lato 400, 700", "Guidance, paragraphs, captions, tables, and coach communications."),
        ("Logo Wordmark", "Custom artwork", "Do not recreate the IEN wordmark with a font."),
    ]
    row_y = y - 130
    for role, family, usage in type_rows:
        c.setFillColor(GOLD)
        c.setFont("Helvetica-Bold", 7)
        c.drawString(MARGIN + 18, row_y, role.upper())
        c.setFillColor(TEXT)
        c.drawString(MARGIN + 116, row_y, family)
        c.setFillColor(MUTED)
        c.setFont("Helvetica", 7)
        c.drawString(MARGIN + 226, row_y, usage)
        row_y -= 18

    footer(c)


def draw_usage(c: canvas.Canvas, page_number: int) -> None:
    page_background(c, "Coach Checklist", page_number)
    y = heading(c, "Coach Checklist", MARGIN, HEIGHT - 112)
    draw_paragraph(
        c,
        "Run through this before posting a school graphic, event flyer, stream overlay, newsletter item, or sponsor-facing material.",
        MARGIN,
        y,
        WIDTH - 2 * MARGIN,
        BODY,
    )

    dos = [
        "Use approved PNG files from the brand kit downloads.",
        "Keep IEN Navy, Torch Gold, and white as the dominant colors.",
        "Use the full Indiana Esports Network name on first mention, then IEN after that.",
        "Describe schools as IEN member schools or participating schools.",
        "Send high-visibility public designs to IEN when the placement is prominent or sponsor-facing.",
    ]
    donts = [
        "Do not stretch, rotate, recolor, outline, or add shadows to the logo.",
        "Do not place white logo text on light or busy backgrounds.",
        "Do not rebuild the wordmark with a font or recreate the torch icon.",
        "Do not imply that a school-run event is officially operated by IEN unless IEN has approved that language.",
        "Do not use Signal Red as decoration; reserve it for urgent notices or warnings.",
    ]
    col_w = (WIDTH - 2 * MARGIN - 18) / 2
    rounded_rect(c, MARGIN, 626, col_w, 236, white)
    label(c, "Do", MARGIN + 16, 604, GOLD)
    text_y = 580
    for item in dos:
        c.setFillColor(GOLD)
        c.circle(MARGIN + 20, text_y - 2, 2.4, stroke=0, fill=1)
        text_y = draw_paragraph(c, item, MARGIN + 32, text_y + 4, col_w - 50, SMALL) - 10

    x2 = MARGIN + col_w + 18
    rounded_rect(c, x2, 626, col_w, 236, white, stroke=HexColor("#F1B3B3"))
    label(c, "Don't", x2 + 16, 604, RED)
    text_y = 580
    for item in donts:
        c.setFillColor(RED)
        c.circle(x2 + 20, text_y - 2, 2.4, stroke=0, fill=1)
        text_y = draw_paragraph(c, item, x2 + 32, text_y + 4, col_w - 50, SMALL) - 10

    checklist = [
        "Use the approved logo file for the background you are placing it on.",
        "Keep enough clear space around the logo.",
        "Use IEN Navy and Torch Gold as the primary brand colors.",
        "Use Oswald for short headings and Lato for readable body copy.",
        "Name the league correctly: IHSEN, IMSEN, IUEN, or Indiana Esports Network.",
        "Use student-first, coach-friendly language.",
        "Ask IEN before using the brand in merchandise, paid advertising, or large public signage.",
    ]
    rounded_rect(c, MARGIN, 342, WIDTH - 2 * MARGIN, 222, white)
    label(c, "Final Review", MARGIN + 16, 320)
    text_y = 296
    for item in checklist:
        c.setStrokeColor(GOLD)
        c.setLineWidth(1.4)
        c.rect(MARGIN + 18, text_y - 6, 8, 8, stroke=1, fill=0)
        draw_paragraph(c, item, MARGIN + 36, text_y + 4, WIDTH - 2 * MARGIN - 54, SMALL)
        text_y -= 24

    rounded_rect(c, MARGIN, 92, WIDTH - 2 * MARGIN, 50, NAVY, stroke=NAVY)
    c.setFillColor(GOLD)
    c.setFont("Helvetica-Bold", 9)
    c.drawString(MARGIN + 16, 62, "QUESTIONS OR APPROVAL")
    c.setFillColor(white)
    c.setFont("Helvetica", 9)
    c.drawString(MARGIN + 154, 62, f"{CONTACT} / {SITE_URL}")

    footer(c)


def build_pdf(output_path: Path) -> None:
    output_path.parent.mkdir(parents=True, exist_ok=True)
    c = canvas.Canvas(str(output_path), pagesize=letter)
    draw_cover(c)
    c.showPage()
    draw_foundation(c, 2)
    c.showPage()
    draw_logos(c, 3)
    c.showPage()
    draw_color_type(c, 4)
    c.showPage()
    draw_usage(c, 5)
    c.save()


def main() -> None:
    canonical = OUTPUT_DIR / PDF_NAME
    public_copy = DOCS_DIR / PDF_NAME
    build_pdf(canonical)
    DOCS_DIR.mkdir(parents=True, exist_ok=True)
    shutil.copyfile(canonical, public_copy)
    print(canonical)
    print(public_copy)


if __name__ == "__main__":
    main()
