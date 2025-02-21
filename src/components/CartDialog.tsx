
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { ShoppingCart, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const CartDialog = () => {
  const { toast } = useToast();

  const handleCheckout = () => {
    toast({
      title: "Proceeding to checkout",
      description: "Redirecting to payment page...",
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" className="text-primary-foreground flex items-center hover:bg-white/10 transition-colors animate-fade-in">
          <ShoppingCart className="h-5 w-5 mr-2" />
          Cart
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] bg-gradient-to-br from-background to-muted">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Your Shopping Cart
          </DialogTitle>
        </DialogHeader>
        <div className="mt-4 space-y-4">
          <div className="space-y-4">
            {/* Example cart item */}
            <div className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-muted-foreground/20">
              <div className="flex items-center space-x-4">
                <img
                  src="/placeholder.svg"
                  alt="Product"
                  className="h-16 w-16 rounded object-cover"
                />
                <div>
                  <h4 className="font-semibold">Sample Product</h4>
                  <p className="text-sm text-muted-foreground">Quantity: 1</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <p className="font-bold">₹29,999</p>
                <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive/80">
                  <Trash2 className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-muted-foreground/20 pt-4">
            <div className="flex justify-between text-lg font-semibold">
              <span>Total</span>
              <span>₹29,999</span>
            </div>
            <Button
              onClick={handleCheckout}
              className="w-full mt-4 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
            >
              Proceed to Checkout
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CartDialog;
