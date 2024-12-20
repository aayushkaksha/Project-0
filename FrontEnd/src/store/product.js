import { create } from "zustand";

export const useProductStore = create((set) => ({
  products: [],
  loading: false,
  error: null,

  setProducts: (products) => set({ products }),

  //Fetch Product
  fetchProducts: async () => {
    set({ loading: true, error: null });
    try {
      const res = await fetch("/api/products");
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to fetch products");
      set({ products: data.data || [], loading: false });
    } catch (error) {
      set({ loading: false, error: error.message });
    }
  },

  //Create Product
  createProduct: async (newProduct) => {
    set({ loading: true, error: null });
    if (
      !newProduct.name ||
      !newProduct.price ||
      !newProduct.image ||
      !newProduct.colors?.every((color) => color.name) ||
      !newProduct.sizes?.every((size) => size.name)
    ) {
      set({ loading: false });
      return { success: false, message: "Please fill in all fields." };
    }
    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Product creation failed");
      set((state) => ({
        products: [...state.products, data.data],
        loading: false,
      }));
      return { success: true, message: "Product created successfully" };
    } catch (error) {
      set({ loading: false, error: error.message });
      return { success: false, message: error.message };
    }
  },

  //Delete Product
  deleteProduct: async (pid) => {
    set({ loading: true, error: null });
    try {
      const res = await fetch(`/api/products/${pid}`, { method: "DELETE", });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Product deletion failed");
      set((state) => ({
        products: state.products.filter((product) => product._id !== pid),
        loading: false,
      }));
      return { success: true, message: data.message };
    } catch (error) {
      set({ loading: false, error: error.message });
      return { success: false, message: error.message };
    }
  },

  //Update Product
  updateProduct: async (pid, updatedProduct) => {
    set({ loading: true, error: null });
    try {
      const res = await fetch(`/api/products/${pid}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedProduct),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Product update failed");
      set((state) => ({
        products: state.products.map((product) =>
          product._id === pid ? data.data : product
        ),
        loading: false,
      }));
      return { success: true, message: data.message };
    } catch (error) {
      set({ loading: false, error: error.message });
      return { success: false, message: error.message };
    }
  },
}));
