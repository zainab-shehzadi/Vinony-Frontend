import { Image, MessageSquare, Users, Video } from "lucide-react";
import { PATH } from "./paths";


export const menuItems = [
  {
    title: "Chat",
    icon: <MessageSquare className="w-5 h-5" />,
    path: PATH.CHAT,
    type: "chat",
    subItems: [
      { id: "new-project", label: "New Project", view: "new-project" },
    ],
  },
  {
    title: "Images",
    icon: <Image className="w-5 h-5" />,
    path: PATH.IMAGE,
    subItems: [
      { id: "image-creations", label: "My Creations", view: "image-history" },
    ],
  },
  {
    title: "Videos",
    icon: <Video className="w-5 h-5" />,
    subItems: [
      { id: "video-creations", label: "My Creations", view: "video-history" },
    ],
  },
  {
    title: "Agents",
    icon: <Users className="w-5 h-5" />,
    subItems: [
      { id: "my-history", label: "My History", view: "my-history" },
    ],
  },
];
