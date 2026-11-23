import React from 'react'
import Section1 from './components/Section1/Section1.jsx'

const App = () => {
  const users = [
    {
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=764&auto=format&fit=crop",
      intro: "Prime customer who regularly uses digital banking and investment tools.",
      tag: "Satisfied",
      color: "#3B82F6" // Royal Blue
    },
    {
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=687&auto=format&fit=crop",
      intro: "Freelancer relying primarily on cash transactions and peer-to-peer transfers.",
      tag: "Underground",
      color: "#8B5CF6" // Electric Violet
    },
    {
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop",
      intro: "Small business owner looking for accessible micro-loans and credit lines.",
      tag: "Underbanked",
      color: "#10B981" // Emerald Green
    },
    {
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=687&auto=format&fit=crop",
      intro: "Long-term user with high satisfaction across savings and mobile app features.",
      tag: "Satisfied",
      color: "#F59E0B" // Warm Amber
    },
    {
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=761&auto=format&fit=crop",
      intro: "Gig worker seeking flexible payment options without heavy account fees.",
      tag: "Underbanked",
      color: "#EC4899" // Vibrant Rose
    },
    {
      img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=687&auto=format&fit=crop",
      intro: "Operates an informal local trade business with minimal credit history.",
      tag: "Underground",
      color: "#06B6D4" // Bright Cyan
    },
    {
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=688&auto=format&fit=crop",
      intro: "Tech-savvy professional utilizing automated wealth management daily.",
      tag: "Satisfied",
      color: "#6366F1" // Indigo
    },
    {
      img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=687&auto=format&fit=crop",
      intro: "Independent contractor needing faster invoice settlements and credit access.",
      tag: "Underbanked",
      color: "#F97316" // Sunset Orange
    },
    {
      img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=764&auto=format&fit=crop",
      intro: "Prefers off-grid financial habits and avoids traditional credit institutions.",
      tag: "Underground",
      color: "#14B8A6" // Deep Teal
    },
    {
      img: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=880&auto=format&fit=crop",
      intro: "Active user benefiting from instant transfers and zero-fee checking.",
      tag: "Satisfied",
      color: "#E11D48" // Crimson Red
    }
  ];
  return (
    <div>
      <Section1 users={users} />
    </div>
  )
}

export default App
