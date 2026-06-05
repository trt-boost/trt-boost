import type { Metadata } from "next";
import { LegalLayout, LSection } from "@/components/legal/LegalLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Shipping & Delivery Policy",
  description:
    "How TRT Boost processes, ships, and delivers your prescription medications — methods, timelines, tracking, and restrictions.",
};

export default function ShippingPage() {
  return (
    <LegalLayout
      title="Shipping & Delivery Policy"
      effectiveDate="March 31, 2026"
      currentHref="/legal/shipping"
      intro={
        <p>
          At TRT Boost, we understand that timely and secure delivery of your
          medications is essential to your health and treatment plan. This
          Shipping & Delivery Policy outlines how we process, ship, and deliver
          your prescription medications and related products.
        </p>
      }
    >
      <LSection n="01" title="Order Processing">
        <p>Once your licensed healthcare provider approves your treatment plan and issues a prescription, your order enters our fulfillment process.</p>
        <ul>
          <li>Orders are processed by our licensed partner pharmacies within <strong>1–2 business days</strong> of prescription approval.</li>
          <li>You will receive an email confirmation when your order has been received and again when it has shipped.</li>
          <li>Orders placed on weekends or federal holidays will be processed on the next business day.</li>
          <li>Compounded medications may require additional preparation time of <strong>1–3 business days</strong> depending on complexity.</li>
        </ul>
        <p>Please ensure your shipping address and contact information are accurate and up to date in your TRT Boost account to avoid delivery delays.</p>
      </LSection>

      <LSection n="02" title="Shipping Methods & Estimated Delivery Times">
        <p>TRT Boost offers the following shipping options for domestic orders within the United States:</p>
        <table>
          <thead><tr><th>Shipping method</th><th>Estimated delivery</th><th>Cost</th></tr></thead>
          <tbody>
            <tr><td>Standard Shipping</td><td>5–7 business days</td><td>Free</td></tr>
            <tr><td>Expedited Shipping</td><td>3–4 business days</td><td>$9.95</td></tr>
            <tr><td>Priority Overnight</td><td>1–2 business days</td><td>$19.95</td></tr>
            <tr><td>Cold Chain / Temperature-Controlled Shipping</td><td>2–3 business days</td><td>$14.95</td></tr>
          </tbody>
        </table>
        <p className="text-sm italic text-ink-500">Delivery times are estimates and begin from the date of shipment, not the date the order is placed. Actual delivery times may vary based on carrier performance and your location.</p>
      </LSection>

      <LSection n="03" title="Temperature-Sensitive Medications">
        <p>Certain medications, including injectable testosterone and peptide therapies, require temperature-controlled shipping to maintain potency and safety.</p>
        <ul>
          <li>Temperature-sensitive orders are shipped in insulated packaging with cold packs to maintain the required temperature range.</li>
          <li>These shipments are sent via expedited carriers to minimize transit time.</li>
          <li>During extreme weather (heat waves or freezing conditions), TRT Boost may hold shipments to protect medication integrity and will notify you of any delays.</li>
          <li>Upon delivery, please refrigerate temperature-sensitive medications promptly as indicated on the packaging.</li>
        </ul>
      </LSection>

      <LSection n="04" title="Order Tracking">
        <p>TRT Boost provides full tracking visibility for all shipments so you can monitor your order from pharmacy to doorstep.</p>
        <ul>
          <li>A tracking number and carrier link will be emailed to you once your order ships.</li>
          <li>You can also view real-time tracking status by logging into your TRT Boost account dashboard.</li>
          <li>If your tracking information has not updated within <strong>48 hours</strong> of the ship date, please contact our support team.</li>
        </ul>
      </LSection>

      <LSection n="05" title="Shipping Restrictions">
        <p>Due to federal and state regulations governing prescription medications, please note the following shipping restrictions:</p>
        <ul>
          <li>TRT Boost ships only within the <strong>United States</strong> and its territories. We do not offer international shipping at this time.</li>
          <li>We cannot ship to P.O. Boxes for prescription medications — a valid street address is required.</li>
          <li>Certain controlled substances may have additional shipping restrictions based on state law. If your state has specific requirements, our pharmacy team will contact you.</li>
          <li>Medications cannot be shipped to freight forwarding addresses or third-party logistics centers.</li>
          <li>An adult signature (18+) may be required upon delivery for controlled or high-value shipments.</li>
        </ul>
      </LSection>

      <LSection n="06" title="Delivery Issues & Resolution">
        <p>If you experience any issues with your delivery, TRT Boost is committed to resolving them promptly.</p>
        <h3>a) Damaged shipments</h3>
        <ul>
          <li>If your package arrives damaged or medications appear compromised, do <strong>not</strong> use the medication.</li>
          <li>Contact us within <strong>7 days of delivery</strong> with photos of the damaged packaging and product.</li>
          <li>We will ship a replacement at no additional cost.</li>
        </ul>
        <h3>b) Lost or missing packages</h3>
        <ul>
          <li>If your package shows as delivered but you have not received it, check with neighbors and your building&apos;s mail area.</li>
          <li>If still missing, contact us within <strong>5 business days</strong> of the reported delivery date.</li>
          <li>TRT Boost will work with the carrier to investigate and, if confirmed lost, will reship your order at no charge.</li>
        </ul>
        <h3>c) Incorrect items</h3>
        <ul>
          <li>If you receive the wrong medication or dosage, do <strong>not</strong> use the product.</li>
          <li>Contact us immediately and we will arrange a return label and send the correct order via priority shipping.</li>
        </ul>
      </LSection>

      <LSection n="07" title="Subscription Auto-Ship Program">
        <p>TRT Boost subscription members benefit from our convenient auto-ship program, ensuring your medications arrive on time without manual reordering.</p>
        <ul>
          <li>Medications are automatically shipped according to your treatment schedule (typically every <strong>30, 60, or 90 days</strong>).</li>
          <li>You will receive a notification <strong>5 days before</strong> each auto-ship date, giving you time to update your address, skip a shipment, or adjust your order.</li>
          <li>You may pause or cancel auto-ship at any time through your account dashboard or by contacting support at least <strong>3 business days</strong> before your next ship date.</li>
          <li>If your prescription requires renewal or updated lab work before the next shipment, our care team will notify you in advance.</li>
        </ul>
      </LSection>

      <LSection n="08" title="Shipping Status Definitions">
        <table>
          <thead><tr><th>Status</th><th>What it means</th></tr></thead>
          <tbody>
            <tr><td>Processing</td><td>Your prescription has been received by the pharmacy and is being prepared.</td></tr>
            <tr><td>Compounding</td><td>Your medication is being custom-compounded. This may take 1–3 additional business days.</td></tr>
            <tr><td>Shipped</td><td>Your order has left the pharmacy and is in transit. Tracking information is available.</td></tr>
            <tr><td>In Transit</td><td>Your package is moving through the carrier network toward your delivery address.</td></tr>
            <tr><td>Out for Delivery</td><td>Your package is on the delivery vehicle and will arrive today.</td></tr>
            <tr><td>Delivered</td><td>Your package has been delivered to the address on file.</td></tr>
            <tr><td>Exception / Delay</td><td>A carrier issue has occurred (weather, address error, etc.). Contact support if this persists.</td></tr>
          </tbody>
        </table>
      </LSection>

      <LSection n="09" title="Address Changes">
        <p>Keeping your shipping address current is critical to ensuring uninterrupted delivery of your medications.</p>
        <ul>
          <li>You may update your shipping address at any time through your TRT Boost account settings.</li>
          <li>Address changes made <strong>after</strong> an order has shipped cannot be guaranteed — the carrier may not be able to redirect the package.</li>
          <li>If a package is returned to the pharmacy due to an incorrect or outdated address, a reshipping fee may apply.</li>
          <li>For subscription auto-ship orders, please update your address at least <strong>5 business days</strong> before your next scheduled shipment.</li>
        </ul>
      </LSection>

      <LSection n="10" title="Carrier Partners">
        <p>TRT Boost works with trusted, nationally recognized carriers to ensure safe and reliable delivery:</p>
        <ul>
          <li><strong>USPS</strong> — Standard and Priority Mail services</li>
          <li><strong>UPS</strong> — Ground, 2-Day, and Next Day Air services</li>
          <li><strong>FedEx</strong> — Express, Ground, and temperature-controlled services</li>
        </ul>
        <p>The carrier selected for your order depends on the shipping method chosen, medication type, and your location. TRT Boost reserves the right to select the most appropriate carrier for each shipment.</p>
      </LSection>

      <LSection n="11" title="Holiday & Peak Season Shipping">
        <p>During federal holidays and peak seasons, shipping and delivery may experience delays beyond standard estimates.</p>
        <ul>
          <li>TRT Boost recommends placing orders or adjusting auto-ship dates in advance of major holidays.</li>
          <li>Our pharmacy partners observe all federal holidays; orders placed during these periods will be processed on the next business day.</li>
          <li>We will communicate any anticipated shipping delays via email and in-app notifications.</li>
        </ul>
      </LSection>

      <LSection n="12" title="Contact Us">
        <p>If you have any questions about shipping, delivery, or your order status, please reach out to our support team:</p>
        <ul>
          <li><strong>Email:</strong> <a href={`mailto:${site.contact.supportEmail}`}>{site.contact.supportEmail}</a></li>
          <li><strong>Phone:</strong> {site.contact.phoneDisplay} ({site.contact.phoneDigits})</li>
          <li><strong>Live chat:</strong> Available on our website Monday–Friday, 8 AM – 8 PM EST</li>
          <li><strong>Online:</strong> Track your order and manage shipments through your TRT Boost account dashboard</li>
        </ul>
        <div className="callout">
          <strong>Important medication safety notice</strong>
          All medications shipped by TRT Boost are dispensed by licensed U.S.
          pharmacies in compliance with federal and state regulations. Upon
          receiving your shipment, please inspect the package for any signs of
          damage or tampering. If anything appears compromised, do not use the
          medication and contact us immediately. Always store medications as
          directed on the label.
        </div>
      </LSection>
    </LegalLayout>
  );
}
