import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppContact = () => {
  const handleWhatsAppClick = () => {
    // Replace with actual WhatsApp number
    const phoneNumber = "1234567890";
    const message = encodeURIComponent("Hello! I'm interested in learning more about your rugs.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      size="lg"
      className="fixed bottom-6 left-6 rounded-full w-14 h-14 p-0 shadow-lg hover-lift bg-green-500 hover:bg-green-600 text-white z-50"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </Button>
  );
};

export default WhatsAppContact;