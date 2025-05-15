
import React from "react";
import { Card } from "@/components/ui/card";
import { ThemeToggle } from "@/components/settings/ThemeToggle";

const Settings = () => {
  return (
    <div className="content-container py-8 flex flex-col gap-8 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold">Settings</h2>
      <Card className="p-6 flex flex-col gap-6">
        <section>
          <h3 className="text-xl font-semibold mb-2">Appearance</h3>
          {/* Theme toggle */}
          <ThemeToggle />
        </section>
        {/* You can add more sections here in the future */}
        {/* <section>
          <h3 className="text-xl font-semibold mb-2">Notifications</h3>
        </section> */}
      </Card>
    </div>
  );
};

export default Settings;
