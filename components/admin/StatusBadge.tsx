interface StatusBadgeProps {
  status: string;
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  const statusColors: Record<string, string> = {
    pending: "bg-budz-yellow text-budz-dark-blue",
    processing: "bg-budz-blue text-white",
    shipped: "bg-budz-green text-white",
    delivered: "bg-budz-green text-white",
    cancelled: "bg-budz-red text-white",
    active: "bg-budz-green text-white",
    inactive: "bg-gray-400 text-white",
    draft: "bg-gray-400 text-white",
    published: "bg-budz-green text-white",
    paid: "bg-budz-green text-white",
    unpaid: "bg-budz-red text-white",
  };

  const colorClass = statusColors[status.toLowerCase()] || "bg-gray-400 text-white";

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-semibold ${colorClass}`}
    >
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
}

