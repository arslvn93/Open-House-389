const config = {
  "property": {
    "streetAddress": "608 - 65 Scadding Avenue",
    "city": "Toronto",
    "cityStateZip": "Toronto, ON M5A 4L1",
    "heroSubtitle": "3 bedroom + den condo in vibrant St. Lawrence Market area. Large space ideal for families & work-from-home. Walkable, TTC access, amenities, restaurants, gym, and St. Lawrence Market just steps away. Register to receive full info package: floor plans, virtual tour, market comparables.",
    "backgroundImageUrl": "https://cdn.repliers.io/IMG-C12161582_1.jpg"
  },
  "realtor": {
    "fullName": "Julian Kashani",
    "title": "REALTOR®",
    "phone": "(416) 837-7775",
    "email": "jk@property.ca",
    "bio": "Julian, a Ryerson University graduate, is a business development and marketing specialist with 17+ years of experience. Multilingual and well-traveled, Julian offers deep knowledge of Toronto real estate. His background brings experience, professionalism, and exceptional negotiation for his clients. For tailored service in buying, selling or leasing in Toronto, contact Julian.",
    "photoUrl": "https://shared-s3.property.ca/public/images/agents/242/242-normal-642327ddd1d3c1.35654602.jpg",
    "social": {
      "facebook": "https://www.facebook.com/JulianKashaniRealtor",
      "instagram": "http://instagram.com/juliankashani",
      "website": "https://property.ca/"
    }
  },
  "brokerage": {
    "name": "Property.Ca",
    "logoUrl": "https://images.squarespace-cdn.com/content/v1/5f80c7c14e8fef5fc1fb9a3d/1604066701131-HMSQC87ZI0P5A10TQREH/logo_black_bg.jpg",
    "address": "36 Distillery Lane Unit 500 Toronto M5A3C4"
  },
  "openHouse": {
    "eventDate": "2025-05-25",
    "bundleItems": [
      {
        "icon": "fas fa-ruler-combined",
        "text": "Floor Plan"
      },
      {
        "icon": "fas fa-star",
        "text": "Neighbourhood Guide"
      },
      {
        "icon": "fas fa-check-circle",
        "text": "On-Market Comparables"
      },
      {
        "icon": "fas fa-car",
        "text": "Listing"
      },
      {
        "icon": "fas fa-image",
        "text": "Virtual Tour"
      }
    ]
  },
  "meta": {
    "pageTitlePrefix": "🏡 Julian Kashani Open House",
    "navBrandLogoText": "OPEN HOUSE",
    "privacyPolicyLink": "https://property.ca/privacy"
  },
  "settings": {
    "adminWebhookUrl": "https://n8n.salesgenius.co/webhook/openhouseupdate",
    "visitorWebhookUrl": "https://n8n.salesgenius.co/webhook/openhouse",
    "confettiColors": [
      "#0059D1",
      "#B1D8F1",
      "#F2F2F2",
      "#EA4C89",
      "#FFD371"
    ]
  },
  "modalQuestions": [
    {
      "id": "agent_status",
      "questionText": "Are you currently exploring homes with a real estate agent?",
      "options": [
        {
          "value": "committed",
          "text": "Yes, I'm committed to an agent."
        },
        {
          "value": "not_committed",
          "text": "No, I'm not committed to an agent."
        },
        {
          "value": "gathering_info",
          "text": "Just gathering information at this stage."
        }
      ]
    },
    {
      "id": "interest_level",
      "questionText": "How interested are you in properties like this?",
      "options": [
        {
          "value": "very_interested",
          "text": "Very interested, actively looking."
        },
        {
          "value": "somewhat_interested",
          "text": "Somewhat interested, keeping options open."
        },
        {
          "value": "just_browsing",
          "text": "Just browsing for now."
        }
      ]
    },
    {
      "id": "neighborhood_engagement",
      "questionText": "How do you usually enjoy the neighborhood?",
      "options": [
        {
          "value": "resident_explorer",
          "text": "I live here and love exploring locally."
        },
        {
          "value": "considering_move",
          "text": "I'm considering moving to this area."
        },
        {
          "value": "just_visiting",
          "text": "Just visiting for the open house."
        }
      ]
    },
    {
      "id": "feature_attraction",
      "questionText": "What feature attracted you to this home?",
      "options": [
        {
          "value": "design_layout",
          "text": "The design and layout."
        },
        {
          "value": "location_neighborhood",
          "text": "The location and neighborhood."
        },
        {
          "value": "home_price",
          "text": "The price of the home."
        }
      ]
    }
  ],
  "deploymentInfo": {
    "repoName": "Open-House-389",
    "repoUrl": "https://github.com/arslvn93/Open-House-389",
    "tag": "Open House 608 - 65 Scadding Avenue",
    "netlifyUrl": "https://services.leadconnectorhq.com/hooks/bJbBMjcW619cJrLUJ3kY/webhook-trigger/KGAqETIiRpmkTHqxX1F8",
    "siteId": "22982583-6e7d-452d-a43d-e6b2017dd831"
  }
};