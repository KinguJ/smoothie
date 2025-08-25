import Link from 'next/link';
import { auth } from '@/auth';
import { signOutUser } from '@/lib/actions/user.actions';
import { Button } from '@/components/ui/button';
import { UserIcon } from 'lucide-react';

const UserButtonMenu = async () => {
  const session = await auth();

  if (!session) {
    return (
      <Button asChild>
        <Link href='/sign-in'>
          <UserIcon /> Sign In
        </Link>
      </Button>
    );
  }
  return (
  <div className="flex flex-col gap-2 w-56 bg-card rounded-md p-2">
  <Button
    variant="ghost"
    asChild
    className="w-full justify-start font-normal 
               text-muted-foreground 
               hover:bg-accent hover:text-accent-foreground transition-colors"
  >
    <Link href="/user/profile">User Profile</Link>
  </Button>

  {session?.user?.role === "admin" && (
    <Button
      variant="ghost"
      asChild
      className="w-full justify-start font-normal 
                 text-muted-foreground 
                 hover:bg-accent hover:text-accent-foreground transition-colors"
    >
      <Link href="/admin/products">Admin</Link>
    </Button>
  )}

  <form action={signOutUser} className="w-full">
    <Button
      variant="ghost"
      className="w-full justify-start font-normal cursor-pointer
                 text-muted-foreground 
                 hover:bg-accent hover:text-accent-foreground transition-colors"
    >
      Sign Out
    </Button>
  </form>
</div>
  );
};

export default UserButtonMenu;