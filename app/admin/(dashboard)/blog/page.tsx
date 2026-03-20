"use client";

import { useState } from "react";
import DataTable from "@/components/admin/DataTable";
import StatusBadge from "@/components/admin/StatusBadge";
import Modal from "@/components/admin/Modal";
import { mockBlogPosts, type BlogPost } from "@/lib/mockData";
import { Plus } from "lucide-react";

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>(mockBlogPosts);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    author: "Admin",
    status: "draft" as "draft" | "published",
  });

  const columns = [
    { key: "id", header: "ID" },
    { key: "title", header: "Title" },
    { key: "author", header: "Author" },
    {
      key: "status",
      header: "Status",
      render: (post: BlogPost) => <StatusBadge status={post.status} />,
    },
    { key: "published_at", header: "Published" },
    { key: "created_at", header: "Created" },
  ];

  const handleAdd = () => {
    setEditingPost(null);
    setFormData({
      title: "",
      content: "",
      author: "Admin",
      status: "draft",
    });
    setIsModalOpen(true);
  };

  const handleEdit = (post: BlogPost) => {
    setEditingPost(post);
    setFormData({
      title: post.title,
      content: post.content,
      author: post.author,
      status: post.status,
    });
    setIsModalOpen(true);
  };

  const handleDelete = (post: BlogPost) => {
    if (confirm(`Are you sure you want to delete "${post.title}"?`)) {
      setPosts(posts.filter((p) => p.id !== post.id));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingPost) {
      setPosts(
        posts.map((p) =>
          p.id === editingPost.id
            ? {
                ...p,
                ...formData,
                published_at:
                  formData.status === "published" && !p.published_at
                    ? new Date().toISOString().split("T")[0]
                    : p.published_at,
              }
            : p
        )
      );
    } else {
      const newPost: BlogPost = {
        id: Math.max(...posts.map((p) => p.id)) + 1,
        ...formData,
        published_at:
          formData.status === "published"
            ? new Date().toISOString().split("T")[0]
            : undefined,
        created_at: new Date().toISOString().split("T")[0],
      };
      setPosts([...posts, newPost]);
    }
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Blog</h1>
          <p className="text-gray-600 mt-2">Manage blog posts</p>
        </div>
        <button
          onClick={handleAdd}
          className="bg-budz-green text-white px-6 py-3 rounded-lg hover:bg-budz-orange transition font-semibold flex items-center space-x-2"
        >
          <Plus className="h-5 w-5" />
          <span>New Post</span>
        </button>
      </div>

      <DataTable
        data={posts}
        columns={columns}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingPost ? "Edit Blog Post" : "New Blog Post"}
        size="xl"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2 font-semibold">Title</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-budz-blue"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2 font-semibold">Content</label>
            <textarea
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-budz-blue"
              rows={10}
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-2 font-semibold">Author</label>
              <input
                type="text"
                value={formData.author}
                onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-budz-blue"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2 font-semibold">Status</label>
              <select
                value={formData.status}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    status: e.target.value as "draft" | "published",
                  })
                }
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-budz-blue"
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-2 font-semibold">Featured Image URL</label>
            <input
              type="url"
              placeholder="https://example.com/image.jpg"
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-budz-blue"
            />
            <p className="text-sm text-gray-500 mt-1">
              Image upload will be available when Supabase is connected
            </p>
          </div>

          <div className="flex justify-end space-x-4 pt-4">
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="px-6 py-2 border-2 border-gray-300 rounded-lg hover:bg-gray-100 transition font-semibold"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-budz-green text-white rounded-lg hover:bg-budz-orange transition font-semibold"
            >
              {editingPost ? "Update" : "Create"}
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

