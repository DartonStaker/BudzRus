"use client";

import { useState } from "react";

export default function Settings() {
  const [settings, setSettings] = useState({
    siteName: "Budz R Us",
    siteEmail: "info@budzrus.com",
    sitePhone: "+27 12 345 6789",
    currency: "ZAR",
    taxRate: "15",
    paymentGateway: "stripe",
    emailNotifications: true,
    smsNotifications: false,
  });

  const handleChange = (key: string, value: any) => {
    setSettings({ ...settings, [key]: value });
  };

  const handleSave = () => {
    // In production, this would save to Supabase
    alert("Settings saved! (Will be saved to Supabase when connected)");
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Settings</h1>
        <p className="text-gray-600 mt-2">Manage system settings and preferences</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
        <section>
          <h2 className="text-xl font-bold mb-4 text-gray-800 border-b-2 border-budz-green pb-2">
            General Settings
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-2 font-semibold">Site Name</label>
              <input
                type="text"
                value={settings.siteName}
                onChange={(e) => handleChange("siteName", e.target.value)}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-budz-blue"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2 font-semibold">Site Email</label>
              <input
                type="email"
                value={settings.siteEmail}
                onChange={(e) => handleChange("siteEmail", e.target.value)}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-budz-blue"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2 font-semibold">Site Phone</label>
              <input
                type="tel"
                value={settings.sitePhone}
                onChange={(e) => handleChange("sitePhone", e.target.value)}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-budz-blue"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2 font-semibold">Currency</label>
              <select
                value={settings.currency}
                onChange={(e) => handleChange("currency", e.target.value)}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-budz-blue"
              >
                <option value="ZAR">ZAR (South African Rand)</option>
                <option value="USD">USD (US Dollar)</option>
                <option value="EUR">EUR (Euro)</option>
              </select>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4 text-gray-800 border-b-2 border-budz-blue pb-2">
            Payment Settings
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-2 font-semibold">Payment Gateway</label>
              <select
                value={settings.paymentGateway}
                onChange={(e) => handleChange("paymentGateway", e.target.value)}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-budz-blue"
              >
                <option value="stripe">Stripe</option>
                <option value="paypal">PayPal</option>
                <option value="payfast">PayFast</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 mb-2 font-semibold">Tax Rate (%)</label>
              <input
                type="number"
                step="0.1"
                value={settings.taxRate}
                onChange={(e) => handleChange("taxRate", e.target.value)}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-budz-blue"
              />
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4 text-gray-800 border-b-2 border-budz-orange pb-2">
            Notification Settings
          </h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="emailNotifications"
                checked={settings.emailNotifications}
                onChange={(e) => handleChange("emailNotifications", e.target.checked)}
                className="w-4 h-4 text-budz-green border-gray-300 rounded focus:ring-budz-green"
              />
              <label htmlFor="emailNotifications" className="text-gray-700 font-semibold">
                Email Notifications
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="smsNotifications"
                checked={settings.smsNotifications}
                onChange={(e) => handleChange("smsNotifications", e.target.checked)}
                className="w-4 h-4 text-budz-green border-gray-300 rounded focus:ring-budz-green"
              />
              <label htmlFor="smsNotifications" className="text-gray-700 font-semibold">
                SMS Notifications
              </label>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4 text-gray-800 border-b-2 border-budz-yellow pb-2">
            Admin Users
          </h2>
          <p className="text-gray-600 mb-4">
            Admin user management will be available when Supabase authentication is connected.
          </p>
          <button className="px-6 py-2 bg-budz-blue text-white rounded-lg hover:bg-budz-orange transition font-semibold">
            Manage Admins (Coming Soon)
          </button>
        </section>

        <div className="pt-4 border-t">
          <button
            onClick={handleSave}
            className="px-8 py-3 bg-budz-green text-white rounded-lg hover:bg-budz-orange transition font-semibold"
          >
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
}

