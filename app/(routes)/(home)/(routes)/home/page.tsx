'use client'
import Navbar from "@/components/navbar";
import { Chat } from "./chat";
import { Collection } from "./collection";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


export default function Home() {
  return (
    <main className="w-[100vw] h-[100vh] bg-blue-900">
      <Navbar />
    <Tabs defaultValue="account" className="w-[100vw] h-[90.5vh] bg-blue-900 pt-10 pl-10">
  <TabsList>
    <TabsTrigger value="Flashcards">Generate Flash Cards</TabsTrigger>
    <TabsTrigger value="Collection">My Collection</TabsTrigger>
  </TabsList>
  <TabsContent value="Flashcards"><Chat /></TabsContent>
  <TabsContent value="Collection"><Collection /></TabsContent>
</Tabs>

    </main>
  )
}