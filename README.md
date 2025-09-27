Landing Page Generator

This project is a dynamic landing page website where each idea can have its own customizable landing page.

Adding a New Landing Page

To add a landing page for your idea:

Create a JSON file in the project folder (e.g., test.json) with the name of your idea.

Structure your JSON file like this:

{
  "heroImage": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80", // Image displayed at the top
  "title": "Turn Any Song Into Piano Sheet Music Instantly", // Catchy title
  "problem": "Finding accurate piano sheet music for your favorite songs is time-consuming and often impossible.", // Problem you solve
  "solution": "Our tool analyzes your song and automatically generates ready-to-play piano sheet music.", // Your solution
  "cta": "Get Early Access", // Call-to-action button text
  "ctaLink": "https://formspree.io/f/xjkagawj", // Link for the CTA button
  "company_name": "Musica", // Your company name
  "colors": { // Customize your landing page colors
    "background": "#2c2c2c",
    "heroOverlay": "rgba(0,0,0,0.4)",
    "textPrimary": "#f5f5f5",
    "textSecondary": "#d5d5d5",
    "button": "#ff8c42",
    "buttonHover": "#e67630",
    "footer": "#1f1f1f"
  }
}

Viewing Your Landing Page

Once your JSON file is ready:

Open your browser and go to:

http://localhost:3000/<your-json-filename>


Example: http://localhost:3000/test

Enjoy!

Create as many landing pages as you like by adding new JSON files. Each one will automatically appear at its corresponding URL.