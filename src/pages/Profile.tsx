
import React, { useEffect, useState, useRef } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const AVATAR_BUCKET = "avatars";

const Profile = () => {
  const { user, loading } = useAuth();
  const [profile, setProfile] = useState<{
    full_name: string;
    username: string;
    avatar_url: string | null;
  }>({ full_name: "", username: "", avatar_url: null });
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    async function loadProfile() {
      if (!user) return;
      const { data, error } = await supabase
        .from("profiles")
        .select("full_name, username, avatar_url")
        .eq("id", user.id)
        .maybeSingle();
      if (error) {
        toast({
          title: "Failed to load profile",
          description: error.message,
          variant: "destructive",
        });
      } else if (data) {
        setProfile({
          full_name: data.full_name || "",
          username: data.username || "",
          avatar_url: data.avatar_url,
        });
      }
    }
    loadProfile();
  }, [user]);

  if (loading) {
    return <div className="flex items-center justify-center min-h-[60vh]">Loading...</div>;
  }

  if (!user) {
    navigate("/auth");
    return null;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setAvatarFile(e.target.files[0]);
    }
  };

  const handleAvatarUpload = async (): Promise<string | null> => {
    if (!avatarFile || !user) return profile.avatar_url;
    setUploading(true);
    const filename = `${user.id}_${Date.now()}_${avatarFile.name}`;
    const { error } = await supabase.storage.from(AVATAR_BUCKET).upload(filename, avatarFile, {
      upsert: true,
    });
    setUploading(false);
    if (error) {
      toast({
        title: "Avatar upload failed",
        description: error.message,
        variant: "destructive",
      });
      return null;
    }
    const { data } = supabase.storage.from(AVATAR_BUCKET).getPublicUrl(filename);
    return data.publicUrl;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    let newAvatarUrl = profile.avatar_url;
    if (avatarFile) {
      const publicUrl = await handleAvatarUpload();
      if (publicUrl) {
        newAvatarUrl = publicUrl;
      }
    }
    const { error } = await supabase
      .from("profiles")
      .update({
        full_name: profile.full_name,
        username: profile.username,
        avatar_url: newAvatarUrl,
        updated_at: new Date().toISOString(),
      })
      .eq("id", user.id);
    setSaving(false);
    if (error) {
      toast({
        title: "Update failed",
        description: error.message,
        variant: "destructive",
      });
    } else {
      setProfile({ ...profile, avatar_url: newAvatarUrl });
      setAvatarFile(null);
      toast({
        title: "Profile updated",
        description: "Your profile was updated successfully.",
      });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[75vh]">
      <Card className="w-full max-w-md p-4">
        <CardHeader>
          <CardTitle>Edit Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col items-center gap-4">
              <img
                src={avatarFile ? URL.createObjectURL(avatarFile) : profile.avatar_url || `https://ui-avatars.com/api/?name=${encodeURIComponent(profile.full_name||"User")}&size=128`}
                alt="Avatar"
                className="w-24 h-24 rounded-full border object-cover"
              />
              <Button
                variant="outline"
                type="button"
                className="text-xs"
                onClick={() => fileInputRef.current?.click()}
                disabled={uploading}
              >
                {avatarFile ? "Change Avatar" : "Upload Avatar"}
              </Button>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                ref={fileInputRef}
                onChange={handleAvatarChange}
                disabled={uploading}
              />
            </div>
            <div>
              <Label htmlFor="full_name">Full Name</Label>
              <Input
                id="full_name"
                name="full_name"
                value={profile.full_name}
                onChange={handleChange}
                placeholder="Full Name"
                required
              />
            </div>
            <div>
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                name="username"
                value={profile.username}
                onChange={handleChange}
                placeholder="Username"
                required
              />
            </div>
            <Button type="submit" className="w-full" disabled={saving}>
              {saving ? "Saving..." : "Save Changes"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;
