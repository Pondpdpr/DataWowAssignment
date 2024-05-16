import History from "@/components/History";
import useRequireAuth from "@/lib/useRuquireAuth";

export default function UserHistoryPage() {
  useRequireAuth();
  return <History />;
}
