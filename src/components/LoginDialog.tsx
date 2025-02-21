
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { UserRound, Lock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const LoginDialog = () => {
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Login Successful",
      description: "Welcome back to TechMart!",
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" className="text-primary-foreground hover:bg-white/10 transition-colors animate-fade-in flex items-center gap-2">
          <UserRound className="h-5 w-5" />
          Login
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-gradient-to-br from-background to-muted">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Welcome to TechMart
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleLogin} className="space-y-6 mt-4">
          <div className="space-y-2">
            <div className="relative">
              <UserRound className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
              <Input
                type="email"
                placeholder="Email"
                className="pl-10 bg-white/5 border-muted-foreground/20"
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
              <Input
                type="password"
                placeholder="Password"
                className="pl-10 bg-white/5 border-muted-foreground/20"
                required
              />
            </div>
          </div>
          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded border-muted-foreground/20" />
              <span className="text-muted-foreground">Remember me</span>
            </label>
            <Button variant="link" className="text-primary p-0 h-auto">
              Forgot password?
            </Button>
          </div>
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
          >
            Sign In
          </Button>
          <p className="text-center text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Button variant="link" className="text-primary p-0">
              Sign up
            </Button>
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialog;
