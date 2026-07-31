"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simuler un appel API
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setSubscribed(true);
    setEmail("");
    setLoading(false);
  };

  if (subscribed) {
    return (
      <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg max-w-md mx-auto">
        Merci pour votre inscription ! Vous recevrez bientôt nos actualités.
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubscribe}
      className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto"
    >
      <input
        type="email"
        placeholder="Votre email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-assion-rose focus:border-transparent"
      />
      <button
        type="submit"
        disabled={loading}
        className="px-8 py-3 bg-gradient-to-r from-assion-rose to-assion-rose-dark text-white rounded-lg font-semibold hover:shadow-2xl transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Inscription..." : "S'abonner"}
      </button>
    </form>
  );
}
