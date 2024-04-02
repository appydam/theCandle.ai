import { Button } from "@/components/ui/button";
import { UserButton, auth } from "@clerk/nextjs";
import Link from "next/link";
import { ArrowRight, ChevronDownSquare, LogIn } from "lucide-react";
import FileUpload from "@/components/FileUpload";
import { checkSubscription } from "@/lib/subscription";
import SubscriptionButton from "@/components/SubscriptionButton";
import { chats } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { db } from "@/lib/db";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import MainComponent from "@/components/MainComponent";

// async makes sure that its a server component
export default async function Home() {
  const { userId } = await auth();
  const isAuth = !!userId;
  const isPro = await checkSubscription();
  const chatPageImageURL =
    "https://talking-with-pdf.s3.ap-south-1.amazonaws.com/assets/chatPage.png";
  const socialLogins =
    "https://talking-with-pdf.s3.ap-south-1.amazonaws.com/assets/signIns.png";

  let firstChat;
  if (userId) {
    firstChat = await db.select().from(chats).where(eq(chats.userId, userId));
    if (firstChat) {
      firstChat = firstChat[0];
    }
  }

  return (
    <>
      <div className="w-screen min-h-screen ">
        <Navbar />
        <MainComponent/>
        <Footer />
      </div>
    </>
  );
}
