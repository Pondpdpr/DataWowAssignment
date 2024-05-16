import History from "@/components/History";
import useRequireAuth from "@/lib/useRuquireAuth";

export default function AdminHistoryPage() {
  useRequireAuth("admin");
  return <History isAdmin={true} />;
}
