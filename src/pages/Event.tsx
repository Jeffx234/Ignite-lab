import { useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Event() {
  const { slug } = useParams<{slug: string}>();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  function toggleSidebar() {
    setIsSidebarOpen(!isSidebarOpen);
  }
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header 
        onClick={toggleSidebar}
      />
      <main className="flex flex-1">
        { slug 
          ? <Video lessonSlug={slug} />
          : <div className="flex-1" />
        }
        {
          isSidebarOpen
          ? <Sidebar />
          : <div className="w-0" />
        }
      </main>
    </div>
  );
}