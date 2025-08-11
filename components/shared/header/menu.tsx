import { EllipsisVertical, ShoppingCart, UserIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet, SheetContent, SheetTrigger,
  SheetHeader, SheetTitle, SheetDescription
} from "@/components/ui/sheet";
import ModeToggle from "./mode-toggle";

const Menu = () => {
  return (
    <div className="flex justify-end gap-3">
      {/* Desktop */}
      <nav className="md:flex hidden w-full max-w-xs gap-1">
        <ModeToggle />
        <Button asChild variant="ghost" className="gap-2">
          <Link href="/cart">
            <ShoppingCart className="size-4" />
            Cart
          </Link>
        </Button>
        <Button asChild className="gap-2">
          <Link href="/sign-in">
            <UserIcon className="size-4" />
            Sign In
          </Link>
        </Button>
      </nav>

      {/* Mobile */}
      <nav className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" aria-label="Open menu">
              <EllipsisVertical className="size-5" />
            </Button>
          </SheetTrigger>

          <SheetContent className="p-4">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription />
            </SheetHeader>

            <div className="mt-4 space-y-2">
              <ModeToggle />

              <Button asChild variant="ghost" className="w-full justify-start gap-2">
                <Link href="/cart">
                  <ShoppingCart className="size-4" />
                  Cart
                </Link>
              </Button>

              <Button asChild className="justify-start gap-2">
                <Link href="/sign-in">
                  <UserIcon className="size-4" />
                  Sign In
                </Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};

export default Menu;
