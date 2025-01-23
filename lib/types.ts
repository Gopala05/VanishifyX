import { LucideProps } from "lucide-react";

export type UserType = {
  user: {
    id: string;
    email: string | null;
    given_name: string | null;
    family_name: string | null;
    picture: string | null;
  } | null;
};

export type TeamType = {
  _id: string;
  createdBy: string;
  teamName: string;
};

export type FileType = {
  archive: boolean;
  createdBy: string;
  document: string;
  fileName: string;
  teamId: string;
  whiteboard: string;
  _id: string;
  _creationTime: number;
};

export type TopMenuType = {
  name: string;
  path: string;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
};

export type TopSideBarType = {
  user: {
    id: string;
    email: string | null;
    given_name: string | null;
    family_name: string | null;
    picture: string | null;
  } | null;
  filesUsed: number;
  setActiveTeamInfo: (teamInfo: TeamType) => void;
};

export type BottomSideBarType = {
  filesUsed: number;
  onCreate: (fileName: string) => void;
};
