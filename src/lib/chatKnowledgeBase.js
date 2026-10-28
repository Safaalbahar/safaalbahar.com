
export const dailyQuotes = [
  "Quality is not an act, it is a habit. - Aristotle",
  "The secret of success in business is to know something nobody else knows. - Aristotle Onassis",
  "Good food is the foundation of genuine happiness. - Auguste Escoffier",
  "Success is doing ordinary things extraordinarily well. - Jim Rohn",
  "Quality means doing it right when no one is looking. - Henry Ford",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Customer service is not a department, it's everyone's job. - Anonymous",
  "A recipe has no soul. You, as the cook, must bring soul to the recipe. - Thomas Keller",
  "We are what we repeatedly do. Excellence, then, is not an act, but a habit. - Will Durant",
  "Your most unhappy customers are your greatest source of learning. - Bill Gates"
];

export const knowledgeBase = {
  about: {
    keywords: ["about", "who are you", "safa al bahar", "company", "history", "what do you do"],
    response: "Safa Al Bahar is a leading frozen food supplier and direct importer in Saudi Arabia. We specialize in providing comprehensive B2B and B2C frozen food solutions, including meat, poultry, seafood, and vegetables.",
    options: ["Products & Services", "Delivery Areas"]
  },
  products: {
    keywords: ["products", "what do you sell", "meat", "chicken", "seafood", "vegetables", "fries", "frozen", "menu", "catalog"],
    response: "We offer a wide range of premium frozen foods including:\n• Chilled & Frozen Meat/Poultry\n• Frozen Seafood (Fish, Shrimp, Squid)\n• Dry Goods (French Fries, Mixed Vegetables)\nAll sourced from trusted global suppliers.",
    options: ["Request a Quote", "Delivery Info"]
  },
  delivery: {
    keywords: ["delivery", "logistics", "where do you deliver", "cities", "areas", "shipping", "transport", "cold chain"],
    response: "We deliver across Saudi Arabia using our verified cold chain logistics. We cover major cities including Jeddah, Riyadh, Dammam, Mecca, and Medina, ensuring products arrive perfectly frozen.",
    options: ["Order Process", "Contact Sales"]
  },
  ordering: {
    keywords: ["order", "how to buy", "purchase", "wholesale", "bulk", "minimum order", "horeca", "contract"],
    response: "You can order through our wholesale/B2B channels or B2C services. We offer customized monthly supply contracts for HORECA and retail clients. Please contact our sales team to set up an account.",
    options: ["Contact Support", "Products List"]
  },
  contact: {
    keywords: ["contact", "phone", "email", "support", "help", "whatsapp", "location", "address", "where are you"],
    response: "You can reach us via:\n📞 Phone/WhatsApp: +966 55 997 7206\n✉️ Email: sales@safaalbahar.com\n📍 Location: Al Sarwath - Al Kumra, Jeddah 22524, Saudi Arabia",
    options: ["Chat on WhatsApp", "About Us"]
  },
  greeting: {
    keywords: ["hi", "hello", "hey", "good morning", "good afternoon", "greetings"],
    response: "Hello! Welcome to Safa Al Bahar. How can I assist you today with our frozen food solutions?",
    options: ["View Products", "Delivery Info", "Contact Sales"]
  }
};

export const getResponse = (input) => {
  const lowerInput = input.toLowerCase();
  
  for (const category in knowledgeBase) {
    const data = knowledgeBase[category];
    if (data.keywords.some(keyword => lowerInput.includes(keyword))) {
      return {
        text: data.response,
        options: data.options
      };
    }
  }

  return {
    text: "I'm not quite sure about that. Would you like to speak with our sales team for detailed information?",
    options: ["Contact Sales", "View Products", "About Safa Al Bahar"]
  };
};

export const getDailyQuote = () => {
  const dayOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
  return dailyQuotes[dayOfYear % dailyQuotes.length];
};
