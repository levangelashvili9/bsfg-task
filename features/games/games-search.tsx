import icons from "@/features/shared/config/icons.config";
import { Input } from "@/features/shared/components/ui/input";

export const GamesSearch = () => {
  return (
    <div className="relative">
      <Input placeholder="Search your game" className="pl-11" />
      <icons.IconLoop className="absolute left-[14px] top-1/2 -translate-y-1/2" />
    </div>
  );
};
