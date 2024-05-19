import Card from "@/components/Card";
import MessageIcon from "@/components/icons/MessageIcon";
import PromotionIcon from "@/components/icons/PromotionIcon";
import SocialIcon from "@/components/icons/SocialIcon";
import TelegramIcon from "@/components/icons/TelegramIcon";
import DesktopSidebar from "@/components/sidebars/desktopSidebar";
import Image from "next/image";

export default function DashboardHome() {
  return <div className="max-h-full flex flex-wrap gap-5 lg:justify-start justify-center">
    
  
    <Card 
      heading="Import & Invite Clients"  
      active="Active" 
      description="Invite your Clients to book online 24/7" 
      invite="10 invitations are send by " 
      inviteName="Dafe Smith" 
      icon={MessageIcon}/>

    <Card 
      heading="Social Post Creator"  
      active="Active" 
      description="Show off your business on
      Social Media" 
      invite="6 posts are created by " 
      inviteName="Dafe Smith" 
      icon={SocialIcon}/>

<Card 
      heading="Message Blasts"  
      active="Active" 
      description="Stay top of mind for your
      Clients" 
      invite="8 messages are send by" 
      inviteName="Dafe Smith" 
      icon={TelegramIcon}/>

<Card 
      heading="Promotions"  
      active="Active" 
      description="Use Promotional tools to
      engage your clients" 
      invite="3 tools are used by" 
      inviteName="Dafe Smith" 
      icon={PromotionIcon}/>
  
  </div>;
}
