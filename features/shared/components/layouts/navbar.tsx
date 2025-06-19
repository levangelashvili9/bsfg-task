import { NavbarBalance } from "@/features/shared/components/layouts/navbar-balance";
import { NavbarNotifications } from "@/features/shared/components/layouts/navbar-notifications";
import { NavbarProfile } from "@/features/shared/components/layouts/navbar-profile";

export const Navbar = () => {
  return (
    <header className="fixed left-0 top-0 z-20 flex h-[60px] w-full justify-center bg-[#152535] px-[10px]">
      <div className="root-container flex h-full w-full items-center justify-between">
        <div className="h-8 w-[60px] rounded-[5px] bg-[#253241] 768:h-10 768:w-[75px]" />

        <div className="flex gap-5 768:gap-[5px]">
          <NavbarBalance />

          <div className="flex gap-[5px]">
            <NavbarNotifications />
            <NavbarProfile />
          </div>
        </div>
      </div>
    </header>
  );
};
