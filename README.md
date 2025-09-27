At this project I made a website which contain several landing page one for each idea i have
To add a landing page to ur idea u have to make a json file (lets say for the example test.json) with the name of the idea which conitain the next:
{
  "heroImage": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80",<- the picture on the start
  "title": "Turn Any Song Into Piano Sheet Music Instantly",<-catchy title
  "problem": "Finding accurate piano sheet music for your favorite songs is time-consuming and often impossible.",<- the problem u solve
  "solution": "Our tool analyzes your song and automatically generates ready-to-play piano sheet music.", <- what the solution
  "cta": "Get Early Access", <- the cta button text
  "ctaLink": "https://formspree.io/f/xjkagawj", <- link to formspree.io
  "company_name": "Musica", <- ur comany name
  "colors": { <- colors for modify
    "background": "#2c2c2c",
    "heroOverlay": "rgba(0,0,0,0.4)",
    "textPrimary": "#f5f5f5",
    "textSecondary": "#d5d5d5",
    "button": "#ff8c42",
    "buttonHover": "#e67630",
    "footer": "#1f1f1f"
  }
}

after u make this u can watch ur landing page at http://localhost:3000/test (because this is the name of the json)

ENJOY!