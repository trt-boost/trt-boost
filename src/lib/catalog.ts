/**
 * TRT Boost product catalog — names, descriptions, dosage, quantity, price, and
 * "Min Purchase" are adopted verbatim from the official "TRT Boost Price List"
 * (SKUs 1–28). Multi-dose products (Semaglutide, Tirzepatide) are grouped into a
 * single product with several dose variants. Category display names use the
 * consumer-friendly labels; the price-list grouping is preserved.
 *
 * Prices are the cash price per fill/cycle and exclude the provider consultation
 * and any required lab work. All treatments are prescription-only and dispensed
 * by licensed U.S. pharmacies after a provider evaluation.
 */

export type PriceVariant = {
  dosage: string;
  quantity: string;
  price: number;
};

export type Product = {
  sku: number | number[];
  name: string;
  slug: string;
  route: string; // administration route, e.g. "Oral", "SubQ"
  minPurchase: string; // "Min Purchase" column from the price list
  description: string;
  variants: PriceVariant[];
  popular?: boolean;
  /** Optional override; defaults to the convention `/images/products/meds/<slug>.webp`. */
  image?: string;
};

export type Category = {
  slug: string;
  name: string;
  shortName: string;
  icon: string; // lucide-react icon name
  image: string; // hero/card image (public path); "" = use icon panel
  imageFit?: "cover" | "contain"; // product renders look best "contain"
  tagline: string;
  blurb: string;
  longDescription: string;
  audience: string[]; // "who it's for" / symptoms
  products: Product[];
};

