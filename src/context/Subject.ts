import { createContext } from "react";

export const SubjectContext = createContext<
  [string | null, (subject: string) => void]
>([null, () => {}]);

export default SubjectContext;
