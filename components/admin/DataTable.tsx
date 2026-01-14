"use client";

import { useState } from "react";

interface Column<T> {
  key: keyof T | string;
  header: string;
  render?: (item: T) => React.ReactNode;
}

interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  onEdit?: (item: T) => void;
  onDelete?: (item: T) => void;
  searchable?: boolean;
  searchPlaceholder?: string;
}

export default function DataTable<T extends { id: number | string }>({
  data,
  columns,
  onEdit,
  onDelete,
  searchable = true,
  searchPlaceholder = "Search...",
}: DataTableProps<T>) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = searchable
    ? data.filter((item) =>
        columns.some((col) => {
          const value = typeof col.key === "string" 
            ? (item as any)[col.key] 
            : item[col.key as keyof T];
          return String(value).toLowerCase().includes(searchTerm.toLowerCase());
        })
      )
    : data;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {searchable && (
        <div className="p-4 border-b">
          <input
            type="text"
            placeholder={searchPlaceholder}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-budz-blue"
          />
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-budz-dark-blue text-white">
            <tr>
              {columns.map((col, index) => (
                <th key={index} className="px-6 py-3 text-left text-sm font-semibold">
                  {col.header}
                </th>
              ))}
              {(onEdit || onDelete) && (
                <th className="px-6 py-3 text-left text-sm font-semibold">Actions</th>
              )}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredData.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length + (onEdit || onDelete ? 1 : 0)}
                  className="px-6 py-8 text-center text-gray-500"
                >
                  No data available
                </td>
              </tr>
            ) : (
              filteredData.map((item) => (
                <tr key={String(item.id)} className="hover:bg-gray-50">
                  {columns.map((col, colIndex) => (
                    <td key={colIndex} className="px-6 py-4 text-sm">
                      {col.render
                        ? col.render(item)
                        : typeof col.key === "string"
                        ? (item as any)[col.key]
                        : String(item[col.key as keyof T])}
                    </td>
                  ))}
                  {(onEdit || onDelete) && (
                    <td className="px-6 py-4 text-sm">
                      <div className="flex space-x-2">
                        {onEdit && (
                          <button
                            onClick={() => onEdit(item)}
                            className="text-budz-blue hover:text-budz-orange transition font-semibold"
                          >
                            Edit
                          </button>
                        )}
                        {onDelete && (
                          <button
                            onClick={() => onDelete(item)}
                            className="text-budz-red hover:text-red-600 transition font-semibold"
                          >
                            Delete
                          </button>
                        )}
                      </div>
                    </td>
                  )}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

