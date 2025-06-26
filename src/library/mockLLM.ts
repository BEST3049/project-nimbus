type LLMResponse = {
  component: string;
  props: Record<string, any>;
};

export async function mockLLM(prompt: string): Promise<LLMResponse> {
  const lower = prompt.toLowerCase();

  // === WEATHER ===
  if (lower.includes("weather")) {
    if (lower.includes("delhi")) {
      return {
        component: "WeatherCard",
        props: {
          location: "Delhi",
          date: "23 Jun 2025",
          temperature: 39,
          units: "°C",
        },
      };
    } else if (lower.includes("mumbai")) {
      return {
        component: "WeatherCard",
        props: {
          location: "Mumbai",
          date: "23 Jun 2025",
          temperature: 32,
          units: "°C",
        },
      };
    } else if (lower.includes("bangalore") || lower.includes("bengaluru")) {
      return {
        component: "WeatherCard",
        props: {
          location: "Bangalore",
          date: "23 Jun 2025",
          temperature: 28,
          units: "°C",
        },
      };
    } else if (lower.includes("chennai")) {
      return {
        component: "WeatherCard",
        props: {
          location: "Chennai",
          date: "23 Jun 2025",
          temperature: 35,
          units: "°C",
        },
      };
    } else {
      return {
        component: "ErrorCard",
        props: {
          title: "Location Not Recognized",
          message: "Try asking for weather in Delhi, Mumbai, Bangalore, or Chennai.",
        },
      };
    }
  }

  // === STOCK ===
  if (lower.includes("stock") || lower.includes("price")) {
    if (lower.includes("apple")) {
      return {
        component: "StockCard",
        props: {
          name: "Apple Inc.",
          ticker: "AAPL",
          price: 189.23,
          change: "+1.2%",
        },
      };
    } else if (lower.includes("google")) {
      return {
        component: "StockCard",
        props: {
          name: "Alphabet Inc.",
          ticker: "GOOGL",
          price: 2821.12,
          change: "-0.6%",
        },
      };
    } else if (lower.includes("tesla")) {
      return {
        component: "StockCard",
        props: {
          name: "Tesla Inc.",
          ticker: "TSLA",
          price: 739.85,
          change: "+2.1%",
        },
      };
    } else if (lower.includes("infosys")) {
      return {
        component: "StockCard",
        props: {
          name: "Infosys Ltd.",
          ticker: "INFY",
          price: 1543.65,
          change: "-0.3%",
        },
      };
    } else {
      return {
        component: "ErrorCard",
        props: {
          title: "Stock Not Found",
          message: "Try asking about Apple, Google, Tesla, or Infosys.",
        },
      };
    }
  }

  // === JOKES ===
  if (lower.includes("joke")) {
    return {
      component: "JokeCard",
      props: {
        setup: "Why do JavaScript developers wear glasses?",
        punchline: "Because they don't C#!",
      },
    };
  }

  // === QUOTES ===
  if (lower.includes("quote") || lower.includes("motivation")) {
    return {
      component: "QuoteCard",
      props: {
        text: "The best way to predict the future is to invent it.",
        author: "Alan Kay",
      },
    };
  }

  // === Unknown Prompt ===
  return {
    component: "ErrorCard",
    props: {
      title: "Sorry 😬",
      message: "I didn’t understand that prompt. Try asking about the weather, stock prices, a joke, or a quote.",
    },
  };
}
