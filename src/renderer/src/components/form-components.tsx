import { useOnlineStatus } from "@renderer/module/hook/use-online-status";
import React from "react";
import { Button } from "./ui";

export const FormComponent = () => {
  const isOnline = useOnlineStatus();
  const [formData, setFormData] = React.useState({ name: "", email: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isOnline && window.electronAPI?.saveFormData) {
      const result = await window.electronAPI.saveFormData(formData);
      console.log(result); // ✅ Success/failure log
    } else {
      // send to server
    }
  };

  return (
    <>
      <p className="text-black text-sm">{isOnline}</p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col max-w-lg w-full rounded-md drop-shadow-2xl gap-4"
      >
        <input
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="Name"
        />
        <input
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="Email"
        />
        <Button type="submit">Submit</Button>
      </form>
    </>
  );
};
