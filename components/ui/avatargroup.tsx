import Image from "next/image"
import { StarRating } from "./star-rating";

export default function AvatarGroup() {
  const people = [
    {
      id: 1,
      alt: "John Doe",
      designation: "Software Engineer",
      src:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    },
    {
      id: 2,
      alt: "Robert Johnson",
      designation: "Product Manager",
      src:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 3,
      alt: "Jane Smith",
      designation: "Data Scientist",
      src:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 4,
      alt: "Emily Davis",
      designation: "UX Designer",
      src:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 5,
      alt: "Tyler Durden",
      designation: "Soap Developer",
      src:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    },
    {
      id: 6,
      alt: "Dora",
      designation: "The Explorer",
      src:
        "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
    },
  ];

  return (
    <div className="flex flex-col sm:flex-row mb-2 lg:justify-start justify-center items-center">
      <div className="flex flex-row items-center mb-4 sm:mb-0">
        {people.map((avatar, index) => (
          <div key={index} className="-mr-4 relative group">
            <div className="animation-container">
              <div className="rounded-2xl overflow-hidden border-2 border-neutral-200 relative" 
                >
                <Image 
                  src={avatar.src}
                  alt={avatar.alt}
                  width={100}
                  height={100}
                  className="object-cover object-top h-14 w-14"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <StarRating />
    </div>
  );
}