export const categories: Category[] = [
  {
    slug: "trt",
    name: "Testosterone Therapy",
    shortName: "TRT",
    icon: "Dumbbell",
    image: "/images/products/meds/testosterone-cypionate.webp",
    imageFit: "cover",
    tagline: "Optimize your hormones",
    blurb:
      "Clinically guided testosterone replacement therapy to restore energy, drive, strength, and focus.",
    longDescription:
      "Low testosterone can quietly drain your energy, mood, libido, and strength. TRT Boost connects you with licensed providers who review your symptoms and lab work, then build a hormone protocol tailored to you — injectable or oral — with ongoing monitoring and dose adjustments along the way.",
    audience: [
      "Persistent fatigue and low energy",
      "Reduced libido or sexual performance",
      "Loss of muscle, strength, or motivation",
      "Brain fog, low mood, or poor sleep",
    ],
    products: [
      {
        sku: 1,
        name: "Testosterone Cypionate",
        slug: "testosterone-cypionate",
        route: "IM / SubQ",
        minPurchase: "Monthly",
        description:
          "A long-acting injectable testosterone treatment for men with clinically low testosterone, designed to support energy, libido, strength, and overall vitality.",
        variants: [{ dosage: "200mg/ml", quantity: "10ml", price: 99 }],
        popular: true,
      },
      {
        sku: 2,
        name: "Testosterone Enanthate",
        slug: "testosterone-enanthate",
        route: "IM / SubQ",
        minPurchase: "Monthly",
        description:
          "An injectable testosterone option for men with low testosterone who want clinically guided hormone therapy to support mood, sexual health, and physical performance.",
        variants: [{ dosage: "200mg/ml", quantity: "10ml", price: 99 }],
      },
      {
        sku: 3,
        name: "Enclomiphene",
        slug: "enclomiphene",
        route: "Oral",
        minPurchase: "Monthly",
        description:
          "An oral hormone-support option that may help eligible men support natural testosterone production, especially when fertility is an important consideration.",
        variants: [{ dosage: "25mg", quantity: "30 pills", price: 99 }],
        image: "/images/products/meds/clomiphene-citrate.webp",
      },
      {
        sku: 4,
        name: "Anastrazole",
        slug: "anastrazole",
        route: "Oral",
        minPurchase: "Monthly",
        description:
          "A prescription aromatase inhibitor used to manage elevated estrogen levels in men on testosterone therapy, helping reduce side effects like water retention, mood changes, and gynecomastia.",
        variants: [{ dosage: "0.25mg", quantity: "8 pills", price: 30 }],
      },
      {
        sku: 5,
        name: "hCG — Human Chorionic Gonadotropin",
        slug: "hcg",
        route: "SubQ",
        minPurchase: "Monthly",
        description:
          "A hormone peptide commonly used alongside testosterone therapy to preserve testicular function, maintain natural testosterone production, and support fertility in men on TRT.",
        variants: [{ dosage: "500IU", quantity: "5000IU vial", price: 99 }],
      },
    ],
  },
  {
    slug: "ed",
    name: "Erectile Dysfunction",
    shortName: "ED",
    icon: "HeartPulse",
    image: "/images/products/meds/sildenafil.webp",
    imageFit: "cover",
    tagline: "Confidence on demand",
    blurb:
      "Proven, discreet ED treatments — daily or as-needed — prescribed online and delivered to your door.",
    longDescription:
      "Erectile dysfunction is common and highly treatable. A TRT Boost provider reviews your health history and recommends the right medication and dose for you, whether you prefer fast-acting, on-demand support or a low-dose daily option for more spontaneity.",
    audience: [
      "Difficulty getting or keeping an erection",
      "Performance anxiety or inconsistency",
      "Want a discreet, doctor-backed option",
      "Prefer daily or as-needed dosing",
    ],
    products: [
      {
        sku: 6,
        name: "Sildenafil",
        slug: "sildenafil",
        route: "Oral",
        minPurchase: "Monthly",
        description:
          "Fast-acting ED treatment that helps improve blood flow when you want reliable performance and confidence.",
        variants: [{ dosage: "25–50mg", quantity: "4 pills", price: 20 }],
        popular: true,
      },
      {
        sku: 7,
        name: "Tadalafil",
        slug: "tadalafil",
        route: "Oral",
        minPurchase: "Monthly",
        description:
          "A longer-lasting ED option that gives eligible men more flexibility with either daily or as-needed treatment.",
        variants: [{ dosage: "10–20mg", quantity: "4 pills", price: 30 }],
      },
      {
        sku: 8,
        name: "Avanafil",
        slug: "avanafil",
        route: "Oral",
        minPurchase: "Monthly",
        description:
          "A streamlined ED medication for men looking for an on-demand option with fast-start convenience.",
        variants: [{ dosage: "50–100mg", quantity: "4 pills", price: 55 }],
      },
      {
        sku: 9,
        name: "Daily ED Support (Tadalafil Low-Dose)",
        slug: "daily-ed-support",
        route: "Oral",
        minPurchase: "Monthly",
        description:
          "A low-dose daily ED care option designed for more spontaneity, consistency, and confidence.",
        variants: [{ dosage: "2.5–5mg", quantity: "30 pills", price: 35 }],
      },
    ],
  },
  {
    slug: "hair-loss",
    name: "Hair Loss",
    shortName: "Hair",
    icon: "Sparkles",
    image: "/images/products/meds/topical-minoxidil.webp",
    imageFit: "cover",
    tagline: "Keep — and regrow — your hair",
    blurb:
      "Doctor-prescribed treatments that slow shedding and support thicker, fuller-looking hair.",
    longDescription:
      "Male pattern hair loss is driven by DHT. TRT Boost offers proven oral and topical treatments — used alone or combined — to reduce DHT and stimulate regrowth, with a plan matched to how aggressive you want to be.",
    audience: [
      "Receding hairline or thinning crown",
      "Increased shedding",
      "Want to prevent further loss",
      "Looking for a combined regrowth plan",
    ],
    products: [
      {
        sku: 10,
        name: "Finasteride",
        slug: "finasteride",
        route: "Oral",
        minPurchase: "Monthly",
        description:
          "A prescription hair-loss treatment for men that helps reduce DHT, the hormone linked to male pattern hair loss.",
        variants: [{ dosage: "1mg", quantity: "30 pills", price: 20 }],
      },
      {
        sku: 11,
        name: "Topical Minoxidil",
        slug: "topical-minoxidil",
        route: "Topical",
        minPurchase: "Monthly",
        description:
          "A proven topical treatment that helps stimulate hair growth and support fuller-looking coverage over time.",
        variants: [{ dosage: "1ml (BID)", quantity: "60ml", price: 20 }],
      },
      {
        sku: 12,
        name: "Finasteride + Minoxidil",
        slug: "finasteride-minoxidil",
        route: "Oral + Topical",
        minPurchase: "Monthly",
        description:
          "A powerful two-in-one hair restoration approach that combines DHT control with topical regrowth support.",
        variants: [{ dosage: "1mg / 1ml", quantity: "30 pills + 60ml", price: 39 }],
        popular: true,
      },
      {
        sku: 13,
        name: "Dutasteride",
        slug: "dutasteride",
        route: "Oral",
        minPurchase: "Monthly",
        description:
          "An advanced DHT-lowering option sometimes used in men seeking a more aggressive hair-preservation strategy.",
        variants: [{ dosage: "0.5mg", quantity: "30 pills", price: 35 }],
      },
    ],
  },
  {
    slug: "weight-loss",
    name: "Weight Loss",
    shortName: "Weight",
    icon: "Activity",
    image: "/images/products/meds/semaglutide.webp",
    imageFit: "cover",
    tagline: "Metabolic health, simplified",
    blurb:
      "GLP-1 and metabolic treatments that curb appetite and support meaningful, lasting weight loss.",
    longDescription:
      "Modern weight care goes beyond willpower. TRT Boost providers prescribe clinically proven GLP-1 medications and oral options to reduce appetite and support metabolic health, with dose titration and check-ins built into your plan.",
    audience: [
      "Struggling to lose weight with diet alone",
      "Frequent cravings or appetite issues",
      "Want a medically supervised plan",
      "Interested in GLP-1 therapy",
    ],
    products: [
      {
        sku: [14, 15, 16, 17],
        name: "Semaglutide",
        slug: "semaglutide",
        route: "SubQ",
        minPurchase: "Monthly",
        description:
          "A once-weekly metabolic wellness treatment that helps eligible patients reduce appetite and support meaningful weight loss.",
        variants: [
          { dosage: "0.25mg", quantity: "1ml", price: 149 },
          { dosage: "0.5mg", quantity: "2ml", price: 199 },
          { dosage: "1mg", quantity: "4ml", price: 250 },
          { dosage: "2mg", quantity: "8ml", price: 299 },
        ],
        popular: true,
      },
      {
        sku: [18, 19, 20, 21],
        name: "Tirzepatide",
        slug: "tirzepatide",
        route: "SubQ",
        minPurchase: "Monthly",
        description:
          "A next-generation weekly treatment designed to support appetite control, metabolic health, and long-term weight management.",
        variants: [
          { dosage: "2.5mg", quantity: "1ml", price: 249 },
          { dosage: "5mg", quantity: "2ml", price: 299 },
          { dosage: "7.5mg", quantity: "3ml", price: 349 },
          { dosage: "10mg", quantity: "4ml", price: 399 },
        ],
      },
      {
        sku: 22,
        name: "Naltrexone / Bupropion",
        slug: "naltrexone-bupropion",
        route: "Oral",
        minPurchase: "Monthly",
        description:
          "An oral weight-management medication that helps reduce appetite and support better control over cravings.",
        variants: [{ dosage: "8mg / 9mg", quantity: "30 pills", price: 55 }],
      },
    ],
  },
  {
    slug: "peptides",
    name: "Peptides & Recovery",
    shortName: "Peptides",
    icon: "Atom",
    image: "/images/products/meds/sermorelin.webp",
    imageFit: "cover",
    tagline: "Advanced wellness",
    blurb:
      "Specialty peptide protocols positioned for recovery, body composition, sleep, and healthy aging.",
    longDescription:
      "For patients pursuing advanced wellness goals, TRT Boost offers specialty peptide protocols under provider supervision — commonly explored for recovery, sleep quality, body composition, and vitality. Eligibility is determined case by case.",
    audience: [
      "Focused on recovery and performance",
      "Interested in healthy-aging support",
      "Want provider-supervised peptides",
      "Goals around body composition or sleep",
    ],
    products: [
      {
        sku: 23,
        name: "Sermorelin",
        slug: "sermorelin",
        route: "SubQ",
        minPurchase: "Monthly",
        description:
          "A specialty peptide option commonly positioned for recovery, sleep quality, and healthy aging support.",
        variants: [{ dosage: "200mcg", quantity: "4ml", price: 175 }],
      },
      {
        sku: 24,
        name: "Ipamorelin",
        slug: "ipamorelin",
        route: "SubQ",
        minPurchase: "Monthly",
        description:
          "A peptide-based wellness option often marketed to support recovery, body composition, and performance goals.",
        variants: [{ dosage: "200mcg", quantity: "4ml", price: 175 }],
      },
      {
        sku: 25,
        name: "CJC-1295 / Ipamorelin",
        slug: "cjc-1295-ipamorelin",
        route: "SubQ",
        minPurchase: "Monthly",
        description:
          "A dual-peptide protocol commonly positioned as an advanced option for recovery, body composition, and vitality support.",
        variants: [{ dosage: "1mg/200mcg", quantity: "4ml", price: 225 }],
        popular: true,
      },
      {
        sku: 26,
        name: "BPC-157",
        slug: "bpc-157",
        route: "SubQ",
        minPurchase: "Monthly",
        description:
          "A specialty peptide often discussed for recovery-focused wellness plans involving joints, soft tissue, and physical resilience.",
        variants: [{ dosage: "250mcg", quantity: "5ml", price: 200 }],
      },
      {
        sku: 27,
        name: "PT-141 / Bremelanotide",
        slug: "pt-141",
        route: "SubQ",
        minPurchase: "Monthly",
        description:
          "A specialty sexual-wellness peptide commonly discussed around libido and arousal support in advanced wellness settings.",
        variants: [{ dosage: "1.75mg PRN", quantity: "6ml", price: 99 }],
      },
      {
        sku: 28,
        name: "Tesamorelin",
        slug: "tesamorelin",
        route: "SubQ",
        minPurchase: "Monthly",
        description:
          "A specialty metabolic peptide sometimes positioned for body-composition support and midsection-focused wellness goals.",
        variants: [{ dosage: "2mg", quantity: "6ml", price: 250 }],
      },
    ],
  },
];

/**
 * Per-medicine product image. By convention each product has a branded studio
 * render at `/images/products/meds/<slug>.webp`; a product may override via
 * `product.image`.
 */
export function productImage(product: Product): string {
  return product.image ?? `/images/products/meds/${product.slug}.webp`;
}

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function startingPrice(product: Product): number {
  return Math.min(...product.variants.map((v) => v.price));
}

export function categoryStartingPrice(category: Category): number {
  return Math.min(...category.products.map(startingPrice));
}

export const allProducts: Product[] = categories.flatMap((c) => c.products);
