import emailjs from "@emailjs/browser";

// EmailJS configuration - add these to your .env.local file
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

export interface EnquiryFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  productCategory?: string;
  specificProduct?: string;
  message: string;
  source: "header" | "contact" | "product";
}

export const initEmailJS = () => {
  emailjs.init(EMAILJS_PUBLIC_KEY);
};

export const sendEnquiryEmail = async (data: EnquiryFormData) => {
  try {
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      throw new Error(
        "EmailJS configuration is incomplete. Please check your environment variables."
      );
    }

    const templateParams = {
      user_name: data.name,
      user_email: data.email,
      user_phone: data.phone || "Not provided",
      user_company: data.company || "Not provided",
      product_category: data.productCategory || "Not specified",
      specific_product: data.specificProduct || "Not specified",
      message: data.message,
      source: data.source,
      to_email: "info@trayancorp.com",
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );

    return response;
  } catch (error) {
    console.error("Failed to send email:", error);
    throw error;
  }
};
